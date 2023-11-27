# Solidity API

## BaseModule

Base implementation for all modules in Story Protocol. This is meant to ensure
that all modules follow the same execution flow and have access to hooks.
It's up to the module how to perform the actions, verifications and authorizations.

_This contract should NOT have state in storage, in order to have upgradeable or non-upgradeable
modules._

### ModuleConstruction

```solidity
struct ModuleConstruction {
  contract IPAssetRegistry ipaRegistry;
  contract ModuleRegistry moduleRegistry;
  contract LicenseRegistry licenseRegistry;
  contract IPOrgController ipOrgController;
}
```

### IPA_REGISTRY

```solidity
contract IPAssetRegistry IPA_REGISTRY
```

### MODULE_REGISTRY

```solidity
contract ModuleRegistry MODULE_REGISTRY
```

### LICENSE_REGISTRY

```solidity
contract LicenseRegistry LICENSE_REGISTRY
```

### IP_ORG_CONTROLLER

```solidity
contract IPOrgController IP_ORG_CONTROLLER
```

### onlyModuleRegistry

```solidity
modifier onlyModuleRegistry()
```

### constructor

```solidity
constructor(struct BaseModule.ModuleConstruction params_) internal
```

### execute

```solidity
function execute(contract IIPOrg ipOrg_, address caller_, bytes moduleParams_, bytes[] preHookParams_, bytes[] postHookParams_) external returns (bytes result)
```

Main execution entrypoint. It will verify params, execute pre action hooks, perform the action,
execute post action hooks and emit the RequestCompleted event, plus returning the result.
It's up to the module to decode and encode params appropriately.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg or zero address |
| caller_ | address | address requesting the execution |
| moduleParams_ | bytes | encoded params for module action |
| preHookParams_ | bytes[] | encoded params for pre action hooks |
| postHookParams_ | bytes[] | encoded params for post action hooks |

### configure

```solidity
function configure(contract IIPOrg ipOrg_, address caller_, bytes params_) external returns (bytes)
```

Configuration entrypoint. It's up to the module to decode params appropriately.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg or zero address |
| caller_ | address | address requesting the execution |
| params_ | bytes | encoded configuration params |

### _executeHooks

```solidity
function _executeHooks(bytes[] params_, enum HookRegistry.HookType hType_, bytes32 registryKey_) internal virtual returns (bool)
```

### _executeHook

```solidity
function _executeHook(enum HookRegistry.HookType, address hook, bytes hookConfig_, bytes hookParams_) internal virtual returns (bool)
```

_Executes a hook.
This function should be overridden in derived contracts if they need to support Async hooks._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | enum HookRegistry.HookType |  |
| hook | address | The address of the hook. |
| hookConfig_ | bytes | The configuration of the hook. |
| hookParams_ | bytes | The parameters of the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the hook execution is completed, false otherwise. |

### _configure

```solidity
function _configure(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes)
```

### _verifyExecution

```solidity
function _verifyExecution(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual
```

### _performAction

```solidity
function _performAction(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes result)
```

### _hookRegistryKey

```solidity
function _hookRegistryKey(contract IIPOrg ipOrg_, address caller_, bytes params_) internal view virtual returns (bytes32)
```

_Generates a registry key based on module execution parameters.
This function should be overridden in derived contracts to provide the actual logic for generating the registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | The address of the IPOrg. |
| caller_ | address | The address requesting the execution. |
| params_ | bytes | The encoded parameters for module action. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | The generated registry key. |

