### Wallets

Creating a `Mailbox` requires a wallet. Dispatch Protcol expects a wallet that implements the `WalletInterface`. This interface was designed to be compatible with a variety of well-known wallets. It has been tested with the native `NodeWallet` from anchor as well as the [Solana wallet adapter](https://github.com/solana-labs/wallet-adapter).

```ts
export interface WalletInterface {
  signTransaction(tx: web3.Transaction): Promise<web3.Transaction>;
  signAllTransactions(txs: web3.Transaction[]): Promise<web3.Transaction[]>;
  get publicKey(): web3.PublicKey;
}
```

### KeyPairWallet

Alternatively, if you do not have a wallet that implements this interface but you do have a `web3.Keypair`, the SDK provides a convenience class `KeyPairWallet` that will implement the interface for you. This is also a good way to go if you are creating a read-only application and don't have some other wallet that you can readily pass in. For example:

```ts
import * as dispatch from '@usedispatch/client';
import * as web3 from '@solana/web3.js';

const wallet = dispatch.KeyPairWallet(web3.Keypair.generate());

const getMessages = async (conn: web3.Connection, mailboxOwner: web3.PublicKey) => {
    const mb = dispatch.Mailbox(conn, wallet, {mailboxOwner});
    return mb.fetch();
}
```
