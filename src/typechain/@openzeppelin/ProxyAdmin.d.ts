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

interface ProxyAdminInterface extends ethers.utils.Interface {
  functions: {
    'changeProxyAdmin(address,address)': FunctionFragment;
    'getProxyAdmin(address)': FunctionFragment;
    'getProxyImplementation(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'upgrade(address,address)': FunctionFragment;
    'upgradeAndCall(address,address,bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'changeProxyAdmin', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getProxyAdmin', values: [string]): string;
  encodeFunctionData(functionFragment: 'getProxyImplementation', values: [string]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgrade', values: [string, string]): string;
  encodeFunctionData(
    functionFragment: 'upgradeAndCall',
    values: [string, string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: 'changeProxyAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getProxyAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getProxyImplementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgrade', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeAndCall', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export class ProxyAdmin extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProxyAdminInterface;

  functions: {
    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    changeProxyAdmin(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    'changeProxyAdmin(address,address)'(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyAdmin(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyAdmin(address)'(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyImplementation(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyImplementation(address)'(
      proxy: string,
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
    'owner()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgrade(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgrade(address,address)'(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgradeAndCall(address,address,bytes)'(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
   */
  changeProxyAdmin(
    proxy: string,
    newAdmin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
   */
  'changeProxyAdmin(address,address)'(
    proxy: string,
    newAdmin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
   */
  getProxyAdmin(proxy: string, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
   */
  'getProxyAdmin(address)'(proxy: string, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
   */
  getProxyImplementation(proxy: string, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
   */
  'getProxyImplementation(address)'(proxy: string, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  'owner()'(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
   */
  upgrade(
    proxy: string,
    implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
   */
  'upgrade(address,address)'(
    proxy: string,
    implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
   */
  upgradeAndCall(
    proxy: string,
    implementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
   */
  'upgradeAndCall(address,address,bytes)'(
    proxy: string,
    implementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    changeProxyAdmin(proxy: string, newAdmin: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    'changeProxyAdmin(address,address)'(
      proxy: string,
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyAdmin(proxy: string, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyAdmin(address)'(proxy: string, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyImplementation(proxy: string, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyImplementation(address)'(proxy: string, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgrade(proxy: string, implementation: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgrade(address,address)'(
      proxy: string,
      implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgradeAndCall(address,address,bytes)'(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter;
  };

  estimateGas: {
    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    changeProxyAdmin(proxy: string, newAdmin: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    'changeProxyAdmin(address,address)'(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyAdmin(proxy: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyAdmin(address)'(proxy: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyImplementation(proxy: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyImplementation(address)'(proxy: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgrade(proxy: string, implementation: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgrade(address,address)'(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgradeAndCall(address,address,bytes)'(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    changeProxyAdmin(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Changes the admin of `proxy` to `newAdmin`.  Requirements:  - This contract must be the current admin of `proxy`.
     */
    'changeProxyAdmin(address,address)'(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyAdmin(proxy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the current admin of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyAdmin(address)'(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    getProxyImplementation(proxy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the current implementation of `proxy`.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'getProxyImplementation(address)'(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgrade(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgrade(address,address)'(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-upgradeToAndCall}.  Requirements:  - This contract must be the admin of `proxy`.
     */
    'upgradeAndCall(address,address,bytes)'(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}