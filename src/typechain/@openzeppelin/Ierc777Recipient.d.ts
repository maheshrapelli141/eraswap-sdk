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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Ierc777RecipientInterface extends ethers.utils.Interface {
  functions: {
    "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tokensReceived",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "tokensReceived",
    data: BytesLike
  ): Result;

  events: {};
}

export class Ierc777Recipient extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Ierc777RecipientInterface;

  functions: {
    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
   */
  tokensReceived(
    operator: string,
    from: string,
    to: string,
    amount: BigNumberish,
    userData: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
   */
  "tokensReceived(address,address,address,uint256,bytes,bytes)"(
    operator: string,
    from: string,
    to: string,
    amount: BigNumberish,
    userData: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Called by an {IERC777} token contract whenever tokens are being moved or created into a registered account (`to`). The type of operation is conveyed by `from` being the zero address or not. This call occurs _after_ the token contract's state is updated, so {IERC777-balanceOf}, etc., can be used to query the post-operation state. This function may revert to prevent the operation from being executed.
     */
    "tokensReceived(address,address,address,uint256,bytes,bytes)"(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
