import { ethers } from "hardhat";

async function main() {
  const message = await ethers.deployContract("MyMessage");

  await message.waitForDeployment();

  console.log(
    `Contract deployed to ${message.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
