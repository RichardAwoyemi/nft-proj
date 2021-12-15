// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import { ERC20 } from "../dependencies/openzeppelin/contracts/ERC20.sol";

contract Pergolia is ERC20 {
    constructor(uint256 initialBalance) ERC20("Pergolia", "PGA") {
        _mint(msg.sender, initialBalance);
        transfer(address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266), initialBalance);
    }
}