Welcome to Dispatch's documentation page.

### What is Dispatch?
Dispatch is a Solana protocol to allow dapps and wallets to communicate with each other.

### How does it work?
You can access Dispatch Messaging via the `BHJ4tRcogS88tUhYotPfYWDjR4q7MGdizdiguY3N54rb` program on `devnet` and `mainnet`. You can access Dispatch Postbox via the `Fs5wSa7GYtTqivXGqHyx673v5oPuD5Cb7ij9utsFKdLb` program on `devnet`. The anchor IDL can be downloaded using `anchor idl`, or better yet use our [client sdk](https://www.npmjs.com/package/@usedispatch/client).

See our [litepaper](./litepaper.md) for more details on how the protocol works under the hood.

See our [developer docs](./developer.md) for details on the client SDK.

### CLI Installation

The `dispatch-cli` is a command line utility to quickly send and receive messages on Solana. 

```
npm install -g @usedispatch/cli
```

The tool picks up the currently configured Solana command line wallet. To verify your Solana wallet set up, run `solana address` to see what your account address is.

```
% dispatch-cli
dispatch-cli <command>

Commands:
  dispatch-cli send <address> <message>  Send a message
  dispatch-cli list                      show available messages
  dispatch-cli pop                       display and delete oldest message

Options:
  --version  Show version number                                   [boolean]
  --cluster
          [choices: "mainnet-beta", "devnet", "testnet"] [default: "mainnet-beta"]
  --help     Show help                                             [boolean]

A command is required
```



### SDK Installation

```bash
npm install @usedispatch/client
```

### Quickstart

#### Messaging Example

```typescript

import * as web3 from '@solana/web3.js';
import {Mailbox, KeyPairWallet} from '@usedispatch/client';

const conn = new web3.Connection(web3.clusterApiUrl('devnet'));
  
let sender: web3.Keypair;
let receiver: web3.Keypair;

let senderWallet: KeyPairWallet;
let receiverWallet: KeyPairWallet;

let senderMailbox: Mailbox;
let receiverMailbox: Mailbox;

sender = web3.Keypair.generate();
receiver = web3.Keypair.generate();

senderWallet = new KeyPairWallet(sender);
receiverWallet = new KeyPairWallet(receiver)

senderMailbox = new Mailbox(conn, senderWallet);
receiverMailbox = new Mailbox(conn, receiverWallet);

// Messaging
  
// Fund both wallets
await conn.confirmTransaction(await conn.requestAirdrop(sender.publicKey, 2 * web3.LAMPORTS_PER_SOL));
await conn.confirmTransaction(await conn.requestAirdrop(receiver.publicKey, 2 * web3.LAMPORTS_PER_SOL));

console.log('Send message 1 -- from sender to receiver');
const txSig0 = await senderMailbox.send("helloworld", receiver.publicKey);
await conn.confirmTransaction(txSig0, 'finalized');

console.log('Send message 2 -- from sender to receiver');
const txSig1 = await senderMailbox.send("hithere", receiver.publicKey);
await conn.confirmTransaction(txSig1, 'finalized');

console.log('Fetch messages from sender and receiver mailbox');
let senderMessages = await senderMailbox.fetch();
console.log('sender mailbox: ', senderMessages);

let receiverMessages = await receiverMailbox.fetch();
console.log('receiver mailbox: ', receiverMessages);

// Fetch sent messages to receiver
const receiverMailboxAsSender = new Mailbox(conn, senderWallet, {
   mailboxOwner: receiverWallet.publicKey,
  cluster: 'devnet'
})
  
receiverMailboxAsSender.fetch().then((messages) => {
  console.log('1. messages from sender to receiver:', messages);
});

// Delete hithere as the sender (sent message)
const txsig0 = await senderMailbox.delete(1, receiverWallet.publicKey);
await conn.confirmTransaction(txsig99, 'finalized');

receiverMailboxAsSender.fetch().then((messages) => {
  console.log('2. messages from sender to receiver:', messages);
});

```


#### Postbox Example

```typescript

import * as anchor from '@project-serum/anchor';
import { Postbox, DispatchConnection, Forum, clusterAddresses } from '../usedispatch_client/src';


const conn = anchor.getProvider().connection;
const TREASURY = clusterAddresses.get("devnet").treasuryAddress;


const owner = new anchor.Wallet(anchor.web3.Keypair.generate());
await conn.confirmTransaction(await conn.requestAirdrop(owner.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL));
await conn.confirmTransaction(await conn.requestAirdrop(TREASURY, 1 * anchor.web3.LAMPORTS_PER_SOL));

const treasuryBalance = await conn.getBalance(TREASURY);

const postbox = new Postbox(new DispatchConnection(conn, owner), {key: owner.publicKey, str: "Public"});
const tx0 = await postbox.initialize();
await conn.confirmTransaction(tx0);


const testPost = {subj: "Test", body: "This is a test post"};
const tx1 = await postbox.createPost(testPost);
await conn.confirmTransaction(tx1);
```


### Transaction API

If you'd like to construct `Transaction` objects to interact with the Dispatch protocol,
but submit transactions to the network yourself, you can use the client as follows. See our [developer docs](./developer.md) for more details.

```typescript
import { Mailbox } from '@usedispatch/client';

// Initialize mailbox for sender. If you don't have a natural
// wallet, import and use KeypairWallet and a new web3.Keypair.
const mailbox = new Mailbox(conn, wallet, {
  mailboxOwner: senderPublicKey,
  payer: payerPublicKey,
});

// Construct transactions to send messages. You may then submit
// `sendTx0` and `sendTx1` to the network. When submitting note
// that `payer` and `sender` must sign the transaction.
const sendTx0 = await mailbox.makeSendTx("text0", receiver);
const sendTx1 = await mailbox.makeSendTx("text1", receiver);
```


### Contact
Join the community on the [Dispatch group](https://t.me/+tY-bKbPLixw1MmI5) on Telegram for questions or feedback.
