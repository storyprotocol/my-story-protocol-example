# Solidity API

## IPAsset

Library for constants, structs, and helper functions for IP assets.

### IPA

```solidity
struct IPA {
  string name;
  address registrant;
  uint8 status;
  address ipOrg;
  bytes32 hash;
  uint64 registrationDate;
}
```

### RegisterIpAssetParams

```solidity
struct RegisterIpAssetParams {
  string name;
  uint8 ipOrgAssetType;
  address owner;
  bytes32 hash;
  string mediaUrl;
}
```

