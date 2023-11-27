# Solidity API

## IRoyaltyDistributor

The Royalty module distribute royalty/revenue across IP graph.
        It supports customized royalty distributing policies for each individual IP Asset.

### DistributeRoyalties

```solidity
event DistributeRoyalties(address sourceAccount, address token, uint256 amount)
```

_Emitted when distribute royalty token._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceAccount | address | The address of account from which distribute royalty to other recipients. |
| token | address | The ERC20 royalty token. |
| amount | uint256 | The amount of ERC20 royalty token are distributed. |

### ClaimRoyalties

```solidity
event ClaimRoyalties(address account, address token, uint256 amount)
```

_Emitted after withdraw royalty to payee's account._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The address of account to which withdraw royalty. |
| token | address | The ERC20 royalty token. |
| amount | uint256 | The amount of ERC20 royalty token are claimed. |

### SetRoyaltyPolicy

```solidity
event SetRoyaltyPolicy(address account, address royaltyPolicy)
```

_Emitted after set RoyaltyPolicy to specified IP Account._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The IP Account to which set royalty policy. |
| royaltyPolicy | address | the address of royalty policy implements IRoyaltyPolicy interface. |

### UpdateDistribution

```solidity
event UpdateDistribution(address account)
```

_Emitted after updated the royalty distribution plan._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The IP Account from which distribute the royalty. |

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

