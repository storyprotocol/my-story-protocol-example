# Solidity API

## ICallbackHandler

This interface defines the method for handling hook callbacks.

_Modules that call the AsyncHook usually implement this interface._

### handleHookCallback

```solidity
function handleHookCallback(bytes32 requestId_, bytes callbackData_) external
```

Handles a callback from an asynchronous call.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| requestId_ | bytes32 | The ID of the request. |
| callbackData_ | bytes | The data returned by the callback. |

