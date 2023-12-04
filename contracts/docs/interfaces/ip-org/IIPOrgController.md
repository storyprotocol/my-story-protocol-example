# Solidity API

## IIPOrgController

IP Org Controller Interface

### IPOrgRegistered

```solidity
event IPOrgRegistered(address owner, address ipAssetOrg, string name, string symbol, string[] ipAssetTypes)
```

Emits when a new IP Org is registered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The address of the IP Org owner. |
| ipAssetOrg | address | The address of the new IP Org contract. |
| name | string | Descriptive name for the new IP Org contract. |
| symbol | string | A describe symbol for the new IP Org contract. |
| ipAssetTypes | string[] | String descriptors of the IP asset types available. |

### IPOrgTransferred

```solidity
event IPOrgTransferred(address ipOrg, address prevOwner, address newOwner)
```

Emits when an IP Org is transferred to a new owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg | address | The address of the IP Org. |
| prevOwner | address | The address of the previous owner of the IP Org. |
| newOwner | address | The address of the new owner of the IP Org. |

### IPOrgPendingOwnerSet

```solidity
event IPOrgPendingOwnerSet(address ipOrg, address pendingOwner)
```

Emits when an ownership transfer is initialized for a new owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg | address | The address of the IP Org. |
| pendingOwner | address | The pending owner to set for the IP Org. |

### registerIpOrg

```solidity
function registerIpOrg(address owner_, string name_, string symbol_, string[] ipAssetTypes_) external returns (address)
```

Registers a new IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner_ | address | The address of the IP Org owner. |
| name_ | string | Metadata name to attach to the IP Org. |
| symbol_ | string | Metadata symbol to attach to the IP Org. |
| ipAssetTypes_ | string[] | String descriptors of the IP asset types available. |

### isIpOrg

```solidity
function isIpOrg(address ipOrg_) external view returns (bool)
```

Checks whether an IP Org exists.

