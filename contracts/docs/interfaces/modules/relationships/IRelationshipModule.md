# Solidity API

## IRelationshipModule

Interface for the RelationshipModule.

### RelationshipTypeSet

```solidity
event RelationshipTypeSet(string relType, address ipOrg, address src, enum LibRelationship.Relatables srcRelatable, uint256 srcSubtypesMask, address dst, enum LibRelationship.Relatables dstRelatable, uint256 dstSubtypesMask)
```

Emitted with a new Relationship Type definitions is created

### RelationshipTypeUnset

```solidity
event RelationshipTypeUnset(string relType, address ipOrg)
```

Emitted when a Relationship Type definition is removed

### RelationshipCreated

```solidity
event RelationshipCreated(uint256 relationshipId, string relType, address srcAddress, uint256 srcId, address dstAddress, uint256 dstId)
```

Emitted when a Relationship is created, linking 2 elements

### getRelationshipType

```solidity
function getRelationshipType(address ipOrg_, string relType_) external view returns (struct LibRelationship.RelationshipType)
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
| [0] | struct LibRelationship.RelationshipType | result the relationship type definition |

### getRelationship

```solidity
function getRelationship(uint256 relationshipId_) external view returns (struct LibRelationship.Relationship)
```

Gets relationship definition for a given relationship id

### getRelationshipId

```solidity
function getRelationshipId(struct LibRelationship.Relationship rel_) external view returns (uint256)
```

Gets relationship id for a given relationship

### relationshipExists

```solidity
function relationshipExists(struct LibRelationship.Relationship rel_) external view returns (bool)
```

Checks if a relationship has been set

