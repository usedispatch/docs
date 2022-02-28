Welcome to Dispatch's documentation page.

### What is Dispatch?
Dispatch is a Solana protocol to allow dapps and wallets to communicate with each other.

### How does it work?
You can access Dispatch via `BHJ4tRcogS88tUhYotPfYWDjR4q7MGdizdiguY3N54rb` program on `devnet`.

More protocol details are coming soon.

### Client Installation

The `dispatch-cli` is a command line utility to quickly send and receive messages on Solana. 

```
npm install -g @usedispatch/cli
```

The tool picks up the currently configured Solana command line wallet. To verify your Solana wallet set up, run `solana config get` and `solana address` to see which network you're on, and what your account address is.

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
          [choices: "mainnet-beta", "devnet", "testnet"] [default: "devnet"]
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

// Initialize mailbox for a receiver and start sending messages.
const mailbox = new Mailbox(conn, { receiverAddress, payer, });

// Send messages
await mailbox.send("text0");
await mailbox.send("text1");

// Fetch messages
// This returns:
// [
//  { sender: 'senders_public_key', data: 'text0' },
//  { sender: 'senders_public_key', data: 'text1' },
// ]
const messages = await mailbox.fetch();

// Get number of messages in a mailbox
// This returns: 2
const messageCount1 = await mailbox.count();

// Receiver can close message accounts and retrieve rent.
const mailbox2 = new Mailbox(conn, { receiver, payer, });
await mailbox2.pop();
await mailbox2.pop();

// This returns: 0
const messageCount2 = await mailbox.count();
```

### Transaction API


If you'd like to construct `Transaction` objects to interact with the Dispatch protocol,
but submit transactions to the network yourself, you can use the client as follows:


```typescript
import { Mailbox } from '@usedispatch/client';

// Initialize mailbox for receiver
const mailbox = new Mailbox(conn, { receiverAddress, payerAddress, });

// Construct transactions to send messages. You may then submit
// `sendTx0` and `sendTx1` to the network. When submitting note
// that `payer` must sign the transaction.
const sendTx0 = await mailbox.makeSendTx("text0");
const sendTx1 = await mailbox.makeSendTx("text1");

// Fetch messages
// This returns:
// [
//  { sender: 'senders_public_key', data: 'text0' },
//  { sender: 'senders_public_key', data: 'text1' },
// ]
const messages = await mailbox.fetch();

// You can construct transactions to pop messages as follows. Note
// that receiver must sign the transaction in order for it to
// succeed.
const popTx0 = await mailbox.makePopTx();
const popTx1 = await mailbox.makePopTx();
```

### Contact
Join the community on the [Dispatch group](https://t.me/+tY-bKbPLixw1MmI5) on Telegram for questions or feedback.
