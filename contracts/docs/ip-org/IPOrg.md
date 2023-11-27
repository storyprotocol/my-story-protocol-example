# Solidity API

## IPOrg

IP Asset Organization
TODO(leeren): Deprecate upgradeability once the IPOrg contracts is finalized.

### lastIndex

```solidity
uint256 lastIndex
```

Tracks the last index of the IP asset wrapper.

### totalSupply

```solidity
uint256 totalSupply
```

Tracks the total number of IP Assets owned by the IP org.

### MODULE_REGISTRY

```solidity
contract IModuleRegistry MODULE_REGISTRY
```

### CONTROLLER

```solidity
address CONTROLLER
```

### onlyRegistrationModule

```solidity
modifier onlyRegistrationModule()
```

Restricts calls to being through the registration module.

### constructor

```solidity
constructor(address controller_, address moduleRegistry_) public
```

Creates the IP Org implementation contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| controller_ | address | Address of the IP Org controller. |
| moduleRegistry_ | address | Address of the IP asset module registry. |

### owner

```solidity
function owner() external view returns (address)
```

Retrieves the current owner of the IP Org.

### ownerOf

```solidity
function ownerOf(uint256 id) public view returns (address)
```

Gets the current owner of an IP asset within the IP Org.

### tokenURI

```solidity
function tokenURI(uint256 tokenId_) public view returns (string)
```

Retrieves the token URI for an IP Asset within the IP Asset Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId_ | uint256 | The id of the IP Asset within the IP Asset Org. |

### contractURI

```solidity
function contractURI() public view returns (string)
```

Retrieves the contract URI for the IP Org collection.

### ipAssetId

```solidity
function ipAssetId(uint256 id) public returns (uint256)
```

Gets the global IP asset id associated with this IP Org asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The local id of the IP Org wrapped IP asset. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The global identifier of the IP asset. |

### initialize

```solidity
function initialize(string name_, string symbol_) public
```

Initializes an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name_ | string | Name to assign to the IP Org. |
| symbol_ | string | Symbol to assign to the IP Org. |

### mint

```solidity
function mint(address owner_) public returns (uint256 id)
```

Registers a new IP Asset wrapper for the IP Org.

### burn

```solidity
function burn(uint256 id) public
```

Burns an IP Asset wrapper of the IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The identifier of the IP asset wrapper being burned. |

### transferFrom

```solidity
function transferFrom(address from_, address to_, uint256 id_) public
```

Transfers ownership of an IP Asset within an Org to a new owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from_ | address | The original owner of the IP asset in the IP Org. |
| to_ | address | The new owner of the IP asset in the IP Org. |
| id_ | uint256 | The identifier of the IP asset within the IP Org. |

