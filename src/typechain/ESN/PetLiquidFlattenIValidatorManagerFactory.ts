/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PetLiquidFlattenIValidatorManager } from "./PetLiquidFlattenIValidatorManager";

export class PetLiquidFlattenIValidatorManagerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PetLiquidFlattenIValidatorManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PetLiquidFlattenIValidatorManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_base",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_premiumFactor",
        type: "uint256",
      },
    ],
    name: "getAdjustedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingContract",
        type: "address",
      },
    ],
    name: "getDelegatorByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakingContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
        ],
        internalType: "struct IValidatorManager.Delegator",
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
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_delegatorIndex",
        type: "uint256",
      },
    ],
    name: "getDelegatorByIndex",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakingContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
        ],
        internalType: "struct IValidatorManager.Delegator",
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
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_stakingContract",
        type: "address",
      },
    ],
    name: "getDelegatorIndex",
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
    name: "getLuckyValidatorAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "getTotalAdjustedStakings",
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
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "getTotalBlocksSealed",
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
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    name: "getValidatorByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "adjustedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "perThousandCommission",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blocksSealed",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "address",
                name: "stakingContract",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "withdrawn",
                type: "bool",
              },
            ],
            internalType: "struct IValidatorManager.Delegator[]",
            name: "delegators",
            type: "tuple[]",
          },
        ],
        internalType: "struct IValidatorManager.Validator",
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
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
    ],
    name: "getValidatorByIndex",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "adjustedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "perThousandCommission",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blocksSealed",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "address",
                name: "stakingContract",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "withdrawn",
                type: "bool",
              },
            ],
            internalType: "struct IValidatorManager.Delegator[]",
            name: "delegators",
            type: "tuple[]",
          },
        ],
        internalType: "struct IValidatorManager.Validator",
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
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    name: "getValidatorEarning",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    name: "getValidatorIndex",
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
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "getValidators",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "adjustedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "perThousandCommission",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blocksSealed",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "address",
                name: "stakingContract",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "withdrawn",
                type: "bool",
              },
            ],
            internalType: "struct IValidatorManager.Delegator[]",
            name: "delegators",
            type: "tuple[]",
          },
        ],
        internalType: "struct IValidatorManager.Validator[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
    ],
    name: "pickValidator",
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
        name: "_sealer",
        type: "address",
      },
    ],
    name: "registerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "registerDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_perThousandCommission",
        type: "uint256",
      },
    ],
    name: "setCommission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "withdrawCommission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingContract",
        type: "address",
      },
    ],
    name: "withdrawDelegationShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
