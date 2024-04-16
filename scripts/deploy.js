const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const PangoulToken = await hre.ethers.getContractFactory("PangoulToken");
    const pangoulToken = await PangoulToken.deploy(5000000000);

    await pangoulToken.deployed();

    console.log("PangoulToken deployed to:", pangoulToken.address);

    await hre.run("verify:verify", {
        address: pangoulToken.address,
        constructorArguments: [5000000000],
    });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});