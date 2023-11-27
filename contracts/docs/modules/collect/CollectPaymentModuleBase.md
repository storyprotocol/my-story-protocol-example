# Solidity API

## CollectPaymentModuleBase

This is the Story Protocol base payment collect module, which allows
        binding enrolled IP assets to NFTs that can be minted for a specific
        fee according to registry configured payment rules.
TODO: Add IP Asset Collection wide collect payment module settings.

### CollectPaymentModuleStorage

```solidity
struct CollectPaymentModuleStorage {
  mapping(uint256 => struct Collect.CollectPaymentInfo) paymentInfo;
}
```

### constructor

```solidity
constructor(address registry_, address defaultCollectNftImpl_) internal
```

Instantiates a new collect payment module.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| registry_ | address | The IP Asset registry address. |
| defaultCollectNftImpl_ | address | The default collect NFT impl address. |

### initCollect

```solidity
function initCollect(struct Collect.InitCollectParams initCollectParams_) public virtual
```

Initializes the collect payment module for a specific IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initCollectParams_ | struct Collect.InitCollectParams | Collect module init data, including IP asset        id, collect NFT impl address, and payment module init data. |

### collect

```solidity
function collect(struct Collect.CollectParams collectParams_) public payable virtual returns (address collectNft, uint256 collectNftId)
```

Performs a collect on a specific IP asset, processing the module
        configured payment in the process.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectParams_ | struct Collect.CollectParams | Collect module collect data, including IP asset id,         collector address, and collect payment module processing data. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectNft | address | The address of the collected NFT. |
| collectNftId | uint256 | The id of the collected collect NFT. TODO: Add payment reentrancy guard |

### getPaymentInfo

```solidity
function getPaymentInfo(uint256 ipAssetId_) public view returns (struct Collect.CollectPaymentInfo)
```

Returns the collect payment info associated with an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The id of the specified IP asset within the registry. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct Collect.CollectPaymentInfo | Payment info associated with the configured IP asset collect. |

### _initCollect

```solidity
function _initCollect(struct Collect.InitCollectParams initCollectParams_) internal virtual
```

_Perform initialization of the collect payment module._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initCollectParams_ | struct Collect.InitCollectParams | Collect module init data, which includes        unformatted data used for collect payment module initialization. |

### _collect

```solidity
function _collect(struct Collect.CollectParams collectParams_) internal virtual
```

_Perform collect module payment processing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectParams_ | struct Collect.CollectParams | Collect module collect data, which includes        unformatted data used for collect payment module processing. |

### _processPayment

```solidity
function _processPayment(uint256 ipAssetId_, address collector_, struct Collect.CollectPaymentParams paymentParams_) internal virtual
```

_Processes the payment for a given IP asset collect action._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | Id of the IP asset being processed. |
| collector_ | address | Address of collector, who is responsible for payment. |
| paymentParams_ | struct Collect.CollectPaymentParams | Collect params configuring the IP asset payment. TODO: Allow delegation of payments to other addresses by the collector. |

### _validatePaymentInfo

```solidity
function _validatePaymentInfo(struct Collect.CollectPaymentInfo paymentInfo_) internal virtual
```

_Checks whether the collect payment info to be configured is valid._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| paymentInfo_ | struct Collect.CollectPaymentInfo | Settings for collect payment such as amount or token. |

### _validatePaymentProcessing

```solidity
function _validatePaymentProcessing(struct Collect.CollectPaymentInfo paymentInfo_, struct Collect.CollectPaymentParams paymentParams_, address collector_) internal virtual
```

_Checks whether payment processing parameters are valid._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| paymentInfo_ | struct Collect.CollectPaymentInfo | Currently configured info for the collect payment. |
| paymentParams_ | struct Collect.CollectPaymentParams | Parameters passed for collect payment processing. |
| collector_ | address |  |

### _transferNativeTokens

```solidity
function _transferNativeTokens(address payable to_, uint256 amount_) internal
```

_Transfers `amount` of the native token to address `to`. `msg.value`
     is assumed to have been forwarded from the collector to the module._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to_ | address payable | Recipient address of the native tokens. |
| amount_ | uint256 | The amount of native tokens to send to the recipient. TODO: Allow for native token transfers via relayers. |

### _transferERC20

```solidity
function _transferERC20(address token_, address from_, address to_, uint256 amount_) internal
```

_Transfers `amount` of ERC-20 token `token` from `from` to `to`.
     NOTE: Approvals MUST be set on this contract for transfers to work._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token_ | address | Address of the ERC-20 token contract. |
| from_ | address | Address whose ERC-20 funds are being transferred from. |
| to_ | address | Recipient address of the ERC-20 transfer. |
| amount_ | uint256 | The amount of the ERC-20 to transfer. TODO: Allow for ERC-2612 permit based transfers. |

