# Solidity API

## IIPOrg

IP Org Interface

### ownerOf

```solidity
function ownerOf(uint256 id) external view returns (address)
```

Returns the current owner of the IP asset within th IP Org.

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 id) external
```

Transfers ownership of the IP asset wrapper within an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | The previous owner of the wrapped IP asset. |
| to | address | The new owner of the wrapped IP asset. |
| id | uint256 | The identifier of the IP Org asset. |

### burn

```solidity
function burn(uint256 id) external
```

Burns an IP asset wrapper within the IP Org.

_This function is only callable by the IP Org registration module._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The local identifier of the IP asset within the IP Org. |

### mint

```solidity
function mint(address owner, uint8 assetType) external returns (uint256 id)
```

Mints an IP Asset wrapper for the IP Org.

_This function is only callable by the IP Org registration module._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | Address of the current owner of the local IP Org asset. |
| assetType | uint8 | The IP Org asset type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The local identifier of the minted IP Org wrapped asset. |

### owner

```solidity
function owner() external view returns (address)
```

Gets the current owner of the IP Org.

### contractURI

```solidity
function contractURI() external view returns (string)
```

Returns contract-level metadata for the IP Org.

### ipOrgAssetType

```solidity
function ipOrgAssetType(uint256 id_) external view returns (uint8)
```

Returns the Ip Org asset type for a given IP Org asset.

