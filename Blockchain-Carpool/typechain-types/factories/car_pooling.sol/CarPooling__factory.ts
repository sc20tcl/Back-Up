/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  CarPooling,
  CarPoolingInterface,
} from "../../car_pooling.sol/CarPooling";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
    ],
    name: "RideCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "driver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "travelTime",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "availableSeats",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seatPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum CarPooling.Location",
        name: "origin",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum CarPooling.Location",
        name: "destination",
        type: "uint8",
      },
    ],
    name: "RideCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "passenger",
        type: "address",
      },
    ],
    name: "RideJoined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rideId",
        type: "uint256",
      },
    ],
    name: "RideStarted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rideId",
        type: "uint256",
      },
    ],
    name: "completeRide",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_travelTime",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_availableSeats",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_seatPrice",
        type: "uint256",
      },
      {
        internalType: "enum CarPooling.Location",
        name: "_origin",
        type: "uint8",
      },
      {
        internalType: "enum CarPooling.Location",
        name: "_destination",
        type: "uint8",
      },
    ],
    name: "createRide",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "driverRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum CarPooling.Location",
        name: "_source",
        type: "uint8",
      },
      {
        internalType: "enum CarPooling.Location",
        name: "_destination",
        type: "uint8",
      },
    ],
    name: "findRides",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getDriver",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasRide",
            type: "bool",
          },
        ],
        internalType: "struct CarPooling.Driver",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getPassenger",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasRide",
            type: "bool",
          },
        ],
        internalType: "struct CarPooling.Passenger",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rideId",
        type: "uint256",
      },
    ],
    name: "getRideById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rideId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "driver",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "travelTime",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "availableSeats",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "totalSeats",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "seatPrice",
            type: "uint256",
          },
          {
            internalType: "enum CarPooling.Location",
            name: "origin",
            type: "uint8",
          },
          {
            internalType: "enum CarPooling.Location",
            name: "destination",
            type: "uint8",
          },
          {
            internalType: "enum CarPooling.RideStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address[]",
            name: "passengerAddr",
            type: "address[]",
          },
        ],
        internalType: "struct CarPooling.Ride",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rideId",
        type: "uint256",
      },
    ],
    name: "joinRide",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "passengerRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rideCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rideId",
        type: "uint256",
      },
    ],
    name: "startRide",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612be9806100206000396000f3fe60806040526004361061009c5760003560e01c8063951328231161006457806395132823146101775780639f168725146101b4578063b47c1883146101cb578063c416dd0b146101f6578063e8413cf01461021f578063e9c14b1e1461025c5761009c565b806301f32206146100a15780630a7c84fa146100bd5780630dbe95a5146100e65780631abf0ee3146100fd57806365c301ab1461013a575b600080fd5b6100bb60048036038101906100b69190611bd6565b610285565b005b3480156100c957600080fd5b506100e460048036038101906100df9190611c61565b6105d6565b005b3480156100f257600080fd5b506100fb610b61565b005b34801561010957600080fd5b50610124600480360381019061011f9190611bd6565b610c90565b6040516101319190611f83565b60405180910390f35b34801561014657600080fd5b50610161600480360381019061015c9190611fd1565b610ebd565b60405161016e9190612048565b60405180910390f35b34801561018357600080fd5b5061019e60048036038101906101999190612063565b610f4c565b6040516101ab9190612152565b60405180910390f35b3480156101c057600080fd5b506101c961110e565b005b3480156101d757600080fd5b506101e061123d565b6040516101ed9190612183565b60405180910390f35b34801561020257600080fd5b5061021d60048036038101906102189190611bd6565b611243565b005b34801561022b57600080fd5b5061024660048036038101906102419190611fd1565b6116d1565b60405161025391906121cd565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e9190611bd6565b611760565b005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16610314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030b90612245565b60405180910390fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039a906122b1565b60405180910390fd5b6000806000838152602001908152602001600020905060008160010160159054906101000a900460ff1660ff1611610410576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104079061231d565b60405180910390fd5b80600401339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160010160158282829054906101000a900460ff16610496919061236c565b92506101000a81548160ff021916908360ff160217905550806002015434146104f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104eb906123ed565b60405180910390fd5b60008160010160159054906101000a900460ff1660ff160361053e5760018160030160026101000a81548160ff0219169083600381111561053857610537611d3b565b5b02179055505b7fee6738d554505ae618a1d711a221fc0d52c5e1016cf0b42b9dc9f4d9456057ca823360405161056f92919061241c565b60405180910390a16001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff0219169083151502179055505050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16610665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065c90612491565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff16156106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec906124fd565b60405180910390fd5b60008460ff161161073b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107329061258f565b60405180910390fd5b6000831161077e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610775906125fb565b60405180910390fd5b81600281111561079157610790611d3b565b5b8160028111156107a4576107a3611d3b565b5b036107e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107db9061268d565b60405180910390fd5b60188560ff161080156107fb575060008560ff1610155b61083a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108319061268d565b60405180910390fd5b60006003600081548092919061084f906126ad565b9190505590506040518061014001604052808281526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018760ff1681526020018660ff1681526020018660ff1681526020018581526020018460028111156108b7576108b6611d3b565b5b81526020018360028111156108cf576108ce611d3b565b5b8152602001600060038111156108e8576108e7611d3b565b5b8152602001600067ffffffffffffffff811115610908576109076126f5565b5b6040519080825280602002602001820160405280156109365781602001602082028036833780820191505090505b508152506000808381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff021916908360ff16021790555060608201518160010160156101000a81548160ff021916908360ff16021790555060808201518160010160166101000a81548160ff021916908360ff16021790555060a0820151816002015560c08201518160030160006101000a81548160ff02191690836002811115610a3557610a34611d3b565b5b021790555060e08201518160030160016101000a81548160ff02191690836002811115610a6557610a64611d3b565b5b02179055506101008201518160030160026101000a81548160ff02191690836003811115610a9657610a95611d3b565b5b0217905550610120820151816004019080519060200190610ab8929190611a10565b5090505060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff0219169083151502179055507fdb1813153e66a6209f626c1dac9eef9978efc84cf2fd6b46d2f27b7a02b1ea2181338888888888604051610b519796959493929190612742565b60405180910390a1505050505050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615610bf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be8906127fd565b60405180910390fd5b604051806040016040528060011515815260200160001515815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff021916908315150217905550905050565b610c98611a9a565b60008083815260200190815260200160002060405180610140016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff1660ff1660ff1681526020016001820160159054906101000a900460ff1660ff1660ff1681526020016001820160169054906101000a900460ff1660ff1660ff168152602001600282015481526020016003820160009054906101000a900460ff166002811115610d9c57610d9b611d3b565b5b6002811115610dae57610dad611d3b565b5b81526020016003820160019054906101000a900460ff166002811115610dd757610dd6611d3b565b5b6002811115610de957610de8611d3b565b5b81526020016003820160029054906101000a900460ff166003811115610e1257610e11611d3b565b5b6003811115610e2457610e23611d3b565b5b815260200160048201805480602002602001604051908101604052809291908181526020018280548015610ead57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610e63575b5050505050815250509050919050565b610ec5611b42565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff1615151515815250509050919050565b6060600060035467ffffffffffffffff811115610f6c57610f6b6126f5565b5b604051908082528060200260200182016040528015610f9a5781602001602082028036833780820191505090505b5090506000805b60035481101561106157610fd760008083815260200190815260200160002060030160009054906101000a900460ff16876119b7565b801561100b575061100a60008083815260200190815260200160002060030160019054906101000a900460ff16866119b7565b5b1561105457600080828152602001908152602001600020600001548383815181106110395761103861281d565b5b6020026020010181815250508180611050906126ad565b9250505b8080600101915050610fa1565b5060008167ffffffffffffffff81111561107e5761107d6126f5565b5b6040519080825280602002602001820160405280156110ac5781602001602082028036833780820191505090505b50905060005b82811015611101578381815181106110cd576110cc61281d565b5b60200260200101518282815181106110e8576110e761281d565b5b60200260200101818152505080806001019150506110b2565b5080935050505092915050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff161561119e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611195906127fd565b60405180910390fd5b604051806040016040528060011515815260200160001515815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff021916908315150217905550905050565b60035481565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166112d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c990612491565b60405180910390fd5b60008082815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136c906128be565b60405180910390fd5b6002600381111561138957611388611d3b565b5b60008083815260200190815260200160002060030160029054906101000a900460ff1660038111156113be576113bd611d3b565b5b146113fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f59061292a565b60405180910390fd5b6000806000838152602001908152602001600020905060038160030160026101000a81548160ff0219169083600381111561143c5761143b611d3b565b5b021790555060008160010160159054906101000a900460ff168260010160169054906101000a900460ff16611471919061236c565b60ff168260020154611483919061294a565b905060003373ffffffffffffffffffffffffffffffffffffffff16826040516114ab906129bd565b60006040518083038185875af1925050503d80600081146114e8576040519150601f19603f3d011682016040523d82523d6000602084013e6114ed565b606091505b5050905080611531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152890612a44565b60405180910390fd5b7f63e5b4bf8bc6c9cf867e6cc4d53f654c1f0365d975100e04129de6383f8c4b23846040516115609190612183565b60405180910390a16000600160008560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff02191690831515021790555060005b8360010160159054906101000a900460ff168460010160169054906101000a900460ff16611618919061236c565b60ff168110156116ca5760006002600086600401848154811061163e5761163d61281d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff02191690831515021790555080806001019150506115ea565b5050505050565b6116d9611b60565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff1615151515815250509050919050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166117ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e690612491565b60405180910390fd5b600080600083815260200190815260200160002090503373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188e90612ad6565b60405180910390fd5b600060038111156118ab576118aa611d3b565b5b8160030160029054906101000a900460ff1660038111156118cf576118ce611d3b565b5b14806119105750600160038111156118ea576118e9611d3b565b5b8160030160029054906101000a900460ff16600381111561190e5761190d611d3b565b5b145b61194f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194690612b42565b60405180910390fd5b60028160030160026101000a81548160ff0219169083600381111561197757611976611d3b565b5b02179055507f1caef5aba80487f3eb64526a934f8250dd2591d249cd4f14756041c0ff93607d826040516119ab9190612183565b60405180910390a15050565b6000816040516020016119ca9190612b98565b60405160208183030381529060405280519060200120836040516020016119f19190612b98565b6040516020818303038152906040528051906020012014905092915050565b828054828255906000526020600020908101928215611a89579160200282015b82811115611a885782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611a30565b5b509050611a969190611b7e565b5090565b60405180610140016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600060ff168152602001600060ff168152602001600060ff1681526020016000815260200160006002811115611b0357611b02611d3b565b5b815260200160006002811115611b1c57611b1b611d3b565b5b815260200160006003811115611b3557611b34611d3b565b5b8152602001606081525090565b60405180604001604052806000151581526020016000151581525090565b60405180604001604052806000151581526020016000151581525090565b5b80821115611b97576000816000905550600101611b7f565b5090565b600080fd5b6000819050919050565b611bb381611ba0565b8114611bbe57600080fd5b50565b600081359050611bd081611baa565b92915050565b600060208284031215611bec57611beb611b9b565b5b6000611bfa84828501611bc1565b91505092915050565b600060ff82169050919050565b611c1981611c03565b8114611c2457600080fd5b50565b600081359050611c3681611c10565b92915050565b60038110611c4957600080fd5b50565b600081359050611c5b81611c3c565b92915050565b600080600080600060a08688031215611c7d57611c7c611b9b565b5b6000611c8b88828901611c27565b9550506020611c9c88828901611c27565b9450506040611cad88828901611bc1565b9350506060611cbe88828901611c4c565b9250506080611ccf88828901611c4c565b9150509295509295909350565b611ce581611ba0565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d1682611ceb565b9050919050565b611d2681611d0b565b82525050565b611d3581611c03565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110611d7b57611d7a611d3b565b5b50565b6000819050611d8c82611d6a565b919050565b6000611d9c82611d7e565b9050919050565b611dac81611d91565b82525050565b60048110611dc357611dc2611d3b565b5b50565b6000819050611dd482611db2565b919050565b6000611de482611dc6565b9050919050565b611df481611dd9565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000611e328383611d1d565b60208301905092915050565b6000602082019050919050565b6000611e5682611dfa565b611e608185611e05565b9350611e6b83611e16565b8060005b83811015611e9c578151611e838882611e26565b9750611e8e83611e3e565b925050600181019050611e6f565b5085935050505092915050565b600061014083016000830151611ec26000860182611cdc565b506020830151611ed56020860182611d1d565b506040830151611ee86040860182611d2c565b506060830151611efb6060860182611d2c565b506080830151611f0e6080860182611d2c565b5060a0830151611f2160a0860182611cdc565b5060c0830151611f3460c0860182611da3565b5060e0830151611f4760e0860182611da3565b50610100830151611f5c610100860182611deb565b50610120830151848203610120860152611f768282611e4b565b9150508091505092915050565b60006020820190508181036000830152611f9d8184611ea9565b905092915050565b611fae81611d0b565b8114611fb957600080fd5b50565b600081359050611fcb81611fa5565b92915050565b600060208284031215611fe757611fe6611b9b565b5b6000611ff584828501611fbc565b91505092915050565b60008115159050919050565b61201381611ffe565b82525050565b60408201600082015161202f600085018261200a565b506020820151612042602085018261200a565b50505050565b600060408201905061205d6000830184612019565b92915050565b6000806040838503121561207a57612079611b9b565b5b600061208885828601611c4c565b925050602061209985828601611c4c565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006120db8383611cdc565b60208301905092915050565b6000602082019050919050565b60006120ff826120a3565b61210981856120ae565b9350612114836120bf565b8060005b8381101561214557815161212c88826120cf565b9750612137836120e7565b925050600181019050612118565b5085935050505092915050565b6000602082019050818103600083015261216c81846120f4565b905092915050565b61217d81611ba0565b82525050565b60006020820190506121986000830184612174565b92915050565b6040820160008201516121b4600085018261200a565b5060208201516121c7602085018261200a565b50505050565b60006040820190506121e2600083018461219e565b92915050565b600082825260208201905092915050565b7f4e6f74206120726567697374657265642070617373656e676572000000000000600082015250565b600061222f601a836121e8565b915061223a826121f9565b602082019050919050565b6000602082019050818103600083015261225e81612222565b9050919050565b7f50617373656e67657220646f65736e2774206861766520612072696465000000600082015250565b600061229b601d836121e8565b91506122a682612265565b602082019050919050565b600060208201905081810360008301526122ca8161228e565b9050919050565b7f4e6f20736561747320617661696c61626c650000000000000000000000000000600082015250565b60006123076012836121e8565b9150612312826122d1565b602082019050919050565b60006020820190508181036000830152612336816122fa565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061237782611c03565b915061238283611c03565b9250828203905060ff81111561239b5761239a61233d565b5b92915050565b7f496e636f727265637420616d6f756e74206f662045746865722073656e740000600082015250565b60006123d7601e836121e8565b91506123e2826123a1565b602082019050919050565b60006020820190508181036000830152612406816123ca565b9050919050565b61241681611d0b565b82525050565b60006040820190506124316000830185612174565b61243e602083018461240d565b9392505050565b7f4e6f742061207265676973746572656420647269766572000000000000000000600082015250565b600061247b6017836121e8565b915061248682612445565b602082019050919050565b600060208201905081810360008301526124aa8161246e565b9050919050565b7f44726976657220646f65736e2774206861766520612072696465000000000000600082015250565b60006124e7601a836121e8565b91506124f2826124b1565b602082019050919050565b60006020820190508181036000830152612516816124da565b9050919050565b7f596f75206d7573742061746c65617374206f6e65207365617420617661696c6960008201527f626c650000000000000000000000000000000000000000000000000000000000602082015250565b60006125796023836121e8565b91506125848261251d565b604082019050919050565b600060208201905081810360008301526125a88161256c565b9050919050565b7f596f75206d7573742063686172676520666f7220796f75722073656174000000600082015250565b60006125e5601d836121e8565b91506125f0826125af565b602082019050919050565b60006020820190508181036000830152612614816125d8565b9050919050565b7f596f75206d7573742074726176656c20746f206120646966666572656e74206c60008201527f6f636174696f6e00000000000000000000000000000000000000000000000000602082015250565b60006126776027836121e8565b91506126828261261b565b604082019050919050565b600060208201905081810360008301526126a68161266a565b9050919050565b60006126b882611ba0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036126ea576126e961233d565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61272d81611c03565b82525050565b61273c81611d91565b82525050565b600060e082019050612757600083018a612174565b612764602083018961240d565b6127716040830188612724565b61277e6060830187612724565b61278b6080830186612174565b61279860a0830185612733565b6127a560c0830184612733565b98975050505050505050565b7f4120726567697374657265642064726976657200000000000000000000000000600082015250565b60006127e76013836121e8565b91506127f2826127b1565b602082019050919050565b60006020820190508181036000830152612816816127da565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f6f6e6c7920746865206472697665722063616e20656e64207468656972206f7760008201527f6e20726964650000000000000000000000000000000000000000000000000000602082015250565b60006128a86026836121e8565b91506128b38261284c565b604082019050919050565b600060208201905081810360008301526128d78161289b565b9050919050565b7f6f6e6c7920656e64206120726964652074686174206861732073746172746564600082015250565b60006129146020836121e8565b915061291f826128de565b602082019050919050565b6000602082019050818103600083015261294381612907565b9050919050565b600061295582611ba0565b915061296083611ba0565b925082820261296e81611ba0565b915082820484148315176129855761298461233d565b5b5092915050565b600081905092915050565b50565b60006129a760008361298c565b91506129b282612997565b600082019050919050565b60006129c88261299a565b9150819050919050565b7f4661696c656420746f2073656e6420457468657220746f20746865206472697660008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000612a2e6022836121e8565b9150612a39826129d2565b604082019050919050565b60006020820190508181036000830152612a5d81612a21565b9050919050565b7f6f6e6c7920746865206472697665722063616e2073746172742074686569722060008201527f6f776e2072696465000000000000000000000000000000000000000000000000602082015250565b6000612ac06028836121e8565b9150612acb82612a64565b604082019050919050565b60006020820190508181036000830152612aef81612ab3565b9050919050565b7f6f6e6c79207374617274206120726964652074686174206973206f70656e0000600082015250565b6000612b2c601e836121e8565b9150612b3782612af6565b602082019050919050565b60006020820190508181036000830152612b5b81612b1f565b9050919050565b60008160f81b9050919050565b6000612b7a82612b62565b9050919050565b612b92612b8d82611d91565b612b6f565b82525050565b6000612ba48284612b81565b6001820191508190509291505056fea26469706673582212209160d5987a621ac263de70e958467c48e09ab5cbf9373f26ae023060f8994bdb64736f6c63430008180033";

type CarPoolingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CarPoolingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CarPooling__factory extends ContractFactory {
  constructor(...args: CarPoolingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CarPooling & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CarPooling__factory {
    return super.connect(runner) as CarPooling__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CarPoolingInterface {
    return new Interface(_abi) as CarPoolingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CarPooling {
    return new Contract(address, _abi, runner) as unknown as CarPooling;
  }
}