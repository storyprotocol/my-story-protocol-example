# Solidity API

## Errors

Library for all contract errors, including a set of global errors.

### EmptyArray

```solidity
error EmptyArray()
```

The provided array may not be empty.

### LengthMismatch

```solidity
error LengthMismatch()
```

The arrays may not have a mismatch in length.

### MissingRole

```solidity
error MissingRole(bytes32 role, address account)
```

The provided role does not exist for the given account.

### NonExistentID

```solidity
error NonExistentID(uint256 id)
```

The provided identifier does not exist.

### Unauthorized

```solidity
error Unauthorized()
```

The caller is not authorized to perform the call.

### UnsupportedInterface

```solidity
error UnsupportedInterface(string name)
```

The provided interface is not supported.

### ZeroAddress

```solidity
error ZeroAddress()
```

The zero address may not be used as input.

### ZeroAmount

```solidity
error ZeroAmount()
```

The amount specified may not be zero.

### BaseModule_HooksParamsLengthMismatch

```solidity
error BaseModule_HooksParamsLengthMismatch(uint8 hookType)
```

### BaseModule_ZeroIpaRegistry

```solidity
error BaseModule_ZeroIpaRegistry()
```

### BaseModule_ZeroModuleRegistry

```solidity
error BaseModule_ZeroModuleRegistry()
```

### BaseModule_ZeroLicenseRegistry

```solidity
error BaseModule_ZeroLicenseRegistry()
```

### BaseModule_OnlyModuleRegistry

```solidity
error BaseModule_OnlyModuleRegistry()
```

### HookRegistry_RegisteringDuplicatedHook

```solidity
error HookRegistry_RegisteringDuplicatedHook()
```

The hook is already registered.

### HookRegistry_RegisteringZeroAddressHook

```solidity
error HookRegistry_RegisteringZeroAddressHook()
```

This error is thrown when trying to register a hook with the address 0.

### HookRegistry_CallerNotIPOrgOwner

```solidity
error HookRegistry_CallerNotIPOrgOwner()
```

This error is thrown when the caller is not IP Org owner.

### HookRegistry_MaxHooksExceeded

```solidity
error HookRegistry_MaxHooksExceeded()
```

This error is thrown when trying to register more than the maximum allowed number of hooks.

### HookRegistry_HooksConfigLengthMismatch

```solidity
error HookRegistry_HooksConfigLengthMismatch()
```

This error is thrown when the length of the hooks configuration array does not match the length of the hooks array.

### HookRegistry_IndexOutOfBounds

```solidity
error HookRegistry_IndexOutOfBounds(uint256 hooksIndex)
```

This error is thrown when the provided index is out of bounds of the hooks array.

### BaseRelationshipProcessor_OnlyRelationshipModule

```solidity
error BaseRelationshipProcessor_OnlyRelationshipModule()
```

Call may only be processed by the relationship module.

### ModuleRegistry_ModuleNotRegistered

```solidity
error ModuleRegistry_ModuleNotRegistered(string moduleName)
```

### ModuleRegistry_CallerNotOrgOwner

```solidity
error ModuleRegistry_CallerNotOrgOwner()
```

### CollectModule_CallerUnauthorized

```solidity
error CollectModule_CallerUnauthorized()
```

Collect module caller is unauthorized.

### CollectModule_CollectNotYetInitialized

```solidity
error CollectModule_CollectNotYetInitialized()
```

Collect NFT has already been initialized.

### CollectModule_CollectUnauthorized

```solidity
error CollectModule_CollectUnauthorized()
```

Collect action is not authorized for the collect module.

### CollectModule_IPAssetAlreadyInitialized

```solidity
error CollectModule_IPAssetAlreadyInitialized()
```

Collect module IP asset is already initialized.

### CollectModule_IPAssetNonExistent

```solidity
error CollectModule_IPAssetNonExistent()
```

Collect module IP asset does not exist.

### CollectModule_IPOrgNonExistent

```solidity
error CollectModule_IPOrgNonExistent()
```

Collect module provided IP asset registry does not exist.

### CollectPaymentModule_AmountInvalid

```solidity
error CollectPaymentModule_AmountInvalid()
```

The configured collect module payment amount is invalid.

### CollectPaymentModule_ERC20TransferFailed

```solidity
error CollectPaymentModule_ERC20TransferFailed()
```

The ERC-20 transfer failed when processing the payment collect.

### CollectPaymentModule_ERC20TransferInvalidABIEncoding

```solidity
error CollectPaymentModule_ERC20TransferInvalidABIEncoding()
```

The collect ERC-20 transfer was not properly ABI-encoded.

### CollectPaymentModule_ERC20TransferInvalidReturnValue

```solidity
error CollectPaymentModule_ERC20TransferInvalidReturnValue()
```

The collect ERC-20 transfer returned a non-successful value.

### CollectPaymentModule_InvalidSettings

```solidity
error CollectPaymentModule_InvalidSettings()
```

Invalid settings were configured for the collect payment module.

### CollectPaymentModule_NativeTokenNotAllowed

```solidity
error CollectPaymentModule_NativeTokenNotAllowed()
```

Native tokens are not allowed for the configured payment module.

### CollectPaymentModule_NativeTransferFailed

```solidity
error CollectPaymentModule_NativeTransferFailed()
```

Native tokens failed to transfer for the payment collect.

### CollectPaymentModule_PaymentParamsInvalid

```solidity
error CollectPaymentModule_PaymentParamsInvalid()
```

Invalid parameters were passed in to the payment collect.

### CollectPaymentModule_PaymentInsufficient

```solidity
error CollectPaymentModule_PaymentInsufficient()
```

Insufficient funds were provided for the payment collect.

### CollectPaymentModule_TokenInvalid

```solidity
error CollectPaymentModule_TokenInvalid()
```

The token provided for the payment collect is invalid.

### CollectNFT_AlreadyInitialized

```solidity
error CollectNFT_AlreadyInitialized()
```

Collect NFT has already been initialized.

### CollectNFT_CallerUnauthorized

```solidity
error CollectNFT_CallerUnauthorized()
```

Caller of the Collect NFT is not authorized.

### CollectNFT_CollectorInvalid

```solidity
error CollectNFT_CollectorInvalid()
```

Collector address is not valid.

### CollectNFT_IPAssetNonExistent

```solidity
error CollectNFT_IPAssetNonExistent()
```

IP asset bound to the Collect NFT does not exist.

### ERC721_OwnerInvalid

```solidity
error ERC721_OwnerInvalid()
```

Originating address does not own the NFT.

### ERC721_ReceiverInvalid

```solidity
error ERC721_ReceiverInvalid()
```

Receiving address cannot be the zero address.

### ERC721_SafeTransferUnsupported

```solidity
error ERC721_SafeTransferUnsupported()
```

Receiving contract does not implement the ERC-721 wallet interface.

### ERC721_SenderUnauthorized

```solidity
error ERC721_SenderUnauthorized()
```

Sender is not NFT owner, approved address, or owner operator.

### ERC721_TokenAlreadyMinted

```solidity
error ERC721_TokenAlreadyMinted()
```

Token has already been minted.

### ERC721_TokenNonExistent

```solidity
error ERC721_TokenNonExistent()
```

NFT does not exist.

### IPAccountImpl_CallerNotOwner

```solidity
error IPAccountImpl_CallerNotOwner()
```

IP account caller is not the owner.

### IPAccountRegistry_NonExistentIpAccountImpl

```solidity
error IPAccountRegistry_NonExistentIpAccountImpl()
```

IP account implementation does not exist.

### IPAccountRegistry_InitializationFailed

```solidity
error IPAccountRegistry_InitializationFailed()
```

IP account initialization failed.

### LibUintArrayMask_EmptyArray

```solidity
error LibUintArrayMask_EmptyArray()
```

### IPOrg_IdOverBounds

```solidity
error IPOrg_IdOverBounds()
```

IP identifier is over bounds.

### IPOrg_LicensingNotConfigured

```solidity
error IPOrg_LicensingNotConfigured()
```

Licensing is not configured.

### IPOrg_IdDoesNotExist

```solidity
error IPOrg_IdDoesNotExist()
```

IP Org wrapper id does not exist.

### IPOrgController_InvalidOwner

```solidity
error IPOrgController_InvalidOwner()
```

The caller is not the owner of the IP Org Controller.

### IPOrgController_IPOrgNonExistent

```solidity
error IPOrgController_IPOrgNonExistent()
```

IP Org does not exist.

### IPOrgController_InvalidIPOrgOwner

```solidity
error IPOrgController_InvalidIPOrgOwner()
```

The caller is not the authorized IP Org owner.

### IPOrgController_InvalidNewIPOrgOwner

```solidity
error IPOrgController_InvalidNewIPOrgOwner()
```

The new owner for an IP Org may not be the zero address.

### IPOrgController_OwnerTransferUninitialized

```solidity
error IPOrgController_OwnerTransferUninitialized()
```

The owner transfer has not yet been initialized.

### LibDuration_CallerNotRenewer

```solidity
error LibDuration_CallerNotRenewer()
```

The caller is not the designated renwer.

### LibDuration_InvalidStartTime

```solidity
error LibDuration_InvalidStartTime()
```

The start time is not valid.

### LibDuration_NotRenewable

```solidity
error LibDuration_NotRenewable()
```

The proposed license is not renewable.

### LibDuration_ZeroTTL

```solidity
error LibDuration_ZeroTTL()
```

A zero TTL may not be used for configuration.

### TermsRegistry_UnsupportedTermCategory

```solidity
error TermsRegistry_UnsupportedTermCategory()
```

### TermsRegistry_UnsupportedTerm

```solidity
error TermsRegistry_UnsupportedTerm()
```

### TermsRegistry_TermAlreadyExists

```solidity
error TermsRegistry_TermAlreadyExists()
```

### TermsRegistry_CommercialStatusUnset

```solidity
error TermsRegistry_CommercialStatusUnset()
```

### LicensingModule_CallerNotIpOrgOwner

```solidity
error LicensingModule_CallerNotIpOrgOwner()
```

The franchise does not exist.

### LicensingModule_InvalidConfigType

```solidity
error LicensingModule_InvalidConfigType()
```

### LicensingModule_InvalidTermCommercialStatus

```solidity
error LicensingModule_InvalidTermCommercialStatus()
```

### LicensingModule_IpOrgFrameworkAlreadySet

```solidity
error LicensingModule_IpOrgFrameworkAlreadySet()
```

### LicensingModule_DuplicateTermId

```solidity
error LicensingModule_DuplicateTermId()
```

### LicensingModule_CommercialLicenseNotAllowed

```solidity
error LicensingModule_CommercialLicenseNotAllowed()
```

### LicensingModule_NonCommercialTermsRequired

```solidity
error LicensingModule_NonCommercialTermsRequired()
```

### LicensingModule_IpOrgNotConfigured

```solidity
error LicensingModule_IpOrgNotConfigured()
```

### LicensingModule_ipOrgTermNotFound

```solidity
error LicensingModule_ipOrgTermNotFound()
```

### LicensingModule_ShareAlikeDisabled

```solidity
error LicensingModule_ShareAlikeDisabled()
```

### LicensingModule_InvalidAction

```solidity
error LicensingModule_InvalidAction()
```

### LicensingModule_CallerNotLicensor

```solidity
error LicensingModule_CallerNotLicensor()
```

### LicensingModule_ParentLicenseNotActive

```solidity
error LicensingModule_ParentLicenseNotActive()
```

### LicensingModule_InvalidIpa

```solidity
error LicensingModule_InvalidIpa()
```

### LicensingModule_CallerNotLicenseOwner

```solidity
error LicensingModule_CallerNotLicenseOwner()
```

### LicensingModule_CantFindParentLicenseOrRelatedIpa

```solidity
error LicensingModule_CantFindParentLicenseOrRelatedIpa()
```

### LicensingModule_InvalidLicenseeType

```solidity
error LicensingModule_InvalidLicenseeType()
```

### LicensingModule_InvalidLicensorType

```solidity
error LicensingModule_InvalidLicensorType()
```

### LicenseRegistry_ZeroIpaRegistryAddress

```solidity
error LicenseRegistry_ZeroIpaRegistryAddress()
```

### LicenseRegistry_UnknownLicenseId

```solidity
error LicenseRegistry_UnknownLicenseId()
```

### LicenseRegistry_NotLicenseNFT

```solidity
error LicenseRegistry_NotLicenseNFT()
```

### LicenseRegistry_InvalidIpa

```solidity
error LicenseRegistry_InvalidIpa()
```

### LicenseRegistry_ZeroModuleRegistryAddress

```solidity
error LicenseRegistry_ZeroModuleRegistryAddress()
```

### LicenseRegistry_CallerNotLicensingModule

```solidity
error LicenseRegistry_CallerNotLicensingModule()
```

### LicenseRegistry_CallerNotRevoker

```solidity
error LicenseRegistry_CallerNotRevoker()
```

### LicenseRegistry_LicenseNotPending

```solidity
error LicenseRegistry_LicenseNotPending()
```

### LicenseRegistry_InvalidLicenseStatus

```solidity
error LicenseRegistry_InvalidLicenseStatus()
```

### RegistrationModule_CallerNotAuthorized

```solidity
error RegistrationModule_CallerNotAuthorized()
```

The caller is not authorized to perform registration.

### RegistrationModule_InvalidCaller

```solidity
error RegistrationModule_InvalidCaller()
```

The configured caller is invalid.

### RegistrationModule_IPAssetNonExistent

```solidity
error RegistrationModule_IPAssetNonExistent()
```

The IP asset does not exist.

### RegistrationModule_IPOrgNotConfigured

```solidity
error RegistrationModule_IPOrgNotConfigured()
```

The registration module for the IP Org was not yet configured.

### RegistrationModule_InvalidConfigOperation

```solidity
error RegistrationModule_InvalidConfigOperation()
```

The registration configuration action is not valid.

### RegistrationModule_InvalidExecutionOperation

```solidity
error RegistrationModule_InvalidExecutionOperation()
```

The registration execution action is not valid.

### RegistrationModule_InvalidIPAssetType

```solidity
error RegistrationModule_InvalidIPAssetType()
```

IP asset type is not in the list of supported types for
the IP Org.

### RegistrationModule_TooManyAssetTypes

```solidity
error RegistrationModule_TooManyAssetTypes()
```

IPAsset types provided are more than the maximum allowed.

### RelationshipModule_CannotRelateToOtherIPOrg

```solidity
error RelationshipModule_CannotRelateToOtherIPOrg()
```

Unable to relate to another franchise.

### RelationshipModule_IntentAlreadyRegistered

```solidity
error RelationshipModule_IntentAlreadyRegistered()
```

The intent has already been registered.

### RelationshipModule_InvalidTTL

```solidity
error RelationshipModule_InvalidTTL()
```

The selected TTL is not valid.

### RelationshipModule_InvalidEndTimestamp

```solidity
error RelationshipModule_InvalidEndTimestamp()
```

The selected end timestamp is not valid.

### RelationshipModule_NonExistingRelationship

```solidity
error RelationshipModule_NonExistingRelationship()
```

Relationship does not exist.

### RelationshipModule_UnsupportedRelationshipSrc

```solidity
error RelationshipModule_UnsupportedRelationshipSrc()
```

The relationship source IP type is not supported.

### RelationshipModule_UnsupportedRelationshipDst

```solidity
error RelationshipModule_UnsupportedRelationshipDst()
```

The relationship destination IP type is not supported.

### RelationshipModule_InvalidConfigOperation

```solidity
error RelationshipModule_InvalidConfigOperation()
```

Trying an unsupported config action

### RelationshipModule_CallerNotIpOrgOwner

```solidity
error RelationshipModule_CallerNotIpOrgOwner()
```

Unauthorized caller

### RelationshipModule_InvalidRelatable

```solidity
error RelationshipModule_InvalidRelatable()
```

Value not on Relatable enum

### RelationshipModule_RelTypeNotSet

```solidity
error RelationshipModule_RelTypeNotSet(string relType)
```

Getting an invalid relationship type

### RelationshipModule_InvalidSrcAddress

```solidity
error RelationshipModule_InvalidSrcAddress()
```

Relating invalid src addresss

### RelationshipModule_InvalidDstAddress

```solidity
error RelationshipModule_InvalidDstAddress()
```

Relating invalid dst addresss

### RelationshipModule_InvalidSrcId

```solidity
error RelationshipModule_InvalidSrcId()
```

Relating unsupported src ipOrg asset type

### RelationshipModule_InvalidDstId

```solidity
error RelationshipModule_InvalidDstId()
```

Relating unsupported dst ipOrg asset type

### RelationshipModule_IpOrgRelatableCannotBeProtocolLevel

```solidity
error RelationshipModule_IpOrgRelatableCannotBeProtocolLevel()
```

For IPORG_ENTRY - IPORG_ENTRY relationships,
ipOrg address must be set

### RelationshipModule_UnsupportedIpOrgIndexType

```solidity
error RelationshipModule_UnsupportedIpOrgIndexType()
```

Index is not found for the asset types of that IP Org.

### RoyaltyNFT_AccountsAndAllocationsMismatch

```solidity
error RoyaltyNFT_AccountsAndAllocationsMismatch(uint256 accountsLength, uint256 allocationsLength)
```

Mismatch between parity of accounts and their respective allocations.

### RoyaltyNFT_InvalidAllocationsSum

```solidity
error RoyaltyNFT_InvalidAllocationsSum(uint32 allocationsSum)
```

Invalid summation for royalty NFT allocations.

### Hook_UnsupportedSyncOperation

```solidity
error Hook_UnsupportedSyncOperation()
```

The sync operation is not supported in Async hooks.

### Hook_UnsupportedAsyncOperation

```solidity
error Hook_UnsupportedAsyncOperation()
```

The async operation is not supported in Sync hooks.

### Hook_OnlyCallbackCallerCanCallback

```solidity
error Hook_OnlyCallbackCallerCanCallback(address current, address expected)
```

The callback function can only called by designated callback caller.

### Hook_InvalidAsyncRequestId

```solidity
error Hook_InvalidAsyncRequestId(bytes32 invalidRequestId)
```

Invalid async request ID.

### TokenGatedHook_NotTokenOwner

```solidity
error TokenGatedHook_NotTokenOwner(address tokenAddress, address ownerAddress)
```

The address is not the owner of the token.

### LicensorApprovalHook_ApprovalAlreadyRequested

```solidity
error LicensorApprovalHook_ApprovalAlreadyRequested()
```

### LicensorApprovalHook_InvalidLicensor

```solidity
error LicensorApprovalHook_InvalidLicensor()
```

### LicensorApprovalHook_InvalidLicenseId

```solidity
error LicensorApprovalHook_InvalidLicenseId()
```

### LicensorApprovalHook_NoApprovalRequested

```solidity
error LicensorApprovalHook_NoApprovalRequested()
```

### LicensorApprovalHook_InvalidResponseStatus

```solidity
error LicensorApprovalHook_InvalidResponseStatus()
```

