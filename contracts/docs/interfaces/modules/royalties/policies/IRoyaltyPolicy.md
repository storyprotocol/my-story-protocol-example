# Solidity API

## IRoyaltyPolicy

The Royalty policy perform concrete operations of distributing royalty.

### initPolicy

```solidity
function initPolicy(address account_, bytes data_) external
```

initialize the royalty policy for the specified IP Account

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account_ | address | IP Account associated with the policy. |
| data_ | bytes | The initial data of the royalty distribution policy. |

### updateDistribution

```solidity
function updateDistribution(address account_, bytes data_) external
```

update distribute plan for the specified IP Account

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account_ | address | IP Account associated with the policy. |
| data_ | bytes | The distribution plan data. |

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

