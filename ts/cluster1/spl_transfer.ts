import {
  Commitment,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import wallet from "./wallet/turbin3-wallet.json";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("7kvaCXtdcZeqy6rghHyde1PToGKFm52t4KdD5rrMeEZt");

const token_decimals = 1_000_000;
const to = new PublicKey("ExEimWXDGaBqvEcoAUrxnm2VekkodoKui8Cg3237dhe5");

(async () => {
  try {
    // Get the token account of the fromWallet address, and if it does not exist, create it
    const fromAta = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );

    // Get the token account of the toWallet address, and if it does not exist, create it
    const toAta = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      to
    );

    // Transfer the new token to the "toTokenAccount" we just created
    const tx = await transfer(
      connection,
      keypair,
      fromAta.address,
      toAta.address,
      keypair,
      1 * token_decimals
    );

    console.log(`Tx : ${tx}`);
  } catch (e) {
    console.error(`Something went wrong: ${e}`);
  }
})();
