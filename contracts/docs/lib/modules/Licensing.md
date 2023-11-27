# Solidity API

## Licensing

### License

```solidity
struct License {
  bool isCommercial;
  enum Licensing.LicenseStatus status;
  address licensor;
  address revoker;
  address ipOrg;
  enum Licensing.LicenseeType licenseeType;
  uint256 ipaId;
  uint256 parentLicenseId;
  ShortString[] termIds;
  bytes[] termsData;
}
```

### LicenseStatus

```solidity
enum LicenseStatus {
  Unset,
  Active,
  Revoked,
  Pending
}
```

### LicenseCreation

```solidity
struct LicenseCreation {
  bool isCommercial;
  uint256 parentLicenseId;
}
```

### RegistryAddition

```solidity
struct RegistryAddition {
  bool isCommercial;
  enum Licensing.LicenseStatus status;
  address licensor;
  address revoker;
  address ipOrg;
  uint256 parentLicenseId;
  ShortString[] termIds;
  bytes[] termsData;
}
```

### LicenseeType

```solidity
enum LicenseeType {
  Unset,
  BoundToIpa,
  LNFTHolder
}
```

### CommercialStatus

```solidity
enum CommercialStatus {
  Unset,
  Commercial,
  NonCommercial,
  Both
}
```

### LicensingTerm

```solidity
struct LicensingTerm {
  enum Licensing.CommercialStatus comStatus;
  string url;
  string hash;
  string algorithm;
  contract IHook hook;
}
```

### TermsConfig

```solidity
struct TermsConfig {
  ShortString[] termIds;
  bytes[] termData;
}
```

### FrameworkConfig

```solidity
struct FrameworkConfig {
  struct Licensing.TermsConfig comTermsConfig;
  struct Licensing.TermsConfig nonComTermsConfig;
}
```

### LICENSING_FRAMEWORK_CONFIG

```solidity
bytes32 LICENSING_FRAMEWORK_CONFIG
```

Input for IpOrg legal terms configuration in LicensingModule (for now, the only option)

### CREATE_LICENSE

```solidity
bytes32 CREATE_LICENSE
```

### ACTIVATE_LICENSE

```solidity
bytes32 ACTIVATE_LICENSE
```

### BOND_LNFT_TO_IPA

```solidity
bytes32 BOND_LNFT_TO_IPA
```

