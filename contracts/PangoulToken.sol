// contracts/PangoulToken.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PangoulToken is ERC20 {

    // create new role for identifier of minter role
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    // inherit from openzeppelin ERC20 contract
    constructor(unit256 initialSupply) ERC20("Pangoul", "PANG") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, unit256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
}
