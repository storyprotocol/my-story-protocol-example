# Solidity API

## TermCategories

List of Licensing Term categories

### CATEGORIZATION

```solidity
string CATEGORIZATION
```

### SHARE_ALIKE

```solidity
string SHARE_ALIKE
```

### ACTIVATION

```solidity
string ACTIVATION
```

### LICENSOR

```solidity
string LICENSOR
```

## TermIds

List of Protocol Term Ids (meaning the Licensing Module will have specific instructions
for these terms without the need of a decoder)

_must be < 32 bytes long, or they will blow up at some point
see https://docs.openzeppelin.com/contracts/4.x/api/utils#ShortStrings_

### NFT_SHARE_ALIKE

```solidity
string NFT_SHARE_ALIKE
```

### LICENSOR_APPROVAL

```solidity
string LICENSOR_APPROVAL
```

### FORMAT_CATEGORY

```solidity
string FORMAT_CATEGORY
```

### LICENSOR_IPORG_OR_PARENT

```solidity
string LICENSOR_IPORG_OR_PARENT
```

## TermsData

### LicensorConfig

```solidity
enum LicensorConfig {
  Unset,
  IpOrg,
  ParentLicensee
}
```

