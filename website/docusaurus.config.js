// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "タノミマスター システムドキュメント",
  tagline: "B2B 受発注プラットフォーム",
  url: "https://tanomimaster.github.io/",
  baseUrl: '/tanomimaster-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: "tanomimaster",
  projectName: "tanomimaster-doc",

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/tanomimaster/tanomimaster-doc/blob/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tanomimaster/tanomimaster-doc/blob/develop/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'タノミマスター システムドキュメント',
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
          {
            type: 'doc',
            docId: 'api',
            position: "left",
            label: "API仕様",
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
                label: 'システムドキュメント',
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
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
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
