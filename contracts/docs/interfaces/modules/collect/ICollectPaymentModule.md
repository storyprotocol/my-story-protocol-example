# Solidity API

## ICollectPaymentModule

The collect payment module enables IP assets to be bound to NFTs
        that can be minted for a configurable fee.

### initCollect

```solidity
function initCollect(struct Collect.InitCollectParams initCollectParams_) external
```

Initializes the collect payment module for a specific IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initCollectParams_ | struct Collect.InitCollectParams | Collect module init data, including IP asset        id, collect NFT impl address, and payment module init data. |

### collect

```solidity
function collect(struct Collect.CollectParams collectParams_) external payable returns (address collectNft, uint256 collectNftId)
```

Performs a collect on a specific IP asset, processing the module
        configured payment in the process.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectParams_ | struct Collect.CollectParams | Collect module collect data, including IP asset id,         collector address, and collect payment module processing data. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectNft | address | The address of the collected NFT. |
| collectNftId | uint256 | The id of the collected collect NFT. |

### getPaymentInfo

```solidity
function getPaymentInfo(uint256 ipAssetId_) external view returns (struct Collect.CollectPaymentInfo)
```

Returns the collect payment info associated with an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the specified IP asset. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct Collect.CollectPaymentInfo | Payment info associated with the configured IP asset collect. |

