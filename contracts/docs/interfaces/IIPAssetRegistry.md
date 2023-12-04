# Solidity API

## IIPAssetRegistry

### Registered

```solidity
event Registered(uint256 ipAssetId_, string name_, address ipOrg_, address registrant_, bytes32 hash_)
```

Emits when a new IP asset is registered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The global IP asset identifier. |
| name_ | string | The assigned name for the IP asset. |
| ipOrg_ | address | The registering governing body for the IP asset. |
| registrant_ | address | The initial individual registrant of the IP asset. |
| hash_ | bytes32 | The content hash associated with the IP asset. |

### IPOrgTransferred

```solidity
event IPOrgTransferred(uint256 ipAssetId_, address oldIPOrg_, address newIPOrg_)
```

Emits when an IP asset is transferred to a new IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The identifier of the IP asset being transferred. |
| oldIPOrg_ | address | The original administering IP Org of the IP asset. |
| newIPOrg_ | address | The new administering IP Org of the IP asset. |

### StatusChanged

```solidity
event StatusChanged(uint256 ipAssetId_, uint8 oldStatus_, uint8 newStatus_)
```

Emits when an IP asset has its status changed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The identifier of the IP asset whose status changed. |
| oldStatus_ | uint8 | The original status associated with the IP asset. |
| newStatus_ | uint8 | The new status associated with the IP asset. |

