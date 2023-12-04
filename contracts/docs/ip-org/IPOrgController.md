# Solidity API

## IPOrgController

The IP Org Controller is the protocol-wide factory contract for creating
        and tracking IP Orgs. On top of this, it acts as the ownership controller
        for IP Orgs, allowing orgs to transfer ownership through a 2-step process.

### IPOrgRecord

```solidity
struct IPOrgRecord {
  bool registered;
  address owner;
  address pendingOwner;
}
```

### IPOrgControllerStorage

```solidity
struct IPOrgControllerStorage {
  mapping(address => struct IPOrgController.IPOrgRecord) ipOrgs;
  address owner;
}
```

### MODULE_REGISTRY

```solidity
address MODULE_REGISTRY
```

The IP asset module registry.

### IP_ORG_IMPL

```solidity
address IP_ORG_IMPL
```

The IP Org implementation address.

### constructor

```solidity
constructor(address moduleRegistry_) public
```

Creates the IP Org Controller contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| moduleRegistry_ | address | Address of the IP asset module registry. |

### initialize

```solidity
function initialize(address accessControl_) public
```

Initializes the IP Org Controller

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControl_ | address | Address of the contract responsible for access control. TODO(leeren): Deprecate this function in favor of an immutable factory. |

### ownerOf

```solidity
function ownerOf(address ipOrg_) external view returns (address)
```

Retrieves the current owner of an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being queried. |

### isIpOrg

```solidity
function isIpOrg(address ipOrg_) external view returns (bool)
```

Returns whether an IP Org has been officially registered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being queried. |

### pendingOwnerOf

```solidity
function pendingOwnerOf(address ipOrg_) external view returns (address pendingOwner)
```

Retrieves the pending owner of an IP Org.

_A zero return address implies no ownership transfer is in process._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being queried. |

### transferOwner

```solidity
function transferOwner(address ipOrg_, address newOwner_) external
```

Initiates transfer of ownership for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org transferring ownership. |
| newOwner_ | address | The address of the new IP Org owner. |

### cancelOwnerTransfer

```solidity
function cancelOwnerTransfer(address ipOrg_) external
```

Cancels the transferring of ownership of an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org transferring ownership. |

### acceptOwnerTransfer

```solidity
function acceptOwnerTransfer(address ipOrg_) external
```

Accepts the transferring of ownership of an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being transferred. |

### registerIpOrg

```solidity
function registerIpOrg(address owner_, string name_, string symbol_, string[] ipAssetTypes_) public returns (address ipOrg_)
```

Registers a new IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner_ | address | The address of the IP Org to be registered. |
| name_ | string | The name to associated with the new IP Org. |
| symbol_ | string | The symbol to associate with the new IP Org. TODO: Add module configurations to the IP Org registration process. TODO: Add authorization for IP Org registration. |
| ipAssetTypes_ | string[] |  |

### _ipOrgRecord

```solidity
function _ipOrgRecord(address ipOrg_) internal view returns (struct IPOrgController.IPOrgRecord record)
```

_Gets the ownership record of an IP Org._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being queried. |

### _assertIPOrgExists

```solidity
function _assertIPOrgExists(address ipOrg_) internal view
```

_Checks whether an IP Org exists, throwing if not._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being queried. |

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address) internal virtual
```

_Authorizes upgrade to a new contract address via UUPS._

