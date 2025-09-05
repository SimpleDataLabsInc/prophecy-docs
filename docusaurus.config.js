// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const redirectsConfig = require("./redirects");

require("dotenv").config();

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
  customFields: {
    inkeepApiKey: process.env.INKEEP_API_KEY,
  },

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

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

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
            type: "doc",
            position: "left",
            docId: "index",
            label: "Get started",
          },
          {
            type: "doc",
            position: "left",
            docId: "core/index",
            label: "Core",
          },
          {
            type: "doc",
            position: "left",
            docId: "enterprise/index",
            label: "Enterprise",
          },
          {
            type: "doc",
            position: "left",
            docId: "api/index",
            label: "API",
          },
          {
            to: "https://transpiler.docs.prophecy.io/",
            position: "left",
            label: "Migration",
          },
          {
            to: "/getting-help",
            label: "Help",
            position: "right",
          },
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
      mermaid: {
        theme: { light: "default", dark: "dark" },
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
    ["@docusaurus/plugin-client-redirects", { ...redirectsConfig }],
  ],
};

module.exports = config;
