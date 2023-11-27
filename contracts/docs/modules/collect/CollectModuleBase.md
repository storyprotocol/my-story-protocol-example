# Solidity API

## CollectModuleBase

This is the Story Protocol base collect module that SHOULD be
        extended when creating collect modules for franchise IP assets.
        A collect module allows users to bind enrolled IP assets to NFTs
        that may be minted according to franchise configured collect rules.
TODO: Add ipAssetOrg-wide module settings (currently it is granular at the individual IP asset level).

### REGISTRY

```solidity
contract IPAssetRegistry REGISTRY
```

### DEFAULT_COLLECT_NFT_IMPL

```solidity
address DEFAULT_COLLECT_NFT_IMPL
```

### CollectModuleStorage

```solidity
struct CollectModuleStorage {
  mapping(uint256 => struct Collect.CollectInfo) collectInfo;
}
```

### constructor

```solidity
constructor(address ipAssetRegistry_, address defaultCollectNftImpl_) internal
```

Instantiates a new collect module.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetRegistry_ | address | The protocol-wide franchise registry address. |
| defaultCollectNftImpl_ | address | The default collect NFT impl address. |

### getCollectNFT

```solidity
function getCollectNFT(uint256 ipAssetId_) public view returns (address)
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

### initCollect

```solidity
function initCollect(struct Collect.InitCollectParams initCollectParams_) public virtual
```

Initializes the collect module for a specific IP asset.

_If no collect NFT impl address is passed, the default module-wide
     collect NFT impl `DEFAULT_COLLECT_NFT_IMPL` will be used instead._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initCollectParams_ | struct Collect.InitCollectParams | Collect module init data, including IP asset        id, collect NFT impl address, and generic unformatted init data. |

### collect

```solidity
function collect(struct Collect.CollectParams collectParams_) public payable virtual returns (address collectNft, uint256 collectNftId)
```

Performs a collect on a specific IP asset for a collector.

_When a collect is processed for the first time for an IP asset, the
     collect NFT is deployed based on its configuered NFT impl address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectParams_ | struct Collect.CollectParams | Collect module collect data, including IP asset id,         collector address, and generic unformatted collect and NFT data. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectNft | address | The address of the collected NFT. |
| collectNftId | uint256 | The id of the collected collect NFT. |

### _initCollect

```solidity
function _initCollect(struct Collect.InitCollectParams initCollectParams_) internal virtual
```

_Perform any additional processing on collect module initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initCollectParams_ | struct Collect.InitCollectParams | Collect module init data, including IP asset        id, collect NFT impl address, and generic unformatted init data. |

### _collect

```solidity
function _collect(struct Collect.CollectParams collectParams_) internal virtual
```

_Perform any additional processing on collect module collection._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectParams_ | struct Collect.CollectParams | Collect module collect data, including IP asset id,         collector address, and generic unformatted collect and NFT data. |

### _isCollectAuthorized

```solidity
function _isCollectAuthorized(uint256 ipAssetId_) internal virtual returns (bool)
```

_Performs any authorization on an IP asset collection._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the specified IP asset within the franchise. |

### _getCollectNft

```solidity
function _getCollectNft(address ipAssetOrg_, uint256 ipAssetId_, bytes initData_) internal returns (address)
```

_Gets a collect NFT, deploying one if it does not yet exist._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetOrg_ | address |  |
| ipAssetId_ | uint256 | The id of the specified IP asset within the franchise. |
| initData_ | bytes | Additional unformatted collect NFT initialization data. |

