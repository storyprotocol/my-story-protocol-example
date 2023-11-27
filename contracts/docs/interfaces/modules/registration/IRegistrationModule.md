# Solidity API

## IRegistrationModule

### MetadataUpdated

```solidity
event MetadataUpdated(address ipOrg_, string baseURI_, string contractURI_)
```

Emits when an IPOrg updates metadata associated with its IPA.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org whose metadata was updated. |
| baseURI_ | string | The base token URI to be used for token metadata. |
| contractURI_ | string | The contract URI to be used for contract metadata. |

### IPAssetRegistered

```solidity
event IPAssetRegistered(uint256 ipAssetId_, address ipOrg_, uint256 ipOrgAssetId_, address owner_, string name_, uint64 ipAssetType_, bytes32 hash_, string mediaUrl_)
```

Emits when a new IP asset is registered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The identifier of the newly registered IP asset. |
| ipOrg_ | address | The address of the IP Org of the IP asset. |
| ipOrgAssetId_ | uint256 | The IP Org localized id of the IP asset. |
| owner_ | address | The address of the new IP asset owner. |
| name_ | string | The name of the IP asset being registered. |
| ipAssetType_ | uint64 | The numerical id of the IP asset type. |
| hash_ | bytes32 | The content hash of the registered IP asset. |
| mediaUrl_ | string | The media URL of the registered IP asset. |

### IPAssetTransferred

```solidity
event IPAssetTransferred(uint256 ipAssetId_, address ipOrg_, uint256 ipOrgAssetId_, address prevOwner_, address newOwner_)
```

Emits when an IP asset is transferred to a new owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The identifier of the IP asset being transferred. |
| ipOrg_ | address | The address of the IP Org which administers the IP asset. |
| ipOrgAssetId_ | uint256 | The local id of the wrapped IP within the IP Org. |
| prevOwner_ | address | The address of the previous owner of the IP asset. |
| newOwner_ | address | The address of the new owner of the IP asset. |

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
function tokenURI(address ipOrg_, uint256 ipOrgAssetId_) external view returns (string)
```

Renders metadata of an IP Asset localized for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org of the IP asset. |
| ipOrgAssetId_ | uint256 | The local id of the IP asset within the IP Org. |

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

