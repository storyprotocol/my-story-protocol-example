# Solidity API

## IERC6551Account

_the ERC-165 identifier for this interface is `0x6faff5f1`_

### receive

```solidity
receive() external payable
```

_Allows the account to receive Ether
Accounts MUST implement a `receive` function
Accounts MAY perform arbitrary logic to restrict conditions
under which Ether can be received_

### token

```solidity
function token() external view returns (uint256 chainId, address tokenContract, uint256 tokenId)
```

_Returns the identifier of the non-fungible token which owns the account
The return value of this function MUST be constant - it MUST NOT change over time_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| chainId | uint256 | The EIP-155 ID of the chain the token exists on |
| tokenContract | address | The contract address of the token |
| tokenId | uint256 | The ID of the token |

### state

```solidity
function state() external view returns (uint256)
```

_Returns a value that SHOULD be modified each time the account changes state_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The current account state |

### isValidSigner

```solidity
function isValidSigner(address signer, bytes context) external view returns (bytes4 magicValue)
```

_Returns a magic value indicating whether a given signer is authorized to act on behalf
of the account
MUST return the bytes4 magic value 0x523e3260 if the given signer is valid
By default, the holder of the non-fungible token the account is bound to MUST be considered
a valid signer
Accounts MAY implement additional authorization logic which invalidates the holder as a
signer or grants signing permissions to other non-holder accounts_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| signer | address | The address to check signing authorization for |
| context | bytes | Additional data used to determine whether the signer is valid |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| magicValue | bytes4 | Magic value indicating whether the signer is valid |

