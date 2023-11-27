# Solidity API

## Collect

### InitCollectParams

```solidity
struct InitCollectParams {
  uint256 ipAssetId;
  address collectNftImpl;
  bytes data;
}
```

### CollectParams

```solidity
struct CollectParams {
  uint256 ipAssetId;
  address collector;
  bytes collectData;
  bytes collectNftInitData;
  bytes collectNftData;
}
```

### CollectInfo

```solidity
struct CollectInfo {
  bool initialized;
  address collectNft;
  address collectNftImpl;
}
```

### PaymentType

```solidity
enum PaymentType {
  NATIVE,
  ERC20
}
```

### CollectPaymentInfo

```solidity
struct CollectPaymentInfo {
  address paymentToken;
  enum Collect.PaymentType paymentType;
  uint256 paymentAmount;
  address payable paymentRecipient;
}
```

### CollectPaymentParams

```solidity
struct CollectPaymentParams {
  address paymentToken;
  enum Collect.PaymentType paymentType;
  uint256 paymentAmount;
}
```

### InitCollectNFTParams

```solidity
struct InitCollectNFTParams {
  address registry;
  address ipAssetOrg;
  uint256 ipAssetId;
  bytes data;
}
```

