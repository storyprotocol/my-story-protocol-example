# Solidity API

## AccessControlSingleton

This contract serves as the global source of truth for role-based authorization.
        Contracts that inherit the AccessControlled contract or its upgradable variant
        are may be granted granular access to certain roles by utilizing the `onlyRole`
        modifier with the required role input as a parameter.

### version

```solidity
string version
```

### initialize

```solidity
function initialize(address admin_) external
```

Initializer method, access point to initialize inheritance tree.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| admin_ | address | address to be the PROTOCOL_ADMIN_ROLE. |

### setRoleAdmin

```solidity
function setRoleAdmin(bytes32 role_, bytes32 admin_) external
```

Method for PROTOCOL_ADMIN_ROLE to create new roles, and define their role admin.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| role_ | bytes32 | id of the new role. Should be keccak256("<ROLE_NAME>"). |
| admin_ | bytes32 | role id that will be the role admin for the new role. |

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation_) internal virtual
```

Access control for the upgrade process (UPGRADER_ROLE)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newImplementation_ | address | address of the new deployed implementation. |

