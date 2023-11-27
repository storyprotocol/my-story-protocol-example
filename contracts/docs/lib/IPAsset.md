# Solidity API

## IPAsset

Library for constants, structs, and helper functions for IP assets.

### EXTERNAL_ASSET

```solidity
uint8 EXTERNAL_ASSET
```

### IPA

```solidity
struct IPA {
  string name;
  uint64 ipAssetType;
  address registrant;
  uint8 status;
  address ipOrg;
  bytes32 hash;
  uint64 registrationDate;
}
```

### IPAssetType

```solidity
enum IPAssetType {
  UNDEFINED,
  STORY,
  CHARACTER,
  ART,
  GROUP,
  LOCATION,
  ITEM
}
```

### RegisterIpAssetParams

```solidity
struct RegisterIpAssetParams {
  string name;
  uint64 ipAssetType;
  address owner;
  bytes32 hash;
  string mediaUrl;
}
```

### CreateIpAssetParams

```solidity
struct CreateIpAssetParams {
  enum IPAsset.IPAssetType ipOrgAssetType;
  uint64 ipAssetType;
  string name;
  bytes32 hash;
  string mediaUrl;
  bytes ipData;
}
```

