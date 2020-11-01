/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { KycDapp } from './KycDapp';

export class KycDappFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<KycDapp> {
    return super.deploy(overrides || {}) as Promise<KycDapp>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KycDapp {
    return super.attach(address) as KycDapp;
  }
  connect(signer: Signer): KycDappFactory {
    return super.connect(signer) as KycDappFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): KycDapp {
    return new Contract(address, _abi, signerOrProvider) as KycDapp;
  }
}

const _abi = [
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
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
    ],
    name: 'IdentityTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'level',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'platformIdentifier',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'specialization',
        type: 'bytes32',
      },
    ],
    name: 'KycApplied',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'newKycDetailsIPfS',
        type: 'bytes32',
      },
    ],
    name: 'KycDetailsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint8',
        name: 'level',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'platformIdentifier',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'specialization',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'KycFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'level',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'platformIdentifier',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'specialization',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: 'newKycStatus',
        type: 'uint8',
      },
    ],
    name: 'KycStatusUpdated',
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
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'newProfileDetailsIPfS',
        type: 'bytes32',
      },
    ],
    name: 'ProfileDetailsUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '_level',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_platformIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_specialization',
        type: 'bytes32',
      },
    ],
    name: 'applyForKyc',
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
      {
        internalType: 'bytes32',
        name: '_kycUnapprovedDetailsIPFS',
        type: 'bytes32',
      },
    ],
    name: 'approveKycDetails',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'getIdentityByAddress',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'kycApprovedDetailsIPFS',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'profileDetailsIPFS',
        type: 'bytes32',
      },
      {
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: 'level1',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: 'isGovernanceControllable',
        type: 'bool',
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
    name: 'getIdentityByUsername',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'kycApprovedDetailsIPFS',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'profileDetailsIPFS',
        type: 'bytes32',
      },
      {
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: 'level1',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: 'isGovernanceControllable',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '_level',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_platformIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_specialization',
        type: 'bytes32',
      },
    ],
    name: 'getKycFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '_fee',
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
        name: '_wallet',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: '_level',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_platformIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_specialization',
        type: 'bytes32',
      },
    ],
    name: 'getKycStatusByAddress',
    outputs: [
      {
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: '',
        type: 'uint8',
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
      {
        internalType: 'uint8',
        name: '_level',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_platformIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_specialization',
        type: 'bytes32',
      },
    ],
    name: 'getKycStatusByUsername',
    outputs: [
      {
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'identities',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'kycApprovedDetailsIPFS',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'profileDetailsIPFS',
        type: 'bytes32',
      },
      {
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: 'level1',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: 'isGovernanceControllable',
        type: 'bool',
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
      {
        internalType: 'address',
        name: '_newWallet',
        type: 'address',
      },
    ],
    name: 'identityTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: '_level',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_platformIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_specialization',
        type: 'bytes32',
      },
    ],
    name: 'isKycApproved',
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
    name: 'isKycLevel1',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '_kycUnapprovedDetailsIPFS',
        type: 'bytes32',
      },
    ],
    name: 'proposeKycDetails',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: '_newUsername',
        type: 'bytes32',
      },
    ],
    name: 'register',
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
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_newContract',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_isGovernanceControllable',
        type: 'bool',
      },
      {
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: '_kycStatus',
        type: 'uint8',
      },
    ],
    name: 'setIdentityOwner',
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
    inputs: [
      {
        internalType: 'uint8',
        name: '_level',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_platformIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_specialization',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'updateKycFee',
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
        internalType: 'uint8',
        name: '_level',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_platformIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_specialization',
        type: 'bytes32',
      },
      {
        internalType: 'enum IKycDapp.KYC_STATUS',
        name: '_kycStatus',
        type: 'uint8',
      },
    ],
    name: 'updateKycStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'usernames',
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
  '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b61254e8061007d6000396000f3fe6080604052600436106102195760003560e01c806381638e9b1161011d578063d4cddb95116100b0578063ee91877c1161007f578063f2fde38b11610064578063f2fde38b14610858578063f45679511461088b578063fe55bde9146108a057610219565b8063ee91877c146107f2578063f2f5cd1d1461082557610219565b8063d4cddb9514610748578063dccc1b0814610781578063e1fa8e8414610796578063eded736f146107b357610219565b8063a559db63116100ec578063a559db6314610676578063a6182afb146106df578063a7017b521461071e578063bf8c31441461073357610219565b806381638e9b146105925780638da5cb5b146106045780638e81c7d21461061957806398b1a44d1461064357610219565b806351f2846f116101b057806367b48b181161017f578063722d2b3e11610164578063722d2b3e146104fc578063727f0de2146105115780638129fc1c1461058a57610219565b806367b48b18146104bd5780636a14920a146104d257610219565b806351f2846f146103f5578063538def611461042e57806359e0de301461045a57806360f140d81461048a57610219565b80631f70693c116101ec5780631f70693c1461030a578063208b38041461033d5780633c7cf91f14610352578063478f2f05146103ae57610219565b80630638f4d31461021e5780630d541ecb1461026a5780630df5202f146102af5780631d849b30146102e0575b600080fd5b34801561022a57600080fd5b506102686004803603608081101561024157600080fd5b5080359060208101356001600160a01b03169060408101351515906060013560ff166108b5565b005b34801561027657600080fd5b5061029d6004803603602081101561028d57600080fd5b50356001600160a01b0316610aab565b60408051918252519081900360200190f35b3480156102bb57600080fd5b506102c4610afd565b604080516001600160a01b039092168252519081900360200190f35b3480156102ec57600080fd5b506102c46004803603602081101561030357600080fd5b5035610b2d565b34801561031657600080fd5b5061029d6004803603602081101561032d57600080fd5b50356001600160a01b0316610b80565b34801561034957600080fd5b506102c4610b9b565b34801561035e57600080fd5b5061039a6004803603608081101561037557600080fd5b506001600160a01b038135169060ff6020820135169060408101359060600135610bc6565b604080519115158252519081900360200190f35b3480156103ba57600080fd5b50610268600480360360a08110156103d157600080fd5b5080359060ff60208201358116916040810135916060820135916080013516610c60565b34801561040157600080fd5b5061029d6004803603606081101561041857600080fd5b5060ff81351690602081013590604001356110de565b6102686004803603606081101561044457600080fd5b5060ff81351690602081013590604001356111d1565b34801561046657600080fd5b506102686004803603604081101561047d57600080fd5b50803590602001356117a4565b34801561049657600080fd5b5061039a600480360360208110156104ad57600080fd5b50356001600160a01b0316611823565b3480156104c957600080fd5b506102c4611877565b3480156104de57600080fd5b506102c4600480360360208110156104f557600080fd5b503561187b565b34801561050857600080fd5b506102c4611896565b34801561051d57600080fd5b5061053b6004803603602081101561053457600080fd5b50356118c1565b60405180878152602001866001600160a01b0316815260200185815260200184815260200183600281111561056c57fe5b81526020018215158152602001965050505050505060405180910390f35b610268611966565b34801561059e57600080fd5b506105bc600480360360208110156105b557600080fd5b5035611ad0565b60405180866001600160a01b031681526020018581526020018481526020018360028111156105e757fe5b815260200182151581526020019550505050505060405180910390f35b34801561061057600080fd5b506102c4611b0f565b34801561062557600080fd5b506102686004803603602081101561063c57600080fd5b5035611b1e565b34801561064f57600080fd5b506102686004803603602081101561066657600080fd5b50356001600160a01b0316611ba4565b34801561068257600080fd5b506106be6004803603608081101561069957600080fd5b506001600160a01b038135169060ff6020820135169060408101359060600135611c11565b604051808260028111156106ce57fe5b815260200191505060405180910390f35b3480156106eb57600080fd5b506106be6004803603608081101561070257600080fd5b5080359060ff6020820135169060408101359060600135611c40565b34801561072a57600080fd5b506102c4611c9f565b34801561073f57600080fd5b506102c4611cca565b34801561075457600080fd5b506102686004803603604081101561076b57600080fd5b50803590602001356001600160a01b0316611cf5565b34801561078d57600080fd5b506102c4611d6e565b610268600480360360208110156107ac57600080fd5b5035611d99565b3480156107bf57600080fd5b50610268600480360360808110156107d657600080fd5b5060ff8135169060208101359060408101359060600135611db0565b3480156107fe57600080fd5b5061029d6004803603602081101561081557600080fd5b50356001600160a01b0316611e7f565b34801561083157600080fd5b5061053b6004803603602081101561084857600080fd5b50356001600160a01b0316611e91565b34801561086457600080fd5b506102686004803603602081101561087b57600080fd5b50356001600160a01b0316611ecc565b34801561089757600080fd5b506102c4611f3f565b3480156108ac57600080fd5b506102c4611f6a565b336108be611b0f565b6001600160a01b031614610919576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b6001600160a01b03831660009081526003602052604090205415801561095457506000848152600260205260409020546001600160a01b0316155b15610a46576109638484611f95565b600084815260026020526040812060030180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100851515021790558160028111156109ae57fe5b14610a415760008481526002602081905260409091206003018054839260ff199091169060019084908111156109e057fe5b02179055506001847ff7328013b5d2f5c3e7fe839de523c3e97c1850de5f94713ca213c3868910a7a56000801b6000801b8560405180848152602001838152602001826002811115610a2e57fe5b8152602001935050505060405180910390a35b610aa5565b600084815260026020526040902060030154610100900460ff16610a9b5760405162461bcd60e51b81526004018080602001828103825260298152602001806124866029913960400191505060405180910390fd5b610aa584846120c8565b50505050565b600080610ab783610b80565b905080610af55760405162461bcd60e51b815260040180806020018281038252602a8152602001806123c7602a913960400191505060405180910390fd5b90505b919050565b6000610b287f4e52545f4d414e41474552000000000000000000000000000000000000000000610b2d565b905090565b600080610b398361187b565b90506001600160a01b038116610af55760405162461bcd60e51b81526004018080602001828103825260268152602001806124af6026913960400191505060405180910390fd5b6001600160a01b031660009081526003602052604090205490565b6000610b287f4441595357415050455253000000000000000000000000000000000000000000610b2d565b600080610bd286611823565b90508460ff1660011415610be7579050610c58565b80610bf6576000915050610c58565b6001600160a01b0386166000908152600360205260409020546001600082815260026020818152604080842060ff808d168652600490910183528185208b865283528185208a86529092529092205490911690811115610c5257fe5b14925050505b949350505050565b610c686121b6565b6000546001600160a01b03908116911614610cca576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b60008581526002602052604090205485906001600160a01b0316610d35576040805162461bcd60e51b815260206004820152601c60248201527f4b79633a204944454e544954595f4e4f545f5245474953544552454400000000604482015290519081900360640190fd5b6000610d428686866110de565b905060008111610d835760405162461bcd60e51b81526004018080602001828103825260258152602001806124126025913960400191505060405180910390fd5b60008660ff1660011415610e2857506000878152600260208190526040909120600301805460ff81169286929160ff1916906001908490811115610dc357fe5b02179055506001887ff7328013b5d2f5c3e7fe839de523c3e97c1850de5f94713ca213c3868910a7a56000801b6000801b8860405180848152602001838152602001826002811115610e1157fe5b8152602001935050505060405180910390a3610ed6565b50600087815260026020818152604080842060ff8b81168652600490910183528185208a86528352818520898652909252909220805492831692869260ff19909116906001908490811115610e7957fe5b02179055508660ff16887ff7328013b5d2f5c3e7fe839de523c3e97c1850de5f94713ca213c3868910a7a588888860405180848152602001838152602001826002811115610ec357fe5b8152602001935050505060405180910390a35b6000816002811115610ee457fe5b14156110d4576000888152600260205260409020546001600160a01b0316610f0a611c9f565b6001600160a01b0316639b8f8da282856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610f6057600080fd5b505af1158015610f74573d6000803e3d6000fd5b505050506000610f996064610f936014876121ba90919063ffffffff16565b9061221c565b9050610fa3611d6e565b6001600160a01b031663d371144e83836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610ff957600080fd5b505af115801561100d573d6000803e3d6000fd5b50505050611019610b9b565b6001600160a01b03166367a597af83836040518060600160405280603281526020016000815260200160328152506040518463ffffffff1660e01b815260040180846001600160a01b0316815260200183815260200182600360200280838360005b8381101561109357818101518382015260200161107b565b505050509050019350505050600060405180830381600087803b1580156110b957600080fd5b505af11580156110cd573d6000803e3d6000fd5b5050505050505b5050505050505050565b60ff83166000908152600460209081526040808320858452825280832084845290915281205490600c61110f610afd565b6001600160a01b031663fcc3e8226040518163ffffffff1660e01b815260040160206040518083038186803b15801561114757600080fd5b505afa15801561115b573d6000803e3d6000fd5b505050506040513d602081101561117157600080fd5b505163ffffffff168161118057fe5b0463ffffffff1690505b80156111c9576111a06064610f9384605a6121ba565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161118a565b509392505050565b3360008181526003602052604090205480611233576040805162461bcd60e51b815260206004820152601c60248201527f4b79633a204944454e544954595f4e4f545f5245474953544552454400000000604482015290519081900360640190fd5b336000908152600360205260408120549061124f8787876110de565b9050600081116112905760405162461bcd60e51b81526004018080602001828103825260258152602001806124126025913960400191505060405180910390fd5b8034148134106112d5576040518060400160405280601481526020017f4b79633a204558434553535f4b59435f4645455300000000000000000000000081525061130c565b6040518060400160405280601a81526020017f4b79633a20494e53554646494349454e545f4b59435f464545530000000000008152505b906113955760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561135a578181015183820152602001611342565b50505050905090810190601f1680156113875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006113a86064610f933460506121ba565b905060006113b4611b0f565b60408051602480820188905260ff8d1660448084019190915260648084018e905260848085018e905285518086038201815260a495860187526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f478f2f05000000000000000000000000000000000000000000000000000000001781529651309581018681526000958201869052606094820194855282519382019390935281516001600160a01b0399909916988b98969795969295939493919091019190808383895b8381101561149457818101518382015260200161147c565b50505050905090810190601f1680156114c15780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5e90852d00000000000000000000000000000000000000000000000000000000178152905182519297509550859450925090508083835b6020831061154d5780518252601f19909201916020918201910161152e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146115af576040519150601f19603f3d011682016040523d82523d6000602084013e6115b4565b606091505b50509050806115f45760405162461bcd60e51b81526004018080602001828103825260238152602001806124f66023913960400191505060405180910390fd5b50600090506116096064610f9334600a6121ba565b9050611613610afd565b6001600160a01b03166388cbfff3826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561164d57600080fd5b505af1158015611661573d6000803e3d6000fd5b50505050505060006116826064610f93600a346121ba90919063ffffffff16565b905060006116af7f434841524954595f44415050000000000000000000000000000000000000000061187b565b6040516001600160a01b0391909116908390600081818185875af1925050503d80600081146116fa576040519150601f19603f3d011682016040523d82523d6000602084013e6116ff565b606091505b5050905080611755576040805162461bcd60e51b815260206004820181905260248201527f4b79633a20434841524954595f5452414e534645525f49535f4641494c494e47604482015290519081900360640190fd5b50508660ff16827f35fd8b340715ff88f9ac2bf333671613d6b52ed0b51fcf48ac8f83d8aeff44508888604051808381526020018281526020019250505060405180910390a350505050505050565b6117ac6121b6565b6000546001600160a01b0390811691161461180e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b60009182526002602052604090912060010155565b6001600160a01b0381166000908152600360205260408120548061184b576000915050610af8565b600160008281526002602081905260409091206003015460ff169081111561186f57fe5b149392505050565b3090565b6000908152600260205260409020546001600160a01b031690565b6000610b287f54494d45414c4c595f4d414e4147455200000000000000000000000000000000610b2d565b600080808080808661191a576040805162461bcd60e51b815260206004820152601c60248201527f4b79633a204944454e544954595f444f45535f4e4f545f455849535400000000604482015290519081900360640190fd5b5050506000848152600260208190526040909120805460018201549282015460039092015496976001600160a01b039091169692955090935060ff808316935061010090920490911690565b6001547501000000000000000000000000000000000000000000900460ff1680611993575061199361225e565b806119b9575060015474010000000000000000000000000000000000000000900460ff16155b6119f45760405162461bcd60e51b815260040180806020018281038252602e815260200180612437602e913960400191505060405180910390fd5b6001547501000000000000000000000000000000000000000000900460ff16158015611a9657600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff90911675010000000000000000000000000000000000000000001716740100000000000000000000000000000000000000001790555b611a9e612264565b8015611acd57600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1690555b50565b600260208190526000918252604090912080546001820154928201546003909201546001600160a01b0390911692919060ff8082169161010090041685565b6000546001600160a01b031690565b3360009081526003602052604090205480611b6a5760405162461bcd60e51b81526004018080602001828103825260218152602001806124d56021913960400191505060405180910390fd5b60408051838152905182917f87c4b11fc400e6fb8a587e30b3e49d61b8e29c7a9ff732587e4860a129c2ff60919081900360200190a25050565b33611bad611b0f565b6001600160a01b031614611c08576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b611acd8161226f565b6001600160a01b038416600090815260036020526040812054611c3681868686611c40565b9695505050505050565b60008360ff1660011415611c69575060008481526002602052604090206003015460ff16610c58565b50600093845260026020908152604080862060ff9586168752600401825280862093865292815282852091855252909120541690565b6000610b287f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b45540000000000610b2d565b6000610b287f52414e444f4d4e4553535f4d414e414745520000000000000000000000000000610b2d565b6000828152600260205260409020546001600160a01b03163314611d60576040805162461bcd60e51b815260206004820152601c60248201527f4b79633a204f4e4c595f4f574e45525f43414e5f5452414e5346455200000000604482015290519081900360640190fd5b611d6a82826120c8565b5050565b6000610b287f54494d45414c4c595f434c554200000000000000000000000000000000000000610b2d565b611da38133611f95565b611acd60016000806111d1565b611db86121b6565b6000546001600160a01b03908116911614611e1a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b60ff841660008181526004602090815260408083208784528252808320868452825291829020849055815184815291518593879390927ffac21aed5d14c314654a3555fdeb6bd8313a4fbf80f8bb9e99825c426340270e92918290030190a450505050565b60036020526000908152604090205481565b6001600160a01b0381166000908152600360205260408120549080808080611eb8866118c1565b949c939b5091995097509550909350915050565b611ed46121b6565b6000546001600160a01b03908116911614611f36576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b611acd8161229e565b6000610b287f505245504149445f455300000000000000000000000000000000000000000000610b2d565b6000610b287f56414c494441544f525f4d414e41474552000000000000000000000000000000610b2d565b6001600160a01b03811660009081526003602052604090205415611fea5760405162461bcd60e51b81526004018080602001828103825260218152602001806123f16021913960400191505060405180910390fd5b6000828152600260205260409020546001600160a01b031615612054576040805162461bcd60e51b815260206004820152601660248201527f4b79633a20555345524e414d455f49535f54414b454e00000000000000000000604482015290519081900360640190fd5b6001600160a01b03811660008181526003602090815260408083208690558583526002909152808220805473ffffffffffffffffffffffffffffffffffffffff19168417905551849291907fba794171cc1f167e514b91890e01766bb996084ec15792721bd5deda4efbe2a4908290a45050565b6001600160a01b03811660009081526003602052604090205415612133576040805162461bcd60e51b815260206004820152601f60248201527f4b79633a204e45575f57414c4c45545f414c52454144595f414c4c4f54454400604482015290519081900360640190fd5b600082815260026020908152604080832080546001600160a01b0386811673ffffffffffffffffffffffffffffffffffffffff198316811790935516808552600390935281842084905580845281842086905590519192859284917fba794171cc1f167e514b91890e01766bb996084ec15792721bd5deda4efbe2a491a4505050565b3390565b6000826121c957506000612216565b828202828482816121d657fe5b04146122135760405162461bcd60e51b81526004018080602001828103825260218152602001806124656021913960400191505060405180910390fd5b90505b92915050565b600061221383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612361565b303b1590565b61226d3361229e565b565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b0381166122f9576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600081836123b05760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561135a578181015183820152602001611342565b5060008385816123bc57fe5b049594505050505056fe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544b79633a20594f55525f4944454e544954595f414c52454144595f4558495354534b79633a205350454349414c495a4154494f4e5f444f45535f4e4f545f484156455f464545496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774b79633a204944454e544954595f4e4f545f474f5645524e414e43455f434f4e54524f4c4c41424c4552656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f5354524943544b79633a20594f55525f4944454e544954595f444f45535f4e4f545f45584953544b79633a2046414954484d494e55535f5452414e534645525f49535f4641494c494e47a26469706673582212203d45bd3ee5f16b6f9b8bf6bead9b39f85d21965e8f7232c5ed674c2b2a67a0e564736f6c63430007040033';
