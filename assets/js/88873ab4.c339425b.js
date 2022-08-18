"use strict";(self.webpackChunkdispatch_docs=self.webpackChunkdispatch_docs||[]).push([[181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},i="Postbox",s={unversionedId:"Developer/postbox",id:"Developer/postbox",title:"Postbox",description:"The Postbox is the primary object for a given public key to store posts and set rules such as which public keys can post and moderators who can delete posts. The Postbox maintains a wallet and connection from your application to help with sending transactions, PDA calculation, and more.",source:"@site/docs/Developer/postbox.md",sourceDirName:"Developer",slug:"/Developer/postbox",permalink:"/docs/Developer/postbox",draft:!1,editUrl:"https://github.com/usedispatch/docs/docs/Developer/postbox.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Post",permalink:"/docs/Developer/post"},next:{title:"Documentation",permalink:"/docs/Documentation"}},p={},l=[{value:"Constructor Arguments",id:"constructor-arguments",level:2},{value:"Postbox Methods",id:"postbox-methods",level:2},{value:"Basic Methods",id:"basic-methods",level:3},{value:"Fetch Methods",id:"fetch-methods",level:3},{value:"Admin Methods",id:"admin-methods",level:3},{value:"Chain Methods",id:"chain-methods",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postbox"},"Postbox"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Postbox")," is the primary object for a given public key to store posts and set rules such as which public keys can post and moderators who can delete posts. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Postbox")," maintains a wallet and connection from your application to help with sending transactions, PDA calculation, and more."),(0,o.kt)("h2",{id:"constructor-arguments"},"Constructor Arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    constructor (dispatch: DispatchConnection, target: PostboxTarget)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DispatchConnection")," is an object to help with integrating your wallet and Connection with the Postbox. It can be initialized as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    const dispatch = new DispatchConnection(connection: web3.Connection, wallet: WalletInterface, opts?: DispatchConnectionOpts)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PostboxTarget")," simply holds the public key of the postbox you want to interact with. Keep in mind this is the public key of the ID of the postbox (for example, NFT collection public key) as opposed to the postbox on-chain account public key. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    const target = new PostboxTarget(key: web3.PublicKey)\n")),(0,o.kt)("p",null,"The optional arguments in ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," are as follows."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"skipAnchorCluster"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"If you are already using anchor in your project and have configured the global anchor provider, you can skip re-intialization by setting this.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"web3.Cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"Which cluster to use (needed to get the right program address). Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"devnet"),".")))),(0,o.kt)("h2",{id:"postbox-methods"},"Postbox Methods"),(0,o.kt)("h3",{id:"basic-methods"},"Basic Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"initialize(owners?: web3.PublicKey[], description?: Description)")," triggers a transaction which creates a new Postbox with the designated owners and description. This is necessary before creating posts. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"createPost(input: InputPostData, replyTo?: InteractablePost)")," triggers a transaction which creates a new post. The ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," argument is a JSON object which contains the following fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"{subj?: string; body: string; meta?: any };")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"replyTo")," is an optional field to reply to another postbox which contains the following fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"postId: number; address: web3.PublicKey; poster: web3.PublicKey;"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"replyToPost(input: InputPostData, replyTo?: InteractablePost)")," triggers a transaction which creates a new post. This behaves the same as createPost, except it creates a reply to a post.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"deletePost(post: InteractablePost)")," triggers a transaction which deletes a post. This action can be performed by the original poster. Rent is returned to the original payer of the post.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"deletePostAsModerator(post: InteractablePost)")," is the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost")," as a moderator role. The moderator must hold the moderator token for the postbox to perform this action. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"vote(post: Post, up:boolean)")," triggers a transaction which can either make an upvote or downvote on any post. This action can be performed by any public key. "))),(0,o.kt)("h3",{id:"fetch-methods"},"Fetch Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"innerFetchPosts(parent: PostNode, maxChildId: number)")," fetches a number of posts defined by the maxChildId for a given parent post. This is used to fetch the posts for a given parent post.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fetchAllPosts()")," fetches all posts for a given postbox, including posts which are replies.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fetchPosts()")," fetches top-level posts for a given postbox.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fetchReplies(post: Post)")," fetches replies to a given post."))),(0,o.kt)("h3",{id:"admin-methods"},"Admin Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"addModerator(newModerator: web3.PublicKey)")," triggers a transaction which adds a new moderator to the postbox. This action can only be performed by a postbox owner or existing moderator. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getOwner()")," gets all owners of the postbox.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setOwners(owners: web3.PublicKey[])")," triggers a transaction which sets the owners of the postbox. This action can only be performed by a postbox owner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getDescription()")," gets the description of the postbox.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setDescription(description: Description)")," triggers a transaction which sets the description of the postbox. This action can only be performed by a postbox owner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"innerGetSetting(settingsType: SettingsType)")," a certain setting of the Postbox. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"innerSetSetting(settingsData: any)")," triggers a transaction which sets a certain setting of the Postbox. This action can only be performed by a postbox owner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"isOwner()")," returns true if the current wallet in the postbox object is an owner of the postbox.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"isModerator()")," returns true if the current wallet in the postbox object is a moderator of the postbox."))),(0,o.kt)("h3",{id:"chain-methods"},"Chain Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getAddress()")," returns the address of the postbox account. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getPostAddress(postId: number)")," returns the address of the specified reply id postbox account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getAddresses(maxPostId: number, startPostId?: number)")," returns multiple addresses of the specified reply id postbox accounts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getChainPostboxInfo()")," returns the metadata stored on chain the postbox.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getModeratorMint()")," returns the mint address of the moderator token.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getModerators()")," returns all moderators of the postbox."))))}d.isMDXComponent=!0}}]);