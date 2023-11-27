# Solidity API

## RoyaltyDistributor

### ipAccountRegistry

```solidity
contract IIPAccountRegistry ipAccountRegistry
```

### royaltyNFT

```solidity
contract RoyaltyNFT royaltyNFT
```

### constructor

```solidity
constructor(address ipAccountRegistry_, address royaltyNft_) public
```

### setRoyaltyPolicy

```solidity
function setRoyaltyPolicy(address nftContract_, uint256 tokenId_, address royaltyPolicy_, bytes data_) external
```

Set royalty policy to specified IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nftContract_ | address | address of NFT collection contract. |
| tokenId_ | uint256 | The NFT token Id of NFT collection contract. |
| royaltyPolicy_ | address | The royalty distribution policy. |
| data_ | bytes | The initial data of the royalty distribution policy. |

### updateDistribution

```solidity
function updateDistribution(address nftContract_, uint256 tokenId_, bytes data_) external
```

update royalty distribution plan for given IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nftContract_ | address | address of NFT collection contract. |
| tokenId_ | uint256 | The NFT token Id of NFT collection contract. |
| data_ | bytes | The royalty distribution plan data. |

### distribute

```solidity
function distribute(address nftContract_, uint256 tokenId_, address token_) external
```

distribute royalty to each recipient according to royalty distribution plan for given IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nftContract_ | address | address of NFT collection contract. |
| tokenId_ | uint256 | The NFT token Id of NFT collection contract. |
| token_ | address | The ERC20 token for royalty. |

### claim

```solidity
function claim(address account_, address token_) external
```

claim royalty to account.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account_ | address | address of the account to which withdraw royalty which distributed before. |
| token_ | address |  |

### pause

```solidity
function pause() external
```

pause the royalty distribution.

### unpause

```solidity
function unpause() external
```

unpause the royalty distribution.

### getRoyaltyPolicy

```solidity
function getRoyaltyPolicy(address nftContract_, uint256 tokenId_) external view returns (address)
```

Get royalty policy for specified IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nftContract_ | address | address of NFT collection contract. |
| tokenId_ | uint256 | The NFT token Id of NFT collection contract. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of royalty distribution policy. |

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation_) internal virtual
```

### _ipAccount

```solidity
function _ipAccount(address nftContract_, uint256 tokenId_) internal view returns (address)
```

