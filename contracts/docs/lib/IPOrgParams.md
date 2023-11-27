# Solidity API

## IPOrgParams

Library for constants, structs, and helper functions for IP Orgs.

### RegisterIPOrgParams

```solidity
struct RegisterIPOrgParams {
  address registry;
  string name;
  string symbol;
  string description;
  string metadataUrl;
}
```

### InitIPOrgParams

```solidity
struct InitIPOrgParams {
  address registry;
  address owner;
  string name;
  string symbol;
}
```

