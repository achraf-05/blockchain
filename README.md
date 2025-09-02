## Description  
This program implements a blockchain model using RSA 2048-bit key pairs for digital signatures and SHA256 hashing for data integrity. It performs three chaining steps where messages are concatenated with the public key, hashed, signed with the private key, and the signatures are then rehashed to create a cryptographic chain. The program outputs all intermediate hashes and signatures, demonstrating the step-by-step process of blockchain chaining and authentication.

## Prerequisites  
- Node.js installed  
- No extra dependencies (uses built-in `crypto` module)


## What it does  
- Generates RSA key pair (Pub1, Priv1)  
- Performs 3 linked steps of hashing and signing  
- Outputs all intermediate hashes and signatures  
- Prints final hash representing blockchain state  

## Learning Goals  
- Understand RSA key generation and signatures  
- Practice SHA256 hashing operations  
- Learn how blockchain chaining works with cryptographic proofs  
- See data integrity and authenticity ensured by signatures 
