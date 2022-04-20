Welcome to Dispatch's documentation page.

### What is Dispatch?
Dispatch is a Solana protocol to allow dapps and wallets to communicate with each other.

### How does it work?
You can access Dispatch via the `BHJ4tRcogS88tUhYotPfYWDjR4q7MGdizdiguY3N54rb` program on `devnet` and `mainnet`. The anchor IDL can be downloaded using `anchor idl`, or better yet use our [client sdk](https://www.npmjs.com/package/@usedispatch/client).

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


```typescript
import { Mailbox } from '@usedispatch/client';

// Initialize mailbox for a local wallet and start sending messages
const mailbox = new Mailbox(conn, senderWallet);

// Send messages to ourself
await mailbox.send("text0", receiverPublicKey);
await mailbox.send("text1", receiverPublicKey);

// The receiver can manage their messages with a mailbox
const mailbox2 = new Mailbox(conn, receiverWallet);

// Fetch messages
// This returns:
// [
//  { sender: 'senders_public_key', data: 'text0' },
//  { sender: 'senders_public_key', data: 'text1' },
// ]
const messages = await mailbox2.fetch();

// Get number of messages in a mailbox
// This returns: 2
const messageCount1 = await mailbox2.count();

// Receiver can close message accounts and release rent.
await mailbox2.pop();
await mailbox2.pop();

// This returns: 0
const messageCount2 = await mailbox2.count();
```

### Transaction API


If you'd like to construct `Transaction` objects to interact with the Dispatch protocol,
but submit transactions to the network yourself, you can use the client as follows:


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

### Contact
Join the community on the [Dispatch group](https://t.me/+tY-bKbPLixw1MmI5) on Telegram for questions or feedback.
