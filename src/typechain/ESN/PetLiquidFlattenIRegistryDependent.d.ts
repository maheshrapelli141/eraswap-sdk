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

interface PetLiquidFlattenIRegistryDependentInterface
  extends ethers.utils.Interface {
  functions: {
    "kycDapp()": FunctionFragment;
    "setKycDapp(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "kycDapp", values?: undefined): string;
  encodeFunctionData(functionFragment: "setKycDapp", values: [string]): string;

  decodeFunctionResult(functionFragment: "kycDapp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKycDapp", data: BytesLike): Result;

  events: {};
}

export class PetLiquidFlattenIRegistryDependent extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PetLiquidFlattenIRegistryDependentInterface;

  functions: {
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

    setKycDapp(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  kycDapp(overrides?: CallOverrides): Promise<string>;

  "kycDapp()"(overrides?: CallOverrides): Promise<string>;

  setKycDapp(
    _kycDapp: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setKycDapp(address)"(
    _kycDapp: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    kycDapp(overrides?: CallOverrides): Promise<string>;

    "kycDapp()"(overrides?: CallOverrides): Promise<string>;

    setKycDapp(_kycDapp: string, overrides?: CallOverrides): Promise<void>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    kycDapp(overrides?: CallOverrides): Promise<BigNumber>;

    "kycDapp()"(overrides?: CallOverrides): Promise<BigNumber>;

    setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<BigNumber>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    kycDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "kycDapp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setKycDapp(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
