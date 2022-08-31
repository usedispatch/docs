# Dispatch Protocol Forums React SDK

To ease integration into your website, the Dispatch Forums React SDK is a simple component library that provides instant forum functionality with just a few components.

## `DispatchProvider`
DispatchProvider is the main component that is used to provide access to the Dispatch components. Your application should be wrapped in a DispatchProvider, but has access to the wallet and connection. DispatchProps should be passed in with desired path URLs, wallet, and connection. 
```
  const dispatchProps: DispatchAppProps = {
    wallet: wallet,
    connection: connection,
    buildForumPath: buildForumPath,
    buildTopicPath: buildTopicPath,
    children: children,
    cluster: cluster,
  };
```
```
    <DispatchProvider {...dispatchProps}>
        {children}
    </DispatchProvider>
```

Here's a sample implementation of `buildForumPath` and `buildTopicPath`. These are the paths used within the components to link pages. 

```
  function buildForumPath(collectionId: string) {
    return `${forumURL}/${collectionId}`;
  }

  function buildTopicPath(collectionId: string, topicId: number) {
    return `${forumURL}/${collectionId}${topicURL}/${topicId}`;
  }
```

## `ForumView`

This component is used to display the forum, it takes in a `collectionId` parameter as a string which should be a public key. The path defined in `buildForumPath` will be used to navigate to the forum.

```
    <ForumView collectionId={collectionId} />
```

## `TopicView`

This main component is used to display the forum, it takes in a `collectionId` parameter as a string which should be a public key and a `topicId` parameter as a number. The path defined in `buildTopicPath` should point to where this component is being used. 

```
    <TopicView collectionId={collectionId} topicId={topicId} />
```


Below is a sample `DispatchApp.tsx` file which uses the DispatchProvider component, which you can use to wrap the application in. 

```
import { ReactNode, useEffect } from "react";
import { DispatchProvider, DispatchAppProps } from "@usedispatch/forum";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { useRouter } from "next/router";
interface Props {
  forumURL: string;
  topicURL: string;
  children?: ReactNode | ReactNode[];
  cluster: web3.Cluster;
}

const DispatchApp = ({
  forumURL,
  topicURL,
  children,
  cluster,
  ...props
}: Props) => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const router = useRouter();

  function buildForumPath(collectionId: string) {
    return `${forumURL}/${collectionId}`;
  }

  function buildTopicPath(collectionId: string, topicId: number) {
    return `${forumURL}/${collectionId}${topicURL}/${topicId}`;
  }

// add this useEffect for nextJS apps only...
  useEffect(() => {
    const handleRouteChange = () => {
      router.push(window.location)
    };

    window.addEventListener("popstate", handleRouteChange);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router]);

  const dispatchProps: DispatchAppProps = {
    wallet: wallet,
    connection: connection,
    buildForumPath: buildForumPath,
    buildTopicPath: buildTopicPath,
    children: children,
    cluster: cluster,
  };

  return <DispatchProvider {...dispatchProps}>{children}</DispatchProvider>;
};

export default DispatchApp;

```