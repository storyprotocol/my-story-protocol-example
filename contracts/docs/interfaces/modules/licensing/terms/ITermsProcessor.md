# Solidity API

## ITermsProcessor

Interface for licensing terms processors, which encode, decode and execute the terms set on an IERC5218 license parameters,
in particular the TermsProcessorConfig struct for the terms parameter in createLicense()

### executeTerms

```solidity
function executeTerms(bytes data_) external returns (bytes newData)
```

Executes the terms set on a license on creation.
This should be called after decodeTerms()

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| newData | bytes | the new data to be set on the license |

### termsExecutedSuccessfully

```solidity
function termsExecutedSuccessfully(bytes data_) external view returns (bool)
```

returns true if the terms have been executed successfully or they don't need to be executed, false otherwise

