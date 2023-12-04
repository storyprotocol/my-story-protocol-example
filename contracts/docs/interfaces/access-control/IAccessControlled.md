# Solidity API

## IAccessControlled

### AccessControlUpdated

```solidity
event AccessControlUpdated(address accessControl)
```

Emits when the global Access Control singleton contract is updated.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl | address | Address of the protocol-wide Access Control singleton contract. |

### setAccessControl

```solidity
function setAccessControl(address accessControl_) external
```

Sets AccessControlSingleton instance.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | address of the new instance of AccessControlSingleton. |

