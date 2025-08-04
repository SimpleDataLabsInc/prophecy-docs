// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const redirectsConfig = require("./redirects");

require("dotenv").config();

export default {
  baseUrl: process.env.BASE_URL,
  customFields: {
    inkeepApiKey: process.env.INKEEP_API_KEY,
  },
};

// Reverse the sidebar items ordering
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === "category") {
      return { ...item, items: reverseSidebarItems(item.items) };
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prophecy",
  tagline: "Low Code Data Engineering",
  url: "https://docs.prophecy.io/",
  baseUrl: process.env.BASE_URL,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon2.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            // console.log("Arguments passed:", args);
            // Check if the current item is from the 'release_notes' directory
            if (args.item && args.item.dirName === "release_notes") {
              const sidebarItems = await defaultSidebarItemsGenerator(args);
              return reverseSidebarItems(sidebarItems);
            }
            // Otherwise, return the sidebar items without applying reversal
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: ".markdown :not(em) > img",
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "Prophecy Logo",
          src: "img/Prophecy Logo.png",
          srcDark: "img/Prophecy Logo White.png",
        },
        items: [
          {
            type: "dropdown",
            label: "Docs",
            position: "left",
            items: [
              { type: "doc", docId: "index", label: "Product docs" },
              {
                type: "doc",
                label: "API docs",
                docId: "api/index",
              },
            ],
          },
          {
            to: "administration",
            label: "Administration",
            position: "left",
          },
          {
            to: "https://transpiler.docs.prophecy.io/",
            position: "left",
            label: "Migration guide",
          },
          {
            to: "/getting-help",
            label: "Help",
            position: "right",
          },
          {
            to: "mailto:docs@prophecy.io",
            label: "Feedback",
            position: "right",
          },
          { to: "http://app.prophecy.io/", label: "Login", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Prophecy",
            items: [
              {
                label: "Home",
                href: "https://www.prophecy.io/",
              },
              {
                label: "Blog",
                href: "https://www.prophecy.io/blogs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://join.slack.com/t/prophecy-io-support/shared_invite/zt-1dwuvkakg-JcavnQuoukyZ3q5jkSkKCg",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Documentation feedback",
                href: "mailto:docs@prophecy.io",
              },
              {
                label: "Login",
                href: "https://app.prophecy.io/",
              },
            ],
          },
        ],
        copyright: `© 2025 Prophecy Inc All Rights Reserved <a href="https://legal.prophecy.io/privacy" target="_blank">Privacy Policy</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "scala", "groovy"],
      },
      algolia: {
        appId: "ZWUS3CKBSL",
        apiKey: "9adffd2a4c9b4485b540ddd192d384f4",
        indexName: "prophecy",
        contextualSearch: true,
        // externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        searchPagePath: "search",
      },
    }),

  plugins: [
    "docusaurus-plugin-image-zoom",
    [
      "@inkeep/cxkit-docusaurus",
      {
        SearchBar: {
          defaultView: "chat",
          baseSettings: {
            // see https://docusaurus.io/docs/deployment#using-environment-variables to use docusaurus environment variables
            apiKey: process.env.INKEEP_API_KEY, // required
            primaryBrandColor: "#403FC2", // required -- your brand color, the widget color scheme is derived from this
            organizationDisplayName: "Prophecy",
            theme: {
              styles: [
                {
                  key: "1",
                  type: "style",
                  value: `
                    @media (max-width: 33em) {
                      .ikp-search-bar__button {
                        padding-inline: 7px;
                      }
                      .ikp-search-bar__text {
                        display: none;
                      }
                      .ikp-search-bar__kbd-wrapper {
                        display: none;
                      }
                    }
                  `,
                },
                {
                  key: "2",
                  type: "style",
                  value: `
                    .ikp-ai-ask-ai-trigger__icon {
                      height: auto !important;
                    }
                  `,
                },
              ],
            },
          },
          aiChatSettings: {
            exampleQuestions: [
              "Do I need a fabric to run my pipeline?",
              "How can Copilot help me build projects?",
              "How do I add data to my pipeline?",
              "Can I monitor my deployed projects?",
            ],
            exampleQuestionsLabel: "Example Questions",
            isFirstExampleQuestionHighlighted: true,
            aiAssistantAvatar: "/img/icon.png", // optional -- use your own ai assistant avatar
          },
        },
      },
    ],
    ["@docusaurus/plugin-client-redirects", { ...redirectsConfig }],
  ],
};

module.exports = config;
