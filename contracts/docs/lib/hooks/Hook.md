# Solidity API

## Hook

This library defines the ExecutionContext struct used when executing hooks.

_The ExecutionContext struct contains two fields: config and params, both of type bytes._

### ExecutionContext

```solidity
struct ExecutionContext {
  bytes config;
  bytes params;
}
```

