# Solidity API

## IModule

Interface for a Story Protocol Module, building block of the protocol functionality.

### RequestPending

```solidity
event RequestPending(address sender)
```

The execution of the module is pending, and will need to be executed again.

### RequestCompleted

```solidity
event RequestCompleted(address sender)
```

Module execution completed successfully.

### execute

```solidity
function execute(contract IIPOrg ipOrg_, address caller_, bytes moduleParams_, bytes[] preHookParams_, bytes[] postHookParams_) external returns (bytes result)
```

Main execution entrypoint.

_It will verify params, execute pre action hooks, perform the action,
execute post action hooks and emit the RequestCompleted event, plus returning the result.
It's up to the module to decode and encode params appropriately._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg or zero address |
| caller_ | address | address requesting the execution |
| moduleParams_ | bytes | encoded params for module action |
| preHookParams_ | bytes[] | encoded params for pre action hooks |
| postHookParams_ | bytes[] | encoded params for post action hooks |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | bytes | of the module action |

### configure

```solidity
function configure(contract IIPOrg ipOrg_, address caller_, bytes params_) external returns (bytes result)
```

Configuration entrypoint.

_It will verify params and configure the module.
It's up to the module to decode and encode params appropriately._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg or zero address |
| caller_ | address | address requesting the execution |
| params_ | bytes | encoded params for module configuration |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | bytes | of the module configuration |

