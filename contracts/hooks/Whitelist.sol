// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Whitelist
/// @notice This contract manages whitelist to perform actions
/// @dev To follow the developer's guide, please place this file at ${PROJECT_ROOT}/contracts/hooks before compiling.
contract Whitelist is Ownable {
    /// @notice whether or not the whitelist is enabled for the IP Org
    bool public whitelistEnabled;

    /// @notice the mapping from the address to whether or not the address is whitelisted
    mapping(address => bool) public whitelisted;

    event WhitelistEnabled();
    event WhitelistDisabled();
    event Whitelisted(address indexed executor);
    event Unwhitelisted(address indexed executor);

    /// @notice Enable whitelisting
    /// @dev This function enables whitelisting to perform action
    function enableWhitelist() external onlyOwner {
        whitelistEnabled = true;
        emit WhitelistEnabled();
    }

    /// @notice Disable whitelisting
    /// @dev This function disables whitelisting to perform action
    function disableWhitelist() external onlyOwner {
        whitelistEnabled = false;
        emit WhitelistDisabled();
    }

    /// @notice Add an address to the whitelist
    /// @dev This function adds an address into the whitelist so that the address can execute actions
    function whitelist(address executor_) external onlyOwner {
        whitelisted[executor_] = true;
        emit Whitelisted(executor_);
    }

    /// @notice Remove an address from the whitelist
    /// @dev This function removes an address from the whitelist so the address cannot execute actions
    function unwhitelist(address executor_) external onlyOwner {
        whitelisted[executor_] = false;
        emit Unwhitelisted(executor_);
    }

    /// @notice Verify if an executor is allowed to perform an action
    /// @dev This function check if whitelist is enabled, return false it is NOT whitelisted. Otherwise return true.
    function canPerformAction(address executor_) external view returns (bool) {
        return (!whitelistEnabled) || whitelisted[executor_];
    }
}
