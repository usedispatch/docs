import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
];

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
            Dispatch, web3 communities can host on-chain forums (think Reddit!)
            where users can earn karma tokens, up-vote content, get rewarded
            NFTs, and limit spam through moderation tools like token gating.
            Combined with additional features like wallet integrations and
            on-chain identity, users of Dispatch are able to build unique web3
            experiences for their community with the help of a developer.{" "}
          </p>
          <p>
            Launching a Dispatch forum takes just a few clicks. To get started,
            check out{" "}
            <a href="https://forums.usedispatch.net/">
              https://forums.usedispatch.net/
            </a>
            .{" "}
          </p>
          <p>
            Continue reading to learn more about Dispatch’s features, partner
            success stories, how to get started, demos and code examples, and
            information on our roadmap.
          </p>
          <h3 id="features">Features</h3>
          <p>
            A big advantage of Dispatch is that moderators can launch and manage
            their communities without needing to code. For more advanced
            features, like adding 1:1 messaging to your community, coding is
            required. We have easy-to-use SDKs for your developer.
          </p>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Feature</th>
                <th>Short Description</th>
                <th>Requires coding</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mainnet</td>
                <td>Forums</td>
                <td>
                  Host on-chain forums with token gating, karma tokens, and
                  more.
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
                <td>In progress</td>
                <td>Insights</td>
                <td>Analytics tools</td>
                <td></td>
              </tr>
              <tr>
                <td>Mainnet</td>
                <td>Embed Forum</td>
                <td>Embed forum in your own website or app.</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Mainnet</td>
                <td>Messaging</td>
                <td>1:1 and 1:many messaging</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Mainnet</td>
                <td>Incentives</td>
                <td>Build incentive flows, like rewarding NFTs</td>
                <td>✔️</td>
              </tr>

            </tbody>
          </table>
          <div className="listBox">
          <h3 id="contact-us">Contact us</h3>
          <p>Latest Updates</p>
          <ul>
            <li>
              Follow the{" "}
              <a href="https://twitter.com/usedispatch">Dispatch Protocol</a>{" "}
              Twitter
            </li>
          </ul>
          <p>Developer Updates</p>
          <ul>
            <li>
              Join our <a href="https://t.me/+tY-bKbPLixw1MmI5">Telegram</a>
            </li>
          </ul>
          {/* <p>Partnerships</p>
          <ul>
            <li></li>
          </ul> */}
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
