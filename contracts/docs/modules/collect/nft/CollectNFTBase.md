# Solidity API

## CollectNFTBase

This is the Story Protocol base collect NFT that SHOULD be extended
        when creating custom collect NFTs for an IP asset collect module.
        A collect NFT represents either an open or limited edition NFT that
        mirrors, in some way or another, the IP asset to that is bound to.

### collectModule

```solidity
contract ICollectModule collectModule
```

### ipAssetOrg

```solidity
contract IIPOrg ipAssetOrg
```

### registry

```solidity
contract IPAssetRegistry registry
```

### ipAssetId

```solidity
uint256 ipAssetId
```

### onlyCollectModule

```solidity
modifier onlyCollectModule()
```

Ensures calls may only be invoked by the parent collect module.

### constructor

```solidity
constructor() internal
```

Instantiates the collect NFT implementation.

_Actual creation for IP assets will be performed by `initialize()`,
     this is only included to prevent initialization of the NFT impl._

### initialize

```solidity
function initialize(struct Collect.InitCollectNFTParams initParams_) public virtual
```

Initializes a collect NFT for subsequent collection.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initParams_ | struct Collect.InitCollectNFTParams | Collect NFT init data, including bound franchise IP         asset registry, IP asset id, and generic unformatted init data. |

### collect

```solidity
function collect(address collector_, bytes data_) public virtual returns (uint256 tokenId)
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
| tokenId | uint256 | The id of the minted collect NFT. |

### totalSupply

```solidity
function totalSupply() public view virtual returns (uint256)
```

Returns the total # of collect NFTs that exist for an IP asset.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The total number of collect NFTs in the collection. |

### _initialize

```solidity
function _initialize(bytes data_) internal virtual
```

_Performs any additional initialization of the collect NFT._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data_ | bytes | Additional unformatted data to be used for initialization. |

### _collect

```solidity
function _collect(bytes data_) internal virtual
```

_Performs any additional collect processing for the collect NFT._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data_ | bytes | Additional unformatted data to be used for collection. |

