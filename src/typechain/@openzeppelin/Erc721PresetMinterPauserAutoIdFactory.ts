/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Erc721PresetMinterPauserAutoId } from "./Erc721PresetMinterPauserAutoId";

export class Erc721PresetMinterPauserAutoIdFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    baseURI: string,
    overrides?: Overrides
  ): Promise<Erc721PresetMinterPauserAutoId> {
    return super.deploy(name, symbol, baseURI, overrides || {}) as Promise<
      Erc721PresetMinterPauserAutoId
    >;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    baseURI: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, baseURI, overrides || {});
  }
  attach(address: string): Erc721PresetMinterPauserAutoId {
    return super.attach(address) as Erc721PresetMinterPauserAutoId;
  }
  connect(signer: Signer): Erc721PresetMinterPauserAutoIdFactory {
    return super.connect(signer) as Erc721PresetMinterPauserAutoIdFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc721PresetMinterPauserAutoId {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Erc721PresetMinterPauserAutoId;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "MINTER_ROLE",
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
    inputs: [],
    name: "PAUSER_ROLE",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [],
    name: "baseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002c5438038062002c54833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620001bc57600080fd5b908301906020820185811115620001d257600080fd5b8251640100000000811182820188101715620001ed57600080fd5b82525081516020918201929091019080838360005b838110156200021c57818101518382015260200162000202565b50505050905090810190601f1680156200024a5780820380516001836020036101000a031916815260200191505b5060405250849150839050620002676301ffc9a760e01b6200035d565b81516200027c9060079060208501906200050e565b508051620002929060089060208401906200050e565b50620002a56380ac58cd60e01b6200035d565b620002b7635b5e139f60e01b6200035d565b620002c963780e9d6360e01b6200035d565b5050600b805460ff19169055620002eb6000620002e5620003e5565b620003e9565b6200031a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6620002e5620003e5565b620003497f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a620002e5620003e5565b6200035481620003f9565b505050620005ba565b6001600160e01b03198082161415620003bd576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152600160208190526040909120805460ff19169091179055565b3390565b620003f582826200040e565b5050565b8051620003f590600a9060208401906200050e565b60008281526020818152604090912062000433918390620011f762000487821b17901c565b15620003f55762000443620003e5565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200049e836001600160a01b038416620004a7565b90505b92915050565b6000620004b58383620004f6565b620004ed57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620004a1565b506000620004a1565b60009081526001919091016020526040902054151590565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928262000546576000855562000591565b82601f106200056157805160ff191683800117855562000591565b8280016001018555821562000591579182015b828111156200059157825182559160200191906001019062000574565b506200059f929150620005a3565b5090565b5b808211156200059f5760008155600101620005a4565b61268a80620005ca6000396000f3fe608060405234801561001057600080fd5b50600436106101805760003560e01c806301ffc9a71461018557806306fdde03146101c0578063081812fc1461023d578063095ea7b31461027657806318160ddd146102a457806323b872dd146102be578063248a9ca3146102f45780632f2ff15d146103115780632f745c591461033d57806336568abe146103695780633f4ba83a1461039557806342842e0e1461039d57806342966c68146103d35780634f6ccce7146103f05780635c975abb1461040d5780636352211e146104155780636a627842146104325780636c0360eb1461045857806370a08231146104605780638456cb59146104865780639010d07c1461048e57806391d14854146104b157806395d89b41146104dd578063a217fddf146104e5578063a22cb465146104ed578063b88d4fde1461051b578063c87b56dd146105df578063ca15c873146105fc578063d539139314610619578063d547741f14610621578063e63ab1e91461064d578063e985e9c514610655575b600080fd5b6101ac6004803603602081101561019b57600080fd5b50356001600160e01b031916610683565b604080519115158252519081900360200190f35b6101c86106a6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102025781810151838201526020016101ea565b50505050905090810190601f16801561022f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025a6004803603602081101561025357600080fd5b503561073c565b604080516001600160a01b039092168252519081900360200190f35b6102a26004803603604081101561028c57600080fd5b506001600160a01b03813516906020013561079e565b005b6102ac610879565b60408051918252519081900360200190f35b6102a2600480360360608110156102d457600080fd5b506001600160a01b0381358116916020810135909116906040013561088a565b6102ac6004803603602081101561030a57600080fd5b50356108e1565b6102a26004803603604081101561032757600080fd5b50803590602001356001600160a01b03166108f6565b6102ac6004803603604081101561035357600080fd5b506001600160a01b038135169060200135610962565b6102a26004803603604081101561037f57600080fd5b50803590602001356001600160a01b031661098d565b6102a26109ee565b6102a2600480360360608110156103b357600080fd5b506001600160a01b03813581169160208101359091169060400135610a4d565b6102a2600480360360208110156103e957600080fd5b5035610a68565b6102ac6004803603602081101561040657600080fd5b5035610aba565b6101ac610ad0565b61025a6004803603602081101561042b57600080fd5b5035610ad9565b6102a26004803603602081101561044857600080fd5b50356001600160a01b0316610b01565b6101c8610b73565b6102ac6004803603602081101561047657600080fd5b50356001600160a01b0316610bd4565b6102a2610c3c565b61025a600480360360408110156104a457600080fd5b5080359060200135610c99565b6101ac600480360360408110156104c757600080fd5b50803590602001356001600160a01b0316610cb1565b6101c8610cc9565b6102ac610d2a565b6102a26004803603604081101561050357600080fd5b506001600160a01b0381351690602001351515610d2f565b6102a26004803603608081101561053157600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561056b57600080fd5b82018360208201111561057d57600080fd5b803590602001918460018302840111600160201b8311171561059e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e30945050505050565b6101c8600480360360208110156105f557600080fd5b5035610e8e565b6102ac6004803603602081101561061257600080fd5b5035611135565b6102ac61114c565b6102a26004803603604081101561063757600080fd5b50803590602001356001600160a01b031661115e565b6102ac6111b7565b6101ac6004803603604081101561066b57600080fd5b506001600160a01b03813581169160200135166111c9565b6001600160e01b0319811660009081526001602052604090205460ff165b919050565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107325780601f1061070757610100808354040283529160200191610732565b820191906000526020600020905b81548152906001019060200180831161071557829003601f168201915b5050505050905090565b60006107478261120c565b6107825760405162461bcd60e51b815260040180806020018281038252602c815260200180612443602c913960400191505060405180910390fd5b506000908152600560205260409020546001600160a01b031690565b60006107a982610ad9565b9050806001600160a01b0316836001600160a01b031614156107fc5760405162461bcd60e51b81526004018080602001828103825260218152602001806125276021913960400191505060405180910390fd5b806001600160a01b031661080e611219565b6001600160a01b0316148061082f575061082f8161082a611219565b6111c9565b61086a5760405162461bcd60e51b81526004018080602001828103825260388152602001806123966038913960400191505060405180910390fd5b610874838361121d565b505050565b6000610885600361128b565b905090565b61089b610895611219565b82611296565b6108d65760405162461bcd60e51b81526004018080602001828103825260318152602001806125486031913960400191505060405180910390fd5b61087483838361133a565b60009081526020819052604090206002015490565b60008281526020819052604090206002015461091990610914611219565b610cb1565b6109545760405162461bcd60e51b815260040180806020018281038252602f815260200180612277602f913960400191505060405180910390fd5b61095e8282611474565b5050565b6001600160a01b038216600090815260026020526040812061098490836114dd565b90505b92915050565b610995611219565b6001600160a01b0316816001600160a01b0316146109e45760405162461bcd60e51b815260040180806020018281038252602f815260200180612626602f913960400191505060405180910390fd5b61095e82826114e9565b610a0860008051602061246f833981519152610914611219565b610a435760405162461bcd60e51b81526004018080602001828103825260408152602001806125e66040913960400191505060405180910390fd5b610a4b611552565b565b61087483838360405180602001604052806000815250610e30565b610a73610895611219565b610aae5760405162461bcd60e51b81526004018080602001828103825260308152602001806125b66030913960400191505060405180910390fd5b610ab7816115f0565b50565b600080610ac86003846116ab565b509392505050565b600b5460ff1690565b6000610987826040518060600160405280602981526020016123f860299139600391906116c7565b610b1b6000805160206124e7833981519152610914611219565b610b565760405162461bcd60e51b815260040180806020018281038252603d815260200180612579603d913960400191505060405180910390fd5b610b6981610b64600c6116de565b6116e2565b610ab7600c6117fd565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107325780601f1061070757610100808354040283529160200191610732565b60006001600160a01b038216610c1b5760405162461bcd60e51b815260040180806020018281038252602a8152602001806123ce602a913960400191505060405180910390fd5b6001600160a01b03821660009081526002602052604090206109879061128b565b610c5660008051602061246f833981519152610914611219565b610c915760405162461bcd60e51b815260040180806020018281038252603e8152602001806122d8603e913960400191505060405180910390fd5b610a4b611806565b600082815260208190526040812061098490836114dd565b60008281526020819052604081206109849083611887565b60088054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107325780601f1061070757610100808354040283529160200191610732565b600081565b610d37611219565b6001600160a01b0316826001600160a01b03161415610d99576040805162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015290519081900360640190fd5b8060066000610da6611219565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610dea611219565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610e41610e3b611219565b83611296565b610e7c5760405162461bcd60e51b81526004018080602001828103825260318152602001806125486031913960400191505060405180910390fd5b610e888484848461189c565b50505050565b6060610e998261120c565b610ed45760405162461bcd60e51b815260040180806020018281038252602f8152602001806124b8602f913960400191505060405180910390fd5b60008281526009602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610f695780601f10610f3e57610100808354040283529160200191610f69565b820191906000526020600020905b815481529060010190602001808311610f4c57829003601f168201915b5050600a5493945050505060026000196101006001841615020190911604610f925790506106a1565b80511561106357600a816040516020018083805460018160011615610100020316600290048015610ffa5780601f10610fd8576101008083540402835291820191610ffa565b820191906000526020600020905b815481529060010190602001808311610fe6575b5050825160208401908083835b602083106110265780518252601f199092019160209182019101611007565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150506106a1565b600a61106e846118ee565b60405160200180838054600181600116156101000203166002900480156110cc5780601f106110aa5761010080835404028352918201916110cc565b820191906000526020600020905b8154815290600101906020018083116110b8575b5050825160208401908083835b602083106110f85780518252601f1990920191602091820191016110d9565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b60008181526020819052604081206109879061128b565b6000805160206124e783398151915281565b60008281526020819052604090206002015461117c90610914611219565b6109e45760405162461bcd60e51b81526004018080602001828103825260308152602001806123666030913960400191505060405180910390fd5b60008051602061246f83398151915281565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6000610984836001600160a01b0384166119c8565b6000610987600383611a12565b3390565b600081815260056020526040902080546001600160a01b0319166001600160a01b038416908117909155819061125282610ad9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610987826116de565b60006112a18261120c565b6112dc5760405162461bcd60e51b815260040180806020018281038252602c81526020018061233a602c913960400191505060405180910390fd5b60006112e783610ad9565b9050806001600160a01b0316846001600160a01b031614806113225750836001600160a01b03166113178461073c565b6001600160a01b0316145b80611332575061133281856111c9565b949350505050565b826001600160a01b031661134d82610ad9565b6001600160a01b0316146113925760405162461bcd60e51b815260040180806020018281038252602981526020018061248f6029913960400191505060405180910390fd5b6001600160a01b0382166113d75760405162461bcd60e51b81526004018080602001828103825260248152602001806123166024913960400191505060405180910390fd5b6113e2838383611a1e565b6113ed60008261121d565b6001600160a01b038316600090815260026020526040902061140f9082611a29565b506001600160a01b03821660009081526002602052604090206114329082611a35565b5061143f60038284611a41565b5080826001600160a01b0316846001600160a01b031660008051602061250783398151915260405160405180910390a4505050565b600082815260208190526040902061148c90826111f7565b1561095e57611499611219565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109848383611a57565b60008281526020819052604090206115019082611abb565b1561095e5761150e611219565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600b5460ff166115a0576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b600b805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6115d3611219565b604080516001600160a01b039092168252519081900360200190a1565b60006115fb82610ad9565b905061160981600084611a1e565b61161460008361121d565b6000828152600960205260409020546002600019610100600184161502019091160415611652576000828152600960205260408120611652916121d1565b6001600160a01b03811660009081526002602052604090206116749083611a29565b50611680600383611ad0565b5060405182906000906001600160a01b03841690600080516020612507833981519152908390a45050565b60008080806116ba8686611adc565b9097909650945050505050565b60006116d4848484611b57565b90505b9392505050565b5490565b6001600160a01b03821661173d576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6117468161120c565b15611797576040805162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604482015290519081900360640190fd5b6117a360008383611a1e565b6001600160a01b03821660009081526002602052604090206117c59082611a35565b506117d260038284611a41565b5060405181906001600160a01b03841690600090600080516020612507833981519152908290a45050565b80546001019055565b600b5460ff1615611851576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b600b805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115d3611219565b6000610984836001600160a01b038416611c21565b6118a784848461133a565b6118b384848484611c39565b610e885760405162461bcd60e51b81526004018080602001828103825260328152602001806122a66032913960400191505060405180910390fd5b60608161191357506040805180820190915260018152600360fc1b60208201526106a1565b8160005b811561192b57600101600a82049150611917565b6060816001600160401b038111801561194357600080fd5b506040519080825280601f01601f19166020018201604052801561196e576020820181803683370190505b50859350905060001982015b83156119bf57600a840660300160f81b8282806001900393508151811061199d57fe5b60200101906001600160f81b031916908160001a905350600a8404935061197a565b50949350505050565b60006119d48383611c21565b611a0a57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610987565b506000610987565b60006109848383611c21565b610874838383611da1565b60006109848383611df0565b600061098483836119c8565b60006116d484846001600160a01b038516611eb6565b81546000908210611a995760405162461bcd60e51b815260040180806020018281038252602281526020018061222a6022913960400191505060405180910390fd5b826000018281548110611aa857fe5b9060005260206000200154905092915050565b6000610984836001600160a01b038416611df0565b60006109848383611f4d565b815460009081908310611b205760405162461bcd60e51b81526004018080602001828103825260228152602001806124216022913960400191505060405180910390fd5b6000846000018481548110611b3157fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611bf25760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bb7578181015183820152602001611b9f565b50505050905090810190601f168015611be45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611c0557fe5b9060005260206000209060020201600101549150509392505050565b60009081526001919091016020526040902054151590565b6000611c4d846001600160a01b0316612021565b611c5957506001611332565b6060611d67630a85bd0160e11b611c6e611219565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611cd5578181015183820152602001611cbd565b50505050905090810190601f168015611d025780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518060600160405280603281526020016122a6603291396001600160a01b038816919061205a565b90506000818060200190516020811015611d8057600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b611dac838383610874565b611db4610ad0565b156108745760405162461bcd60e51b815260040180806020018281038252602b81526020018061224c602b913960400191505060405180910390fd5b60008181526001830160205260408120548015611eac5783546000198083019190810190600090879083908110611e2357fe5b9060005260206000200154905080876000018481548110611e4057fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611e7057fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610987565b6000915050610987565b600082815260018401602052604081205480611f1b5750506040805180820182528381526020808201848152865460018181018955600089815284812095516002909302909501918255915190820155865486845281880190925292909120556116d7565b82856000016001830381548110611f2e57fe5b90600052602060002090600202016001018190555060009150506116d7565b60008181526001830160205260408120548015611eac5783546000198083019190810190600090879083908110611f8057fe5b9060005260206000209060020201905080876000018481548110611fa057fe5b600091825260208083208454600290930201918255600193840154918401919091558354825289830190526040902090840190558654879080611fdf57fe5b60008281526020808220600260001990940193840201828155600190810183905592909355888152898201909252604082209190915594506109879350505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611332575050151592915050565b60606116d48484600085606061206f85612021565b6120c0576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106120ff5780518252601f1990920191602091820191016120e0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612161576040519150601f19603f3d011682016040523d82523d6000602084013e612166565b606091505b5091509150811561217a5791506113329050565b80511561218a5780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611bb7578181015183820152602001611b9f565b50805460018160011615610100020316600290046000825580601f106121f75750610ab7565b601f016020900490600052602060002090810190610ab791905b808211156122255760008155600101612211565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732315061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e744552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732315072657365744d696e7465725061757365724175746f49643a206d75737420686176652070617573657220726f6c6520746f2070617573654552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b654552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644552433732315072657365744d696e7465725061757365724175746f49643a206d7573742068617665206d696e74657220726f6c6520746f206d696e744552433732314275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644552433732315072657365744d696e7465725061757365724175746f49643a206d75737420686176652070617573657220726f6c6520746f20756e7061757365416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a264697066735822122074ec1f17228d038b5aef2f46bfd43d4176ba000f639ae8e1ceed55c1d802985764736f6c63430007050033";
