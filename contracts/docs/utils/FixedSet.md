# Solidity API

## FixedSet

Library for Set data structures, based in OpenZeppelin's, with the following changes:
- Values cannot be removed from the set, so order is preserved
- Index of a value can be obtained
- Adds ShortString data type

### INDEX_NOT_FOUND

```solidity
uint256 INDEX_NOT_FOUND
```

### Set

```solidity
struct Set {
  bytes32[] _values;
  mapping(bytes32 => uint256) _indexes;
}
```

### Bytes32Set

```solidity
struct Bytes32Set {
  struct FixedSet.Set _inner;
}
```

### add

```solidity
function add(struct FixedSet.Bytes32Set set, bytes32 value) internal returns (bool)
```

_Add a value to a set. O(1).

Returns true if the value was added to the set, that is if it was not
already present._

### contains

```solidity
function contains(struct FixedSet.Bytes32Set set, bytes32 value) internal view returns (bool)
```

_Returns true if the value is in the set. O(1)._

### length

```solidity
function length(struct FixedSet.Bytes32Set set) internal view returns (uint256)
```

_Returns the number of values in the set. O(1)._

### at

```solidity
function at(struct FixedSet.Bytes32Set set, uint256 index) internal view returns (bytes32)
```

_Returns the value stored at position `index` in the set. O(1).

Note that there are no guarantees on the ordering of values inside the
array, and it may change when more values are added or removed.

Requirements:

- `index` must be strictly less than {length}._

### indexOf

```solidity
function indexOf(struct FixedSet.Bytes32Set set, bytes32 value) internal view returns (uint256)
```

_Returns the index of the value in the set, or INDEX_NOT_FOUND if not present. O(1)._

### values

```solidity
function values(struct FixedSet.Bytes32Set set) internal view returns (bytes32[])
```

_Return the entire set in an array

WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed
to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that
this function has an unbounded cost, and using it as part of a state-changing function may render the function
uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block._

### ShortStringSet

```solidity
struct ShortStringSet {
  struct FixedSet.Set _inner;
}
```

### add

```solidity
function add(struct FixedSet.ShortStringSet set, ShortString value) internal returns (bool)
```

_Add a value to a set. O(1).

Returns true if the value was added to the set, that is if it was not
already present._

### contains

```solidity
function contains(struct FixedSet.ShortStringSet set, ShortString value) internal view returns (bool)
```

_Returns true if the value is in the set. O(1)._

### length

```solidity
function length(struct FixedSet.ShortStringSet set) internal view returns (uint256)
```

_Returns the number of values in the set. O(1)._

### at

```solidity
function at(struct FixedSet.ShortStringSet set, uint256 index) internal view returns (ShortString)
```

_Returns the value stored at position `index` in the set. O(1).

Note that there are no guarantees on the ordering of values inside the
array, and it may change when more values are added or removed.

Requirements:

- `index` must be strictly less than {length}._

### indexOf

```solidity
function indexOf(struct FixedSet.ShortStringSet set, ShortString value) internal view returns (uint256)
```

_Returns the index of the value in the set, or INDEX_NOT_FOUND if not present. O(1)._

### values

```solidity
function values(struct FixedSet.ShortStringSet set) internal view returns (ShortString[])
```

_Return the entire set in an array

WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed
to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that
this function has an unbounded cost, and using it as part of a state-changing function may render the function
uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block._

### AddressSet

```solidity
struct AddressSet {
  struct FixedSet.Set _inner;
}
```

### add

```solidity
function add(struct FixedSet.AddressSet set, address value) internal returns (bool)
```

_Add a value to a set. O(1).

Returns true if the value was added to the set, that is if it was not
already present._

### contains

```solidity
function contains(struct FixedSet.AddressSet set, address value) internal view returns (bool)
```

_Returns true if the value is in the set. O(1)._

### length

```solidity
function length(struct FixedSet.AddressSet set) internal view returns (uint256)
```

_Returns the number of values in the set. O(1)._

### at

```solidity
function at(struct FixedSet.AddressSet set, uint256 index) internal view returns (address)
```

_Returns the value stored at position `index` in the set. O(1).

Note that there are no guarantees on the ordering of values inside the
array, and it may change when more values are added or removed.

Requirements:

- `index` must be strictly less than {length}._

### indexOf

```solidity
function indexOf(struct FixedSet.AddressSet set, address value) internal view returns (uint256)
```

_Returns the index of the value in the set, or INDEX_NOT_FOUND if not present. O(1)._

### values

```solidity
function values(struct FixedSet.AddressSet set) internal view returns (address[])
```

_Return the entire set in an array

WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed
to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that
this function has an unbounded cost, and using it as part of a state-changing function may render the function
uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block._

### UintSet

```solidity
struct UintSet {
  struct FixedSet.Set _inner;
}
```

### add

```solidity
function add(struct FixedSet.UintSet set, uint256 value) internal returns (bool)
```

_Add a value to a set. O(1).

Returns true if the value was added to the set, that is if it was not
already present._

### contains

```solidity
function contains(struct FixedSet.UintSet set, uint256 value) internal view returns (bool)
```

_Returns true if the value is in the set. O(1)._

### length

```solidity
function length(struct FixedSet.UintSet set) internal view returns (uint256)
```

_Returns the number of values in the set. O(1)._

### at

```solidity
function at(struct FixedSet.UintSet set, uint256 index) internal view returns (uint256)
```

_Returns the value stored at position `index` in the set. O(1).

Note that there are no guarantees on the ordering of values inside the
array, and it may change when more values are added or removed.

Requirements:

- `index` must be strictly less than {length}._

### indexOf

```solidity
function indexOf(struct FixedSet.AddressSet set, uint256 value) internal view returns (uint256)
```

_Returns the index of the value in the set, or INDEX_NOT_FOUND if not present. O(1)._

### values

```solidity
function values(struct FixedSet.UintSet set) internal view returns (uint256[])
```

_Return the entire set in an array

WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed
to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that
this function has an unbounded cost, and using it as part of a state-changing function may render the function
uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block._

