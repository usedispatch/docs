# Mailbox

The `Mailbox` is the primary object for sending, receiving, and interacting with messages.

## Constructor arguments

```ts
  constructor(conn: web3.Connection, wallet: WalletInterface, opts?: MailboxOpts)
```

The `conn` is used for PDA calculation and any commands that access accounts (e.g. `fetch`, `send`, etc.). The `wallet` is used to initialize anchor and for `pop` and `send` convenience methods. It also represents the receiver/authority of this mailbox if `opt.mailboxOwner` is not provided. See [wallets](./wallets.md) for more details on the wallet interface used in Dispatch Protocol.

The optional arguments in `opts` are as follows.

| Option       | Type           | Description |
| ------------ | -------------- | ----------- |
| mailboxOwner | web3.PublicKey | The receiver / authority represented by this mailbox. Defaults to `wallet.publicKey`. |
| payer        | web3.PublicKey | The account that will pay transaction fees and rent for any generated transactions. |
| skipAnchorCluster | boolean | If you are already using anchor in your project and have configured the global anchor provider, you can skip re-intialization by setting this. |
| cluster      | web3.Cluster   | Which cluster to use (needed to get the right program address). Defaults to `mainnet-beta`. |
| sendObfuscated | boolean      | If set to true, messages will be obfuscated so that chain explorers do not show the message in plan text. Note that this is not encryption. |

## Mailbox owner

Every mailbox has a single owner, which is the `PublicKey` of the receiver/authority for that mailbox. When you create a `Mailbox` object, the `mailboxOwner` (or, if not set, the `wallet.publicKey`) determines which `PublicKey` is the owner. You can check the owner of a mailbox using the `Mailbox.mailboxOwner` property. For the rest of this document, we will refer to this account as the "mailbox owner".

## Reading mailbox state and messages

There are a number of methods that return statistics and messages about the mailbox.

- `count()` returns the number of messages on chain for this mailbox.
- `fetch()` returns an array of all messages in the mailbox. See [MessageAccount](./message.md) for more details on the message object.
- `getMessageById(id: number)` returns a single message. You may get this ID from a subsciption event.

## Sending and deleting messages

The SDK supports both transaction-generation methods for sending and deleting messages as well as convenience imperative functions that submit the transaction to the blockchain. The transaction-generation methods return a transaction that your code must then sign and send. They are also the way to batch multiple transactions toghter.

There are several limitations for the imperative methods.
1. The `mailboxOwner` and `wallet.publicKey` must be the same. We use the `wallet` to sign and send the transaction.
1. If `payer` is provided, the `payer` must also match `wallet.publicKey` because we only sign with this wallet.

Transaction-based
- `makeSendTx(data: string, receiverAddress: web3.PublicKey)` creates a transaction to send the message in `data` to `receiverAddress` from `mailboxOwner` and sets the `payer` on the transaction to be `wallet.payer`. Both `payer` and `mailboxOwner` (the sender) must sign the transaction for it to be valid. If they are the same, only one signature is needed.
- `makePopTx()` creates a transaction to delete the oldest message from the mailbox. It must be signed by both `mailboxOwner` and `payer` to be valid.

Imperative
- `send(data: string, receiverAddress: web3.PublicKey)` sends the message in `data` to `receiverAddress` from `mailboxOwner`. The `wallet` is used to sign and pay for the transaction.
- `pop()` deletes the oldest message from the mailbox. The `wallet` is used to sign and pay for the transaction.

## Subscriptions

The `Mailbox` object supports a subscription interface via `addMessageListener(callback)`. Keep track of the returned subscription ID for later unsubscription. For each new message sent to this `Mailbox` you will get a callback which will be passed a summary of the message. You can then get full message data using `getMessageById`. To stop subscribing, call `removeMessageListener` with the subscription ID. As of the current writing, this subscription will cause your application to consume enough bandwidth for all messages sent on the protocol even though you will only receive events when sent to this Mailbox.
