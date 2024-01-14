const { Web3 } = require("web3");
const dotenv = require("dotenv");

const config = dotenv.config().parsed;
const fs = require("fs");
const web3 = new Web3(new Web3.providers.HttpProvider(config.HttpProvider));
const wallet = web3.eth.accounts.wallet.create(
  1,
  "54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534"
);
fs.writeFileSync(
  "count.txt",
  wallet.map((item) => `${item.address}:${item.privateKey}`).join("\n")
);

console.log(wallet);
