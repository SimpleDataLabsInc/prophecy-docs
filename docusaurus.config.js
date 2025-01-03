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
          {
            to: "/getting-help/spark-cluster-details",
            from: "/getting-started/getting-help/logs/config-sparkui",
          },
          {
            to: "/getting-help/prophecy-details",
            from: "/getting-started/getting-help/logs/",
          },
          {
            to: "/getting-help/spark-cluster-details",
            from: "/getting-started/getting-help/logs/config-sparknotebook",
          },
          {
            to: "/architecture/self-hosted/enable-data-copilot",
            from: "/architecture/deployment/enable-data-copilot",
          },
          {
            to: "/architecture/self-hosted/enable-data-copilot",
            from: "/copilot/enable-data-copilot",
          },
          {
            to: "/architecture/self-hosted/authentication/active_directory",
            from: "/architecture/authentication/active_directory",
          },
          {
            to: "/Spark/fabrics/emr",
            from: "/architecture/deployment/EMR-livy-installation-guide",
          },
          {
            to: "/Spark/fabrics/emr",
            from: "/Spark/fabrics/EMR-serverless-fabric-configuration",
          },
          {
            to: "/Spark/fabrics/emr",
            from: "/Spark/fabrics/EMR-fabric-configuration",
          },
          {
            to: "/architecture/self-hosted/upgrade-backup-restore",
            from: "/architecture/deployment/private-saas/backup-restore",
          },
          {
            to: "/architecture/self-hosted/",
            from: "/architecture/deployment/private-saas/",
          },
          {
            to: "/architecture/self-hosted/authentication/security-settings",
            from: "/architecture/authentication/admin-settings",
          },
          {
            to: "/architecture/self-hosted/authentication/",
            from: "/architecture/authentication",
          },
          {
            to: "/architecture/self-hosted/authentication/azure-ad",
            from: "/architecture/authentication/azure_ad",
          },
          {
            to: "/architecture/self-hosted/authentication/azuread-scim",
            from: "/architecture/authentication/azuread_scim",
          },
          {
            to: "/architecture/self-hosted/authentication/saml-okta",
            from: "/architecture/authentication/saml_okta",
          },
          {
            to: "/architecture/self-hosted/configurations/configure-audit-logs",
            from: "/architecture/deployment/private-saas/audit-events",
          },
          {
            to: "/architecture/self-hosted/configurations/configure-object-store",
            from: "/architecture/deployment/private-saas/object-store-config",
          },
          {
            to: "/architecture/self-hosted/configurations/sandbox-configuration",
            from: "/architecture/deployment/private-saas/sandbox-config",
          },
          {
            to: "/architecture/self-hosted/configurations/configure-alerts",
            from: "/architecture/deployment/private-saas/alerts-config",
          },
          {
            to: "/architecture/self-hosted/download-logs",
            from: "/architecture/deployment/private-saas/download-logs",
          },
          {
            to: "/architecture/self-hosted/generate-api-key",
            from: "/architecture/deployment/private-saas/generate-api-key",
          },
          {
            to: "/architecture/self-hosted/install-prophecy/installation-helm/",
            from: "/architecture/deployment/installation-guide",
          },
          {
            to: "/Orchestration/multi-jobs-trigger",
            from: "/tutorials/Orchestration/multi-jobs-trigger",
          },
          {
            to: "/Orchestration/reliable-ci-cd",
            from: "/tutorials/Orchestration/reliable-ci-cd",
          },
          {
            to: "/Orchestration/",
            from: "/tutorials/Orchestration/",
          },
          {
            to: "/Spark/gems/source-target/file/xlsx",
            from: "/tutorials/Spark/excel",
          },
          {
            to: "/Spark/",
            from: "/tutorials/Spark/",
          },
          {
            to: "/Spark/",
            from: "/tutorials/videos/design-pipeline",
          },
          {
            to: "/Spark/",
            from: "/tutorials/videos/schedule-pipeline",
          },
          {
            to: "/Spark/",
            from: "/tutorials/videos/test-pipeline",
          },
          {
            to: "/Spark/",
            from: "/tutorials/videos/",
          },
          {
            to: "/concepts/project/gems/",
            from: "/concepts/gems/",
          },
          {
            to: "/concepts/project/dataset",
            from: "/concepts/dataset",
          },
          {
            to: "/architecture/feature-matrix",
            from: "/feature-matrix",
          },
          {
            to: "/Orchestration/airflow/airflow-tutorial",
            from: "/getting-started/airflow",
          },
          {
            to: "/concepts/metadata",
            from: "/metadata/metadata-connections",
          },
          {
            to: "/concepts/git",
            from: "/metadata/git",
          },
          {
            to: "/concepts/git",
            from: "/metadata/git/git-commit",
          },
          {
            to: "/concepts/git",
            from: "/metadata/git/git-merge",
          },
          {
            to: "/concepts/git/pr-templates",
            from: "/metadata/pr-templates",
          },
          {
            to: "/concepts/git",
            from: "/metadata/git/git-fork",
          },
          {
            to: "/concepts/git/git-resolve",
            from: "/metadata/git/git-resolve",
          },
          {
            to: "/getting-help/prophecyAPI",
            from: "/metadata/prophecyAPI",
          },
          {
            to: "/settings/audit-logging",
            from: "/metadata/audit-logging",
          },
          {
            to: "/settings/teamuser",
            from: "/concepts/teamuser",
          },
          {
            to: "/architecture/self-hosted/enable-data-copilot",
            from: "/concepts/copilot/enable-data-copilot",
          },
          {
            to: "/Spark/prophecy-libraries",
            from: "/concepts/fabrics/prophecy-libraries",
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
          if (existingPath.includes("/Orchestration")) {
            return [existingPath.replace("/Orchestration", "/low-code-jobs")];
          }
          if (existingPath.includes("/getting-help")) {
            return [
              existingPath.replace(
                "/getting-help",
                "/getting-started/getting-help",
              ),
            ];
          }
          if (existingPath.includes("/copilot")) {
            return [existingPath.replace("/copilot", "/concepts/copilot")];
          }
          if (existingPath.includes("/lineage")) {
            return [existingPath.replace("/lineage", "/metadata/lineage")];
          }
          return undefined;
        },
      },
    ],
  ],
};

module.exports = config;
