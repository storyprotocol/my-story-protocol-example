# Solidity API

## SyncBaseHook

This contract is the base contract for all synchronous hooks.

_It provides the basic structure and functionality for synchronous hook execution._

### SyncHookExecuted

```solidity
event SyncHookExecuted(address hookAddress, enum HookResult result, bytes contextData, bytes returnData)
```

_Emitted when a synchronous hook is executed._

### constructor

```solidity
constructor(address accessControl_) internal
```

Constructs the SyncBaseHook contract.

_The constructor sets the access control addresses._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | The address of the access control contract. |

### executeSync

```solidity
function executeSync(bytes hookContext_) external returns (enum HookResult result, bytes hookData)
```

Executes a synchronous hook.

_Modules would utilize the function to make a sync call.
Only a caller with the HOOK_CALLER_ROLE can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookContext_ | bytes | The context of executing a hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | enum HookResult | The result of the hook execution. |
| hookData | bytes | The data returned by the hook. |

### _executeSyncCall

```solidity
function _executeSyncCall(bytes hookConfig_, bytes hookParams_) internal virtual returns (bytes)
```

_Internal function to execute a synchronous call.
the function should revert in case of error_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration of the hook. |
| hookParams_ | bytes | The parameters for the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | hookData The data returned by the hook. |

