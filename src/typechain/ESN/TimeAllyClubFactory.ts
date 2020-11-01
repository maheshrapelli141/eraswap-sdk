/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { TimeAllyClub } from './TimeAllyClub';

export class TimeAllyClubFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TimeAllyClub> {
    return super.deploy(overrides || {}) as Promise<TimeAllyClub>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimeAllyClub {
    return super.attach(address) as TimeAllyClub;
  }
  connect(signer: Signer): TimeAllyClubFactory {
    return super.connect(signer) as TimeAllyClubFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TimeAllyClub {
    return new Contract(address, _abi, signerOrProvider) as TimeAllyClub;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'wallet',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'newStatus',
        type: 'bool',
      },
    ],
    name: 'Authorised',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'networker',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'platform',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'month',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Business',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'month',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'NRTReceived',
    type: 'event',
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'networker',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'platform',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'month',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'direct',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tree',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'issTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'staking',
        type: 'address',
      },
    ],
    name: 'Withdraw',
    type: 'event',
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
        internalType: 'uint256',
        name: '_volume',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
    ],
    name: 'getIncentiveSlab',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'label',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'target',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'directBountyPerTenThousand',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'treeBountyPerTenThousand',
            type: 'uint32',
          },
        ],
        internalType: 'struct ITimeAllyClub.Incentive',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getMembershipVolume',
    outputs: [
      {
        internalType: 'uint256',
        name: 'businessVolume',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'otherVolume',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getMonthlyNRT',
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
        name: '_network',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
    ],
    name: 'getPlatformBusiness',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'business',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'calculatedReward',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'claimed',
            type: 'bool',
          },
        ],
        internalType: 'struct ITimeAllyClub.PlatformBusiness',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
    ],
    name: 'getReward',
    outputs: [
      {
        internalType: 'uint256',
        name: 'direct',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tree',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getTotalBusinessVolume',
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
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getTotalRewards',
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
    name: 'initialize',
    outputs: [],
    stateMutability: 'payable',
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
    name: 'isAuthorized',
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
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'isAuthorized',
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
        internalType: 'uint32',
        name: '_currentNrtMonth',
        type: 'uint32',
      },
    ],
    name: 'receiveNrt',
    outputs: [],
    stateMutability: 'payable',
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
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'rewardToIntroducer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'rewardToNetworker',
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
    inputs: [
      {
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'label',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'target',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'directBountyPerTenThousand',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'treeBountyPerTenThousand',
            type: 'uint32',
          },
        ],
        internalType: 'struct ITimeAllyClub.Incentive[]',
        name: '_incentiveStructure',
        type: 'tuple[]',
      },
    ],
    name: 'setPlatformIncentives',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: '_newStatus',
        type: 'bool',
      },
    ],
    name: 'updateAuthorization',
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
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
      {
        internalType: 'enum ITimeAllyClub.RewardType',
        name: '_rewardType',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: '_stakingContract',
        type: 'address',
      },
    ],
    name: 'withdrawPlatformIncentive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b61296d8061007d6000396000f3fe6080604052600436106101e35760003560e01c8063722d2b3e11610102578063c8fe49f911610095578063f2fde38b11610064578063f2fde38b14610545578063f456795114610565578063fe55bde91461057a578063fe9fbb801461058f576101e3565b8063c8fe49f9146104dd578063d371144e146104fd578063dccc1b081461051d578063ed86108f14610532576101e3565b8063a68bdc84116100d1578063a68bdc8414610459578063a7017b5214610486578063bf8c31441461049b578063c0fd2ece146104b0576101e3565b8063722d2b3e146104075780638129fc1c1461041c5780638da5cb5b1461042457806398b1a44d14610439576101e3565b806336ff9a301161017a5780635ee25356116101495780635ee253561461038557806362f4ed90146103a557806367b48b18146103d25780636a14920a146103e7576101e3565b806336ff9a30146102f75780633fb9bfbf1461031757806346abf63c1461033757806359ae627014610357576101e3565b80631e6b5f8d116101b65780631e6b5f8d146102805780631f70693c146102a2578063208b3804146102c25780632a2b4049146102d7576101e3565b80630ab85a10146101e85780630d541ecb1461021e5780630df5202f1461023e5780631d849b3014610260575b600080fd5b3480156101f457600080fd5b5061020861020336600461244e565b6105af565b6040516102159190612551565b60405180910390f35b34801561022a57600080fd5b50610208610239366004612183565b6105cb565b34801561024a57600080fd5b5061025361061b565b60405161021591906124f1565b34801561026c57600080fd5b5061025361027b3660046123ee565b61064b565b34801561028c57600080fd5b506102a061029b366004612486565b61069e565b005b3480156102ae57600080fd5b506102086102bd366004612183565b610c75565b3480156102ce57600080fd5b50610253610d11565b3480156102e357600080fd5b506102086102f236600461244e565b610d3c565b34801561030357600080fd5b506102a0610312366004612406565b610d54565b34801561032357600080fd5b506102a0610332366004612325565b610e0f565b34801561034357600080fd5b5061020861035236600461244e565b6111a0565b34801561036357600080fd5b50610377610372366004612388565b6111b8565b60405161021592919061280d565b34801561039157600080fd5b506103776103a0366004612350565b6112e1565b3480156103b157600080fd5b506103c56103c03660046123ee565b611318565b6040516102159190612546565b3480156103de57600080fd5b5061025361132d565b3480156103f357600080fd5b506102536104023660046123ee565b61133c565b34801561041357600080fd5b506102536113a1565b6102a06113cc565b34801561043057600080fd5b50610253611476565b34801561044557600080fd5b506102a0610454366004612183565b611485565b34801561046557600080fd5b50610479610474366004612388565b6114f2565b60405161021591906127ea565b34801561049257600080fd5b5061025361155e565b3480156104a757600080fd5b50610253611589565b3480156104bc57600080fd5b506104d06104cb36600461242a565b6115b4565b604051610215919061275c565b3480156104e957600080fd5b506102a06104f83660046121bb565b611767565b34801561050957600080fd5b506102a0610518366004612325565b6118a0565b34801561052957600080fd5b50610253611a27565b6102a061054036600461244e565b611a52565b34801561055157600080fd5b506102a0610560366004612183565b611afd565b34801561057157600080fd5b50610253611b70565b34801561058657600080fd5b50610253611b9b565b34801561059b57600080fd5b506103c56105aa366004612183565b611bc6565b63ffffffff81166000908152600760205260409020545b919050565b6000806105d783610c75565b9050806106155760405162461bcd60e51b815260040180806020018281038252602a815260200180612899602a913960400191505060405180910390fd5b92915050565b60006106467f4e52545f4d414e4147455200000000000000000000000000000000000000000061064b565b905090565b6000806106578361133c565b90506001600160a01b0381166106155760405162461bcd60e51b81526004018080602001828103825260268152602001806129126026913960400191505060405180910390fd5b6106a66113a1565b6001600160a01b031663c6521e40826040518263ffffffff1660e01b81526004016106d191906124f1565b60206040518083038186803b1580156106e957600080fd5b505afa1580156106fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072191906123d2565b6107465760405162461bcd60e51b815260040161073d9061255a565b60405180910390fd5b806001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561077f57600080fd5b505afa158015610793573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b7919061219f565b6001600160a01b0316336001600160a01b0316146107e75760405162461bcd60e51b815260040161073d906126ee565b33600090815260056020908152604080832063ffffffff8816845282528083206001600160a01b03871684526002908101909252909120015460ff16156108405760405162461bcd60e51b815260040161073d90612680565b63ffffffff60018501166000908152600260205260409020546108755760405162461bcd60e51b815260040161073d90612725565b6000806108833387876111b8565b9150915060008211806108965750600081115b6108b25760405162461bcd60e51b815260040161073d906126b7565b33600090815260056020908152604080832063ffffffff8a16845282528083206001600160a01b03891684526002908101909252822001805460ff191660011790558215610b88576000610907846002611bd4565b90506000808088600281111561091957fe5b1415610926575081610991565b600188600281111561093457fe5b141561094557829350829150610991565b600288600281111561095357fe5b14156109795761096f606461096985607d611c1d565b90611bd4565b9350859250610991565b60405162461bcd60e51b815260040161073d9061258f565b8215610a15576000876001600160a01b0316846040516109b0906124ee565b60006040518083038185875af1925050503d80600081146109ed576040519150601f19603f3d011682016040523d82523d6000602084013e6109f2565b606091505b5050905080610a135760405162461bcd60e51b815260040161073d90612649565b505b8115610a8257610a23611b70565b6001600160a01b031663301bae2e83336040518363ffffffff1660e01b8152600401610a4f91906124f1565b6000604051808303818588803b158015610a6857600080fd5b505af1158015610a7c573d6000803e3d6000fd5b50505050505b8015610b06576000336001600160a01b031682604051610aa1906124ee565b60006040518083038185875af1925050503d8060008114610ade576040519150601f19603f3d011682016040523d82523d6000602084013e610ae3565b606091505b5050905080610b045760405162461bcd60e51b815260040161073d906125ec565b505b8315610b84576040517f572887c20000000000000000000000000000000000000000000000000000000081526001600160a01b0388169063572887c290610b51908790600401612551565b600060405180830381600087803b158015610b6b57600080fd5b505af1158015610b7f573d6000803e3d6000fd5b505050505b5050505b8115610c1457610b96610d11565b6001600160a01b0316637ef4070583336040518060600160405280603281526020016000815260200160328152506040518463ffffffff1660e01b8152600401610be1929190612505565b6000604051808303818588803b158015610bfa57600080fd5b505af1158015610c0e573d6000803e3d6000fd5b50505050505b8663ffffffff16866001600160a01b0316336001600160a01b03167f98ecf61eb94a58f7f61a6f3bb6d77ad183a3d913ee4d86f703bdf4258653e5168686868a604051610c64949392919061281b565b60405180910390a450505050505050565b600154604080517f1f70693c0000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b158015610cdf57600080fd5b505afa158015610cf3573d6000803e3d6000fd5b505050506040513d6020811015610d0957600080fd5b505192915050565b60006106467f444159535741505045525300000000000000000000000000000000000000000061064b565b63ffffffff1660009081526002602052604090205490565b33610d5d611476565b6001600160a01b031614610db8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b600082815260036020908152604091829020805460ff19168415159081179091558251908152915184927fc810dc2893ceceb4379018a2ed3d3d7765b57d3b6adf083fed59a4399b0defbc92908290030190a25050565b6000610e1a33610c75565b9050610e2581611318565b610e2e30610c75565b604080517f417574686f72697a61626c653a204e4f545f415554484f5249534544206f6e206020820152808201929092527f3a2000000000000000000000000000000000000000000000000000000000000060608301526062808301859052815180840390910181526082909201905290610f275760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610eec578181015183820152602001610ed4565b50505050905090810190601f168015610f195780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000610f3261061b565b6001600160a01b031663fcc3e8226040518163ffffffff1660e01b815260040160206040518083038186803b158015610f6a57600080fd5b505afa158015610f7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa2919061246a565b6001600160a01b038516600090815260056020908152604080832063ffffffff8086168552925290912054919250610fdd91908590611c7616565b6001600160a01b038516600090815260056020908152604080832063ffffffff8087168552908352818420949094556006909152902054611020918590611c7616565b63ffffffff8083166000818152600660209081526040808320959095556001600160a01b03891682526005815284822092825291825283812033825260020190915291822054611072918690611c7616565b6001600160a01b038616600090815260056020908152604080832063ffffffff871684528252808320338085526002909101909252822083815560010154929350819081906110c4908a9088906111b8565b019250505081811115611156576001600160a01b038716600090815260056020908152604080832063ffffffff808916855290835281842033855260020190925290912060010182905561113f906111209083908590611cd016565b63ffffffff8087166000908152600760205260409020549190611c7616565b63ffffffff85166000908152600760205260409020555b8363ffffffff16336001600160a01b0316886001600160a01b03167f9c717a1bdc24944698f8790ee3b375e4b15a78d2697d5d02698b92f8fee8b33789604051610c649190612551565b63ffffffff1660009081526006602052604090205490565b6001600160a01b038316600090815260056020908152604080832063ffffffff86168452909152812080546001909101548291906111f4611fcd565b611200828401876115b4565b905061120a612001565b506001600160a01b03808916600090815260056020908152604080832063ffffffff8c1684528252808320938a16835260029384018252918290208251606081018452815481526001820154928101929092529092015460ff16158015918301919091526112825760008095509550505050506112d9565b6112a9612710610969846040015163ffffffff168460000151611c1d90919063ffffffff16565b95506112d2612710610969846060015163ffffffff168460000151611c1d90919063ffffffff16565b9450505050505b935093915050565b6001600160a01b0391909116600090815260056020908152604080832063ffffffff90941683529290522080546001909101549091565b60009081526003602052604090205460ff1690565b6001546001600160a01b031690565b600154604080517f6a14920a0000000000000000000000000000000000000000000000000000000081526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b158015610cdf57600080fd5b60006106467f54494d45414c4c595f4d414e414745520000000000000000000000000000000061064b565b600454610100900460ff16806113e557506113e5611d12565b806113f3575060045460ff16155b61142e5760405162461bcd60e51b815260040180806020018281038252602e8152602001806128c3602e913960400191505060405180910390fd5b600454610100900460ff16158015611459576004805460ff1961ff0019909116610100171660011790555b611461611d18565b8015611473576004805461ff00191690555b50565b6000546001600160a01b031690565b3361148e611476565b6001600160a01b0316146114e9576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b61147381611d23565b6114fa612001565b506001600160a01b03928316600090815260056020908152604080832063ffffffff95909516835293815283822092909416815260029182018452829020825160608101845281548152600182015494810194909452015460ff1615159082015290565b60006106467f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b4554000000000061064b565b60006106467f52414e444f4d4e4553535f4d414e41474552000000000000000000000000000061064b565b6115bc611fcd565b6001600160a01b038216600090815260086020526040902080546116335750506040805160c081018252600c608082019081527f44656661756c7420536c6162000000000000000000000000000000000000000060a083015281526000602082018190529181018290526060810191909152610615565b60005b81548110156116715781818154811061164b57fe5b90600052602060002090600302016001015485101561166957611671565b600101611636565b81546000199091019082908290811061168657fe5b600091825260209182902060408051600393909302909101805460026001821615610100026000190190911604601f8101859004909402830160a090810190925260808301848152929390928492909184918401828280156117295780601f106116fe57610100808354040283529160200191611729565b820191906000526020600020905b81548152906001019060200180831161170c57829003601f168201915b50505091835250506001820154602082015260029091015463ffffffff80821660408401526401000000009091041660609091015295945050505050565b6001600160a01b038216600090815260086020526040902054156117a6576001600160a01b03821660009081526008602052604081206117a691612024565b60005b815181101561189b576001600160a01b038316600090815260086020526040902082518390839081106117d857fe5b60209081029190910181015182546001810184556000938452928290208151805192946003029091019261181192849290910190612045565b5060208201516001828101919091556040830151600290920180546060909401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090941663ffffffff938416177fffffffffffffffffffffffffffffffffffffffffffffffff00000000ffffffff166401000000009390941692909202929092179055016117a9565b505050565b60006118ab33610c75565b90506118b681611318565b6118bf30610c75565b604080517f417574686f72697a61626c653a204e4f545f415554484f5249534544206f6e206020820152808201929092527f3a200000000000000000000000000000000000000000000000000000000000006060830152606280830185905281518084039091018152608290920190529061197b5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610eec578181015183820152602001610ed4565b506000611986610d11565b6001600160a01b031663fc198e53856040518263ffffffff1660e01b81526004016119b191906124f1565b60206040518083038186803b1580156119c957600080fd5b505afa1580156119dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a01919061219f565b90506001600160a01b038116611a17575061189b565b611a218184610e0f565b50505050565b60006106467f54494d45414c4c595f434c55420000000000000000000000000000000000000061064b565b611a5b81611d5d565b63ffffffff60001982018116600090815260076020908152604080832054938516835260029091529020548082101561189b576000611a9a8284611cd0565b9050611aa461061b565b6001600160a01b03166388cbfff3826040518263ffffffff1660e01b81526004016000604051808303818588803b158015611ade57600080fd5b505af1158015611af2573d6000803e3d6000fd5b505050505050505050565b611b05611e3c565b6000546001600160a01b03908116911614611b67576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b61147381611e40565b60006106467f505245504149445f45530000000000000000000000000000000000000000000061064b565b60006106467f56414c494441544f525f4d414e4147455200000000000000000000000000000061064b565b60006106156103c083610c75565b6000611c1683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611f0e565b9392505050565b600082611c2c57506000610615565b82820282848281611c3957fe5b0414611c165760405162461bcd60e51b81526004018080602001828103825260218152602001806128f16021913960400191505060405180910390fd5b600082820183811015611c16576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000611c1683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611f73565b303b1590565b611d2133611e40565b565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000611d887f4e52545f4d414e4147455200000000000000000000000000000000000000000061133c565b9050336001600160a01b03821614611de7576040805162461bcd60e51b815260206004820152601e60248201527f4e525452656365697665723a204f4e4c595f4e52545f43414e5f53454e440000604482015290519081900360640190fd5b63ffffffff82166000818152600260209081526040918290203490819055825133815292519093927ff2c578ebd0fb2ce2969f703dfb967aefb08d6374dfabcb20c55c75cdf85a58e692908290030190a35050565b3390565b6001600160a01b038116611e9b576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60008183611f5d5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610eec578181015183820152602001610ed4565b506000838581611f6957fe5b0495945050505050565b60008184841115611fc55760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610eec578181015183820152602001610ed4565b505050900390565b60405180608001604052806060815260200160008152602001600063ffffffff168152602001600063ffffffff1681525090565b604051806060016040528060008152602001600081526020016000151581525090565b508054600082556003029060005260206000209081019061147391906120d1565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261207b57600085556120c1565b82601f1061209457805160ff19168380011785556120c1565b828001600101855582156120c1579182015b828111156120c15782518255916020019190600101906120a6565b506120cd92915061211f565b5090565b808211156120cd5760006120e58282612134565b50600060018201556002810180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001690556003016120d1565b5b808211156120cd5760008155600101612120565b50805460018160011615610100020316600290046000825580601f1061215a5750611473565b601f016020900490600052602060002090810190611473919061211f565b80356105c681612886565b600060208284031215612194578081fd5b8135611c1681612863565b6000602082840312156121b0578081fd5b8151611c1681612863565b600080604083850312156121cd578081fd5b6121d78335612863565b8235915060208084013567ffffffffffffffff808211156121f6578384fd5b818601915086601f830112612209578384fd5b808235111561221457fe5b61222283848435020161283f565b8235815283810190848401865b85358110156123155781358601601f19608081838f0301121561225057898afd5b604051806080820110886080830111171561226757fe5b60808101604052898301358881111561227e578b8cfd5b8301603f81018f1361228e578b8cfd5b8a8101358981111561229c57fe5b6122ac8c85601f8401160161283f565b93508084528f60408284010111156122c2578c8dfd5b80604083018d86013783018b018c9052508181526040830135818b01526122eb60608401612178565b60408201526122fc60808401612178565b606082015286525050928601929086019060010161222f565b5096999098509650505050505050565b60008060408385031215612337578182fd5b823561234281612863565b946020939093013593505050565b60008060408385031215612362578182fd5b823561236d81612863565b9150602083013561237d81612886565b809150509250929050565b60008060006060848603121561239c578081fd5b83356123a781612863565b925060208401356123b781612886565b915060408401356123c781612863565b809150509250925092565b6000602082840312156123e3578081fd5b8151611c1681612878565b6000602082840312156123ff578081fd5b5035919050565b60008060408385031215612418578182fd5b82359150602083013561237d81612878565b6000806040838503121561243c578182fd5b82359150602083013561237d81612863565b60006020828403121561245f578081fd5b8135611c1681612886565b60006020828403121561247b578081fd5b8151611c1681612886565b6000806000806080858703121561249b578182fd5b84356124a681612886565b935060208501356124b681612863565b92506040850135600381106124c9578283fd5b915060608501356124d981612863565b939692955090935050565b63ffffffff169052565b90565b6001600160a01b0391909116815260200190565b6001600160a01b03831681526080810160208083018460005b600381101561253b5781518352918301919083019060010161251e565b505050509392505050565b901515815260200190565b90815260200190565b6020808252818101527f436c75623a205354414b494e475f434f4e54524143545f4e4f545f56414c4944604082015260600190565b60208082526023908201527f436c75623a20494e56414c49445f5245574152445f545950455f53504543494660408201527f4945440000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f436c75623a204c49515549445f45535f5452414e534645525f544f5f53454c4660408201527f5f49535f4641494c494e47000000000000000000000000000000000000000000606082015260800190565b6020808252601e908201527f436c75623a205354414b494e475f544f5055505f49535f4641494c494e470000604082015260600190565b60208082526015908201527f436c75623a20414c52454144595f434c41494d45440000000000000000000000604082015260600190565b6020808252600f908201527f436c75623a204e4f5f5245574152440000000000000000000000000000000000604082015260600190565b6020808252601a908201527f436c75623a204e4f545f4f574e45525f4f465f5354414b494e47000000000000604082015260600190565b6020808252601c908201527f436c75623a204d4f4e54485f4e52545f4e4f545f52454c454153454400000000604082015260600190565b60006020808352835160808285015280518060a0860152835b818110156127915782810184015186820160c001528301612775565b818111156127a2578460c083880101525b50828601516040860152604086015192506127c060608601846124e4565b606086015192506127d460808601846124e4565b601f01601f19169390930160c001949350505050565b815181526020808301519082015260409182015115159181019190915260600190565b918252602082015260400190565b938452602084019290925260408301526001600160a01b0316606082015260800190565b60405181810167ffffffffffffffff8111828210171561285b57fe5b604052919050565b6001600160a01b038116811461147357600080fd5b801515811461147357600080fd5b63ffffffff8116811461147357600080fdfe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f535452494354496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7752656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a2646970667358221220bc12e12f4e0c79436989c9dd507173d58a11cbca8db1854722d09d9e00f70b5d64736f6c63430007040033';
