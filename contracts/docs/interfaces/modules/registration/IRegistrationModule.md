# Solidity API

## IRegistrationModule

### MetadataUpdated

```solidity
event MetadataUpdated(address ipOrg, string baseURI, string contractURI)
```

Emits when an IPOrg updates metadata associated with its IPA.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg | address | The address of the IP Org whose metadata was updated. |
| baseURI | string | The base token URI to be used for token metadata. |
| contractURI | string | The contract URI to be used for contract metadata. |

### IPAssetRegistered

```solidity
event IPAssetRegistered(uint256 ipAssetId, address ipOrg, uint256 ipOrgAssetId, address owner, string name, uint8 ipOrgAssetType, bytes32 hash, string mediaUrl)
```

Emits when a new IP asset is registered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId | uint256 | The identifier of the newly registered IP asset. |
| ipOrg | address | The address of the IP Org of the IP asset. |
| ipOrgAssetId | uint256 | The IP Org localized id of the IP asset. |
| owner | address | The address of the new IP asset owner. |
| name | string | The name of the IP asset being registered. |
| ipOrgAssetType | uint8 | The numerical id of the IP asset type. |
| hash | bytes32 | The content hash of the registered IP asset. |
| mediaUrl | string | The media URL of the registered IP asset. |

### IPAssetTransferred

```solidity
event IPAssetTransferred(uint256 ipAssetId, address ipOrg, uint256 ipOrgAssetId, address prevOwner, address newOwner)
```

Emits when an IP asset is transferred to a new owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId | uint256 | The identifier of the IP asset being transferred. |
| ipOrg | address | The address of the IP Org which administers the IP asset. |
| ipOrgAssetId | uint256 | The local id of the wrapped IP within the IP Org. |
| prevOwner | address | The address of the previous owner of the IP asset. |
| newOwner | address | The address of the new owner of the IP asset. |

### ownerOf

```solidity
function ownerOf(uint256 ipAssetId_) external view returns (address)
```

Returns the current owner of an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The global identifier of the IP asset within the GIPR. |

### ipAssetId

```solidity
function ipAssetId(address ipOrg_, uint256 ipOrgAssetId_) external returns (uint256)
```

Gets the IP asset id associated with an IP Org asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the governing IP asset IP Org. |
| ipOrgAssetId_ | uint256 | The localized id of the IP asset within the IP Org. |

### tokenURI

```solidity
function tokenURI(address ipOrg_, uint256 ipOrgAssetId_, uint8 ipOrgAssetType_) external view returns (string)
```

Renders metadata of an IP Asset localized for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org of the IP asset. |
| ipOrgAssetId_ | uint256 | The local id of the IP asset within the IP Org. |
| ipOrgAssetType_ | uint8 | The IP Org asset type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The token URI associated with the IP Org. |

### contractURI

```solidity
function contractURI(address ipOrg_) external view returns (string)
```

Gets the contract URI for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The contract URI associated with the IP Org. |

### getIpOrgAssetTypes

```solidity
function getIpOrgAssetTypes(address ipOrg_) external view returns (string[])
```

get the ip Asset types of an ipOrg

### isValidIpOrgAssetType

```solidity
function isValidIpOrgAssetType(address ipOrg_, uint8 index) external view returns (bool)
```

Returns true if the index for an IP Org asset type is supported.

