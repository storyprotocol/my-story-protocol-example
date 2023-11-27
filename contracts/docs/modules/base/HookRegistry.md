# Solidity API

## HookRegistry

This contract is an abstract contract that manages the registration of hooks.
Hooks are small pieces of code that are called before and after certain operations in the protocol.

_Each module that inherits from HookRegistry has its own local hook registry.
The HookRegistry supports multiple arrays of hooks, each associated with a different configuration, separated by a `registryKey`
Each module can define its own approach to generate its unique registryKey._

### HookType

```solidity
enum HookType {
  PreAction,
  PostAction
}
```

### INDEX_NOT_FOUND

```solidity
uint256 INDEX_NOT_FOUND
```

### MAX_HOOKS

```solidity
uint256 MAX_HOOKS
```

### HooksRegistered

```solidity
event HooksRegistered(enum HookRegistry.HookType hType, bytes32 registryKey, address[] hook)
```

### HooksCleared

```solidity
event HooksCleared(enum HookRegistry.HookType hType, bytes32 registryKey)
```

### onlyIpOrgOwner

```solidity
modifier onlyIpOrgOwner(contract IIPOrg ipOrg_)
```

_Modifier to check if the caller is the IPOrg owner.
Reverts if the caller is not the IP Org owner._

### registerHooks

```solidity
function registerHooks(enum HookRegistry.HookType hookType_, contract IIPOrg ipOrg_, bytes32 registryKey_, address[] hooks_, bytes[] hooksConfig_) public
```

_Registers hooks for a specific type and registry key.
Clears any existing hooks for the same type and registry key.
Emits a HooksRegistered event.
Can only be called by the IP Org owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hooks to register. |
| ipOrg_ | contract IIPOrg |  |
| registryKey_ | bytes32 | The registry key for the hooks. |
| hooks_ | address[] | The addresses of the hooks to register. |
| hooksConfig_ | bytes[] | The configurations for the hooks. |

### isRegistered

```solidity
function isRegistered(enum HookRegistry.HookType hookType_, bytes32 registryKey_, address hook_) external view returns (bool)
```

_Checks if a hook is registered for a specific type and registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hook. |
| registryKey_ | bytes32 | The registry key for the hook. |
| hook_ | address | The address of the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the hook is registered, false otherwise. |

### hookAt

```solidity
function hookAt(enum HookRegistry.HookType hookType_, bytes32 registryKey_, uint256 index_) external view returns (address)
```

_Returns the hook at a specific index for a specific type and registry key.
Reverts if the index is out of bounds._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hook. |
| registryKey_ | bytes32 | The registry key for the hook. |
| index_ | uint256 | The index of the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the hook. |

### hookConfigAt

```solidity
function hookConfigAt(enum HookRegistry.HookType hookType_, bytes32 registryKey_, uint256 index_) external view returns (bytes)
```

_Returns the hook configuration at a specific index for a specific type and registry key.
Reverts if the index is out of bounds._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hook. |
| registryKey_ | bytes32 | The registry key for the hook. |
| index_ | uint256 | The index of the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | The configuration of the hook. |

### totalHooks

```solidity
function totalHooks(enum HookRegistry.HookType hookType_, bytes32 registryKey_) external view returns (uint256)
```

_Returns the total number of hooks for a specific type and registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hooks. |
| registryKey_ | bytes32 | The registry key for the hooks. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The total number of hooks. |

### totalHooksConfig

```solidity
function totalHooksConfig(enum HookRegistry.HookType hookType_, bytes32 registryKey_) external view returns (uint256)
```

_Returns the total number of hook configurations for a specific type and registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hooks. |
| registryKey_ | bytes32 | The registry key for the hooks. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The total number of hook configurations. |

### clearHooks

```solidity
function clearHooks(enum HookRegistry.HookType hookType_, contract IIPOrg ipOrg_, bytes32 registryKey_) public
```

_Clears all hooks for a specific type and registry key.
Emits a HooksCleared event.
Can only be called by the IP Org owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hooks to clear. |
| ipOrg_ | contract IIPOrg |  |
| registryKey_ | bytes32 | The registry key for the hooks. |

### hookIndex

```solidity
function hookIndex(enum HookRegistry.HookType hookType_, bytes32 registryKey_, address hook_) public view returns (uint256)
```

_Returns the index of a hook for a specific type and registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hook. |
| registryKey_ | bytes32 | The registry key for the hook. |
| hook_ | address | The address of the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The index of the hook. Returns INDEX_NOT_FOUND if the hook is not registered. |

### _hooksForType

```solidity
function _hooksForType(enum HookRegistry.HookType hookType_, bytes32 registryKey_) internal view returns (address[])
```

_Returns the hooks for a specific type and registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hooks. |
| registryKey_ | bytes32 | The registry key for the hooks. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | The array of hooks. |

### _hooksConfigForType

```solidity
function _hooksConfigForType(enum HookRegistry.HookType hookType_, bytes32 registryKey_) internal view returns (bytes[])
```

_Returns the hook configurations for a specific type and registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookType_ | enum HookRegistry.HookType | The type of the hooks. |
| registryKey_ | bytes32 | The registry key for the hooks. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes[] | The array of hook configurations. |

