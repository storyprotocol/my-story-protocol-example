# Solidity API

## ICollectModule

The collect module enables IP assets to be minted as NFTs mirroring
        their binding IP assets in a franchise-configurable format.

### Collected

```solidity
event Collected(uint256 ipAssetId_, address collector_, address collectNft_, uint256 collectNftId_, bytes collectData_, bytes collectNftData_)
```

_Emits when a Collect action is invoked.
TODO: Add logging for franchise and ipAssetOrg_

### NewCollectNFT

```solidity
event NewCollectNFT(uint256 ipAssetId_, address collectNFT_)
```

_Emits when a new collect NFT is deployed.
TODO: Add logging for franchise and ipAssetOrg_

### initCollect

```solidity
function initCollect(struct Collect.InitCollectParams initCollectParams_) external
```

Initializes the collect module for a specific IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initCollectParams_ | struct Collect.InitCollectParams | Collect module init data, including IP   asset        id, collect NFT impl address, and generic unformatted init data. |

### collect

```solidity
function collect(struct Collect.CollectParams collectParams_) external payable returns (address collectNft, uint256 collectNftId)
```

Performs a collect on a specific IP asset for a collector.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectParams_ | struct Collect.CollectParams | Collect module collect data, including IP asset id,         collector address, and generic unformatted collect and NFT data. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectNft | address | The address of the collected NFT. |
| collectNftId | uint256 | The id of the collected collect NFT. |

### getCollectNFT

```solidity
function getCollectNFT(uint256 ipAssetId_) external returns (address)
```

Returns the collect NFT address associated with an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the specified IP asset within the franchise. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The Collect NFT address if it exists, else the zero address. |

