# Solidity API

## IPOrgWhitelistHook

This contract is a hook that ensure the address is whitelisted to perform actions in a module

_It extends SyncBaseHook and provides the implementation for validating the config and executing the hook.
     It also implements the functions for managing whitelist for the IP Org.
     To follow the developer's guide, please place this file at ${PROJECT_ROOT}/contracts/hooks before compiling._

### constructor

```solidity
constructor(address accessControl_) public
```

Constructs the IPOrgWhitelistHook contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | The address of the access control contract. |

### _validateConfig

```solidity
function _validateConfig(bytes hookConfig_) internal view
```

Validates the configuration for the hook.

_This function checks if the provided address is for a whitelist contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration data for the hook. |

### _executeSyncCall

```solidity
function _executeSyncCall(bytes hookConfig_, bytes hookParams_) internal virtual returns (bytes)
```

Executes IPOrg whitelist check in a synchronous manner.

_This function checks if the user address is whitelisted._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hookConfig_ | bytes | The configuration of the hook. |
| hookParams_ | bytes | The parameters for the hook. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | hookData always return empty string as no return data from this hook. |

