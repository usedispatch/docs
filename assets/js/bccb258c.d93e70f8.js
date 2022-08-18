"use strict";(self.webpackChunkdispatch_docs=self.webpackChunkdispatch_docs||[]).push([[670],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4851:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Post",p={unversionedId:"Developer/post",id:"Developer/post",title:"Post",description:"All posts stored in a postbox are returned as an instance of Post. The fields of this object are as follows.",source:"@site/docs/Developer/post.md",sourceDirName:"Developer",slug:"/Developer/post",permalink:"/docs/Developer/post",draft:!1,editUrl:"https://github.com/usedispatch/docs/docs/Developer/post.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MessageAccount",permalink:"/docs/Developer/message"},next:{title:"Postbox",permalink:"/docs/Developer/postbox"}},i={},s=[],u={toc:s};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post"},"Post"),(0,a.kt)("p",null,"All posts stored in a postbox are returned as an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),". The fields of this object are as follows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parent"),(0,a.kt)("td",{parentName:"tr",align:null},"PostNode"),(0,a.kt)("td",{parentName:"tr",align:null},"The parent post of this post. Either a Post or a Postbox, whether or not the post is a reply.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"web3.PublicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"publicKey")," of the post account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"postId"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the post.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"poster"),(0,a.kt)("td",{parentName:"tr",align:null},"web3.PublicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"publicKey")," of the account that sent and signed this post.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The actual body of the post.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"up_votes"),(0,a.kt)("td",{parentName:"tr",align:null},"u16"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of upvotes of the post.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"down_votes"),(0,a.kt)("td",{parentName:"tr",align:null},"u16"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of downvotes of the post.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reply_to"),(0,a.kt)("td",{parentName:"tr",align:null},"Pubkey"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"publicKey")," of the account that sent and signed this post.")))))}d.isMDXComponent=!0}}]);