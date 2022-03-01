# MessageAccount

All messages retrieved from a mailbox are returned as an instance of `MessageAccount`. The fields of this object are as follows.

| Property | Type | Description |
| -------- | ---- | ----------- |
| sender   | web3.PublicKey | The `publicKey` of the account that sent and signed this message. |
| data     | string | The actual body of the message. |
