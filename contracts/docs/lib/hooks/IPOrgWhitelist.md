# Solidity API

## IPOrgWhitelist

This library defines the Config and Params structs for IPOrgWhitelistHook

_The Config struct contains the address of IPOrg, the Params struct contains
     the user's address who will run the execute function of the module.
     To follow the developer's guide, please place this file at
     ${PROJECT_ROOT}/contracts/lib/hooks before compiling._

### Config

```solidity
struct Config {
  address whitelistAddress;
}
```

### Params

```solidity
struct Params {
  address user;
}
```

