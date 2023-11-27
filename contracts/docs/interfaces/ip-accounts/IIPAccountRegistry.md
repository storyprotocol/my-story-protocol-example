# Solidity API

## IIPAccountRegistry

### AccountCreated

```solidity
event AccountCreated(address account, address implementation, uint256 chainId, address tokenContract, uint256 tokenId, uint256 salt)
```

### createAccount

```solidity
function createAccount(uint256 chainId_, address tokenContract_, uint256 tokenId_, bytes initData) external returns (address)
```

### account

```solidity
function account(uint256 chainId_, address tokenContract_, uint256 tokenId_) external view returns (address)
```

### getIpAccountImpl

```solidity
function getIpAccountImpl() external view returns (address)
```

Returns the IPAccount implementation address.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | address The IPAccount implementation address. |

