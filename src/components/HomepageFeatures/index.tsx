import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h2 id="overview">Overview</h2>
          <p>
            Built in partnership with top web3 communities, Dispatch is designed
            to be the all-in-one decentralized platform for communities. With
            Dispatch, web3 communities can create on-chain forums where users
            earn SOL, up-vote content, get rewarded NFTs, and limit spam through
            moderation tools like token gating. Dispatch supports wallet
            integrations and on-chain identity using Solana’s network. Your
            community members will need to have a Solana wallet (we recommend{" "}
            <a href="https://phantom.app/">Phantom</a>) and some SOL in their
            wallet to use your Dispatch forum.
          </p>
          <p>
            Moderators use Dispatch to create web3 experiences for their
            communities:
          </p>
          <ul>
            <li>
              Meme contests. Award NFTs to the user with the most up-voted meme.
            </li>
            <li>
              Polling your community. For example, where should we meet next
              IRL?
            </li>
            <li>
              Bounties. Users earn SOL when they do things for the community
              like fix bugs.
            </li>
            <li>
              Token gating. Only people with your NFT or token can post topics.
            </li>
            <li>
              AMAs. A chance for your community to engage with the founders and
              other interesting community members.
            </li>
          </ul>
          <p>
            Launching a Dispatch forum takes just a few clicks and no code is
            needed. The experience was designed for creators. To see example
            communities or launch your own forum, check out{" "}
            <a href="https://www.dispatch.forum/">
              https://www.dispatch.forum/
            </a>
            .
          </p>
          <p>
            After you’ve launched your Dispatch Forum, you can ask your
            developer to embed Dispatch into your own site using our{" "}
            <a href="https://github.com/usedispatch/dispatch-forum-npm-package">
              React SDK
            </a>
            .{" "}
          </p>
          <p>
            Continue reading to learn more about Dispatch’s features, partner
            success stories, how to get started, demos and code examples, and
            information on our roadmap.
          </p>

          <div id="features">
            <h3>Features</h3>
          <p>
            For more advanced features, like adding 1:1 messaging to your
            community, coding is required. We have easy-to-use SDKs for your
            developer.
          </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Feature</th>
                <th>Short Description</th>
                <th>Requires development</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mainnet</td>
                <td>Forums</td>
                <td>Launch on-chain forums with token gating</td>
                <td></td>
              </tr>
              <tr>
                <td>Mainnet</td>
                <td>Send Tokens</td>
                <td>
                  Community members earn SOL and NFTs for their contributions
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Mainnet</td>
                <td>Identity</td>
                <td>Forums connect with user’s native wallet</td>
                <td></td>
              </tr>
              <tr>
                <td>In Progress</td>
                <td>Analytics</td>
                <td>Analytics dashboard for moderators</td>
                <td></td>
              </tr>
              <tr>
                <td>Mainnet</td>
                <td>Embed Forum</td>
                <td>Host forum in your own website or app.</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Mainnet</td>
                <td>Messaging</td>
                <td>1:1 and 1:many messaging</td>
                <td>✔️</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h3 id="contact-us">Contact us</h3>
            <p>Latest Updates</p>
            <li>Follow the <a href="https://twitter.com/usedispatch">Dispatch Protocol Twitter</a></li>
            <p>Developer Updates</p>
            <li>Join our <a href="https://t.me/+tY-bKbPLixw1MmI5"> Telegram </a></li>
            <p>Partnerships</p>
            <li>Email us at <a href="mailto:hello@usedispatch.xyz" >hello@usedispatch.xyz</a></li>
            <p>
              We’ve started with the features that were most requested by our
              launch partners. If you don’t see your feature, please get in touch.
              Chances are it’s already on our roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
