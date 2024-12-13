import { Keypair } from "@solana/web3.js";
//Now we're going to create a new Keypair, like so:

//Generate a new keypair
let keypair = Keypair.generate()
console.log(`You've generated a new Solana wallet: ${keypair.publicKey.toBase58()}`);
console.log(`Solana Wallet Secret Key: [${keypair.secretKey}]`);