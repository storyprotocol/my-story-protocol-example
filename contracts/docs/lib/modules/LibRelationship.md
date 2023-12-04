# Solidity API

## LibRelationship

### Relatables

```solidity
enum Relatables {
  UNDEFINED,
  IPA,
  IPORG_ENTRY,
  LICENSE,
  ADDRESS,
  EXTERNAL_NFT
}
```

### RelatedElements

```solidity
struct RelatedElements {
  enum LibRelationship.Relatables src;
  enum LibRelationship.Relatables dst;
}
```

### Relationship

```solidity
struct Relationship {
  string relType;
  address srcAddress;
  address dstAddress;
  uint256 srcId;
  uint256 dstId;
}
```

### AddRelationshipTypeParams

```solidity
struct AddRelationshipTypeParams {
  string relType;
  address ipOrg;
  struct LibRelationship.RelatedElements allowedElements;
  uint8[] allowedSrcs;
  uint8[] allowedDsts;
}
```

### RelationshipType

```solidity
struct RelationshipType {
  address src;
  uint256 srcSubtypesMask;
  address dst;
  uint256 dstSubtypesMask;
}
```

### CreateRelationshipParams

```solidity
struct CreateRelationshipParams {
  string relType;
  address srcAddress;
  uint256 srcId;
  address dstAddress;
  uint256 dstId;
}
```

### PROTOCOL_LEVEL_RELATIONSHIP

```solidity
address PROTOCOL_LEVEL_RELATIONSHIP
```

### NO_ADDRESS_RESTRICTIONS

```solidity
address NO_ADDRESS_RESTRICTIONS
```

### ADD_REL_TYPE_CONFIG

```solidity
bytes32 ADD_REL_TYPE_CONFIG
```

### REMOVE_REL_TYPE_CONFIG

```solidity
bytes32 REMOVE_REL_TYPE_CONFIG
```

