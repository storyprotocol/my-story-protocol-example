# Solidity API

## TokenGated

This library defines the Config and Params structs used in the TokenGatedHook.

_The Config struct contains the tokenAddress field, and the Params struct contains the tokenOwner field._

### Config

```solidity
struct Config {
  address tokenAddress;
}
```

### Params

```solidity
struct Params {
  address tokenOwner;
}
```

