/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import { task } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/types";
import "tsconfig-paths/register";


const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      }
    ]
  }
};

export default config;
