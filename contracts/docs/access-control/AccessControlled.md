# Solidity API

## AccessControlled

This contract is to be inherited by any protocol components that require granular
        roles for execution, as defined by the Access Control Singleton contract.

### onlyRole

```solidity
modifier onlyRole(bytes32 role_)
```

Checks if msg.sender has `role`, reverts if not.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| role_ | bytes32 | the role to be tested, defined in Roles.sol and set in AccessControlSingleton instance. |

### constructor

```solidity
constructor(address accessControl_) internal
```

Instantiates a new Access Controlled contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | The global Access Control Singleton contract address. |

### setAccessControl

```solidity
function setAccessControl(address accessControl_) public
```

Sets AccessControlSingleton instance. Restricted to PROTOCOL_ADMIN_ROLE

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | address of the new instance of AccessControlSingleton. |

### _hasRole

```solidity
function _hasRole(bytes32 role_, address account_) internal view returns (bool)
```

Checks if `account has `role` assigned.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| role_ | bytes32 | the role to be tested, defined in Roles.sol and set in AccessControlSingleton instance. |
| account_ | address | the address to be tested for the role. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | return true if account has role, false otherwise. |

