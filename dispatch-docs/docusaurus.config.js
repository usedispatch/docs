// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dispatch Developer Documentation',
  tagline: 'The Dispatch Protocol on Solana helps dapps communicate with their users in a fast, reliable and secure manner.',
  url: 'https://docs.usedispatch.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'usedispatch', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/usedispatch/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'developer',
            position: 'left',
            label: 'Developer',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to:'/litepaper', label: 'Litepaper', position:'left'},
          {
            href: 'https://github.com/usedispatch',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Developer',
                to: '/docs/developer',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community',
                href: 'https://app.dispatch.forum/forum/DHepkufWDLJ9DCD37nbEDbPSFKjGiziQ6Lbgo1zgGX7S',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+tY-bKbPLixw1MmI5',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/usedispatch',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/usedispatch',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dispatch Protocol`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
