# Solidity API

## ISplitMain

### createSplit

```solidity
function createSplit(address[] accounts, uint32[] percentAllocations, uint32 distributorFee, address controller) external returns (address)
```

### updateAndDistributeETH

```solidity
function updateAndDistributeETH(address split, address[] accounts, uint32[] percentAllocations, uint32 distributorFee, address distributorAddress) external
```

### updateAndDistributeERC20

```solidity
function updateAndDistributeERC20(address split, contract ERC20 token, address[] accounts, uint32[] percentAllocations, uint32 distributorFee, address distributorAddress) external
```

### withdraw

```solidity
function withdraw(address account, uint256 withdrawETH, contract ERC20[] tokens) external
```

### getETHBalance

```solidity
function getETHBalance(address account) external view returns (uint256)
```

### getERC20Balance

```solidity
function getERC20Balance(address account, contract ERC20 token) external view returns (uint256)
```

