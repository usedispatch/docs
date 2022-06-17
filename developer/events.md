# Events

Dispatch Protocol emits anchor events for certain activities

## DispatchMessage

This event happens when a message is sent. It contains the pubKey of the sender and receiver as well as the message body and the message ID for that mailbox.

## IncentiveClaimed

This event happens when a receiver claims an incentive. It contains the pubKey of the sender and receiver, the mint pubKey of the incentive, the message ID for that mailbox and the amount of incentive sent (in raw units, not in UI units).


## PostEvent

This event happens when a post is made to a postbox. It contains the pubKey of the poster, postbox, and account alongside the post ID, post content, and a post account it is in reply to, if applicable.

## DeleteEvent

This event happens when a post is deleted from a postbox. It contains the pubKey of the deleter, associated postbox, post acccount, and the ID of the post. 