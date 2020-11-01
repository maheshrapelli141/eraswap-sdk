/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { Erc1155Holder } from './Erc1155Holder';

export class Erc1155HolderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc1155Holder> {
    return super.deploy(overrides || {}) as Promise<Erc1155Holder>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc1155Holder {
    return super.attach(address) as Erc1155Holder;
  }
  connect(signer: Signer): Erc1155HolderFactory {
    return super.connect(signer) as Erc1155HolderFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Erc1155Holder {
    return new Contract(address, _abi, signerOrProvider) as Erc1155Holder;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
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
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506100216301ffc9a760e01b610036565b610031630271189760e51b610036565b6100ba565b6001600160e01b03198082161415610095576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b61043b806100c96000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c8114610099578063f23a6e61146102a2575b600080fd5b6100856004803603602081101561005c57600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661037a565b604080519115158252519081900360200190f35b61026d600480360360a08110156100af57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116918101906060810160408201356401000000008111156100f057600080fd5b82018360208201111561010257600080fd5b8035906020019184602083028401116401000000008311171561012457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561017457600080fd5b82018360208201111561018657600080fd5b803590602001918460208302840111640100000000831117156101a857600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156101f857600080fd5b82018360208201111561020a57600080fd5b8035906020019184600183028401116401000000008311171561022c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103b1945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b61026d600480360360a08110156102b857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561030557600080fd5b82018360208201111561031757600080fd5b8035906020019184600183028401116401000000008311171561033957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103db945050505050565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526020819052604090205460ff1690565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b7ff23a6e61000000000000000000000000000000000000000000000000000000009594505050505056fea2646970667358221220a35064374edc392e2cf2a2e3d85f052b4bc58467d207447bc4611e1bddd1310164736f6c63430007040033';
