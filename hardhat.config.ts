import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    }
  },
};

export default config;
