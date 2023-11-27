# Solidity API

## ModuleRegistry

This contract is the source of truth for all modules that are registered in the protocol.
It's also the entrypoint for execution and configuration of modules, either directly by users
or by MODULE_EXECUTOR_ROLE holders.

### PROTOCOL_LEVEL

```solidity
address PROTOCOL_LEVEL
```

### _protocolModules

```solidity
mapping(string => contract BaseModule) _protocolModules
```

### constructor

```solidity
constructor(address accessControl_) public
```

### protocolModule

```solidity
function protocolModule(string moduleKey_) public view returns (address)
```

Gets the protocol-wide module associated with a module key.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| moduleKey_ | string | The unique module key used to identify the module. |

### registerProtocolModule

```solidity
function registerProtocolModule(string moduleKey, contract BaseModule moduleAddress) external
```

Add a module to the protocol, that will be available for all IPOrgs.
This is only callable by MODULE_REGISTRAR_ROLE holders.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| moduleKey | string | short module descriptor |
| moduleAddress | contract BaseModule | address of the module |

### removeProtocolModule

```solidity
function removeProtocolModule(string moduleKey) external
```

Remove a module from the protocol (all IPOrgs)
This is only callable by MODULE_REGISTRAR_ROLE holders.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| moduleKey | string | short module descriptor |

### moduleForKey

```solidity
function moduleForKey(string moduleKey) external view returns (contract BaseModule)
```

Get a module from the protocol, by its key.

### isModule

```solidity
function isModule(string moduleKey, address caller_) external view returns (bool)
```

### execute

```solidity
function execute(contract IIPOrg ipOrg_, string moduleKey_, bytes moduleParams_, bytes[] preHookParams_, bytes[] postHookParams_) external returns (bytes)
```

Execution entrypoint, callable by any address on its own behalf.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg, or address(0) for protocol-level stuff |
| moduleKey_ | string | short module descriptor |
| moduleParams_ | bytes | encoded params for module action |
| preHookParams_ | bytes[] | encoded params for pre action hooks |
| postHookParams_ | bytes[] | encoded params for post action hooks |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | encoded result of the module execution |

### execute

```solidity
function execute(contract IIPOrg ipOrg_, address caller_, string moduleKey_, bytes moduleParams_, bytes[] preHookParams_, bytes[] postHookParams_) external returns (bytes)
```

Execution entrypoint, callable by any MODULE_EXECUTOR_ROLE holder on behalf of any address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg, or address(0) for protocol-level stuff |
| caller_ | address | address requesting the execution |
| moduleKey_ | string | short module descriptor |
| moduleParams_ | bytes | encoded params for module action |
| preHookParams_ | bytes[] | encoded params for pre action hooks |
| postHookParams_ | bytes[] | encoded params for post action hooks |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | encoded result of the module execution |

### configure

```solidity
function configure(contract IIPOrg ipOrg_, string moduleKey_, bytes params_) external
```

Configuration entrypoint, callable by any address on its own behalf.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg, or address(0) for protocol-level stuff |
| moduleKey_ | string | short module descriptor |
| params_ | bytes | encoded params for module configuration |

### configure

```solidity
function configure(contract IIPOrg ipOrg_, address caller_, string moduleKey_, bytes params_) external returns (bytes)
```

Configuration entrypoint, callable by any MODULE_EXECUTOR_ROLE holder on behalf of any address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | address of the IPOrg, or address(0) for protocol-level stuff |
| caller_ | address | address requesting the execution |
| moduleKey_ | string | short module descriptor |
| params_ | bytes | encoded params for module configuration |

