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

interface TransparentUpgradeableProxyInterface extends ethers.utils.Interface {
  functions: {
    'admin()': FunctionFragment;
    'changeAdmin(address)': FunctionFragment;
    'implementation()': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'upgradeToAndCall(address,bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeAdmin', values: [string]): string;
  encodeFunctionData(functionFragment: 'implementation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgradeToAndCall', values: [string, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'implementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeToAndCall', data: BytesLike): Result;

  events: {
    'AdminChanged(address,address)': EventFragment;
    'Upgraded(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
}

export class TransparentUpgradeableProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TransparentUpgradeableProxyInterface;

  functions: {
    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    admin(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    'admin()'(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    changeAdmin(newAdmin: string, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    'changeAdmin(address)'(newAdmin: string, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    implementation(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    'implementation()'(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    upgradeTo(newImplementation: string, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    'upgradeTo(address)'(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    'upgradeToAndCall(address,bytes)'(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
   */
  admin(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
   */
  'admin()'(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
   */
  changeAdmin(newAdmin: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
   */
  'changeAdmin(address)'(newAdmin: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
   */
  implementation(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
   */
  'implementation()'(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
   */
  upgradeTo(newImplementation: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
   */
  'upgradeTo(address)'(
    newImplementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
   */
  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
   */
  'upgradeToAndCall(address,bytes)'(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    admin(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    'admin()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    changeAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    'changeAdmin(address)'(newAdmin: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    implementation(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    'implementation()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    'upgradeTo(address)'(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    'upgradeToAndCall(address,bytes)'(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AdminChanged(previousAdmin: null, newAdmin: null): EventFilter;

    Upgraded(implementation: string | null): EventFilter;
  };

  estimateGas: {
    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    admin(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    'admin()'(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    changeAdmin(newAdmin: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    'changeAdmin(address)'(newAdmin: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    implementation(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    'implementation()'(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    upgradeTo(newImplementation: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    'upgradeTo(address)'(newImplementation: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    'upgradeToAndCall(address,bytes)'(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    admin(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Returns the current admin.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
     */
    'admin()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    changeAdmin(newAdmin: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Changes the admin of the proxy.  Emits an {AdminChanged} event.  NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}.
     */
    'changeAdmin(address)'(newAdmin: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    implementation(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Returns the current implementation.  NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.  TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    'implementation()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    upgradeTo(newImplementation: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Upgrade the implementation of the proxy.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.
     */
    'upgradeTo(address)'(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract.  NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.
     */
    'upgradeToAndCall(address,bytes)'(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}