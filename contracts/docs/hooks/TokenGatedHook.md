# Solidity API

## TokenGatedHook

This contract is a hook that ensures the user is the owner of a specific NFT token.

_It extends SyncBaseHook and provides the implementation for validating the hook configuration and executing the hook._

### constructor

```solidity
constructor(address accessControl_) public
```

Constructs the TokenGatedHook contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | The address of the access control contract. |

### _validateConfig

```solidity
function _validateConfig(bytes hookConfig_) internal view
```

Validates the configuration for the hook.

_This function checks if the tokenAddress is a valid ERC721 contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration data for the hook. |

### _executeSyncCall

```solidity
function _executeSyncCall(bytes hookConfig_, bytes hookParams_) internal virtual returns (bytes)
```

Executes token gated check in a synchronous manner.

_This function checks if the "tokenOwner" owns a token of the specified ERC721 token contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration of the hook. |
| hookParams_ | bytes | The parameters for the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | hookData always return empty string as no return data from this hook. |

