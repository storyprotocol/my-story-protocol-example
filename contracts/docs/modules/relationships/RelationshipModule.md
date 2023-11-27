# Solidity API

## RelationshipModule

Contract that handles the creation and management of relationships between entities.
There are protocol level relationships, that are available for all IPOrgs, and IPOrg level relationships,
that are only available for a specific IPOrg.
Relationship types are configurable, allowing to link together different types of entities:
- IPA (Intellectual Property Asset)
- IPOrg Entry, including subcategories
- Licenses
- Addresses
- External NFTs
And combinations of them.
This allows Story Protocol to track attribution, IP remixes, sublicensing...
NOTE: This is an alpha version, a more efficient way of storing and verifying relationships will be implemented in the future.

### constructor

```solidity
constructor(struct BaseModule.ModuleConstruction params_, address accessControl_) public
```

### registerHooks

```solidity
function registerHooks(enum HookRegistry.HookType hType_, contract IIPOrg ipOrg_, string relType_, address[] hooks_, bytes[] hooksConfig_) external
```

Registers hooks for a specific hook type, based on IP Org and relationship type.

_This function can only be called by the IP Org owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hType_ | enum HookRegistry.HookType | The type of the hooks to register. |
| ipOrg_ | contract IIPOrg | The IP Org for which the hooks are being registered. |
| relType_ | string | The relationship type for which the hooks are being registered. |
| hooks_ | address[] | The addresses of the hooks to register. |
| hooksConfig_ | bytes[] | The configurations for the hooks. |

### getRelationshipType

```solidity
function getRelationshipType(address ipOrg_, string relType_) public view virtual returns (struct LibRelationship.RelationshipType result)
```

Gets relationship type definition for a given relationship type name
Will revert if no relationship type is found

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | IP Org address or zero address for protocol level relationships |
| relType_ | string | the name of the relationship type |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | struct LibRelationship.RelationshipType | the relationship type definition |

### getRelationship

```solidity
function getRelationship(uint256 relationshipId_) external view returns (struct LibRelationship.Relationship)
```

Gets relationship definition for a given relationship id

### getRelationshipId

```solidity
function getRelationshipId(struct LibRelationship.Relationship rel_) external view virtual returns (uint256)
```

Gets relationship id for a given relationship

### relationshipExists

```solidity
function relationshipExists(struct LibRelationship.Relationship rel_) external view virtual returns (bool)
```

Checks if a relationship has been set

### _configure

```solidity
function _configure(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes)
```

Relationship module supports configuration to add or remove relationship types

### _verifyExecution

```solidity
function _verifyExecution(contract IIPOrg ipOrg_, address, bytes params_) internal virtual
```

Verifies that the relationship execute() wants to set is valid according to its type definition

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | IPOrg address or zero address for protocol level relationships |
|  | address |  |
| params_ | bytes | encoded params for module action |

### _performAction

```solidity
function _performAction(contract IIPOrg, address, bytes params_) internal virtual returns (bytes)
```

Creates and stores a relationship and emits the RelationshipCreated event. Ignores first 2 parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | contract IIPOrg |  |
|  | address |  |
| params_ | bytes | encoded CreateRelationshipParams for module action |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | encoded relationship id (uint256) |

### _hookRegistryKey

```solidity
function _hookRegistryKey(contract IIPOrg ipOrg_, address, bytes params_) internal view virtual returns (bytes32)
```

