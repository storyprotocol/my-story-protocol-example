# Solidity API

## RoyaltyNFT

### TOTAL_SUPPLY

```solidity
uint256 TOTAL_SUPPLY
```

### splitMain

```solidity
contract ISplitMain splitMain
```

### splits

```solidity
mapping(uint256 => address) splits
```

### constructor

```solidity
constructor(address splitMain_) public
```

### distributeFunds

```solidity
function distributeFunds(address sourceAccount_, address token_) external
```

### claim

```solidity
function claim(address account_, address token_) external
```

### mint

```solidity
function mint(address sourceAccount_, address[] accounts_, uint32[] initAllocations_) external
```

### uri

```solidity
function uri(uint256) public view returns (string)
```

_See {IERC1155MetadataURI-uri}.

This implementation returns the same URI for *all* token types. It relies
on the token type ID substitution mechanism
https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].

Clients calling this function must replace the `\{id\}` substring with the
actual token type ID._

### percentage

```solidity
function percentage(address sourceAccount_, address account_) public view returns (uint32)
```

### toTokenId

```solidity
function toTokenId(address sourceAccount_) public pure returns (uint256 tokenId)
```

### _afterTokenTransfer

```solidity
function _afterTokenTransfer(address, address from_, address to_, uint256[] ids_, uint256[], bytes) internal virtual
```

### _getSum

```solidity
function _getSum(uint32[] numbers_) internal pure returns (uint32 sum)
```

### sort

```solidity
function sort(address[] data_) internal pure
```

