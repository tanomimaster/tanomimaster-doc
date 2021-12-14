// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ユーザ ドキュメント",
  tagline: "B2B 受発注システム",
  url: "https://tanomimaster.com",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: "tanomimaster",
  projectName: "tanomimaster-doc",

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/',
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
        title: 'ユーザ ドキュメント',
        logo: {
          alt: 'Tanomimaster logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'ドキュメント',
          },
        {
          type: 'doc',
          docId: 'api',
          position: "left",
          label: "API仕様",
        },
          {to: '/blog', label: '変更履歴', position: 'left'},
          {
            href: 'https://github.com/tanomimaster',
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
                label: 'ドキュメント',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                href: 'https://service.tanomimaster.com/',
              },
              {
                label: 'Slack',
                href: 'https://tanomimaster.slack.com/',
              },
              {
                label: 'Tanomimaster',
                href: 'https://tanomimaster.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tanomimaster',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tanomimaster.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
