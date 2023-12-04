# Solidity API

## StoryProtocol

The Story Protocol contract acts as a global gateway for calling all
        protocol-standardized IP actions (based on their enrolled modules).
        Most functions can be solely executed through this contract, as it will
        be actively maintained and upgraded to support all standardized modules.
        In the future, for more customized logic, IP Orgs may choose to create 
        their own frontend contracts (gateways) for IP interaction.

### IP_ORG_CONTROLLER

```solidity
contract IIPOrgController IP_ORG_CONTROLLER
```

### MODULE_REGISTRY

```solidity
contract ModuleRegistry MODULE_REGISTRY
```

### constructor

```solidity
constructor(contract IIPOrgController ipOrgController_, contract ModuleRegistry moduleRegistry_) public
```

### setMetadata

```solidity
function setMetadata(address ipOrg_, string baseURI_, string contractURI_) public
```

Sets the metadata for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being configured. |
| baseURI_ | string | The base token metadata URI for the IP Org. |
| contractURI_ | string | The contract URI associated with the IP Org. |

### addIPAssetTypes

```solidity
function addIPAssetTypes(address ipOrg_, string[] ipAssetTypes_) public
```

Adds additional IP asset types for an IP Org.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The address of the IP Org being configured. |
| ipAssetTypes_ | string[] | The new IP asset type descriptors to add. |

### registerIpOrg

```solidity
function registerIpOrg(address owner_, string name_, string symbol_, string[] ipAssetTypes_) external returns (address ipOrg_)
```

Registers a new IP Org

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner_ | address | The address of the IP Org to be registered. |
| name_ | string | A name to associate with the IP Org. |
| symbol_ | string | A symbol to associate with the IP Org. TODO: Add module configurations to the IP Org registration process. TODO: Add permissions for IP Org registration. |
| ipAssetTypes_ | string[] |  |

### registerIPAsset

```solidity
function registerIPAsset(address ipOrg_, struct Registration.RegisterIPAssetParams params_, bytes[] preHooksData_, bytes[] postHooksData_) public returns (uint256, uint256)
```

Transfers an IP asset to another owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The governing IP Org under which the IP asset is registered. |
| params_ | struct Registration.RegisterIPAssetParams | The registration params, including owner, name, hash. |
| preHooksData_ | bytes[] | Hooks to embed with the registration pre-call. |
| postHooksData_ | bytes[] | Hooks to embed with the registration post-call. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The global IP asset and local IP Org asset id. |
| [1] | uint256 |  |

### transferIPAsset

```solidity
function transferIPAsset(address ipOrg_, address from_, address to_, uint256 ipAssetId_, bytes[] preHooksData_, bytes[] postHooksData_) public
```

Transfers an IP asset to another owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | The IP Org which the IP asset is associated with. |
| from_ | address | The address of the current owner of the IP asset. |
| to_ | address | The address of the new owner of the IP asset. |
| ipAssetId_ | uint256 | The global id of the IP asset being transferred. |
| preHooksData_ | bytes[] |  |
| postHooksData_ | bytes[] |  |

### addRelationshipType

```solidity
function addRelationshipType(struct LibRelationship.AddRelationshipTypeParams params_) external
```

### removeRelationshipType

```solidity
function removeRelationshipType(address ipOrg_, string relType) external
```

### createRelationship

```solidity
function createRelationship(address ipOrg_, struct LibRelationship.CreateRelationshipParams params_, bytes[] preHooksData_, bytes[] postHooksData_) external returns (uint256 relId)
```

### configureIpOrgLicensing

```solidity
function configureIpOrgLicensing(address ipOrg_, struct Licensing.FrameworkConfig framework_) external
```

Allows an IPOrg to configure its licensing framework (collection of commercial and non-commercial terms)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | the ipOrg address |
| framework_ | struct Licensing.FrameworkConfig | licensing term id array, and matching term data array to configure them |

### createLicenseNft

```solidity
function createLicenseNft(address ipOrg_, struct Licensing.LicenseCreation params_, address licensee_, bytes[] preHooksData_, bytes[] postHooksData_) external returns (uint256)
```

Creates a tradeable License NFT in License Registry.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | the ipOrg address |
| params_ | struct Licensing.LicenseCreation | LicenseCreation params |
| licensee_ | address | address of the licensee (and owner of the NFT) |
| preHooksData_ | bytes[] | Hooks data to embed with the registration pre-call. |
| postHooksData_ | bytes[] | Hooks data to embed with the registration post-call. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | id of the created license |

### createIpaBoundLicense

```solidity
function createIpaBoundLicense(address ipOrg_, struct Licensing.LicenseCreation params_, uint256 ipaId_, bytes[] preHooksData_, bytes[] postHooksData_) external returns (uint256)
```

Creates a License bound to a certain IPA. It's not an NFT, the licensee will be the owner of the IPA.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | address | the ipOrg address |
| params_ | struct Licensing.LicenseCreation | LicenseCreation params |
| ipaId_ | uint256 | id of the bound IPA |
| preHooksData_ | bytes[] | Hooks data to embed with the registration pre-call. |
| postHooksData_ | bytes[] | Hooks data to embed with the registration post-call. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | id of the created license |

### activateLicense

```solidity
function activateLicense(address ipOrg_, uint256 licenseId_) external
```

### bindLnftToIpa

```solidity
function bindLnftToIpa(address ipOrg_, uint256 licenseId_, uint256 ipaId_) external
```

