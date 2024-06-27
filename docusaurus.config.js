// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prophecy",
  tagline: "Low Code Data Engineering",
  url: "https://docs.prophecy.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

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
      navbar: {
        title: "",
        logo: {
          alt: "Prophecy Logo",
          src: "img/Prophecy Logo.png",
          srcDark: "img/Prophecy Logo White.png",
        },
        items: [
          { to: "https://www.prophecy.io/", position: "left", label: "Home" },
          { type: "doc", docId: "index", position: "left", label: "Docs" },
          {
            to: "https://transpiler.docs.prophecy.io/",
            position: "left",
            label: "Transpiler Docs",
          },
          {
            to: "https://www.prophecy.io/blogs",
            label: "Blog",
            position: "left",
          },
          {
            to: "/getting-started/getting-help",
            label: "Help",
            position: "right",
          },
          { to: "http://app.prophecy.io/", label: "Login", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
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
                label: "Login",
                href: "https://app.prophecy.io/",
              },
            ],
          },
        ],
        copyright: `© 2024 Prophecy Inc All Rights Reserved <a href="https://legal.prophecy.io/privacy" target="_blank">Privacy Policy</a>`,
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
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/getting-started",
            from: "/developer/videos/",
          },
        ],
        /*

        Example of how the function works:


        - SQL
         - data-tests
          - data-tests.md
          - use-project-tests.md
         ...

        =>

        /SQL/index.html
        /SQL/data-tests/index.html
        /SQL/data-tests/use-project-tests.html

        => createRedirects =>

        /SQL/index.html
        /low-code-sql/index.html => /SQL/index.html
        /SQL/data-tests/index.html
        /low-code-sql/data-tests/index.html => /SQL/data-tests/index.html
        /SQL/data-tests/use-project-tests.html
        /low-code-sql/data-tests/use-project-tests.html => /SQL/data-tests/use-project-tests.html


         */
        createRedirects(existingPath) {
          if (existingPath.includes("/SQL")) {
            return [existingPath.replace("/SQL", "/low-code-sql")];
          }
          if (existingPath.includes("/Spark")) {
            return [existingPath.replace("/Spark", "/low-code-spark")];
          }
          return undefined;
        },
      },
    ],
  ],
};

module.exports = config;
