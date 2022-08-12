# Postbox

The `Postbox` is the primary object for a given public key to store posts and set rules such as which public keys can post and moderators who can delete posts. The `Postbox` maintains a wallet and connection from your application to help with sending transactions, PDA calculation, and more.

## Constructor Arguments
```ts 
    constructor (dispatch: DispatchConnection, target: PostboxTarget)
``` 

`DispatchConnection` is an object to help with integrating your wallet and Connection with the Postbox. It can be initialized as follows:

```ts
    const dispatch = new DispatchConnection(connection: web3.Connection, wallet: WalletInterface, opts?: DispatchConnectionOpts)
``` 
`PostboxTarget` simply holds the public key of the postbox you want to interact with. Keep in mind this is the public key of the ID of the postbox (for example, NFT collection public key) as opposed to the postbox on-chain account public key. 

```ts
    const target = new PostboxTarget(key: web3.PublicKey)
``` 

The optional arguments in `opts` are as follows.

| Option       | Type           | Description |
| ------------ | -------------- | ----------- |
| skipAnchorCluster | boolean | If you are already using anchor in your project and have configured the global anchor provider, you can skip re-intialization by setting this. |
| cluster      | web3.Cluster   | Which cluster to use (needed to get the right program address). Defaults to `devnet`. |

## Postbox Methods


### Basic Methods

 - `initialize(owners?: web3.PublicKey[], description?: Description)` triggers a transaction which creates a new Postbox with the designated owners and description. This is necessary before creating posts. 

 - `createPost(input: InputPostData, replyTo?: InteractablePost)` triggers a transaction which creates a new post. The `input` argument is a JSON object which contains the following fields: `{subj?: string; body: string; meta?: any };` and `replyTo` is an optional field to reply to another postbox which contains the following fields: `postId: number; address: web3.PublicKey; poster: web3.PublicKey;`

 - `replyToPost(input: InputPostData, replyTo?: InteractablePost)` triggers a transaction which creates a new post. This behaves the same as createPost, except it creates a reply to a post.

 - `deletePost(post: InteractablePost)` triggers a transaction which deletes a post. This action can be performed by the original poster. Rent is returned to the original payer of the post.

 - `deletePostAsModerator(post: InteractablePost)` is the same as `deletePost` as a moderator role. The moderator must hold the moderator token for the postbox to perform this action. 

 - `vote(post: Post, up:boolean)` triggers a transaction which can either make an upvote or downvote on any post. This action can be performed by any public key. 



### Fetch Methods

 - `innerFetchPosts(parent: PostNode, maxChildId: number)` fetches a number of posts defined by the maxChildId for a given parent post. This is used to fetch the posts for a given parent post.

 - `fetchAllPosts()` fetches all posts for a given postbox, including posts which are replies.

 - `fetchPosts()` fetches top-level posts for a given postbox.

 - `fetchReplies(post: Post)` fetches replies to a given post.



### Admin Methods

 - `addModerator(newModerator: web3.PublicKey)` triggers a transaction which adds a new moderator to the postbox. This action can only be performed by a postbox owner or existing moderator. 

 - `getOwner()` gets all owners of the postbox.

 - `setOwners(owners: web3.PublicKey[])` triggers a transaction which sets the owners of the postbox. This action can only be performed by a postbox owner.

 - `getDescription()` gets the description of the postbox.

 - `setDescription(description: Description)` triggers a transaction which sets the description of the postbox. This action can only be performed by a postbox owner.

 - `innerGetSetting(settingsType: SettingsType)` a certain setting of the Postbox. 

 - `innerSetSetting(settingsData: any)` triggers a transaction which sets a certain setting of the Postbox. This action can only be performed by a postbox owner.

 - `isOwner()` returns true if the current wallet in the postbox object is an owner of the postbox.

 - `isModerator()` returns true if the current wallet in the postbox object is a moderator of the postbox.



### Chain Methods

 - `getAddress()` returns the address of the postbox account. 

 - `getPostAddress(postId: number)` returns the address of the specified reply id postbox account.

 - `getAddresses(maxPostId: number, startPostId?: number)` returns multiple addresses of the specified reply id postbox accounts.

 - `getChainPostboxInfo()` returns the metadata stored on chain the postbox.

 - `getModeratorMint()` returns the mint address of the moderator token.

 - `getModerators()` returns all moderators of the postbox.
