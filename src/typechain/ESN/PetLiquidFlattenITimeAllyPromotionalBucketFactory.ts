/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PetLiquidFlattenITimeAllyPromotionalBucket } from "./PetLiquidFlattenITimeAllyPromotionalBucket";

export class PetLiquidFlattenITimeAllyPromotionalBucketFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PetLiquidFlattenITimeAllyPromotionalBucket {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PetLiquidFlattenITimeAllyPromotionalBucket;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "stakingContract",
        type: "address",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakingReward",
        type: "uint256",
      },
    ],
    name: "rewardToStaker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
