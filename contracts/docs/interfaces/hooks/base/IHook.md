# Solidity API

## HookResult

```solidity
enum HookResult {
  Pending,
  Completed
}
```

## IHook

This interface defines the methods for synchronous and asynchronous hooks.

_Hooks are used to execute custom logic in response to certain events or conditions._

### executeSync

```solidity
function executeSync(bytes hookContext_) external returns (enum HookResult result, bytes hookData)
```

Executes a synchronous hook.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookContext_ | bytes | The context of executing a hook. It is an encoded version of Hook.ExecutionContext |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | enum HookResult | The result of the hook execution. |
| hookData | bytes | The data returned by the hook. |

### executeAsync

```solidity
function executeAsync(bytes hookContext_, address callbackHandler_) external returns (enum HookResult result, bytes hookData, bytes32 requestId)
```

Executes an asynchronous hook.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookContext_ | bytes | The context of executing a hook. It is an encoded version of Hook.ExecutionContext |
| callbackHandler_ | address | The address of the callback handler. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | enum HookResult | The result of the hook execution. |
| hookData | bytes | The data returned by the hook. |
| requestId | bytes32 | The ID of the request. |

### validateConfig

```solidity
function validateConfig(bytes hookConfig_) external view
```

Validates the configuration for the hook.

_This function should be overridden in concrete Hook to provide specific validation logic._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration data for the hook. |

