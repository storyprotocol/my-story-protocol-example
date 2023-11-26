// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.19;

/// @title IPOrgWhitelist
/// @notice This library defines the Config and Params structs for IPOrgWhitelistHook
/// @dev The Config struct contains the address of IPOrg, the Params struct contains
///      the user's address who will run the execute function of the module.
///      To follow the developer's guide, please place this file at
///      ${PROJECT_ROOT}/contracts/lib/hooks before compiling.
library IPOrgWhitelist {
    /// @notice Defines the required configuration information for IPOrgWhitelistHook
    /// @dev The Config struct contains a single field: ipOrgAddress
    struct Config {
        /// @notice The address of a whitelist smart contract
        /// @dev The whitelist is a smart contract that manages whitelist
        address whitelistAddress;
    }

    /// @notice Defines the required parameter information for executing IPOrgWhitelistHook.
    /// @dev The Params struct contains a single field: executor.
    struct Params {
        /// @notice The address of the executor who will run the execute function of the module.
        /// @dev The hook will verify if the address is in the whitelist.
        address executor;
    }
}