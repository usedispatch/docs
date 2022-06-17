# Post

All posts stored in a postbox are returned as an instance of `Post`. The fields of this object are as follows.

| Property | Type | Description |
| -------- | ---- | ----------- |
| parent   | PostNode  | The parent post of this post. Either a Post or a Postbox, whether or not the post is a reply. |
| address | web3.PublicKey | The `publicKey` of the post account. |
| postId   | number | The id of the post. |
| poster   | web3.PublicKey | The `publicKey` of the account that sent and signed this post. |
| data     | string | The actual body of the post. |
| up_votes     | u16 | The number of upvotes of the post. |
| down_votes     | u16 | The number of downvotes of the post. |
| reply_to  | Pubkey | The `publicKey` of the account that sent and signed this post. |
