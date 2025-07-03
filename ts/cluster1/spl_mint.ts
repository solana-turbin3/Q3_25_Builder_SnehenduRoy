import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import wallet from "./wallet/turbin3-wallet.json";

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000;

// Mint address
const mint = new PublicKey("7kvaCXtdcZeqy6rghHyde1PToGKFm52t4KdD5rrMeEZt");

(async () => {
  try {
    // ATA creation
    const ata = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );
    console.log(`ATA: ${ata.address.toBase58()}`);

    const mintTxn = await mintTo(
      connection,
      keypair,
      mint,
      ata.address,
      keypair.publicKey,
      100 * token_decimals
    );

    console.log(`Txn id: ${mintTxn}`);
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
})();
