require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    // Obtain one at https://etherscan.io/myapikey
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
