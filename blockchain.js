const crypto = require('crypto');


function hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

function generateKeys() {
    console.log("Generating RSA key pair...");
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
    });
    console.log("Keys generated successfully");
    return keyPair;
}


function sign(data, privateKey) {
    const signer = crypto.createSign('SHA256');
    signer.update(data);
    return signer.sign(privateKey);
}


function main() {
    console.log("=".repeat(50));


    const keys = generateKeys();
    const publicKey = keys.publicKey;
    const privateKey = keys.privateKey;

    console.log("Public key generated");
    console.log("=".repeat(50));

  
    console.log("\nSTEP 1");
    console.log("-".repeat(20));

    
    const message1 = "Bonjour le monde !" + publicKey;
    console.log(`Message1 created (length: ${message1.length} characters)`);

    
    const hash1_1 = hash(message1);
    console.log(`Hash1.1: ${hash1_1}`);

    
    const signature1 = sign(hash1_1, privateKey);
    console.log(`Signature1 created with Priv1 (length: ${signature1.length} bytes)`);
    console.log(`Signature1 (hex): ${signature1.toString('hex').substring(0, 64)}...`);

    
    const hash1_2 = hash(signature1);
    console.log(`Hash1.2: ${hash1_2}`);

    
    console.log("\nSTEP 2");
    console.log("-".repeat(20));


    const message2 = hash1_2 + publicKey;
    console.log(`Message2 created (length: ${message2.length} characters)`);

 
    const hash2_1 = hash(message2);
    console.log(`Hash2.1: ${hash2_1}`);


    const signature2 = sign(hash2_1, privateKey);
    console.log(`Signature2 created with Priv1 (length: ${signature2.length} bytes)`);
    console.log(`Signature2 (hex): ${signature2.toString('hex').substring(0, 64)}...`);

    
    const hash2_2 = hash(signature2);
    console.log(`Hash2.2: ${hash2_2}`);

    
    console.log("\nSTEP 3");
    console.log("-".repeat(20));

    
    const message3 = hash2_2 + publicKey;
    console.log(`Message3 created (length: ${message3.length} characters)`);

    
    const hash3_1 = hash(message3);
    console.log(`Hash3.1: ${hash3_1}`);

    
    const signature3 = sign(hash3_1, privateKey);
    console.log(`Signature3 created with Priv1 (length: ${signature3.length} bytes)`);
    console.log(`Signature3 (hex): ${signature3.toString('hex').substring(0, 64)}...`);

    
    const hash3_3 = hash(signature3);
    console.log(`Hash3.3: ${hash3_3}`);

    
    console.log("\nFINAL RESULT");
    console.log("=".repeat(50));
    console.log(`Hash3.3 (final result): ${hash3_3}`);
    console.log("=".repeat(50));

    
    console.log("\nCOMPLETE BLOCKCHAIN SUMMARY");
    console.log("-".repeat(30));
    console.log("Step 1:");
    console.log(`  Hash1.1: ${hash1_1}`);
    console.log(`  Signature1 signed with Priv1`);
    console.log(`  Hash1.2: ${hash1_2}`);
    console.log("Step 2:");
    console.log(`  Hash2.1: ${hash2_1}`);
    console.log(`  Signature2 signed with Priv1`);
    console.log(`  Hash2.2: ${hash2_2}`);
    console.log("Step 3:");
    console.log(`  Hash3.1: ${hash3_1}`);
    console.log(`  Signature3 signed with Priv1`);
    console.log(`  Hash3.3: ${hash3_3}`);

    return hash3_3;
}



 main();
