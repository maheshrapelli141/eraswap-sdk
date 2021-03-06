/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { InrtReceiver } from "./InrtReceiver";

export class InrtReceiverFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InrtReceiver {
    return new Contract(address, _abi, signerOrProvider) as InrtReceiver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "getMonthlyNRT",
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
        name: "_currentNrtMonth",
        type: "uint32",
      },
    ],
    name: "receiveNrt",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
