// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.19;

import { SyncBaseHook } from "contracts/hooks/base/SyncBaseHook.sol";
import { Whitelist } from "contracts/hooks/Whitelist.sol";
import { IPOrgWhitelist } from "contracts/lib/hooks/IPOrgWhitelist.sol";
import { Errors } from "contracts/lib/Errors.sol";
import { ERC165Checker } from "@openzeppelin/contracts/utils/introspection/ERC165Checker.sol";

/// @title IPOrgWhitelistHook
/// @notice This contract is a hook that ensure the address is whitelisted to perform actions in a module
/// @dev It extends SyncBaseHook and provides the implementation for validating the config and executing the hook.
///      It also implements the functions for managing whitelist for the IP Org.
///      To follow the developer's guide, please place this file at ${PROJECT_ROOT}/contracts/hooks before compiling.
contract IPOrgWhitelistHook is SyncBaseHook {
    using ERC165Checker for address;

    /// @notice Constructs the IPOrgWhitelistHook contract.
    /// @param accessControl_ The address of the access control contract.
    constructor(address accessControl_) SyncBaseHook(accessControl_) {}

    /// @notice Validates the configuration for the hook.
    /// @dev This function checks if the provided address is for a whitelist contract.
    /// @param hookConfig_ The configuration data for the hook.
    function _validateConfig(bytes memory hookConfig_) internal view override {
        IPOrgWhitelist.Config memory config = abi.decode(
            hookConfig_,
            (IPOrgWhitelist.Config)
        );
        address whitelistAddress = config.whitelistAddress;
        if (whitelistAddress == address(0)) {
            revert Errors.ZeroAddress();
        }

        // Verify the owner is not address(0)
        if (Whitelist(whitelistAddress).owner() == address(0)) {
            revert Errors.UnsupportedInterface("Whitelist");
        }
    }

    /// @notice Executes IPOrg whitelist check in a synchronous manner.
    /// @dev This function checks if the executor address is whitelisted.
    /// @param hookConfig_ The configuration of the hook.
    /// @param hookParams_ The parameters for the hook.
    /// @return hookData always return empty string as no return data from this hook.
    function _executeSyncCall(
        bytes memory hookConfig_,
        bytes memory hookParams_
    ) internal virtual override returns (bytes memory) {
        IPOrgWhitelist.Config memory config = abi.decode(
            hookConfig_,
            (IPOrgWhitelist.Config)
        );
        IPOrgWhitelist.Params memory params = abi.decode(
            hookParams_,
            (IPOrgWhitelist.Params)
        );

        address executor = params.executor;
        if (executor == address(0)) {
            revert Errors.ZeroAddress();
        }

        // Check if the executor is whitelisted
        address whitelistAddress = config.whitelistAddress;
        if (!Whitelist(whitelistAddress).canPerformAction(executor)) {
            revert Errors.IPOrgWhitelistHook_NotWhitelisted(
                executor,
                whitelistAddress
            );
        }

        return "";
    }
}
