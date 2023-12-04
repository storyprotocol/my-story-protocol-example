# Solidity API

## Registration

### IPOrgConfig

```solidity
struct IPOrgConfig {
  string baseURI;
  string contractURI;
  string[] assetTypes;
}
```

### RegisterIPAssetParams

```solidity
struct RegisterIPAssetParams {
  address owner;
  uint8 ipOrgAssetType;
  string name;
  bytes32 hash;
  string mediaUrl;
}
```

### SET_IP_ORG_METADATA

```solidity
bytes32 SET_IP_ORG_METADATA
```

### SET_IP_ORG_ASSET_TYPES

```solidity
bytes32 SET_IP_ORG_ASSET_TYPES
```

### REGISTER_IP_ASSET

```solidity
bytes32 REGISTER_IP_ASSET
```

### TRANSFER_IP_ASSET

```solidity
bytes32 TRANSFER_IP_ASSET
```

