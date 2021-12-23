export default {
  "title": "ユーザ ドキュメント",
  "tagline": "B2B 受発注プラットフォーム",
  "url": "https://tanomimaster.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "tanomimaster",
  "projectName": "tanomimaster-doc",
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/app/website/sidebars.js",
          "editUrl": "https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/app/website/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "ユーザ ドキュメント",
      "logo": {
        "alt": "Tanomimaster logo",
        "src": "img/favicon.ico"
      },
      "items": [
        {
          "type": "doc",
          "docId": "index",
          "position": "left",
          "label": "ドキュメント"
        },
        {
          "type": "doc",
          "docId": "api",
          "position": "left",
          "label": "API仕様"
        },
        {
          "to": "/blog",
          "label": "変更履歴",
          "position": "left"
        },
        {
          "href": "https://github.com/tanomimaster",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "ドキュメント",
          "items": [
            {
              "label": "利用者向けドキュメント",
              "to": "/docs/"
            }
          ]
        },
        {
          "title": "リンク",
          "items": [
            {
              "label": "サービス説明",
              "href": "https://service.tanomimaster.com/"
            },
            {
              "label": "サービス更新情報",
              "href": "https://service.tanomimaster.com/blog/"
            },
            {
              "label": "Slack",
              "href": "https://tanomimaster.slack.com/"
            },
            {
              "label": "サービスサイト",
              "href": "https://tanomimaster.com/"
            }
          ]
        },
        {
          "title": "開発リソース",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/tanomimaster"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Tanomimaster."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "i18n": {
    "defaultLocale": "ja",
    "locales": [
      "ja"
    ],
    "localeConfigs": {
      "ja": {
        "label": "日本語",
        "direction": "ltr"
      }
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};