# Dispatch Protocol

The Dispatch Protocol allows the sending of authenticated messages and forum communities on the Solana blockchain.
The protocol consists of two programs, the Messaging program and the Forum program. Messaging is used for wallet-to-wallet and protocol-to-wallet messaging. Forum is used for forums, including comments, replies, likes, etc.


## Messaging
### Design

The messaging program defines two new types of accounts: mailbox and message accounts.

#### <ins> Mailbox Accounts </ins>

Each mailbox has an authority (a public key) known as the receiver, which is currently encoded in the PDA that defines the account. It represents the messages sent to that receiver. The mailbox keeps track of the number of open messages for that mailbox. Any user can create the mailbox account for a receiver, allowing the sending of messages to addresses that have not yet used the protocol. The user who creates the mailbox account must deposit the rent exemption, which they will not receive back. Only the receiver can then further modify the mailbox account.

#### <ins> Message Accounts </ins>

Each message sent via dispatch creates a new blockchain account. This account belongs to a specific, existing mailbox account. The mailbox is encoded in the PDA of the message. A message can contain an arbitrary string. When sending a message, the sender must sign the transaction to authenticate the message. Each message also has a payer, which may be either the sender or another signer. The payer deposits the rent exemption required for the message and also pays the protocol transaction fee (see below). You can optionally attach an incentive to the message that the receiver can claim. Incentives can be awarded as any SPL Token, including Metaplex NFTs. Upon claim, an event is emitted as a form of read receipt.

#### <ins> Deleting Messages </ins>

The receiver, sender, or payer of a message may choose to delete the message. When a message is deleted, its account is removed from the blockchain and the rent deposit is returned to the original payer of the message.

## Postbox

### Design 
Similar to messaging, the postbox program defines two new types of accounts: postbox and post accounts. Every hierarchy of posts in a forum (top level topics to nested threads) are structured with the same accounts. The postbox program also distributes tokens for designated moderators. 

#### <ins> Postbox Accounts </ins>
Each postbox is associated with a public key to organize posts, which is encoded in the PDA that defines the account. Any public key is able to maintain a postbox, which allows for many uses ranging from forum posts for a community to user profile posts similar to a social media “wall”.  A postbox maintains additional settings including a title, description, the postbox owners, the moderator mint account, and restrictions to post creators. Similar to mailbox, postbox maintains a count of post IDs which increments on each new message. 

#### <ins> Post Accounts </ins>
Each post made for a given postbox is maintained in its own account on-chain. These posts are accessed as a PDA with the postbox public key and post ID. A post account stores the original poster's public key, the message string, a count of upvotes and downvotes, and an optional reply field as a public key. The reply public key must also be another post account to be valid. Post accounts can be deleted by the original poster or a moderator of the postbox.

#### <ins> Moderator Token </ins>
Moderators are maintained for each postbox by a token minted to each moderator, granting them access to moderator privileges. Moderator token minting is handled by the program. Moderators are able to add other moderators and delete posts.



## Additional Details

Dispatch Protocol charges a fee for each message and post that is sent. This is currently 50,000 lamports per message. Creating a postbox has a fee as well, a personal postbox (postbox public key and creator are the same) is 50,000 lamports, creating a postbox for any other public key is 1 SOL. 

There is also a full-featured client library and a minimalistic command line tool to aid in the use of the protocol. Please see https://docs.dispatch.forum/Developer/cli for more details.
