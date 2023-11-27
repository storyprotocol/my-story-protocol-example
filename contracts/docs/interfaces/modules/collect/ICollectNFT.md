# Solidity API

## ICollectNFT

Contracts implementing the Collect NFT interface may be collected
        through a collect module for a bound IP asset collection.

### initialize

```solidity
function initialize(struct Collect.InitCollectNFTParams initParams_) external
```

Initializes a collect NFT for subsequent collection.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initParams_ | struct Collect.InitCollectNFTParams | Collect NFT init data, including bound franchise IP        asset registry, IP asset id, and generic unformatted init data. |

### collect

```solidity
function collect(address collector_, bytes data_) external returns (uint256)
```

Performs a collect, minting the NFT to address `collector`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collector_ | address | The address of the target designated for collection. |
| data_ | bytes | Additional unformatted bytes data for optional processing. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | tokenId_ The id of the minted collect NFT. |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

Returns the total # of collect NFTs that exist for an IP asset.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The total number of collect NFTs in the collection. |

