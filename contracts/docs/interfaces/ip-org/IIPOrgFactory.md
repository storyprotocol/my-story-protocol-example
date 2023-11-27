# Solidity API

## IIPOrgController

### IPOrgRegistered

```solidity
event IPOrgRegistered(address owner_, address ipAssetOrg_, string name_, string symbol_, string tokenURI_)
```

### registerIpOrg

```solidity
function registerIpOrg(struct IPOrgParams.RegisterIPOrgParams params_) external returns (address)
```

### isIpOrg

```solidity
function isIpOrg(address ipAssetOrg_) external view returns (bool)
```

