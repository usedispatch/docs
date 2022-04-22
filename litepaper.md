# Dispatch Protocol

Dispatch protocol allows the sending of authenticated messages on the Solana blockchain.

## Design

The dispatch protocol defines two new types of accounts: mailbox and message accounts.

### Mailbox Accounts

Each mailbox has an authority (a public key) known as the receiver, which is currently encoded in the PDA that defines the account. It represents the messages sent to that receiver. The mailbox keeps track of the number of open messages for that mailbox. Any user can create the mailbox account for a receiver, allowing the sending of messages to addresses that have not yet used the protocol. The user who creates the mailbox account must deposit the rent exemption, which they will not receive back. Only the receiver can then further modify the mailbox account.

### Message Accounts

Each message sent via dispatch creates a new blockchain account. This account belongs to a specific, existing mailbox account. The mailbox is encoded in the PDA of the message. A message can contain an arbitrary string. When sending a message, the sender must sign the transaction to authenticate the message. Each message also has a payer, which may be either the sender or another signer. The payer deposits the rent exemption required for the message and also pays the protocol transaction fee (see below). You can optionally attach an incentive to the message that the receiver can claim. Upon claim, an event is emitted as a form of read receipt.

### Deleting Messages

The receiver, sender, or payer of a mesage may choose to delete the message. When a message is deleted, its account is removed from the blockchain and the rent deposit is returned to the original payer of the message.

## Additional Details

Dispatch Protocol charges a fee for each message that is sent. This is currently 50,000 lamports per message.

There is also a full-featured client library and a minimalistic command line tool to aid in the use of the protocol. Please see https://docs.usedispatch.net/ for more details.
