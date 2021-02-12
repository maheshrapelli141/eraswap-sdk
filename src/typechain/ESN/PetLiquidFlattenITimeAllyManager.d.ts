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

interface PetLiquidFlattenITimeAllyManagerInterface
  extends ethers.utils.Interface {
  functions: {
    "decreaseActiveStaking(uint256,uint32,uint32)": FunctionFragment;
    "emitStakingMerge(address)": FunctionFragment;
    "emitStakingTransfer(address,address)": FunctionFragment;
    "getMonthlyNRT(uint32)": FunctionFragment;
    "getTotalActiveStaking(uint32)": FunctionFragment;
    "increaseActiveStaking(uint256,uint32,uint32)": FunctionFragment;
    "isStakingContractValid(address)": FunctionFragment;
    "kycDapp()": FunctionFragment;
    "processNrtReward(uint256,uint8)": FunctionFragment;
    "receiveNrt(uint32)": FunctionFragment;
    "removeStaking(address)": FunctionFragment;
    "setKycDapp(address)": FunctionFragment;
    "splitStaking(address,uint256,uint32)": FunctionFragment;
    "stake()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "decreaseActiveStaking",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitStakingMerge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "emitStakingTransfer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMonthlyNRT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalActiveStaking",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseActiveStaking",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isStakingContractValid",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "kycDapp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processNrtReward",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveNrt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeStaking",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKycDapp", values: [string]): string;
  encodeFunctionData(
    functionFragment: "splitStaking",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stake", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "decreaseActiveStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitStakingMerge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitStakingTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMonthlyNRT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalActiveStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseActiveStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStakingContractValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kycDapp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processNrtReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiveNrt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKycDapp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "splitStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;

  events: {};
}

export class PetLiquidFlattenITimeAllyManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PetLiquidFlattenITimeAllyManagerInterface;

  functions: {
    decreaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emitStakingMerge(
      _childStaking: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emitStakingMerge(address)"(
      _childStaking: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emitStakingTransfer(
      _oldOwner: string,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emitStakingTransfer(address,address)"(
      _oldOwner: string,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getMonthlyNRT(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getTotalActiveStaking(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getTotalActiveStaking(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    increaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isStakingContractValid(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isStakingContractValid(address)"(
      _stakingContract: string,
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

    processNrtReward(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "processNrtReward(uint256,uint8)"(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "receiveNrt(uint32)"(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    removeStaking(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeStaking(address)"(
      _owner: string,
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

    splitStaking(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "splitStaking(address,uint256,uint32)"(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    stake(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "stake()"(overrides?: PayableOverrides): Promise<ContractTransaction>;
  };

  decreaseActiveStaking(
    _amount: BigNumberish,
    _startMonth: BigNumberish,
    _endMonth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseActiveStaking(uint256,uint32,uint32)"(
    _amount: BigNumberish,
    _startMonth: BigNumberish,
    _endMonth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emitStakingMerge(
    _childStaking: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emitStakingMerge(address)"(
    _childStaking: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emitStakingTransfer(
    _oldOwner: string,
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emitStakingTransfer(address,address)"(
    _oldOwner: string,
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getMonthlyNRT(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMonthlyNRT(uint32)"(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalActiveStaking(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTotalActiveStaking(uint32)"(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseActiveStaking(
    _amount: BigNumberish,
    _startMonth: BigNumberish,
    _endMonth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseActiveStaking(uint256,uint32,uint32)"(
    _amount: BigNumberish,
    _startMonth: BigNumberish,
    _endMonth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isStakingContractValid(
    _stakingContract: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isStakingContractValid(address)"(
    _stakingContract: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kycDapp(overrides?: CallOverrides): Promise<string>;

  "kycDapp()"(overrides?: CallOverrides): Promise<string>;

  processNrtReward(
    _reward: BigNumberish,
    _rewardType: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "processNrtReward(uint256,uint8)"(
    _reward: BigNumberish,
    _rewardType: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  receiveNrt(
    _currentNrtMonth: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "receiveNrt(uint32)"(
    _currentNrtMonth: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  removeStaking(
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeStaking(address)"(
    _owner: string,
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

  splitStaking(
    _owner: string,
    _initialIssTime: BigNumberish,
    _masterEndMonth: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "splitStaking(address,uint256,uint32)"(
    _owner: string,
    _initialIssTime: BigNumberish,
    _masterEndMonth: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  stake(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "stake()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  callStatic: {
    decreaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "decreaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emitStakingMerge(
      _childStaking: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "emitStakingMerge(address)"(
      _childStaking: string,
      overrides?: CallOverrides
    ): Promise<void>;

    emitStakingTransfer(
      _oldOwner: string,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "emitStakingTransfer(address,address)"(
      _oldOwner: string,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMonthlyNRT(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalActiveStaking(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalActiveStaking(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "increaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isStakingContractValid(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isStakingContractValid(address)"(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kycDapp(overrides?: CallOverrides): Promise<string>;

    "kycDapp()"(overrides?: CallOverrides): Promise<string>;

    processNrtReward(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "processNrtReward(uint256,uint8)"(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveNrt(uint32)"(
      _currentNrtMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeStaking(_owner: string, overrides?: CallOverrides): Promise<void>;

    "removeStaking(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKycDapp(_kycDapp: string, overrides?: CallOverrides): Promise<void>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: CallOverrides
    ): Promise<void>;

    splitStaking(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "splitStaking(address,uint256,uint32)"(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(overrides?: CallOverrides): Promise<void>;

    "stake()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    decreaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    emitStakingMerge(
      _childStaking: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emitStakingMerge(address)"(
      _childStaking: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    emitStakingTransfer(
      _oldOwner: string,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emitStakingTransfer(address,address)"(
      _oldOwner: string,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMonthlyNRT(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalActiveStaking(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalActiveStaking(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isStakingContractValid(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isStakingContractValid(address)"(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kycDapp(overrides?: CallOverrides): Promise<BigNumber>;

    "kycDapp()"(overrides?: CallOverrides): Promise<BigNumber>;

    processNrtReward(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "processNrtReward(uint256,uint8)"(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "receiveNrt(uint32)"(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    removeStaking(_owner: string, overrides?: Overrides): Promise<BigNumber>;

    "removeStaking(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<BigNumber>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    splitStaking(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "splitStaking(address,uint256,uint32)"(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    stake(overrides?: PayableOverrides): Promise<BigNumber>;

    "stake()"(overrides?: PayableOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    decreaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    emitStakingMerge(
      _childStaking: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emitStakingMerge(address)"(
      _childStaking: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    emitStakingTransfer(
      _oldOwner: string,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emitStakingTransfer(address,address)"(
      _oldOwner: string,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMonthlyNRT(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalActiveStaking(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalActiveStaking(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseActiveStaking(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseActiveStaking(uint256,uint32,uint32)"(
      _amount: BigNumberish,
      _startMonth: BigNumberish,
      _endMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isStakingContractValid(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isStakingContractValid(address)"(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kycDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "kycDapp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processNrtReward(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "processNrtReward(uint256,uint8)"(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "receiveNrt(uint32)"(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    removeStaking(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeStaking(address)"(
      _owner: string,
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

    splitStaking(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "splitStaking(address,uint256,uint32)"(
      _owner: string,
      _initialIssTime: BigNumberish,
      _masterEndMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    stake(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "stake()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;
  };
}
