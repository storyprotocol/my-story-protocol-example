# Solidity API

## SimpleCollectModule

This simple collect module binds IP assets to mintable NFTs.

### constructor

```solidity
constructor(address franchise_, address defaultCollectNftImpl_) public
```

Initializes a mock collect module.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| franchise_ | address | The protocol-wide franchise registry address. |
| defaultCollectNftImpl_ | address | The default collect NFT impl address. |

### initialize

```solidity
function initialize(address accessControl_) public
```

Initializes the collect module via UUPS proxying.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | The address utilized for contract access control. |

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation_) internal
```

_Additional authorization necessitated by UUPS module upgrades._

### _isCollectAuthorized

```solidity
function _isCollectAuthorized(uint256 ipAssetId_) internal view returns (bool)
```

_Checks whether the collect action is authorized for an IP asset._

