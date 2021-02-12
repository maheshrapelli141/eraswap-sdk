/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PetLiquidFlattenPrepaidEs } from "./PetLiquidFlattenPrepaidEs";

export class PetLiquidFlattenPrepaidEsFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PetLiquidFlattenPrepaidEs> {
    return super.deploy(overrides || {}) as Promise<PetLiquidFlattenPrepaidEs>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PetLiquidFlattenPrepaidEs {
    return super.attach(address) as PetLiquidFlattenPrepaidEs;
  }
  connect(signer: Signer): PetLiquidFlattenPrepaidEsFactory {
    return super.connect(signer) as PetLiquidFlattenPrepaidEsFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PetLiquidFlattenPrepaidEs {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PetLiquidFlattenPrepaidEs;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "wallet",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newStatus",
        type: "bool",
      },
    ],
    name: "Authorised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "_destination",
        type: "address",
      },
    ],
    name: "convertToESP",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "dayswappers",
    outputs: [
      {
        internalType: "contract IDayswappers",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kycDapp",
    outputs: [
      {
        internalType: "contract IKycDapp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nrtManager",
    outputs: [
      {
        internalType: "contract INRTManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prepaidEs",
    outputs: [
      {
        internalType: "contract IPrepaidEs",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomnessManager",
    outputs: [
      {
        internalType: "contract RandomnessManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddressStrict",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsername",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsernameStrict",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kycDapp",
        type: "address",
      },
    ],
    name: "setKycDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyClub",
    outputs: [
      {
        internalType: "contract ITimeAllyClub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyManager",
    outputs: [
      {
        internalType: "contract ITimeAllyManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyPromotionalBucket",
    outputs: [
      {
        internalType: "contract ITimeAllyPromotionalBucket",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferLiquid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_newStatus",
        type: "bool",
      },
    ],
    name: "updateAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "validatorManager",
    outputs: [
      {
        internalType: "contract IValidatorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6117c78061007d6000396000f3fe6080604052600436106101d85760003560e01c806370a0823111610102578063a9059cbb11610095578063f2fde38b11610064578063f2fde38b146104ed578063f45679511461050d578063fe55bde914610522578063fe9fbb8014610537576101d8565b8063a9059cbb14610483578063bf8c3144146104a3578063dccc1b08146104b8578063dd62ed3e146104cd576101d8565b806395d89b41116100d157806395d89b4114610419578063983099521461042e57806398b1a44d1461044e578063a7017b521461046e576101d8565b806370a08231146103ba578063722d2b3e146103da5780638129fc1c146103ef5780638da5cb5b14610404576101d8565b8063208b38041161017a57806336ff9a301161014957806336ff9a301461034557806362f4ed901461036557806367b48b18146103855780636a14920a1461039a576101d8565b8063208b3804146102d957806323b872dd146102ee578063301bae2e1461030e578063313ce56714610323576101d8565b80630df5202f116101b65780630df5202f1461026257806318160ddd146102845780631d849b30146102995780631f70693c146102b9576101d8565b806306fdde03146101dd578063095ea7b3146102085780630d541ecb14610235575b600080fd5b3480156101e957600080fd5b506101f2610557565b6040516101ff919061141c565b60405180910390f35b34801561021457600080fd5b506102286102233660046112dd565b610590565b6040516101ff9190611408565b34801561024157600080fd5b5061025561025036600461122d565b6105fa565b6040516101ff9190611413565b34801561026e57600080fd5b50610277610634565b6040516101ff91906113db565b34801561029057600080fd5b50610255610664565b3480156102a557600080fd5b506102776102b4366004611308565b61066a565b3480156102c557600080fd5b506102556102d436600461122d565b61069e565b3480156102e557600080fd5b50610277610738565b3480156102fa57600080fd5b5061022861030936600461129d565b610763565b61032161031c36600461122d565b6108da565b005b34801561032f57600080fd5b50610338610977565b6040516101ff9190611742565b34801561035157600080fd5b50610321610360366004611338565b61097c565b34801561037157600080fd5b50610228610380366004611308565b610a03565b34801561039157600080fd5b50610277610a18565b3480156103a657600080fd5b506102776103b5366004611308565b610a27565b3480156103c657600080fd5b506102556103d536600461122d565b610ac1565b3480156103e657600080fd5b50610277610adc565b3480156103fb57600080fd5b50610321610b07565b34801561041057600080fd5b50610277610b92565b34801561042557600080fd5b506101f2610ba1565b34801561043a57600080fd5b506103216104493660046112dd565b610bda565b34801561045a57600080fd5b5061032161046936600461122d565b610d4f565b34801561047a57600080fd5b50610277610d87565b34801561048f57600080fd5b5061022861049e3660046112dd565b610db2565b3480156104af57600080fd5b50610277610f7c565b3480156104c457600080fd5b50610277610fa7565b3480156104d957600080fd5b506102556104e8366004611265565b610fd2565b3480156104f957600080fd5b5061032161050836600461122d565b610ffd565b34801561051957600080fd5b5061027761103b565b34801561052e57600080fd5b50610277611066565b34801561054357600080fd5b5061022861055236600461122d565b611091565b6040518060400160405280600981526020017f507265706169644553000000000000000000000000000000000000000000000081525081565b3360008181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906105e9908690611413565b60405180910390a350600192915050565b6000806106068361069e565b90508061062e5760405162461bcd60e51b815260040161062590611486565b60405180910390fd5b92915050565b600061065f7f4e52545f4d414e4147455200000000000000000000000000000000000000000061066a565b905090565b60065481565b60008061067683610a27565b90506001600160a01b03811661062e5760405162461bcd60e51b8152600401610625906116e5565b6001546040517f1f70693c0000000000000000000000000000000000000000000000000000000081526000916001600160a01b031690631f70693c906106e89085906004016113db565b60206040518083038186803b15801561070057600080fd5b505afa158015610714573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062e9190611320565b600061065f7f444159535741505045525300000000000000000000000000000000000000000061066a565b6001600160a01b03831660009081526004602052604081205482111561079b5760405162461bcd60e51b8152600401610625906114e3565b6001600160a01b03841660009081526005602090815260408083203384529091529020548211156107de5760405162461bcd60e51b81526004016106259061144f565b6001600160a01b038416600090815260046020526040902054610801908361109f565b6001600160a01b0385166000908152600460209081526040808320939093556005815282822033835290522054610838908361109f565b6001600160a01b03808616600090815260056020908152604080832033845282528083209490945591861681526004909152205461087690836110e8565b6001600160a01b0380851660008181526004602052604090819020939093559151908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906108c8908690611413565b60405180910390a35060019392505050565b600034116108fa5760405162461bcd60e51b8152600401610625906115f4565b6001600160a01b03811660009081526004602052604090205461091d90346110e8565b6001600160a01b0382166000818152600460205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061096c903490611413565b60405180910390a350565b601281565b33610985610b92565b6001600160a01b0316146109ab5760405162461bcd60e51b815260040161062590611551565b60008281526002602052604090819020805460ff19168315151790555182907fc810dc2893ceceb4379018a2ed3d3d7765b57d3b6adf083fed59a4399b0defbc906109f7908490611408565b60405180910390a25050565b60009081526002602052604090205460ff1690565b6001546001600160a01b031690565b6001546040517f6a14920a0000000000000000000000000000000000000000000000000000000081526000916001600160a01b031690636a14920a90610a71908590600401611413565b60206040518083038186803b158015610a8957600080fd5b505afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062e9190611249565b6001600160a01b031660009081526004602052604090205490565b600061065f7f54494d45414c4c595f4d414e414745520000000000000000000000000000000061066a565b600354610100900460ff1680610b205750610b2061110d565b80610b2e575060035460ff16155b610b4a5760405162461bcd60e51b81526004016106259061162b565b600354610100900460ff16158015610b75576003805460ff1961ff0019909116610100171660011790555b610b7d611113565b8015610b8f576003805461ff00191690555b50565b6000546001600160a01b031690565b6040518060400160405280600381526020017f455350000000000000000000000000000000000000000000000000000000000081525081565b6000610be53361069e565b9050610bf081610a03565b610bf93061069e565b82604051602001610c0b92919061137c565b60405160208183030381529060405290610c385760405162461bcd60e51b8152600401610625919061141c565b5033600090815260046020526040902054821115610c685760405162461bcd60e51b8152600401610625906114e3565b33600090815260046020526040902054610c82908361109f565b336000818152600460205260408082209390935591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610cc5908690611413565b60405180910390a36000836001600160a01b031683604051610ce6906113d8565b60006040518083038185875af1925050503d8060008114610d23576040519150601f19603f3d011682016040523d82523d6000602084013e610d28565b606091505b5050905080610d495760405162461bcd60e51b815260040161062590611586565b50505050565b33610d58610b92565b6001600160a01b031614610d7e5760405162461bcd60e51b815260040161062590611551565b610b8f8161111e565b600061065f7f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b4554000000000061066a565b33600090815260046020526040812054821115610de15760405162461bcd60e51b8152600401610625906114e3565b33600090815260046020526040902054610dfb908361109f565b33600090815260046020526040808220929092556001600160a01b03851681522054610e2790836110e8565b6001600160a01b0384166000818152600460205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610e76908690611413565b60405180910390a3610e8783611158565b15610f73576000836001600160a01b03163384604051602401610eab9291906113ef565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f92759e730000000000000000000000000000000000000000000000000000000017905251610f0e9190611360565b6000604051808303816000865af19150503d8060008114610f4b576040519150601f19603f3d011682016040523d82523d6000602084013e610f50565b606091505b5050905080610f715760405162461bcd60e51b815260040161062590611688565b505b50600192915050565b600061065f7f52414e444f4d4e4553535f4d414e41474552000000000000000000000000000061066a565b600061065f7f54494d45414c4c595f434c55420000000000000000000000000000000000000061066a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b611005611164565b6000546001600160a01b039081169116146110325760405162461bcd60e51b815260040161062590611551565b610b8f81611168565b600061065f7f505245504149445f45530000000000000000000000000000000000000000000061066a565b600061065f7f56414c494441544f525f4d414e4147455200000000000000000000000000000061066a565b600061062e6103808361069e565b60006110e183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611201565b9392505050565b6000828201838110156110e15760405162461bcd60e51b81526004016106259061151a565b303b1590565b61111c33611168565b565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b3b63ffffffff16151590565b3390565b6001600160a01b03811661118e5760405162461bcd60e51b8152600401610625906115bd565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600081848411156112255760405162461bcd60e51b8152600401610625919061141c565b505050900390565b60006020828403121561123e578081fd5b81356110e18161177c565b60006020828403121561125a578081fd5b81516110e18161177c565b60008060408385031215611277578081fd5b82356112828161177c565b915060208301356112928161177c565b809150509250929050565b6000806000606084860312156112b1578081fd5b83356112bc8161177c565b925060208401356112cc8161177c565b929592945050506040919091013590565b600080604083850312156112ef578182fd5b82356112fa8161177c565b946020939093013593505050565b600060208284031215611319578081fd5b5035919050565b600060208284031215611331578081fd5b5051919050565b6000806040838503121561134a578182fd5b8235915060208301358015158114611292578182fd5b60008251611372818460208701611750565b9190910192915050565b7f417574686f72697a61626c653a204e4f545f415554484f5249534544206f6e20815260208101929092527f3a200000000000000000000000000000000000000000000000000000000000006040830152604282015260620190565b90565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b600060208252825180602084015261143b816040850160208701611750565b601f01601f19169190910160400192915050565b6020808252601b908201527f4553503a20494e53554646494349454e545f414c4c4f57414e43450000000000604082015260600190565b6020808252602a908201527f52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d4560408201527f5f494e5f53545249435400000000000000000000000000000000000000000000606082015260800190565b60208082526019908201527f4553503a20494e53554646494349454e545f42414c414e434500000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252818101527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604082015260600190565b6020808252601c908201527f4553503a204e41544956455f5452414e534645525f4641494c494e4700000000604082015260600190565b6020808252601f908201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604082015260600190565b60208082526018908201527f4553503a205a45524f5f45535f4e4f545f414c4c4f5745440000000000000000604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252603d908201527f4553503a2052454345495645525f444f45534e545f494d504c454d454e545f7060408201527f72657061696446616c6c6261636b5f4f525f455845435f4641494c4544000000606082015260800190565b60208082526026908201527f52656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f60408201527f5354524943540000000000000000000000000000000000000000000000000000606082015260800190565b60ff91909116815260200190565b60005b8381101561176b578181015183820152602001611753565b83811115610d495750506000910152565b6001600160a01b0381168114610b8f57600080fdfea264697066735822122066eb7ee809eb3170547875e1e05ea2d19b76ac0c9df8c352e431a04d27409ad764736f6c63430007050033";
