# Solidity API

## AsyncBaseHook

This contract is the base contract for all asynchronous hooks.

_It provides the basic structure and functionality for asynchronous hook execution._

### callbackHandlers

```solidity
mapping(bytes32 => contract ICallbackHandler) callbackHandlers
```

_requestId => callback handler_

### AsyncHookExecuted

```solidity
event AsyncHookExecuted(address hookAddress, address callbackHandler, enum HookResult result, bytes32 requestId, bytes contextData, bytes returnData)
```

_Emitted when an asynchronous hook is executed._

### AsyncHookCalledBack

```solidity
event AsyncHookCalledBack(address hookAddress, address callbackHandler, bytes32 requestId, bytes callbackData)
```

_Emitted when an asynchronous hook is called back from external service._

### constructor

```solidity
constructor(address accessControl_) internal
```

Constructs the AsyncBaseHook contract.

_The constructor sets the access control and callback caller addresses._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | The address of the access control contract. |

### executeAsync

```solidity
function executeAsync(bytes hookContext_, address callbackHandler_) external virtual returns (enum HookResult result, bytes hookData, bytes32 requestId)
```

Executes an asynchronous hook.

_Modules would utilize the function to make an async call.
Only a caller with the HOOK_CALLER_ROLE can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookContext_ | bytes | The context of executing a hook. |
| callbackHandler_ | address | The address of the callback handler. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | enum HookResult | The result of the hook execution. |
| hookData | bytes | The data returned by the hook. |
| requestId | bytes32 | The ID of the request. |

### _requestAsyncCall

```solidity
function _requestAsyncCall(bytes hookConfig_, bytes hookParams_) internal virtual returns (bytes hookData, bytes32 requestId)
```

_Internal function to request an asynchronous call,
concrete hoot implementation should override the function.
The function should revert in case of error._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration of the hook. |
| hookParams_ | bytes | The parameters for the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookData | bytes | The data returned by the hook. |
| requestId | bytes32 | The ID of the request. |

### _callbackCaller

```solidity
function _callbackCaller(bytes32 requestId_) internal view virtual returns (address)
```

_Internal function to get the address of the callback caller.
concrete hoot implementation should override the function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| requestId_ | bytes32 | The ID of the request. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the callback caller. |

### _handleCallback

```solidity
function _handleCallback(bytes32 requestId_, bytes callbackData_) internal virtual
```

_Internal function to handle a callback from an asynchronous call._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| requestId_ | bytes32 | The ID of the request. |
| callbackData_ | bytes | The data returned by the callback. |

