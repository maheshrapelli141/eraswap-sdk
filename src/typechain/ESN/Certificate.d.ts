/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface CertificateInterface extends ethers.utils.Interface {
  functions: {
    'addAuthority(string,string,string)': FunctionFragment;
    'authorities(address)': FunctionFragment;
    'certificates(bytes32)': FunctionFragment;
    'collect(bytes32)': FunctionFragment;
    'donate(bytes32)': FunctionFragment;
    'getBalance(bytes32)': FunctionFragment;
    'registerCertificates(string,bytes,address)': FunctionFragment;
    'splitSignature(bytes)': FunctionFragment;
    'verifyString(string,bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'addAuthority', values: [string, string, string]): string;
  encodeFunctionData(functionFragment: 'authorities', values: [string]): string;
  encodeFunctionData(functionFragment: 'certificates', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'collect', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'donate', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'getBalance', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'registerCertificates',
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: 'splitSignature', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'verifyString', values: [string, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'addAuthority', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'authorities', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'certificates', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collect', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'donate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerCertificates', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'splitSignature', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'verifyString', data: BytesLike): Result;

  events: {
    'Authorities(address)': EventFragment;
    'Donate(bytes32,address)': EventFragment;
    'RegisterCertificates(bytes32,address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Authorities'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Donate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RegisterCertificates'): EventFragment;
}

export class Certificate extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CertificateInterface;

  functions: {
    addAuthority(
      _name: string,
      _website: string,
      _image: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    'addAuthority(string,string,string)'(
      _name: string,
      _website: string,
      _image: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    authorities(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      name: string;
      website: string;
      image: string;
      status: number;
      0: string;
      1: string;
      2: string;
      3: number;
    }>;

    'authorities(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      name: string;
      website: string;
      image: string;
      status: number;
      0: string;
      1: string;
      2: string;
      3: number;
    }>;

    certificates(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      hash: string;
      Signer: string;
      Verifier: string;
      Balance: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
    }>;

    'certificates(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      hash: string;
      Signer: string;
      Verifier: string;
      Balance: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
    }>;

    collect(input: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

    'collect(bytes32)'(input: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

    donate(input: BytesLike, overrides?: PayableOverrides): Promise<ContractTransaction>;

    'donate(bytes32)'(input: BytesLike, overrides?: PayableOverrides): Promise<ContractTransaction>;

    getBalance(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getBalance(bytes32)'(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    registerCertificates(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'registerCertificates(string,bytes,address)'(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: string;
      2: string;
    }>;

    'splitSignature(bytes)'(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: string;
      2: string;
    }>;

    verifyString(
      message: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      signer: string;
      0: string;
    }>;

    'verifyString(string,bytes)'(
      message: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      signer: string;
      0: string;
    }>;
  };

  addAuthority(
    _name: string,
    _website: string,
    _image: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  'addAuthority(string,string,string)'(
    _name: string,
    _website: string,
    _image: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  authorities(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    name: string;
    website: string;
    image: string;
    status: number;
    0: string;
    1: string;
    2: string;
    3: number;
  }>;

  'authorities(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    name: string;
    website: string;
    image: string;
    status: number;
    0: string;
    1: string;
    2: string;
    3: number;
  }>;

  certificates(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    hash: string;
    Signer: string;
    Verifier: string;
    Balance: BigNumber;
    0: string;
    1: string;
    2: string;
    3: BigNumber;
  }>;

  'certificates(bytes32)'(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    hash: string;
    Signer: string;
    Verifier: string;
    Balance: BigNumber;
    0: string;
    1: string;
    2: string;
    3: BigNumber;
  }>;

  collect(input: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  'collect(bytes32)'(input: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  donate(input: BytesLike, overrides?: PayableOverrides): Promise<ContractTransaction>;

  'donate(bytes32)'(input: BytesLike, overrides?: PayableOverrides): Promise<ContractTransaction>;

  getBalance(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  'getBalance(bytes32)'(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  registerCertificates(
    _hash: string,
    _signature: BytesLike,
    _Signer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'registerCertificates(string,bytes,address)'(
    _hash: string,
    _signature: BytesLike,
    _Signer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  splitSignature(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    0: number;
    1: string;
    2: string;
  }>;

  'splitSignature(bytes)'(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    0: number;
    1: string;
    2: string;
  }>;

  verifyString(message: string, signature: BytesLike, overrides?: CallOverrides): Promise<string>;

  'verifyString(string,bytes)'(
    message: string,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addAuthority(
      _name: string,
      _website: string,
      _image: string,
      overrides?: CallOverrides
    ): Promise<void>;

    'addAuthority(string,string,string)'(
      _name: string,
      _website: string,
      _image: string,
      overrides?: CallOverrides
    ): Promise<void>;

    authorities(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      name: string;
      website: string;
      image: string;
      status: number;
      0: string;
      1: string;
      2: string;
      3: number;
    }>;

    'authorities(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      name: string;
      website: string;
      image: string;
      status: number;
      0: string;
      1: string;
      2: string;
      3: number;
    }>;

    certificates(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      hash: string;
      Signer: string;
      Verifier: string;
      Balance: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
    }>;

    'certificates(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      hash: string;
      Signer: string;
      Verifier: string;
      Balance: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
    }>;

    collect(input: BytesLike, overrides?: CallOverrides): Promise<void>;

    'collect(bytes32)'(input: BytesLike, overrides?: CallOverrides): Promise<void>;

    donate(input: BytesLike, overrides?: CallOverrides): Promise<void>;

    'donate(bytes32)'(input: BytesLike, overrides?: CallOverrides): Promise<void>;

    getBalance(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'getBalance(bytes32)'(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    registerCertificates(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: CallOverrides
    ): Promise<string>;

    'registerCertificates(string,bytes,address)'(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: CallOverrides
    ): Promise<string>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: string;
      2: string;
    }>;

    'splitSignature(bytes)'(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: string;
      2: string;
    }>;

    verifyString(message: string, signature: BytesLike, overrides?: CallOverrides): Promise<string>;

    'verifyString(string,bytes)'(
      message: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    Authorities(_auth: null): EventFilter;

    Donate(hashedinput: null, doner: null): EventFilter;

    RegisterCertificates(hashedinput: null, _signer: null, _verifier: null): EventFilter;
  };

  estimateGas: {
    addAuthority(
      _name: string,
      _website: string,
      _image: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    'addAuthority(string,string,string)'(
      _name: string,
      _website: string,
      _image: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    authorities(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'authorities(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    certificates(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'certificates(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    collect(input: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    'collect(bytes32)'(input: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    donate(input: BytesLike, overrides?: PayableOverrides): Promise<BigNumber>;

    'donate(bytes32)'(input: BytesLike, overrides?: PayableOverrides): Promise<BigNumber>;

    getBalance(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'getBalance(bytes32)'(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    registerCertificates(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'registerCertificates(string,bytes,address)'(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    splitSignature(sig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'splitSignature(bytes)'(sig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    verifyString(
      message: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'verifyString(string,bytes)'(
      message: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAuthority(
      _name: string,
      _website: string,
      _image: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    'addAuthority(string,string,string)'(
      _name: string,
      _website: string,
      _image: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    authorities(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'authorities(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    certificates(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'certificates(bytes32)'(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collect(input: BytesLike, overrides?: Overrides): Promise<PopulatedTransaction>;

    'collect(bytes32)'(input: BytesLike, overrides?: Overrides): Promise<PopulatedTransaction>;

    donate(input: BytesLike, overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    'donate(bytes32)'(
      input: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getBalance(input: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getBalance(bytes32)'(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerCertificates(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'registerCertificates(string,bytes,address)'(
      _hash: string,
      _signature: BytesLike,
      _Signer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    splitSignature(sig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'splitSignature(bytes)'(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyString(
      message: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'verifyString(string,bytes)'(
      message: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
