// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ユーザ ドキュメント",
  tagline: "B2B 受発注プラットフォーム",
  url: "https://tanomimaster.com",
  baseUrl: '/tanomimaster-doc/',
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
          editUrl: 'https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/',
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
          docId: 'system',
          position: "left",
          label: "システム仕様",
        },
          {to: '/blog', label: '変更履歴', position: 'left'},
          {
            href: 'https://github.com/tanomimaster',
            label: 'Tanomimaster GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: '利用者向けドキュメント',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'リンク',
            items: [
              {
                label: 'サービス説明',
                href: 'https://service.tanomimaster.com/',
              },
              {
                label: 'サービス更新情報',
                href: 'https://service.tanomimaster.com/blog/',
              },
              {
                label: 'Slack',
                href: 'https://tanomimaster.slack.com/',
              },
              {
                label: 'サービスサイト',
                href: 'https://tanomimaster.com/',
              },
            ],
          },
          {
            title: '開発リソース',
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
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    localeConfigs: {
      ja: {
        label: '日本語',
      },
    },
  }
};

module.exports = config;
