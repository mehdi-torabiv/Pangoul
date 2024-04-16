// web3 docs https://docs.web3js.org/
const { Web3 } = require('web3');
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

async function main() {
    const accounts = web3.eth.accounts.create(web3.utils.randomHex(32));
    console.log(accounts);
}

main();
