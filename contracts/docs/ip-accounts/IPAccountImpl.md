# Solidity API

## IPAccountImpl

### state

```solidity
uint256 state
```

_Returns a value that SHOULD be modified each time the account changes state_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |

### entitled

```solidity
mapping(address => uint256) entitled
```

### withdrawn

```solidity
mapping(address => uint256) withdrawn
```

### receive

```solidity
receive() external payable
```

_Allows the account to receive Ether
Accounts MUST implement a `receive` function
Accounts MAY perform arbitrary logic to restrict conditions
under which Ether can be received_

### safeTransferFrom

```solidity
function safeTransferFrom(address nftContract_, address from_, address to_, uint256 tokenId_) external
```

_{See IIPAccount-safeTransferFrom}_

### sendRoyaltyForDistribution

```solidity
function sendRoyaltyForDistribution(address distributor_, address erc20_) external
```

### isValidSignature

```solidity
function isValidSignature(bytes32 hash_, bytes signature_) external view returns (bytes4 magicValue)
```

### isValidSigner

```solidity
function isValidSigner(address signer_, bytes) external view returns (bytes4)
```

_{See IERC6551Account-isValidSigner}_

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId_) external pure returns (bool)
```

### token

```solidity
function token() public view returns (uint256, address, uint256)
```

_{See IERC6551Account-token}_

### owner

```solidity
function owner() public view returns (address)
```

### _isValidSigner

```solidity
function _isValidSigner(address signer_) internal view returns (bool)
```

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) public pure returns (bytes4)
```

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) public pure returns (bytes4)
```

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) public pure returns (bytes4)
```

