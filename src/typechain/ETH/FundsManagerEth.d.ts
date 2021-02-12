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

interface FundsManagerEthInterface extends ethers.utils.Interface {
  functions: {
    "claimWithdrawal(bytes)": FunctionFragment;
    "fundsManagerESN()": FunctionFragment;
    "isTransactionClaimed(bytes32)": FunctionFragment;
    "migrateToNewFundsManager(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "plasmaManager()": FunctionFragment;
    "setFundsManagerESNAddress(address)": FunctionFragment;
    "setPlasmaManagerAddress(address)": FunctionFragment;
    "setToken(address)": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimWithdrawal",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fundsManagerESN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTransactionClaimed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateToNewFundsManager",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "plasmaManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFundsManagerESNAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlasmaManagerAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setToken", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundsManagerESN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTransactionClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateToNewFundsManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "plasmaManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFundsManagerESNAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlasmaManagerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class FundsManagerEth extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FundsManagerEthInterface;

  functions: {
    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    claimWithdrawal(
      _rawTransactionProof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    "claimWithdrawal(bytes)"(
      _rawTransactionProof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * FundsManager contract reference.
     */
    fundsManagerESN(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * FundsManager contract reference.
     */
    "fundsManagerESN()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    "isTransactionClaimed(bytes32)"(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    migrateToNewFundsManager(
      _newContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "migrateToNewFundsManager(address)"(
      _newContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Plasma Manager contract reference.
     */
    plasmaManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Plasma Manager contract reference.
     */
    "plasmaManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setFundsManagerESNAddress(
      _fundsManagerESN: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFundsManagerESNAddress(address)"(
      _fundsManagerESN: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPlasmaManagerAddress(
      _plasmaManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPlasmaManagerAddress(address)"(
      _plasmaManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setToken(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Era Swap Token contract reference.
     */
    token(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Era Swap Token contract reference.
     */
    "token()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Allows to submit a proof for a transaction done on ESN.
   * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
   */
  claimWithdrawal(
    _rawTransactionProof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Allows to submit a proof for a transaction done on ESN.
   * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
   */
  "claimWithdrawal(bytes)"(
    _rawTransactionProof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * FundsManager contract reference.
   */
  fundsManagerESN(overrides?: CallOverrides): Promise<string>;

  /**
   * FundsManager contract reference.
   */
  "fundsManagerESN()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
   * @param _transactionHash : Hash of the transaction.
   */
  isTransactionClaimed(
    _transactionHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
   * @param _transactionHash : Hash of the transaction.
   */
  "isTransactionClaimed(bytes32)"(
    _transactionHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  migrateToNewFundsManager(
    _newContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "migrateToNewFundsManager(address)"(
    _newContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Plasma Manager contract reference.
   */
  plasmaManager(overrides?: CallOverrides): Promise<string>;

  /**
   * Plasma Manager contract reference.
   */
  "plasmaManager()"(overrides?: CallOverrides): Promise<string>;

  setFundsManagerESNAddress(
    _fundsManagerESN: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFundsManagerESNAddress(address)"(
    _fundsManagerESN: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPlasmaManagerAddress(
    _plasmaManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPlasmaManagerAddress(address)"(
    _plasmaManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setToken(_token: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setToken(address)"(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Era Swap Token contract reference.
   */
  token(overrides?: CallOverrides): Promise<string>;

  /**
   * Era Swap Token contract reference.
   */
  "token()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    claimWithdrawal(
      _rawTransactionProof: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    "claimWithdrawal(bytes)"(
      _rawTransactionProof: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * FundsManager contract reference.
     */
    fundsManagerESN(overrides?: CallOverrides): Promise<string>;

    /**
     * FundsManager contract reference.
     */
    "fundsManagerESN()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    "isTransactionClaimed(bytes32)"(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    migrateToNewFundsManager(
      _newContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "migrateToNewFundsManager(address)"(
      _newContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Plasma Manager contract reference.
     */
    plasmaManager(overrides?: CallOverrides): Promise<string>;

    /**
     * Plasma Manager contract reference.
     */
    "plasmaManager()"(overrides?: CallOverrides): Promise<string>;

    setFundsManagerESNAddress(
      _fundsManagerESN: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFundsManagerESNAddress(address)"(
      _fundsManagerESN: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlasmaManagerAddress(
      _plasmaManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPlasmaManagerAddress(address)"(
      _plasmaManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "setToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Era Swap Token contract reference.
     */
    token(overrides?: CallOverrides): Promise<string>;

    /**
     * Era Swap Token contract reference.
     */
    "token()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    claimWithdrawal(
      _rawTransactionProof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    "claimWithdrawal(bytes)"(
      _rawTransactionProof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * FundsManager contract reference.
     */
    fundsManagerESN(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * FundsManager contract reference.
     */
    "fundsManagerESN()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    "isTransactionClaimed(bytes32)"(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    migrateToNewFundsManager(
      _newContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "migrateToNewFundsManager(address)"(
      _newContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Plasma Manager contract reference.
     */
    plasmaManager(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Plasma Manager contract reference.
     */
    "plasmaManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFundsManagerESNAddress(
      _fundsManagerESN: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFundsManagerESNAddress(address)"(
      _fundsManagerESN: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPlasmaManagerAddress(
      _plasmaManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPlasmaManagerAddress(address)"(
      _plasmaManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setToken(_token: string, overrides?: Overrides): Promise<BigNumber>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Era Swap Token contract reference.
     */
    token(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Era Swap Token contract reference.
     */
    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    claimWithdrawal(
      _rawTransactionProof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to submit a proof for a transaction done on ESN.
     * @param _rawTransactionProof : RLP(bunchIndex, blockNumber, block MP, txRoot, rawTx, txIndex, tx MPP)
     */
    "claimWithdrawal(bytes)"(
      _rawTransactionProof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * FundsManager contract reference.
     */
    fundsManagerESN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * FundsManager contract reference.
     */
    "fundsManagerESN()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets whether a withdrawal transaction hash (on ESN) is already claimed for getting ERC20 tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    "isTransactionClaimed(bytes32)"(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrateToNewFundsManager(
      _newContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "migrateToNewFundsManager(address)"(
      _newContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Plasma Manager contract reference.
     */
    plasmaManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Plasma Manager contract reference.
     */
    "plasmaManager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFundsManagerESNAddress(
      _fundsManagerESN: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFundsManagerESNAddress(address)"(
      _fundsManagerESN: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPlasmaManagerAddress(
      _plasmaManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPlasmaManagerAddress(address)"(
      _plasmaManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setToken(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Era Swap Token contract reference.
     */
    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Era Swap Token contract reference.
     */
    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
