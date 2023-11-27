# Solidity API

## IModuleRegistry

Module Registry Interface

### ModuleAdded

```solidity
event ModuleAdded(address ipOrg, string moduleKey, address module)
```

Emits when a new module is added for a specific IP Org.

### ModuleRemoved

```solidity
event ModuleRemoved(address ipOrg, string moduleKey, address module)
```

Emits when a module is removed for an IP Org.

### ModuleExecuted

```solidity
event ModuleExecuted(address ipOrg, string moduleKey, address caller, bytes selfParams, bytes[] preHookParams, bytes[] postHookParams)
```

Emits when a module is executed for an IP Org.

### ModuleConfigured

```solidity
event ModuleConfigured(address ipOrg, string moduleKey, address caller, bytes params)
```

Emits when a module is configured for an IP Org.

### protocolModule

```solidity
function protocolModule(string moduleKey) external view returns (address)
```

Fetches the latest protocol module bound to a specific key.

