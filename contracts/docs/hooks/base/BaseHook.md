# Solidity API

## BaseHook

This contract serves as the foundation for all hook contracts.

_It provides the authorization check shared by all hooks. AsyncBaseHook and SyncBaseHook inherit from BaseHook.
Concrete hooks usually inherit from AsyncBaseHook or SyncBaseHook, not directly from BaseHook._

### constructor

```solidity
constructor(address accessControl_) internal
```

Constructs the BaseHook contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | The address of the access control contract. |

### executeSync

```solidity
function executeSync(bytes) external virtual returns (enum HookResult, bytes)
```

Executes a synchronous hook.

_By default, synchronous execution is disabled and this function reverts. 
Subclasses can enable synchronous execution by overriding this function.
Only a caller with the HOOK_CALLER_ROLE can call this function._

### executeAsync

```solidity
function executeAsync(bytes, address) external virtual returns (enum HookResult, bytes, bytes32)
```

Executes an asynchronous hook.

_By default, asynchronous execution is disabled and this function reverts. 
Subclasses can enable asynchronous execution by overriding this function.
Only a caller with the HOOK_CALLER_ROLE can call this function._

### validateConfig

```solidity
function validateConfig(bytes hookConfig_) external view
```

Validates the configuration for the hook.

_This function calls the internal _validateConfig function with the provided configuration data.
If the validation fails, it will revert with an error._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration data for the hook. |

### _validateConfig

```solidity
function _validateConfig(bytes hookConfig_) internal view virtual
```

Validates the configuration for the hook.

_This function should be overridden by concrete hook to provide specific validation logic.
If the validation fails, it will revert with an error._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration data for the hook. |

