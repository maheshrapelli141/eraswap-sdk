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

interface EsCloudInterface extends ethers.utils.Interface {
  functions: {
    "Admin(address)": FunctionFragment;
    "Dispute(address,bytes32)": FunctionFragment;
    "approveHost(address,bytes32)": FunctionFragment;
    "clonedContracts(uint256)": FunctionFragment;
    "dayswappers()": FunctionFragment;
    "host(address)": FunctionFragment;
    "implementation()": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "isHost(address)": FunctionFragment;
    "kycDapp()": FunctionFragment;
    "newHost(address,bytes32)": FunctionFragment;
    "nrtManager()": FunctionFragment;
    "owner()": FunctionFragment;
    "payRewards(address,address,uint256,uint256)": FunctionFragment;
    "prepaidEs()": FunctionFragment;
    "randomnessManager()": FunctionFragment;
    "resolveAddress(bytes32)": FunctionFragment;
    "resolveAddressStrict(bytes32)": FunctionFragment;
    "resolveUsername(address)": FunctionFragment;
    "resolveUsernameStrict(address)": FunctionFragment;
    "setAdmin(address,bool)": FunctionFragment;
    "setKycDapp(address)": FunctionFragment;
    "storageFactory(address)": FunctionFragment;
    "timeallyClub()": FunctionFragment;
    "timeallyManager()": FunctionFragment;
    "timeallyPromotionalBucket()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validatorManager()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "Admin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "Dispute",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveHost",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "clonedContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dayswappers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "host", values: [string]): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "isHost", values: [string]): string;
  encodeFunctionData(functionFragment: "kycDapp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newHost",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nrtManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payRewards",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "prepaidEs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "randomnessManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveAddressStrict",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveUsername",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveUsernameStrict",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setKycDapp", values: [string]): string;
  encodeFunctionData(
    functionFragment: "storageFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "timeallyClub",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeallyManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeallyPromotionalBucket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "Admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Dispute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveHost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "clonedContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dayswappers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "host", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isHost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kycDapp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newHost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nrtManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prepaidEs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomnessManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveAddressStrict",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveUsername",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveUsernameStrict",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKycDapp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storageFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeallyClub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeallyManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeallyPromotionalBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorManager",
    data: BytesLike
  ): Result;

  events: {
    "ApplyHost(address,bytes32)": EventFragment;
    "NewHost(address,address,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RaisedDispute(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApplyHost"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewHost"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaisedDispute"): EventFragment;
}

export class EsCloud extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EsCloudInterface;

  functions: {
    Admin(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "Admin(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    Dispute(
      Host_address: string,
      file: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "Dispute(address,bytes32)"(
      Host_address: string,
      file: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    approveHost(
      _Host: string,
      Details: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveHost(address,bytes32)"(
      _Host: string,
      Details: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    clonedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "clonedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    dayswappers(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "dayswappers()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    host(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "host(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    implementation(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "implementation()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    isAdmin(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isHost(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isHost(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    kycDapp(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "kycDapp()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    newHost(
      _Host: string,
      _Details: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "newHost(address,bytes32)"(
      _Host: string,
      _Details: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    nrtManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "nrtManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

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

    payRewards(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "payRewards(address,address,uint256,uint256)"(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    prepaidEs(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "prepaidEs()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    randomnessManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "randomnessManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setAdmin(
      user: string,
      status: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAdmin(address,bool)"(
      user: string,
      status: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setKycDapp(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    storageFactory(
      _implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timeallyClub(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "timeallyClub()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    timeallyManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "timeallyManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    timeallyPromotionalBucket(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "timeallyPromotionalBucket()"(
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

    validatorManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "validatorManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  Admin(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "Admin(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  Dispute(
    Host_address: string,
    file: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "Dispute(address,bytes32)"(
    Host_address: string,
    file: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  approveHost(
    _Host: string,
    Details: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveHost(address,bytes32)"(
    _Host: string,
    Details: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  clonedContracts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "clonedContracts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  dayswappers(overrides?: CallOverrides): Promise<string>;

  "dayswappers()"(overrides?: CallOverrides): Promise<string>;

  host(arg0: string, overrides?: CallOverrides): Promise<string>;

  "host(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

  implementation(overrides?: CallOverrides): Promise<string>;

  "implementation()"(overrides?: CallOverrides): Promise<string>;

  isAdmin(user: string, overrides?: CallOverrides): Promise<boolean>;

  "isAdmin(address)"(user: string, overrides?: CallOverrides): Promise<boolean>;

  isHost(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isHost(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  kycDapp(overrides?: CallOverrides): Promise<string>;

  "kycDapp()"(overrides?: CallOverrides): Promise<string>;

  newHost(
    _Host: string,
    _Details: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "newHost(address,bytes32)"(
    _Host: string,
    _Details: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nrtManager(overrides?: CallOverrides): Promise<string>;

  "nrtManager()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  payRewards(
    _buyer: string,
    _seller: string,
    _value: BigNumberish,
    _distribute: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "payRewards(address,address,uint256,uint256)"(
    _buyer: string,
    _seller: string,
    _value: BigNumberish,
    _distribute: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  prepaidEs(overrides?: CallOverrides): Promise<string>;

  "prepaidEs()"(overrides?: CallOverrides): Promise<string>;

  randomnessManager(overrides?: CallOverrides): Promise<string>;

  "randomnessManager()"(overrides?: CallOverrides): Promise<string>;

  resolveAddress(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "resolveAddress(bytes32)"(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveAddressStrict(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "resolveAddressStrict(bytes32)"(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveUsername(_wallet: string, overrides?: CallOverrides): Promise<string>;

  "resolveUsername(address)"(
    _wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveUsernameStrict(
    _wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "resolveUsernameStrict(address)"(
    _wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setAdmin(
    user: string,
    status: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAdmin(address,bool)"(
    user: string,
    status: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setKycDapp(
    _kycDapp: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setKycDapp(address)"(
    _kycDapp: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  storageFactory(
    _implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "storageFactory(address)"(
    _implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timeallyClub(overrides?: CallOverrides): Promise<string>;

  "timeallyClub()"(overrides?: CallOverrides): Promise<string>;

  timeallyManager(overrides?: CallOverrides): Promise<string>;

  "timeallyManager()"(overrides?: CallOverrides): Promise<string>;

  timeallyPromotionalBucket(overrides?: CallOverrides): Promise<string>;

  "timeallyPromotionalBucket()"(overrides?: CallOverrides): Promise<string>;

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

  validatorManager(overrides?: CallOverrides): Promise<string>;

  "validatorManager()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    Admin(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "Admin(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    Dispute(
      Host_address: string,
      file: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "Dispute(address,bytes32)"(
      Host_address: string,
      file: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    approveHost(
      _Host: string,
      Details: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveHost(address,bytes32)"(
      _Host: string,
      Details: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    clonedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "clonedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    dayswappers(overrides?: CallOverrides): Promise<string>;

    "dayswappers()"(overrides?: CallOverrides): Promise<string>;

    host(arg0: string, overrides?: CallOverrides): Promise<string>;

    "host(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    "implementation()"(overrides?: CallOverrides): Promise<string>;

    isAdmin(user: string, overrides?: CallOverrides): Promise<boolean>;

    "isAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isHost(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isHost(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kycDapp(overrides?: CallOverrides): Promise<string>;

    "kycDapp()"(overrides?: CallOverrides): Promise<string>;

    newHost(
      _Host: string,
      _Details: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "newHost(address,bytes32)"(
      _Host: string,
      _Details: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nrtManager(overrides?: CallOverrides): Promise<string>;

    "nrtManager()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    payRewards(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "payRewards(address,address,uint256,uint256)"(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    prepaidEs(overrides?: CallOverrides): Promise<string>;

    "prepaidEs()"(overrides?: CallOverrides): Promise<string>;

    randomnessManager(overrides?: CallOverrides): Promise<string>;

    "randomnessManager()"(overrides?: CallOverrides): Promise<string>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setAdmin(
      user: string,
      status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAdmin(address,bool)"(
      user: string,
      status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setKycDapp(_kycDapp: string, overrides?: CallOverrides): Promise<void>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: CallOverrides
    ): Promise<void>;

    storageFactory(
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    timeallyClub(overrides?: CallOverrides): Promise<string>;

    "timeallyClub()"(overrides?: CallOverrides): Promise<string>;

    timeallyManager(overrides?: CallOverrides): Promise<string>;

    "timeallyManager()"(overrides?: CallOverrides): Promise<string>;

    timeallyPromotionalBucket(overrides?: CallOverrides): Promise<string>;

    "timeallyPromotionalBucket()"(overrides?: CallOverrides): Promise<string>;

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

    validatorManager(overrides?: CallOverrides): Promise<string>;

    "validatorManager()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ApplyHost(Host: string | null, Details: null): EventFilter;

    NewHost(Clone: string | null, Host: null, _details: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RaisedDispute(Host: string | null, file: BytesLike | null): EventFilter;
  };

  estimateGas: {
    Admin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "Admin(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Dispute(
      Host_address: string,
      file: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "Dispute(address,bytes32)"(
      Host_address: string,
      file: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    approveHost(
      _Host: string,
      Details: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveHost(address,bytes32)"(
      _Host: string,
      Details: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    clonedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "clonedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dayswappers(overrides?: CallOverrides): Promise<BigNumber>;

    "dayswappers()"(overrides?: CallOverrides): Promise<BigNumber>;

    host(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "host(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    "implementation()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAdmin(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isHost(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isHost(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kycDapp(overrides?: CallOverrides): Promise<BigNumber>;

    "kycDapp()"(overrides?: CallOverrides): Promise<BigNumber>;

    newHost(
      _Host: string,
      _Details: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "newHost(address,bytes32)"(
      _Host: string,
      _Details: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nrtManager(overrides?: CallOverrides): Promise<BigNumber>;

    "nrtManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    payRewards(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "payRewards(address,address,uint256,uint256)"(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    prepaidEs(overrides?: CallOverrides): Promise<BigNumber>;

    "prepaidEs()"(overrides?: CallOverrides): Promise<BigNumber>;

    randomnessManager(overrides?: CallOverrides): Promise<BigNumber>;

    "randomnessManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAdmin(
      user: string,
      status: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAdmin(address,bool)"(
      user: string,
      status: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<BigNumber>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    storageFactory(
      _implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    timeallyClub(overrides?: CallOverrides): Promise<BigNumber>;

    "timeallyClub()"(overrides?: CallOverrides): Promise<BigNumber>;

    timeallyManager(overrides?: CallOverrides): Promise<BigNumber>;

    "timeallyManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    timeallyPromotionalBucket(overrides?: CallOverrides): Promise<BigNumber>;

    "timeallyPromotionalBucket()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    validatorManager(overrides?: CallOverrides): Promise<BigNumber>;

    "validatorManager()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    Admin(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "Admin(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Dispute(
      Host_address: string,
      file: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "Dispute(address,bytes32)"(
      Host_address: string,
      file: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    approveHost(
      _Host: string,
      Details: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveHost(address,bytes32)"(
      _Host: string,
      Details: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    clonedContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "clonedContracts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dayswappers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dayswappers()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    host(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "host(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "implementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAdmin(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAdmin(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isHost(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isHost(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kycDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "kycDapp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newHost(
      _Host: string,
      _Details: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "newHost(address,bytes32)"(
      _Host: string,
      _Details: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    nrtManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nrtManager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payRewards(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "payRewards(address,address,uint256,uint256)"(
      _buyer: string,
      _seller: string,
      _value: BigNumberish,
      _distribute: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    prepaidEs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "prepaidEs()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomnessManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "randomnessManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAdmin(
      user: string,
      status: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAdmin(address,bool)"(
      user: string,
      status: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setKycDapp(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    storageFactory(
      _implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    timeallyClub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timeallyClub()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeallyManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timeallyManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timeallyPromotionalBucket(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "timeallyPromotionalBucket()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    validatorManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "validatorManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
