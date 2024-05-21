from PIL import Image
from io import BytesIO
from azure.storage.blob import BlobServiceClient
import requests
import time
import json
from http import HTTPStatus


def handle(event, context):
    try:
        # Set up the connection to the Azure Blob Storage
        connection_string = "DefaultEndpointsProtocol=https;AccountName=imageworkflow;AccountKey=RvWg7QSEhof25ngK9R9DxUKgfhgcSAEM8jq5p66NQF3gt2uel/9xKffRXC79PAyIkthnMBjZkXcp+AStAV6Kpw==;EndpointSuffix=core.windows.net"
        source_container_name = "masked-images-of"  # Container with the original image
        target_container_name = "resized-images-of"  # Container where the resized image will be stored
        blob_service_client = BlobServiceClient.from_connection_string(connection_string)

        # Assuming there's only one blob in the source container, get it directly
        container_client = blob_service_client.get_container_client(source_container_name)

        max_retries = 100
        wait_time = 0.1  # seconds to wait between retries

        found = False  # Flag to indicate whether a blob has been found
        for attempt in range(max_retries):
            blob_list = list(container_client.list_blobs())

            if blob_list:
                found = True
                print("**** Found *****")
                break  # Exit the loop if a blob is found

            print(f"No blobs found, retrying in {wait_time} seconds... (Attempt {attempt + 1} of {max_retries})")
            time.sleep(wait_time)

        if not found:
            # If no blobs are found after all attempts, return an error response
            return {
                "statusCode": HTTPStatus.INTERNAL_SERVER_ERROR,
                "body": json.dumps({"error": str(e)})
                }

        blob_name = blob_list[0].name  # Since there's only one blob, get its name
        blob_client = blob_service_client.get_blob_client(container=source_container_name, blob=blob_name)

        # Download the blob
        blob_data = blob_client.download_blob().readall()
        image = Image.open(BytesIO(blob_data))
        
        # Resize the image
        desired_width = 1280
        min_height = 500

        scale_factor = desired_width / image.width
        new_height = int(image.height * scale_factor)

        if new_height < min_height:
            scale_factor = min_height / image.height
            desired_width = int(image.width * scale_factor)


        resized_image = image.resize((desired_width, int(image.height * scale_factor)), Image.Resampling.LANCZOS)
        
        # Convert the resized image to bytes
        output_stream = BytesIO()
        resized_image.save(output_stream, format='JPEG')  # Save as JPEG; adjust if necessary
        output_stream.seek(0)  # Reset the stream position

        # Upload the resized image to the target container
        target_blob_client = blob_service_client.get_blob_client(container=target_container_name, blob=f"resized_{blob_name}")
        target_blob_client.upload_blob(output_stream, blob_type="BlockBlob", overwrite=True)
        
        return {
            "statusCode": HTTPStatus.OK,
            "body": "Image edited and uploaded successfully to the target container."
        }
    
    except Exception as e:
        return {
            "statusCode": HTTPStatus.INTERNAL_SERVER_ERROR,
            "body": json.dumps({"error": str(e)})
        }