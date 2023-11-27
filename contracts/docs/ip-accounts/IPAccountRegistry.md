# Solidity API

## IPAccountRegistry

### IP_ACCOUNT_IMPL

```solidity
address IP_ACCOUNT_IMPL
```

### IP_ACCOUNT_SALT

```solidity
uint256 IP_ACCOUNT_SALT
```

### constructor

```solidity
constructor(address ipAccountImpl_) public
```

### createAccount

```solidity
function createAccount(uint256 chainId_, address tokenContract_, uint256 tokenId_, bytes initData_) external returns (address)
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

### _getCreationCode

```solidity
function _getCreationCode(address implementation_, uint256 chainId_, address tokenContract_, uint256 tokenId_, uint256 salt_) internal pure returns (bytes)
```

