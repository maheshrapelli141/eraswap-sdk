/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { BlockReward } from './BlockReward';

export class BlockRewardFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BlockReward> {
    return super.deploy(overrides || {}) as Promise<BlockReward>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BlockReward {
    return super.attach(address) as BlockReward;
  }
  connect(signer: Signer): BlockRewardFactory {
    return super.connect(signer) as BlockRewardFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BlockReward {
    return new Contract(address, _abi, signerOrProvider) as BlockReward;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'SYSTEM_ADDRESS',
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
    inputs: [],
    name: 'dayswappers',
    outputs: [
      {
        internalType: 'contract IDayswappers',
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
        name: '_testSystemAddress',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'kycDapp',
    outputs: [
      {
        internalType: 'contract IKycDapp',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nrtManager',
    outputs: [
      {
        internalType: 'contract INRTManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
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
    inputs: [],
    name: 'prepaidEs',
    outputs: [
      {
        internalType: 'contract IPrepaidEs',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'randomnessManager',
    outputs: [
      {
        internalType: 'contract RandomnessManager',
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
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddress',
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
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddressStrict',
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
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsername',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsernameStrict',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'benefactors',
        type: 'address[]',
      },
      {
        internalType: 'uint16[]',
        name: '',
        type: 'uint16[]',
      },
    ],
    name: 'reward',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setInitialValues',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_kycDapp',
        type: 'address',
      },
    ],
    name: 'setKycDapp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyClub',
    outputs: [
      {
        internalType: 'contract ITimeAllyClub',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyManager',
    outputs: [
      {
        internalType: 'contract ITimeAllyManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyPromotionalBucket',
    outputs: [
      {
        internalType: 'contract ITimeAllyPromotionalBucket',
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
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'validatorManager',
    outputs: [
      {
        internalType: 'contract IValidatorManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x6080604052600280546001600160a01b0319166002600160a01b0317905534801561002957600080fd5b50600061003461008d565b6000805462010000600160b01b031916620100006001600160a01b038416908102919091178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610091565b3390565b610cff806100a06000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806398b1a44d116100cd578063dccc1b0811610081578063f456795111610066578063f4567951146102e9578063f91c2898146102f1578063fe55bde9146104b15761016c565b8063dccc1b08146102bb578063f2fde38b146102c35761016c565b8063b58a6375116100b2578063b58a637514610285578063bf8c31441461028d578063c4d66de8146102955761016c565b806398b1a44d14610255578063a7017b521461027d5761016c565b80633434735f116101245780636a14920a116101095780636a14920a14610228578063722d2b3e146102455780638da5cb5b1461024d5761016c565b80633434735f1461021857806367b48b18146102205761016c565b80631d849b30116101555780631d849b30146101cd5780631f70693c146101ea578063208b3804146102105761016c565b80630d541ecb146101715780630df5202f146101a9575b600080fd5b6101976004803603602081101561018757600080fd5b50356001600160a01b03166104b9565b60408051918252519081900360200190f35b6101b1610509565b604080516001600160a01b039092168252519081900360200190f35b6101b1600480360360208110156101e357600080fd5b5035610539565b6101976004803603602081101561020057600080fd5b50356001600160a01b031661058c565b6101b1610628565b6101b1610653565b6101b1610662565b6101b16004803603602081101561023e57600080fd5b5035610671565b6101b16106d6565b6101b1610701565b61027b6004803603602081101561026b57600080fd5b50356001600160a01b0316610716565b005b6101b1610786565b61027b6107b1565b6101b16107b3565b61027b600480360360208110156102ab57600080fd5b50356001600160a01b03166107de565b6101b1610917565b61027b600480360360208110156102d957600080fd5b50356001600160a01b0316610942565b6101b16109bb565b6104186004803603604081101561030757600080fd5b81019060208101813564010000000081111561032257600080fd5b82018360208201111561033457600080fd5b8035906020019184602083028401116401000000008311171561035657600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156103a657600080fd5b8201836020820111156103b857600080fd5b803590602001918460208302840111640100000000831117156103da57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506109e6945050505050565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561045c578181015183820152602001610444565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561049b578181015183820152602001610483565b5050505090500194505050505060405180910390f35b6101b1610b04565b6000806104c58361058c565b9050806105035760405162461bcd60e51b815260040180806020018281038252602a815260200180610c4c602a913960400191505060405180910390fd5b92915050565b60006105347f4e52545f4d414e41474552000000000000000000000000000000000000000000610539565b905090565b60008061054583610671565b90506001600160a01b0381166105035760405162461bcd60e51b8152600401808060200182810382526026815260200180610ca46026913960400191505060405180910390fd5b600154604080517f1f70693c0000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b1580156105f657600080fd5b505afa15801561060a573d6000803e3d6000fd5b505050506040513d602081101561062057600080fd5b505192915050565b60006105347f4441595357415050455253000000000000000000000000000000000000000000610539565b6002546001600160a01b031681565b6001546001600160a01b031690565b600154604080517f6a14920a0000000000000000000000000000000000000000000000000000000081526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b1580156105f657600080fd5b60006105347f54494d45414c4c595f4d414e4147455200000000000000000000000000000000610539565b6000546201000090046001600160a01b031690565b3361071f610701565b6001600160a01b03161461077a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b61078381610b2f565b50565b60006105347f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b45540000000000610539565b565b60006105347f52414e444f4d4e4553535f4d414e414745520000000000000000000000000000610539565b600054610100900460ff16806107f757506107f7610b5e565b80610805575060005460ff16155b6108405760405162461bcd60e51b815260040180806020018281038252602e815260200180610c76602e913960400191505060405180910390fd5b600054610100900460ff1615801561088957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0061ff0019909116610100171660011790555b610891610b64565b6001600160a01b038216156108cd576002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416179055610901565b6002805473ffffffffffffffffffffffffffffffffffffffff191673fffffffffffffffffffffffffffffffffffffffe1790555b8015610913576000805461ff00191690555b5050565b60006105347f54494d45414c4c595f434c554200000000000000000000000000000000000000610539565b61094a610b6d565b6000546201000090046001600160a01b039081169116146109b2576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b61078381610b71565b60006105347f505245504149445f455300000000000000000000000000000000000000000000610539565b60025460609081906001600160a01b03163314610a4a576040805162461bcd60e51b815260206004820152601860248201527f42523a204f4e4c595f53595354454d5f43414e5f43414c4c0000000000000000604482015290519081900360640190fd5b60005b8451811015610ae357610a5e610b04565b6001600160a01b031663a571c0d1868381518110610a7857fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b158015610abf57600080fd5b505af1158015610ad3573d6000803e3d6000fd5b505060019092019150610a4d9050565b50506040805160008082526020820190815281830190925294909350915050565b60006105347f56414c494441544f525f4d414e41474552000000000000000000000000000000610539565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b303b1590565b6107b133610b71565b3390565b6001600160a01b038116610bcc576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0390921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff90921691909117905556fe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f535452494354496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656452656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a26469706673582212203d88df20d6ad256200e04d1df443e318b25a3a5111ab237468ef05d97e61a0ec64736f6c63430007040033';
