# Solidity API

## Whitelist

This contract manages whitelist to perform actions

_To follow the developer's guide, please place this file at ${PROJECT_ROOT}/contracts/hooks before compiling._

### whitelistEnabled

```solidity
bool whitelistEnabled
```

whether or not the whitelist is enabled for the IP Org

### whitelisted

```solidity
mapping(address => bool) whitelisted
```

the mapping from the address to whether or not the address is whitelisted

### WhitelistEnabled

```solidity
event WhitelistEnabled()
```

### WhitelistDisabled

```solidity
event WhitelistDisabled()
```

### Whitelisted

```solidity
event Whitelisted(address user)
```

### Unwhitelisted

```solidity
event Unwhitelisted(address user)
```

### enableWhitelist

```solidity
function enableWhitelist() external
```

Enable whitelisting

_This function enables whitelisting to perform action_

### disableWhitelist

```solidity
function disableWhitelist() external
```

Disable whitelisting

_This function disables whitelisting to perform action_

### whitelist

```solidity
function whitelist(address user_) external
```

Add an address to the whitelist

_This function adds an address into the whitelist so that the address can execute actions_

### unwhitelist

```solidity
function unwhitelist(address user_) external
```

Remove an address from the whitelist

_This function removes an address from the whitelist so the address cannot execute actions_

### canPerformAction

```solidity
function canPerformAction(address user_) external view returns (bool)
```

Verify if an user is allowed to perform an action

_This function check if whitelist is enabled, return false it is NOT whitelisted. Otherwise return true._

