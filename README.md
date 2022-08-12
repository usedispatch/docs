Welcome to Dispatch's documentation page.

## What is Dispatch?

Dispatch is a monetizable conversational protocol for Solana. It supports two kind of conversation modes - private and public. Private conversations are supported via the Mailbox object, and public conversations via Postbox. Please see below for details.


## How does it work?
You can access Dispatch Mailbox Protocol via the `BHJ4tRcogS88tUhYotPfYWDjR4q7MGdizdiguY3N54rb` program on `devnet` and `mainnet`. You can access Dispatch Postbox Protocol via the `Fs5wSa7GYtTqivXGqHyx673v5oPuD5Cb7ij9utsFKdLb` program on `devnet`. The anchor IDL can be downloaded using `anchor idl`, or better yet use our [client sdk](https://www.npmjs.com/package/@usedispatch/client).

See our [litepaper](./litepaper.md) for more details on how the protocol works under the hood.

See our [developer docs](./developer.md) for details on the client SDK.



## Forums React Quickstart

Installing the SDK

```bash
yarn add @usedispatch/forum
```

### Dispatch Protocol Forums Starter
- [Forum React App Starter Code](https://github.com/usedispatch/forum-demo)

The Dispatch Protocol Forums React SDK can enable any website to have functionality with creating forums, topics, and making replies all on-chain. This demo is a simple example of how to use the SDK from a create-react-app starter. 

Navigate to http://localhost:3000/forum/5n6jccZ96FqFTxREsosRUnQ7MsQCy1CwcWHwUgWArij6 for a sample forum.

## Getting started with the SDK...



Install the package. Code can be found here https://github.com/usedispatch/dispatch-forum

``` yarn add @usedispatch/forums ```

Add the Dispatch Provider to allow your entire application to have access to the Dispatch components. 

First, create a DispatchApp component. Keep in mind the URL strings in the props, these will be used later.

```
import { ReactNode } from "react";
import { DispatchProvider, DispatchAppProps } from "@usedispatch/forum";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

interface Props {
    baseURL: string;
    forumURL: string;
    topicURL: string;
    children?: ReactNode | ReactNode[];
}

const DispatchApp = ({ 
    baseURL,
    forumURL,
    topicURL,
    children, 
    ...props
}: Props) => {
    const { connection } = useConnection();
    const wallet = useWallet();

    const dispatchProps : DispatchAppProps = {
        wallet: wallet,
        connection: connection,
        baseURL: baseURL,
        forumURL: forumURL,
        topicURL: topicURL,
        children: children
    }

    return (
        <DispatchProvider {...dispatchProps}>
            {children}
        </DispatchProvider>
    )
}

export default DispatchApp;
```

Wrap your application in the Dispatch component at the top level with the `<DispatchApp>` we just created, and within your wallet/connection providers. Make sure it's wrapped around any URL routers your application may have and define which routes the forum page and topic page will be. These defaults are used in the library and may cause issues if configured otherwise. Forum view will exist on `/forum/:collectionId` and Topic view on `/forum/:collectionId/topic/:topicId`. 

```
const baseURL = "YOUR_APPLICATION_URL"
const forumURL = "/forum";
const topicURL = "/topic";
```

Make sure to include the last line above with the CSS file to ensure component styling works. This CSS is customizable, look below for an example. 


The DispatchApp router will take the following format.
```
    <ConnectionProvider>
        <WalletProvider>
            <DispatchApp baseURL={baseURL} forumURL={forumURL} topicURL={topicURL}>
                // Insert your router and application components here
            </DispatchApp>
        </WalletProvider>
    </ConnectionProvider>
```



Next, navigate to the routes in your application. Create two routes as defined above. Import `<ForumView>` and `<TopicView>` from the `@usedispatch/forum` package here, these are the components that will be used to render the forum and topic views in your application. Use these two components as the render element for the routes.

```
    <Routes>
        <Route path={`${forumURL}/:id`} element={<ForumView/>} />
        <Route path={`${forumURL}/:id${topicURL}/:id`} element={<TopicView/>} />
    </Routes>
```


Here's a full example of an application...

```
import DispatchApp from './components/DispatchApp';
import { TopicView, ForumView } from "@usedispatch/forum";

const baseURL = "http://localhost:3000"
const forumURL = "/forum";
const topicURL = "/topic";
require('@usedispatch/forum/dist/main.css')

...
    ...
        ...

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <DispatchApp baseURL={baseURL} forumURL={forumURL} topicURL={topicURL}>
          <WalletModalProvider>
              <div className="App">
                <header className="App-header">
                </header>
                  <div className='container'>
                    <div>
                      <WalletMultiButton/>
                      <WalletConnectButton />
                      <WalletDisconnectButton/>
                    </div>
                      <Router>
                        <Routes>
                          <Route path={`${forumURL}/:id`} element={<ForumView/>} />
                          <Route path={`${forumURL}/:id${topicURL}/:id`} element={<TopicView/>} />
                        </Routes>
                      </Router>
                  </div>
              </div>
          </WalletModalProvider>
        </DispatchApp>
      </WalletProvider>
    </ConnectionProvider>
  );
  ```

  You should now have a fully functioning forum application!

  To further customize the components to fit into your application, take a look at the styles folder in our package. This can be found in `./node_modules/@usedispatch/forum/styles` which has a full list of classes and styles. These can be overriden in your application by redefining the classname in CSS and updating it with your own styles.

  This demo provides two examples of performing this overwrite. Either defining the classname directly or creating another stylesheet and importing it in `index.css`. Using specifiers will ensure the style you declared is used. 

  ```
  /* OPTION 1: import the file with the overridden classes */
@import "./components/forums/ForumContent.css";

/* OPTION 2: override the class directly in this file*/
.forumContentHeader {
  background: lavender;
}
```

`ForumContent.css`
```css
.App .createTopicButton {
  background: crimson;
  border: 3px black solid;
}
```

The `.App` specifier helps ensure the override is enforced.

## Typescript API Examples

```bash
yarn add @usedispatch/client
```
### Forums Example

```typescript

import * as anchor from '@project-serum/anchor';
import { Postbox, DispatchConnection, Forum, clusterAddresses } from '../usedispatch_client/src';


const conn = anchor.getProvider().connection;
const TREASURY = clusterAddresses.get("devnet").treasuryAddress;

const owner = new anchor.Wallet(anchor.web3.Keypair.generate());
const moderator = new anchor.Wallet(anchor.web3.Keypair.generate());
const poster = new anchor.Wallet(anchor.web3.Keypair.generate());
await conn.confirmTransaction(await conn.requestAirdrop(owner.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL));
await conn.confirmTransaction(await conn.requestAirdrop(moderator.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL));
await conn.confirmTransaction(await conn.requestAirdrop(poster.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL));

const forumAsOwner = new Forum(new DispatchConnection(conn, owner), collectionId);
const forumAsModerator = new Forum(new DispatchConnection(conn, moderator), collectionId);
const forumAsPoster = new Forum(new DispatchConnection(conn, poster), collectionId);

const descStr = "A forum for the test suite";
if (!await forumAsOwner.exists()) {
  const txs = await forumAsOwner.createForum({
    collectionId,
    owners: [owner.publicKey],
    moderators: [owner.publicKey],  // We add the moderator below as a test
    title: "Test Forum",
    description: descStr,
  });
  await Promise.all(txs.map((t) => conn.confirmTransaction(t)));
}

const owners = await forumAsOwner.getOwners();
assert.ok(owners[0].equals(owner.publicKey));
const desc = await forumAsOwner.getDescription();
assert.equal(desc.title, "Test Forum");
assert.equal(desc.desc, descStr);
assert.ok(await forumAsOwner.isOwner());

const txA = await forumAsOwner.setDescription({title: "Test", desc: descStr});
await conn.confirmTransaction(txA);
const desc2 = await forumAsOwner.getDescription();
assert.equal(desc2.title, "Test");

const txB = await forumAsOwner.addModerator(moderator.publicKey);
await conn.confirmTransaction(txB);
assert.ok(await forumAsModerator.isModerator());

const moderators = await forumAsOwner.getModerators();
assert.equal(moderators.length, 2);
assert.ok(moderators.map((m) => m.toBase58()).includes(moderator.publicKey.toBase58()));

const topic0 = {subj: "Test Topic", body: "This is a test topic."};
const tx0 = await forumAsPoster.createTopic(topic0);
await conn.confirmTransaction(tx0);

const topics = await forumAsPoster.getTopicsForForum();
assert.equal(topics.length, 1);

const testPost0 = {subj: "Test", body: "This is a test post"};
const tx1 = await forumAsPoster.createForumPost(testPost0, topics[0]);
await conn.confirmTransaction(tx1);

const testPost1 = {subj: "Spam", body: "This is a spam post"};
const tx2 = await forumAsPoster.createForumPost(testPost1, topics[0]);
await conn.confirmTransaction(tx2);

let topicPosts = await forumAsModerator.getTopicMessages(topics[0]);
assert.equal(topicPosts.length, 2);

const delTxs = (await Promise.all(topicPosts.map(async (p) => {
  if ((p.data.subj ?? "") === "Spam") {
    return await forumAsModerator.deleteForumPost(p, true);
  }
  return null;
}))).filter((t) => t !== null);
await Promise.all(delTxs.map((t) => conn.confirmTransaction(t)));

topicPosts = await forumAsPoster.getTopicMessages(topics[0]);
assert.equal(topicPosts.length, 1);

const tx3 = await forumAsPoster.deleteForumPost(topicPosts[0]);
await conn.confirmTransaction(tx3);

topicPosts = await forumAsOwner.getTopicMessages(topics[0]);
assert.equal(topicPosts.length, 0);
```
See how forums work under the hood by visiting the [postbox API](./developer/postbox.md).

### Messaging Example


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
