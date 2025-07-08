# Solana Starter - Turbin3 Q3 Cohort

A comprehensive Solana development starter kit created as part of the **Turbin3 Q3 Cohort**. This repository contains examples and tools for working with Solana blockchain development in both TypeScript and Rust.

## Project Structure

### TypeScript (`ts/`)
- **Prerequisites** (`prereqs/`): Basic wallet and transaction operations
- **Cluster 1** (`cluster1/`): SPL tokens, NFTs, and vault operations
- **Programs** (`programs/`): Solana program interfaces
- **Tools** (`tools/`): Utility scripts for wallet management

### Rust (`rs/`)
- **Source** (`src/`): Rust implementations for Solana programs
- **Programs** (`src/programs/`): WBA prerequisite programs

## Features

### Wallet Operations
- Generate new Solana wallets
- Base58 encoding/decoding utilities
- Airdrop SOL to wallets
- Transfer SOL between accounts

### SPL Token Operations
- Initialize SPL tokens
- Mint tokens
- Transfer tokens
- Add metadata to tokens

### NFT Operations
- Upload NFT images
- Create NFT metadata
- Mint NFTs

### Vault Operations
- Initialize vaults
- Deposit/withdraw SOL
- Deposit/withdraw SPL tokens
- Deposit/withdraw NFTs
- Close vaults

## Quick Start

### Prerequisites
- Node.js and npm/yarn
- Rust and Cargo (for Rust components)
- Solana CLI tools

### Installation

1. Clone the repository
2. Install TypeScript dependencies:
   ```bash
   cd ts
   npm install
   ```

3. Install Rust dependencies:
   ```bash
   cd rs
   cargo build
   ```

## Available Scripts

### Wallet Management
```bash
npm run keygen          # Generate new wallet
npm run airdrop         # Airdrop SOL to wallet
npm run transfer        # Transfer SOL
npm run enroll          # Enroll in WBA program
```

### SPL Token Operations
```bash
npm run spl_init        # Initialize SPL token
npm run spl_mint        # Mint SPL tokens
npm run spl_transfer    # Transfer SPL tokens
npm run spl_metadata    # Add metadata to SPL token
```

### NFT Operations
```bash
npm run nft_image       # Upload NFT image
npm run nft_metadata    # Create NFT metadata
npm run nft_mint        # Mint NFT
```

### Vault Operations
```bash
npm run vault_init           # Initialize vault
npm run vault_deposit        # Deposit SOL
npm run vault_withdraw       # Withdraw SOL
npm run vault_deposit_spl    # Deposit SPL tokens
npm run vault_withdraw_spl   # Withdraw SPL tokens
npm run vault_deposit_nft    # Deposit NFT
npm run vault_withdraw_nft   # Withdraw NFT
npm run vault_close          # Close vault
```

### Utility Tools
```bash
npm run airdrop_to_wallet   # Airdrop to specific wallet
npm run base58_to_wallet    # Convert base58 to wallet
npm run wallet_to_base58    # Convert wallet to base58
```

## Dependencies

### TypeScript
- `@coral-xyz/anchor`: Solana program framework
- `@metaplex-foundation/mpl-token-metadata`: Token metadata handling
- `@metaplex-foundation/umi`: Unified Metaplex Interface
- `@solana/web3.js`: Solana JavaScript SDK
- `@solana/spl-token`: SPL token operations

### Rust
- `solana-sdk`: Core Solana SDK
- `solana-client`: Solana client library
- `solana-program`: Solana program development
- `bs58`: Base58 encoding/decoding
- `borsh`: Binary Object Representation Serializer

## Configuration

The project uses Solana devnet by default. Wallet configuration is stored in `ts/cluster1/wallet/turbin3-wallet.json`.

## About Turbin3

This project was developed as part of the **Turbin3 Q3 Cohort**, a comprehensive Solana development bootcamp focused on building practical skills in blockchain development, smart contracts, and decentralized applications.

## License

MIT