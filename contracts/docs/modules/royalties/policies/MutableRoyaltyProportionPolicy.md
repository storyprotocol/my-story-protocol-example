# Solidity API

## MutableRoyaltyProportionPolicy

### royaltyNFT

```solidity
contract RoyaltyNFT royaltyNFT
```

### constructor

```solidity
constructor(address royaltyNft_) public
```

### initPolicy

```solidity
function initPolicy(address, bytes) external
```

### updateDistribution

```solidity
function updateDistribution(address sourceAccount_, bytes data_) external
```

### distribute

```solidity
function distribute(address account_, address token_) external
```

Distribute royalty to each recipient according to royalty distribution plan for given IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account_ | address | IP Account associated with the policy. |
| token_ | address | The ERC20 token for royalty. |

