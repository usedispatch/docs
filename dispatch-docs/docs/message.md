# MessageAccount

All messages retrieved from a mailbox are returned as an instance of `MessageAccount`. The fields of this object are as follows.

| Property | Type | Description |
| -------- | ---- | ----------- |
| sender   | web3.PublicKey | The `publicKey` of the account that sent and signed this message. |
| receiver    | web3.PublicKey  | The `publicKey` of the account that paid for the account rent. |
| data     | MessageData | The actual body of the message. |
| messageId  | number | The id of the message. |
| incentiveMint | web3.PublicKey | The `publicKey` of the token incentive attached to the message, if applicable. | 