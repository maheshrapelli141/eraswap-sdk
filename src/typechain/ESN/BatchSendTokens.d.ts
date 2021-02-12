/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BatchSendTokensInterface extends ethers.utils.Interface {
  functions: {
    "sendErc20ByDifferentAmount(address,address[],uint256[],uint256)": FunctionFragment;
    "sendErc20BySameAmount(address,address[],uint256,uint256)": FunctionFragment;
    "sendNativeByDifferentAmount(address[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "sendErc20ByDifferentAmount",
    values: [string, string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendErc20BySameAmount",
    values: [string, string[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendNativeByDifferentAmount",
    values: [string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "sendErc20ByDifferentAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendErc20BySameAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendNativeByDifferentAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export class BatchSendTokens extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BatchSendTokensInterface;

  functions: {
    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20ByDifferentAmount(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20ByDifferentAmount(address,address[],uint256[],uint256)"(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20BySameAmount(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20BySameAmount(address,address[],uint256,uint256)"(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendNativeByDifferentAmount(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sendNativeByDifferentAmount(address[],uint256[])"(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Please note that you have to approve this contract as spender for the totalAmount tokens
   * This function is more suitable when you have different amounts to send to multiple addresses
   * @param addressArray - address to whom tokens will be sent
   * @param amountArray - amount that will be sent to addressArray in order
   * @param token - address of ERC20 token contract on which transfer transactions need to be sent
   * @param totalAmount - amount of total tokens in one batch
   */
  sendErc20ByDifferentAmount(
    token: string,
    addressArray: string[],
    amountArray: BigNumberish[],
    totalAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Please note that you have to approve this contract as spender for the totalAmount tokens
   * This function is more suitable when you have different amounts to send to multiple addresses
   * @param addressArray - address to whom tokens will be sent
   * @param amountArray - amount that will be sent to addressArray in order
   * @param token - address of ERC20 token contract on which transfer transactions need to be sent
   * @param totalAmount - amount of total tokens in one batch
   */
  "sendErc20ByDifferentAmount(address,address[],uint256[],uint256)"(
    token: string,
    addressArray: string[],
    amountArray: BigNumberish[],
    totalAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Please note that you have to approve this contract as spender for the totalAmount tokens
   * This function is more suitable when you have same amount to send to multiple addresses
   * @param addressArray - address to whom tokens will be sent
   * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
   * @param token - address of ERC20 token contract on which transfer transactions need to be sent
   * @param totalAmount - amount of total tokens in one batch
   */
  sendErc20BySameAmount(
    token: string,
    addressArray: string[],
    amountToEachAddress: BigNumberish,
    totalAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Please note that you have to approve this contract as spender for the totalAmount tokens
   * This function is more suitable when you have same amount to send to multiple addresses
   * @param addressArray - address to whom tokens will be sent
   * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
   * @param token - address of ERC20 token contract on which transfer transactions need to be sent
   * @param totalAmount - amount of total tokens in one batch
   */
  "sendErc20BySameAmount(address,address[],uint256,uint256)"(
    token: string,
    addressArray: string[],
    amountToEachAddress: BigNumberish,
    totalAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendNativeByDifferentAmount(
    addressArray: string[],
    amountArray: BigNumberish[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sendNativeByDifferentAmount(address[],uint256[])"(
    addressArray: string[],
    amountArray: BigNumberish[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20ByDifferentAmount(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20ByDifferentAmount(address,address[],uint256[],uint256)"(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20BySameAmount(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20BySameAmount(address,address[],uint256,uint256)"(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sendNativeByDifferentAmount(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "sendNativeByDifferentAmount(address[],uint256[])"(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20ByDifferentAmount(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20ByDifferentAmount(address,address[],uint256[],uint256)"(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20BySameAmount(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20BySameAmount(address,address[],uint256,uint256)"(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendNativeByDifferentAmount(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sendNativeByDifferentAmount(address[],uint256[])"(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20ByDifferentAmount(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have different amounts to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountArray - amount that will be sent to addressArray in order
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20ByDifferentAmount(address,address[],uint256[],uint256)"(
      token: string,
      addressArray: string[],
      amountArray: BigNumberish[],
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    sendErc20BySameAmount(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Please note that you have to approve this contract as spender for the totalAmount tokens
     * This function is more suitable when you have same amount to send to multiple addresses
     * @param addressArray - address to whom tokens will be sent
     * @param amountToEachAddress - amount of tokens which will be sent to all addresses in addressArray
     * @param token - address of ERC20 token contract on which transfer transactions need to be sent
     * @param totalAmount - amount of total tokens in one batch
     */
    "sendErc20BySameAmount(address,address[],uint256,uint256)"(
      token: string,
      addressArray: string[],
      amountToEachAddress: BigNumberish,
      totalAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendNativeByDifferentAmount(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sendNativeByDifferentAmount(address[],uint256[])"(
      addressArray: string[],
      amountArray: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
