# Solidity API

## LibUintArrayMask

_Gives tools to check if the "endpoints" of a relationship are valid, according to the allowed asset types set in the relationship config._

### _convertToMask

```solidity
function _convertToMask(uint8[] assetTypes_) internal pure returns (uint256)
```

_converts an array of types and the allows external flag to a mask, by setting the bits corresponding
to the uint8 equivalent of the IPAsset types to 1._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| assetTypes_ | uint8[] | The array of subType |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | mask The mask representing the IPAsset types and the allows external flag |

### _isAssetTypeOnMask

```solidity
function _isAssetTypeOnMask(uint256 mask_, uint8 assetType_) internal pure returns (bool)
```

returns true if the asset type is supported by the mask, false otherwise

