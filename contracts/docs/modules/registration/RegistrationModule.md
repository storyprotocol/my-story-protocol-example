# Solidity API

## RegistrationModule

Handles registration and transferring of IP assets..

### IPOrgAsset

```solidity
struct IPOrgAsset {
  address ipOrg;
  uint256 ipOrgAssetId;
}
```

### ipOrgAssets

```solidity
mapping(uint256 => struct RegistrationModule.IPOrgAsset) ipOrgAssets
```

Maps global IP asset Ids to IP Org wrapped assets.

### ipOrgConfigs

```solidity
mapping(address => struct Registration.IPOrgConfig) ipOrgConfigs
```

Maps IP Orgs to their IPA configuration settings.

### ipAssetId

```solidity
mapping(address => mapping(uint256 => uint256)) ipAssetId
```

Reverse lookup from IP Org asset to global IP asset ids.

### tokenUris

```solidity
mapping(address => mapping(uint256 => string)) tokenUris
```

IP Org asset to its tokenURI.

### constructor

```solidity
constructor(struct BaseModule.ModuleConstruction params_, address accessControl_) public
```

Initializes the registration module.

### registerHooks

```solidity
function registerHooks(enum HookRegistry.HookType hType_, contract IIPOrg ipOrg_, address[] hooks_, bytes[] hooksConfig_) external
```

Registers hooks for a specific type and IP Org.

_This function can only be called by the IP Org owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hType_ | enum HookRegistry.HookType | The type of the hooks to register. |
| ipOrg_ | contract IIPOrg | The IP Org for which the hooks are being registered. |
| hooks_ | address[] | The addresses of the hooks to register. |
| hooksConfig_ | bytes[] | The configurations for the hooks. |

### contractURI

```solidity
function contractURI(address ipOrg_) public view returns (string)
```

Gets the contract URI for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org. |

### tokenURI

```solidity
function tokenURI(address ipOrg_, uint256 ipOrgAssetId_) public view returns (string)
```

Renders metadata of an IP Asset localized for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org of the IP asset. |
| ipOrgAssetId_ | uint256 | The local id of the IP asset within the IP Org. |

### getIPAssetTypes

```solidity
function getIPAssetTypes(address ipOrg_) public view returns (string[])
```

### ownerOf

```solidity
function ownerOf(uint256 ipAssetId_) public view returns (address)
```

Gets the current owner of an IP asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAssetId_ | uint256 | The global IP asset id being queried. |

### _verifyExecution

```solidity
function _verifyExecution(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual
```

Verifies that the relationship execute() wants to set is valid according to its type definition

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | IPOrg address or zero address for protocol level relationships |
| caller_ | address |  |
| params_ | bytes | encoded params for module action |

### _configure

```solidity
function _configure(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes)
```

_Configures the registration settings for a specific IP Org._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | The IP Org being configured. |
| caller_ | address | The caller authorized to perform configuration. |
| params_ | bytes | Parameters passed for registration configuration. |

### _performAction

```solidity
function _performAction(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes)
```

Registers an IP Asset.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg |  |
| caller_ | address |  |
| params_ | bytes | encoded RegisterIPAParams for module action |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | encoded registry and IP Org id of the IP asset. |

### _registerIPAsset

```solidity
function _registerIPAsset(contract IIPOrg ipOrg_, address owner_, string name_, uint64 ipAssetType_, bytes32 hash_, string mediaUrl_) internal returns (uint256 ipAssetId_, uint256 ipOrgAssetId_)
```

_Registers a new IP asset and wraps it under the provided IP Org._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | The governing entity of the IP asset being registered. |
| owner_ | address | The initial registrant and owner of the IP asset. |
| name_ | string | A descriptive name for the IP asset being registered. |
| ipAssetType_ | uint64 | A numerical identifier for the IP asset type. |
| hash_ | bytes32 | The content hash of the IP asset being registered. |
| mediaUrl_ | string | The media URL of the IP asset being registered. |

### _transferIPAsset

```solidity
function _transferIPAsset(contract IIPOrg ipOrg_, uint256 ipOrgAssetId_, address from_, address to_) internal
```

_Transfers ownership of an IP asset to a new owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | The address of the currently governing IP Org. |
| ipOrgAssetId_ | uint256 | The local id of the IP asset within the IP Org. |
| from_ | address | The current owner of the IP asset within the IP Org. |
| to_ | address | The new owner of the IP asset within the IP Org. |

### _transferIPAssetToIPOrg

```solidity
function _transferIPAssetToIPOrg(address fromIpOrg_, uint256 fromIpOrgAssetId_, address toIpOrg_, address from_, address to_) internal returns (uint256 ipAssetId_, uint256 ipOrgAssetId_)
```

_Transfers an IP asset to a new governing IP Org._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromIpOrg_ | address | The address of the original governing IP Org. |
| fromIpOrgAssetId_ | uint256 | The existing id of the IP asset within the IP Org. |
| toIpOrg_ | address | The address of the new governing IP Org. TODO(leeren) Expose this function to FE once IP Orgs are finalized. |
| from_ | address |  |
| to_ | address |  |

### _addIPAssetTypes

```solidity
function _addIPAssetTypes(address ipOrg_, string[] ipAssetTypes_) internal
```

_Adds new IP asset types to an IP Org._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org whose asset types we are adding. |
| ipAssetTypes_ | string[] | String descriptors of the asset types being added. TODO: Add ability to deprecate asset types. |

### _setMetadata

```solidity
function _setMetadata(address ipOrg_, string baseURI_, string contractURI_) internal
```

_Sets the IPOrg token and contract metadata._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org whose metadata is changing. |
| baseURI_ | string | The new base URI to assign for the IP Org. |
| contractURI_ | string | The new base contract URI to assign for the IP Org. |

### _hookRegistryKey

```solidity
function _hookRegistryKey(contract IIPOrg ipOrg_, address, bytes) internal view virtual returns (bytes32)
```

