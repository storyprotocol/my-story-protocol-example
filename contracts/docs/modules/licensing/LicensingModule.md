# Solidity API

## LicensingModule

Story Protocol module that:
- Enables each IP Org to select a collection of terms from the TermsRepository to form
  their licensing framework.
- Enables Other modules to attach licensing terms to IPAs
- Enables license holders to create derivative licenses
Thanks to ERC-5218 authors for inspiration (see https://eips.ethereum.org/EIPS/eip-5218)

### IpOrgTermsSet

```solidity
event IpOrgTermsSet(address ipOrg, bool commercial, ShortString[] termIds, bytes[] termData)
```

### TERMS_REPOSITORY

```solidity
contract TermsRepository TERMS_REPOSITORY
```

### constructor

```solidity
constructor(struct BaseModule.ModuleConstruction params_, address termRepository_) public
```

### isShareAlikeOn

```solidity
function isShareAlikeOn(bool commercial_, address ipOrg_) external view returns (bool)
```

Returns true if the share alike term is on for this ipOrg and commercial status,

### getLicensorConfig

```solidity
function getLicensorConfig(bool commercial_, address ipOrg_) external view returns (enum TermsData.LicensorConfig)
```

Returns the licensor config for an ipOrg and commercial status

### isLicensorAppovalOn

```solidity
function isLicensorAppovalOn(bool commercial_, address ipOrg_) external view returns (bool)
```

Returns true if the licensor approval is needed for this ipOrg and commercial
status, false otherwise

### ipOrgAllowsCommercial

```solidity
function ipOrgAllowsCommercial(address ipOrg_) public view returns (bool)
```

Returns true if the ipOrg has commercial terms configured, false otherwise

### getIpOrgTerms

```solidity
function getIpOrgTerms(bool commercial_, address ipOrg_) public view returns (ShortString[], bytes[])
```

Get all term ids configured for an ipOrg, along the config data

_WARNING: this will copy all term ids to memory, it can be expensive_

### getTotalIpOrgTerms

```solidity
function getTotalIpOrgTerms(bool commercial_, address ipOrg_) public view returns (uint256)
```

Get the number of terms configured for an ipOrg

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| commercial_ | bool | true for commercial terms, false for non-commercial terms |
| ipOrg_ | address | the ipOrg address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the number of terms configured for the ipOrg |

### ipOrgTermsContains

```solidity
function ipOrgTermsContains(bool commercial_, address ipOrg_, ShortString termId_) public view returns (bool)
```

Check if an ipOrg has a term configured

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| commercial_ | bool | true for commercial terms, false for non-commercial terms |
| ipOrg_ | address | the ipOrg address |
| termId_ | ShortString | the term id |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the term is configured, false otherwise |

### ipOrgTermData

```solidity
function ipOrgTermData(bool commercial_, address ipOrg_, ShortString termId_) public view returns (bytes)
```

Get the data for a term configured for an ipOrg

_method will revert if the term is not configured_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| commercial_ | bool | true for commercial terms, false for non-commercial terms |
| ipOrg_ | address | the ipOrg address |
| termId_ | ShortString | the term id |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | the term data |

### ipOrgTermsAt

```solidity
function ipOrgTermsAt(bool commercial_, address ipOrg_, uint256 index_) public view returns (ShortString termId, bytes data)
```

Gets the pair of ipOrg term Id and data at a certain index

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| commercial_ | bool | true for commercial terms, false for non-commercial terms |
| ipOrg_ | address | the ipOrg address |
| index_ | uint256 | the index |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| termId | ShortString | term Id |
| data | bytes | the term data |

### _verifyExecution

```solidity
function _verifyExecution(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual
```

Module entrypoing to verify execution call

### _performAction

```solidity
function _performAction(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes result)
```

Module entrypoint to create licenses

### _configure

```solidity
function _configure(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes)
```

Module entrypoint for configuration. It allows an IPOrg to set licensing term

### _setIpOrgFramework

```solidity
function _setIpOrgFramework(contract IIPOrg ipOrg_, address caller_, bytes params_) internal virtual returns (bytes)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | the ipOrg contract interface |
| caller_ | address | address requesting execution |
| params_ | bytes | encoded Licensing.FrameworkConfig struct |

### _setTerms

```solidity
function _setTerms(bool commercial_, bytes32 termsKey_, struct Licensing.TermsConfig termsConfig_, struct FixedSet.ShortStringSet ipOrgTermIds_, bytes[] ipOrgTermData_) internal
```

Validate input licensing terms and populate ipOrg licensing framework

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| commercial_ | bool | true for commercial terms, false for non-commercial terms |
| termsKey_ | bytes32 | key to the ipOrg terms |
| termsConfig_ | struct Licensing.TermsConfig | arrays for termIds and their ipOrg level config data |
| ipOrgTermIds_ | struct FixedSet.ShortStringSet | ipOrg terms set, where the termIds will be added |
| ipOrgTermData_ | bytes[] | ipOrg config data for terms, where the term data will be added |

### _hookRegistryKey

```solidity
function _hookRegistryKey(contract IIPOrg ipOrg_, address caller_, bytes params_) internal view virtual returns (bytes32)
```

_Generates a registry key based on module execution parameters.
This function should be overridden in derived contracts to provide the actual logic for generating the registry key._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipOrg_ | contract IIPOrg | The address of the IPOrg. |
| caller_ | address | The address requesting the execution. |
| params_ | bytes | The encoded parameters for module action. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | The generated registry key. |

