# Solidity API

## LicenseRegistry

This contract is the source of truth for all licenses that are registered in the protocol.
It will only be called by licensing modules.
It should not be upgradeable, so once a license is registered, it will be there forever.
Licenses can be made invalid by the revoker, according to the terms of the license.

### LicenseRegistered

```solidity
event LicenseRegistered(uint256 id)
```

### LicenseNftBoundedToIpa

```solidity
event LicenseNftBoundedToIpa(uint256 licenseId, uint256 ipAssetId)
```

### LicenseActivated

```solidity
event LicenseActivated(uint256 licenseId)
```

### LicenseRevoked

```solidity
event LicenseRevoked(uint256 licenseId)
```

### IPA_REGISTRY

```solidity
contract IPAssetRegistry IPA_REGISTRY
```

### MODULE_REGISTRY

```solidity
contract ModuleRegistry MODULE_REGISTRY
```

### onlyLicensingModule

```solidity
modifier onlyLicensingModule()
```

### onlyActiveOrPending

```solidity
modifier onlyActiveOrPending(enum Licensing.LicenseStatus status_)
```

### constructor

```solidity
constructor(address ipaRegistry_, address moduleRegistry_) public
```

### addBoundToIpaLicense

```solidity
function addBoundToIpaLicense(struct Licensing.RegistryAddition params_, uint256 ipaId_) external returns (uint256)
```

Creates a License bound to a certain IPA

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params_ | struct Licensing.RegistryAddition | RegistryAddition params |
| ipaId_ | uint256 | id of the bound IPA |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | id of the created license |

### addTradeableLicense

```solidity
function addTradeableLicense(struct Licensing.RegistryAddition params_, address licensee_) external returns (uint256)
```

Creates a tradeable License NFT.
If the license is to create an IPA in the future, when registering, this license will be
bound to the IPA.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params_ | struct Licensing.RegistryAddition | RegistryAddition params |
| licensee_ | address | address of the licensee (and owner of the NFT) |

### getLicense

```solidity
function getLicense(uint256 id_) external view returns (struct Licensing.License)
```

Gets License struct for input id

### getLicensor

```solidity
function getLicensor(uint256 id_) external view returns (address)
```

Gets the address granting a license, by id

### getLicensee

```solidity
function getLicensee(uint256 id_) external view returns (address)
```

Gets the address a license is granted to

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id_ | uint256 | of the license |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | licensee address, NFT owner if the license is tradeable, or IPA owner if bound to IPA |

### bindLnftToIpa

```solidity
function bindLnftToIpa(uint256 licenseId_, uint256 ipaId_) external
```

Burns a license NFT and binds the license to an IPA

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| licenseId_ | uint256 | id of the license NFT |
| ipaId_ | uint256 | id of the IPA |

### isLicenseActive

```solidity
function isLicenseActive(uint256 licenseId_) public view returns (bool)
```

Checks if a license is active. If an ancestor is not active, the license is not active
NOTE: this method needs to be optimized, or moved to a merkle tree/scalability solution

### activateLicense

```solidity
function activateLicense(uint256 licenseId_) external
```

Called by the licensing module to activate a license, after all the activation terms pass

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| licenseId_ | uint256 | id of the license |

### revokeLicense

```solidity
function revokeLicense(uint256 licenseId_) external
```

Revokes a license, making it incactive. Only the revoker can do this.
NOTE: revoking licenses in an already inactive chain should be incentivized, since it
reduces the while loop iterations.

