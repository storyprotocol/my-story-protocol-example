# Solidity API

## IPAssetRegistry

The source of truth for IP on Story Protocol.

### IPA

```solidity
struct IPA {
  string name;
  uint64 ipAssetType;
  address registrant;
  uint8 status;
  address ipOrg;
  bytes32 hash;
  uint64 registrationDate;
}
```

### MODULE_REGISTRY

```solidity
contract IModuleRegistry MODULE_REGISTRY
```

Used for fetching modules associated with an IP asset.

### _ipAssets

```solidity
mapping(uint256 => struct IPAssetRegistry.IPA) _ipAssets
```

Mapping from IP asset ids to registry records.

### totalSupply

```solidity
uint256 totalSupply
```

Tracks the total number of IP Assets in existence.
TODO(leeren) Switch from numerical ids to a universal namehash.

### onlyRegistrationModule

```solidity
modifier onlyRegistrationModule()
```

Restricts calls to the registration module of the IP Asset.
TODO(ramarti): Enable IPOrg-specific registration modules to be authorized.

### onlyDisputer

```solidity
modifier onlyDisputer(uint256 id)
```

Restricts calls to only being from the disputer for an IP asset.
TODO(ramarti): Add authorization for calls that manage dispute lifecycle changes.

### constructor

```solidity
constructor(address moduleRegistry_) public
```

Initializes the Global IP Asset Registry.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| moduleRegistry_ | address | Address of the module registry. |

### register

```solidity
function register(address ipOrg_, address registrant_, string name_, uint64 ipAssetType_, bytes32 hash_) public returns (uint256 ipAssetId)
```

Registers a new IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address |  |
| registrant_ | address | The initial registrant for the IP asset. |
| name_ | string | A name given to describe the IP asset. |
| ipAssetType_ | uint64 | A numerical code corresponding to IP asset type. |
| hash_ | bytes32 | A content hash used for verifyign provenance of the asset. |

### transferIPOrg

```solidity
function transferIPOrg(uint256 ipAssetId_, address ipOrg_) public
```

Changes the IP Org of an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The identifier of the IP asset being transferred. |
| ipOrg_ | address | The new IP Org to govern the IP asset. |

### setStatus

```solidity
function setStatus(uint256 ipAssetId_, uint8 status_) public
```

Changes the status of an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The identifier of the IP asset being transferred. |
| status_ | uint8 | The new status of the IP asset. TODO(ramarti) Finalize authorization logic around status changes. |

### status

```solidity
function status(uint256 ipAssetId_) public view returns (uint8)
```

Gets the status for a specific IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the IP Asset being queried. |

### ipAssetOrg

```solidity
function ipAssetOrg(uint256 ipAssetId_) public view returns (address)
```

Gets the IP Asset Org that administers a specific IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the IP asset being queried. |

### ipAssetOwner

```solidity
function ipAssetOwner(uint256 ipAssetId_) public view returns (address)
```

Returns the current owner of an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the IP asset being queried. |

### ipAsset

```solidity
function ipAsset(uint256 ipAssetId_) public view returns (struct IPAssetRegistry.IPA)
```

Returns all attributes related to an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the IP asset being queried for. |

