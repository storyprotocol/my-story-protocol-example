# Solidity API

## AccessControlled

### onlyRole

```solidity
modifier onlyRole(bytes32 role_)
```

Checks if msg.sender has `role`, reverts if not.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| role_ | bytes32 | the role to be tested, defined in Roles.sol and set in AccessManager instance. |

### constructor

```solidity
constructor(address accessControl_) internal
```

### setAccessControl

```solidity
function setAccessControl(address accessControl_) public
```

Sets AccessManager instance. Restricted to PROTOCOL_ADMIN_ROLE

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | address of the new instance of AccessControlSingleton. |

### hasRole

```solidity
function hasRole(bytes32 role_, address account_) internal view returns (bool)
```

Checks if `account has `role` assigned.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| role_ | bytes32 | the role to be tested, defined in Roles.sol and set in AccessManager instance. |
| account_ | address | the address to be tested for the role. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | return true if account has role, false otherwise. |

