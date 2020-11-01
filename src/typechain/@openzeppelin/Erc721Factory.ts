/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { Erc721 } from './Erc721';

export class Erc721Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(name_: string, symbol_: string, overrides?: Overrides): Promise<Erc721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<Erc721>;
  }
  getDeployTransaction(name_: string, symbol_: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): Erc721 {
    return super.attach(address) as Erc721;
  }
  connect(signer: Signer): Erc721Factory {
    return super.connect(signer) as Erc721Factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Erc721 {
    return new Contract(address, _abi, signerOrProvider) as Erc721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162001e5138038062001e51833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405250620001b391506301ffc9a760e01b90506200021d565b8151620001c8906006906020850190620002a2565b508051620001de906007906020840190620002a2565b50620001f16380ac58cd60e01b6200021d565b62000203635b5e139f60e01b6200021d565b6200021563780e9d6360e01b6200021d565b50506200034e565b6001600160e01b031980821614156200027d576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002da576000855562000325565b82601f10620002f557805160ff191683800117855562000325565b8280016001018555821562000325579182015b828111156200032557825182559160200191906001019062000308565b506200033392915062000337565b5090565b5b8082111562000333576000815560010162000338565b611af3806200035e6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80634f6ccce7116100b257806395d89b4111610081578063b88d4fde11610066578063b88d4fde146103a7578063c87b56dd1461046d578063e985e9c51461048a5761011b565b806395d89b4114610371578063a22cb465146103795761011b565b80634f6ccce7146103095780636352211e146103265780636c0360eb1461034357806370a082311461034b5761011b565b806318160ddd116100ee57806318160ddd1461025757806323b872dd146102715780632f745c59146102a757806342842e0e146102d35761011b565b806301ffc9a71461012057806306fdde0314610173578063081812fc146101f0578063095ea7b314610229575b600080fd5b61015f6004803603602081101561013657600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166104b8565b604080519115158252519081900360200190f35b61017b6104f3565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101b557818101518382015260200161019d565b50505050905090810190601f1680156101e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61020d6004803603602081101561020657600080fd5b5035610589565b604080516001600160a01b039092168252519081900360200190f35b6102556004803603604081101561023f57600080fd5b506001600160a01b0381351690602001356105eb565b005b61025f6106c6565b60408051918252519081900360200190f35b6102556004803603606081101561028757600080fd5b506001600160a01b038135811691602081013590911690604001356106d7565b61025f600480360360408110156102bd57600080fd5b506001600160a01b03813516906020013561072e565b610255600480360360608110156102e957600080fd5b506001600160a01b03813581169160208101359091169060400135610759565b61025f6004803603602081101561031f57600080fd5b5035610774565b61020d6004803603602081101561033c57600080fd5b503561078a565b61017b6107b2565b61025f6004803603602081101561036157600080fd5b50356001600160a01b0316610813565b61017b61087b565b6102556004803603604081101561038f57600080fd5b506001600160a01b03813516906020013515156108dc565b610255600480360360808110156103bd57600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156103f857600080fd5b82018360208201111561040a57600080fd5b8035906020019184600183028401116401000000008311171561042c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109ff945050505050565b61017b6004803603602081101561048357600080fd5b5035610a5d565b61015f600480360360408110156104a057600080fd5b506001600160a01b0381358116916020013516610d04565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b60068054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561057f5780601f106105545761010080835404028352916020019161057f565b820191906000526020600020905b81548152906001019060200180831161056257829003601f168201915b5050505050905090565b600061059482610d32565b6105cf5760405162461bcd60e51b815260040180806020018281038252602c8152602001806119e8602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105f68261078a565b9050806001600160a01b0316836001600160a01b031614156106495760405162461bcd60e51b8152600401808060200182810382526021815260200180611a6c6021913960400191505060405180910390fd5b806001600160a01b031661065b610d3f565b6001600160a01b0316148061067c575061067c81610677610d3f565b610d04565b6106b75760405162461bcd60e51b815260040180806020018281038252603881526020018061193b6038913960400191505060405180910390fd5b6106c18383610d43565b505050565b60006106d26002610dc9565b905090565b6106e86106e2610d3f565b82610dd4565b6107235760405162461bcd60e51b8152600401808060200182810382526031815260200180611a8d6031913960400191505060405180910390fd5b6106c1838383610e78565b6001600160a01b03821660009081526001602052604081206107509083610fc4565b90505b92915050565b6106c1838383604051806020016040528060008152506109ff565b600080610782600284610fd0565b509392505050565b60006107538260405180606001604052806029815260200161199d6029913960029190610fec565b60098054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561057f5780601f106105545761010080835404028352916020019161057f565b60006001600160a01b03821661085a5760405162461bcd60e51b815260040180806020018281038252602a815260200180611973602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061075390610dc9565b60078054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561057f5780601f106105545761010080835404028352916020019161057f565b6108e4610d3f565b6001600160a01b0316826001600160a01b0316141561094a576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610957610d3f565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016921515929092179091556109b9610d3f565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610a10610a0a610d3f565b83610dd4565b610a4b5760405162461bcd60e51b8152600401808060200182810382526031815260200180611a8d6031913960400191505060405180910390fd5b610a5784848484611003565b50505050565b6060610a6882610d32565b610aa35760405162461bcd60e51b815260040180806020018281038252602f815260200180611a3d602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610b385780601f10610b0d57610100808354040283529160200191610b38565b820191906000526020600020905b815481529060010190602001808311610b1b57829003601f168201915b505060095493945050505060026000196101006001841615020190911604610b615790506104ee565b805115610c32576009816040516020018083805460018160011615610100020316600290048015610bc95780601f10610ba7576101008083540402835291820191610bc9565b820191906000526020600020905b815481529060010190602001808311610bb5575b5050825160208401908083835b60208310610bf55780518252601f199092019160209182019101610bd6565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150506104ee565b6009610c3d84611055565b6040516020018083805460018160011615610100020316600290048015610c9b5780601f10610c79576101008083540402835291820191610c9b565b820191906000526020600020905b815481529060010190602001808311610c87575b5050825160208401908083835b60208310610cc75780518252601f199092019160209182019101610ca8565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610753600283611164565b3390565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091558190610d908261078a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061075382611170565b6000610ddf82610d32565b610e1a5760405162461bcd60e51b815260040180806020018281038252602c81526020018061190f602c913960400191505060405180910390fd5b6000610e258361078a565b9050806001600160a01b0316846001600160a01b03161480610e605750836001600160a01b0316610e5584610589565b6001600160a01b0316145b80610e705750610e708185610d04565b949350505050565b826001600160a01b0316610e8b8261078a565b6001600160a01b031614610ed05760405162461bcd60e51b8152600401808060200182810382526029815260200180611a146029913960400191505060405180910390fd5b6001600160a01b038216610f155760405162461bcd60e51b81526004018080602001828103825260248152602001806118eb6024913960400191505060405180910390fd5b610f208383836106c1565b610f2b600082610d43565b6001600160a01b0383166000908152600160205260409020610f4d9082611174565b506001600160a01b0382166000908152600160205260409020610f709082611180565b50610f7d6002828461118c565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061075083836111a2565b6000808080610fdf8686611206565b9097909650945050505050565b6000610ff9848484611281565b90505b9392505050565b61100e848484610e78565b61101a8484848461134b565b610a575760405162461bcd60e51b81526004018080602001828103825260328152602001806118b96032913960400191505060405180910390fd5b606081611096575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526104ee565b8160005b81156110ae57600101600a8204915061109a565b60608167ffffffffffffffff811180156110c757600080fd5b506040519080825280601f01601f1916602001820160405280156110f2576020820181803683370190505b50859350905060001982015b831561115b57600a840660300160f81b8282806001900393508151811061112157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a840493506110fe565b50949350505050565b60006107508383611527565b5490565b6000610750838361153f565b60006107508383611605565b6000610ff984846001600160a01b03851661164f565b815460009082106111e45760405162461bcd60e51b81526004018080602001828103825260228152602001806118976022913960400191505060405180910390fd5b8260000182815481106111f357fe5b9060005260206000200154905092915050565b81546000908190831061124a5760405162461bcd60e51b81526004018080602001828103825260228152602001806119c66022913960400191505060405180910390fd5b600084600001848154811061125b57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b6000828152600184016020526040812054828161131c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112e15781810151838201526020016112c9565b50505050905090810190601f16801561130e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061132f57fe5b9060005260206000209060020201600101549150509392505050565b600061135f846001600160a01b03166116e6565b61136b57506001610e70565b60606114bc7f150b7a0200000000000000000000000000000000000000000000000000000000611399610d3f565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156114005781810151838201526020016113e8565b50505050905090810190601f16801561142d5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016118b9603291396001600160a01b038816919061171f565b905060008180602001905160208110156114d557600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001492505050949350505050565b60009081526001919091016020526040902054151590565b600081815260018301602052604081205480156115fb578354600019808301919081019060009087908390811061157257fe5b906000526020600020015490508087600001848154811061158f57fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806115bf57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610753565b6000915050610753565b60006116118383611527565b61164757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610753565b506000610753565b6000828152600184016020526040812054806116b4575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610ffc565b828560000160018303815481106116c757fe5b9060005260206000209060020201600101819055506000915050610ffc565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610e70575050151592915050565b6060610ff984846000856060611734856116e6565b611785576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106117c45780518252601f1990920191602091820191016117a5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611826576040519150601f19603f3d011682016040523d82523d6000602084013e61182b565b606091505b5091509150811561183f579150610e709050565b80511561184f5780518082602001fd5b60405162461bcd60e51b81526020600482018181528651602484015286518793919283926044019190850190808383600083156112e15781810151838201526020016112c956fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220c40db4215c1d939866b3275bf39d2f31d479851cc711ef8919a99b62b58f4a9764736f6c63430007040033';
