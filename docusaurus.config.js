// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
          { type: "doc", docId: "index", position: "left", label: "Docs" },
          {
            to: "administration",
            label: "Administration",
            position: "left",
          },
          {
            to: "https://transpiler.docs.prophecy.io/",
            position: "left",
            label: "Transpiler",
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
      "@inkeep/cxkit-docusaurus",
      {
        SearchBar: {
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
            // optional settings
            aiAssistantAvatar: "img/icon.png", // optional -- use your own ai assistant avatar
          },
        },
      },
    ],
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
            to: "/administration/self-hosted/enable-data-copilot",
            from: "/architecture/deployment/enable-data-copilot",
          },
          {
            to: "/administration/self-hosted/enable-data-copilot",
            from: "/copilot/enable-data-copilot",
          },
          {
            to: "/data-copilot",
            from: "/copilot",
          },
          {
            to: "/data-copilot-ai-capabilities",
            from: "/copilot/copilot-ai-capabilities",
          },
          {
            to: "/data-copilot-data-privacy",
            from: "/copilot/copilot-data-privacy",
          },
          {
            to: "/administration/authentication/active_directory",
            from: "/architecture/authentication/active_directory",
          },
          {
            to: "/administration/fabrics/Spark-fabrics/emr",
            from: "/architecture/deployment/EMR-livy-installation-guide",
          },
          {
            to: "/administration/fabrics/Spark-fabrics/emr",
            from: "/Spark/fabrics/EMR-serverless-fabric-configuration",
          },
          {
            to: "/administration/fabrics/Spark-fabrics/emr",
            from: "/Spark/fabrics/EMR-fabric-configuration",
          },
          {
            to: "/administration/fabrics/Spark-fabrics/databricks/",
            from: "/Spark/fabrics/databricks-fabric",
          },
          {
            to: "/administration/self-hosted/upgrade-backup-restore",
            from: "/architecture/deployment/private-saas/backup-restore",
          },
          {
            to: "/administration/self-hosted/",
            from: "/architecture/deployment/private-saas/",
          },
          {
            to: "/administration/fabrics/Spark-fabrics/livy",
            from: "/architecture/authentication/admin-settings",
          },
          {
            to: "/databricks-oauth-authentication",
            from: "/administration/authentication/databricks_oauth",
          },
          {
            to: "/administration/authentication/",
            from: "/architecture/authentication",
          },
          {
            to: "/administration/authentication/azure-ad",
            from: "/architecture/authentication/azure_ad",
          },
          {
            to: "/administration/authentication/saml-scim",
            from: "/architecture/authentication/azuread_scim",
          },
          {
            to: "/administration/authentication/saml-scim",
            from: "/architecture/authentication/saml_okta",
          },
          {
            to: "/administration/self-hosted/configurations/configure-audit-logs",
            from: "/architecture/deployment/private-saas/audit-events",
          },
          {
            to: "/administration/self-hosted/configurations/configure-object-store",
            from: "/architecture/deployment/private-saas/object-store-config",
          },
          {
            to: "/administration/self-hosted/configurations/sandbox-configuration",
            from: "/architecture/deployment/private-saas/sandbox-config",
          },
          {
            to: "/administration/self-hosted/configurations/configure-alerts",
            from: "/architecture/deployment/private-saas/alerts-config",
          },
          {
            to: "/administration/self-hosted/download-logs",
            from: "/architecture/deployment/private-saas/download-logs",
          },
          {
            to: "/administration/self-hosted/generate-api-key",
            from: "/architecture/deployment/private-saas/generate-api-key",
          },
          {
            to: "/self-hosted-helm-installation",
            from: "/architecture/deployment/installation-guide",
          },
          {
            to: "/fabric-diagnostics",
            from: "/administration/Spark-fabrics/fabric-diagnostics",
          },
          {
            to: "/Orchestration/multi-jobs-trigger",
            from: "/tutorials/Orchestration/multi-jobs-trigger",
          },
          {
            to: "/ci-cd/reliable-ci-cd",
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
            to: "/gems",
            from: "/concepts/gems/",
          },
          {
            to: "/Spark/dataset",
            from: "/concepts/dataset",
          },
          {
            to: "/pipelines",
            from: "/concepts/project/pipeline",
          },
          {
            to: "/projects",
            from: "/concepts/project",
          },
          {
            to: "/fabrics",
            from: "/concepts/fabrics",
          },
          {
            to: "/Spark/dataset",
            from: "/concepts/project/dataset",
          },
          {
            to: "/administration/",
            from: "/feature-matrix",
          },
          {
            to: "/administration/",
            from: "/administration/feature-matrix",
          },
          {
            to: "/Orchestration/airflow/airflow-tutorial-spark",
            from: "/getting-started/airflow",
          },
          {
            to: "/administration/",
            from: "/metadata/metadata-connections",
          },
          {
            to: "/administration/",
            from: "/concepts/metadata",
          },
          {
            to: "/ci-cd/git",
            from: "/metadata/git",
          },
          {
            to: "/ci-cd/git",
            from: "/metadata/git/git-commit",
          },
          {
            to: "/ci-cd/git",
            from: "/metadata/git/git-merge",
          },
          {
            to: "/ci-cd/git/pr-templates",
            from: "/metadata/pr-templates",
          },
          {
            to: "/ci-cd/git",
            from: "/metadata/git/git-fork",
          },
          {
            to: "/ci-cd/git/git-resolve",
            from: "/metadata/git/git-resolve",
          },
          {
            to: "/getting-help/prophecyAPI",
            from: "/metadata/prophecyAPI",
          },
          {
            to: "/administration/saas/audit-logging",
            from: "/metadata/audit-logging",
          },
          {
            to: "/administration/saas/audit-logging",
            from: "/settings/audit-logging",
          },
          {
            to: "/administration/teams-users/teams-users",
            from: "/concepts/teamuser",
          },
          {
            to: "/administration/teams-users/teams-users",
            from: "/administration/settings/teamuser",
          },
          {
            to: "/administration/self-hosted/enable-data-copilot",
            from: "/concepts/copilot/enable-data-copilot",
          },
          {
            to: "/administration/prophecy-deployment",
            from: "/architecture/deployment",
          },
          {
            to: "/administration/prophecy-deployment",
            from: "/administration/deployment",
          },
          {
            to: "/administration/",
            from: "/architecture",
          },
          {
            to: "/self-hosted-helm-installation",
            from: "/architecture/self-hosted/install-prophecy/installation-helm",
          },
          {
            to: "/administration/self-hosted/installation-helm/install-on-aws",
            from: "/architecture/self-hosted/install-prophecy/installation-helm/install-on-aws",
          },
          {
            to: "/administration/self-hosted/installation-marketplaces/",
            from: "/architecture/self-hosted/install-prophecy/installation-marketplaces",
          },
          {
            to: "/administration/self-hosted/installation-marketplaces/install-azure-marketplace",
            from: "/architecture/self-hosted/install-prophecy/installation-marketplaces/install-azure-marketplace",
          },
          {
            to: "/administration/authentication/saml-scim",
            from: "/administration/authentication/azuread-scim",
          },
          {
            to: "/administration/authentication/saml-scim",
            from: "/administration/authentication/saml-okta",
          },
          {
            to: "/engineers/prophecy-libraries",
            from: "/concepts/fabrics/prophecy-libraries",
          },
          {
            to: "/engineers/conditional-execution",
            from: "/Spark/configuration/conditional-execution",
          },
          {
            to: "/engineers/configurations",
            from: "/Spark/configuration",
          },
          {
            to: "/engineers/execution-metrics",
            from: "/Spark/execution/execution-metrics",
          },
          {
            to: "/engineers/execution",
            from: "/Spark/execution/interactive-execution",
          },
          {
            to: "/ci-cd/tests",
            from: "/Spark/tests",
          },
          {
            to: "/ci-cd/reliable-ci-cd",
            from: "/Orchestration/reliable-ci-cd",
          },
          {
            to: "/analysts/dependencies",
            from: "/SQL/extensibility/dependencies",
          },
          {
            to: "/analysts/gem-builder",
            from: "/SQL/extensibility/gem-builder/",
          },
          {
            to: "/engineers/gem-builder",
            from: "/Spark/extensibility/gem-builder/",
          },
          {
            to: "/extensibility/gem-builder/optimization-functions",
            from: "/Spark/extensibility/gem-builder/optimization-functions",
          },
          {
            to: "/Spark/functions/udfs",
            from: "/Spark/extensibility/udfs",
          },
          {
            to: "/Spark/functions/business-rules-engine/",
            from: "/Spark/business-rules-engine/",
          },
          {
            to: "/data-modeling/",
            from: "/SQL/development/",
          },
          {
            to: "/extensibility/package-hub/",
            from: "/package-hub/package-builder/",
          },
          {
            to: "/analysts/variant-schema",
            from: "/SQL/development/visual-editor/variant-schema",
          },
          {
            to: "/data-modeling/",
            from: "/SQL/development/visual-editor/",
          },
          {
            to: "/data-modeling/",
            from: "/SQL/development/code-editor",
          },
          {
            to: "/engineers/gem-builder",
            from: "/package-hub/package-builder/Gem-builder",
          },
          {
            to: "/engineers/gem-builder",
            from: "/extensibility/package-hub/Gem-builder",
          },
          {
            to: "/api/active-users-api/",
            from: "/settings/active-users-api/",
          },
          {
            to: "/engineers/project-lifecycle",
            from: "/getting-started/spark-with-databricks",
          },
          {
            to: "/engineers/data-modeling",
            from: "/getting-started/sql-with-snowflake",
          },
          {
            to: "/engineers/data-modeling",
            from: "/getting-started/sql-with-databricks",
          },
          {
            to: "/Spark/gems/machine-learning/gen-ai-chatbot",
            from: "/getting-started/gen-ai-chatbot",
          },
          {
            to: "/engineers/subgraph",
            from: "/Spark/gems/subgraph",
          },
          {
            to: "/administration/fabrics/Spark-fabrics/livy",
            from: "/administration/authentication/security-settings",
          },
          {
            to: "/engineers/prophecy-managed-fabric",
            from: "/administration/fabrics/Spark-fabrics/prophecy-managed-databricks",
          },
          {
            to: "/engineers/prophecy-managed-fabric",
            from: "/Spark/fabrics/prophecy-managed-databricks",
          },
          {
            to: "/engineers/configurations",
            from: "/low-code-spark/parameterized-gems",
          },
          {
            to: "/engineers/subgraph",
            from: "/low-code-spark/gems/subgraph/",
          },
          {
            to: "/extensibility/",
            from: "/low-code-spark/extensibility/dependencies",
          },
          {
            to: "/engineers/execution-metrics",
            from: "/low-code-spark/execution/execution-metrics",
          },
          {
            to: "/engineers/data-sampling",
            from: "/low-code-spark/execution/executions_on_databricks_clusters",
          },
          {
            to: "/analysts/gem-builder",
            from: "/extensibility/gem-builder/sql-gem-builder",
          },
          {
            to: "/engineers/gem-builder",
            from: "/extensibility/gem-builder/spark-gem-builder",
          },
          {
            to: "/engineers/dependencies",
            from: "/extensibility/dependencies/spark-dependencies",
          },
          {
            to: "/engineers/prophecy-libraries",
            from: "/extensibility/dependencies/prophecy-libraries",
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

        ENSURE that more specific paths are evaluated first so that they match before broader conditions like /SQL or /Spark, which could otherwise override them.
        By ordering conditions based on specificity, you can prevent unintended matches and ensure the correct redirect logic is applied.

         */
        createRedirects(existingPath) {
          if (
            existingPath.includes("/Orchestration/airflow/prophecy-managed")
          ) {
            return [
              existingPath.replace(
                "/Orchestration/airflow/prophecy-managed",
                "/Orchestration/airflow/setup/prophecy-managed",
              ),
            ];
          }
          if (existingPath.includes("/Orchestration/pipeline-monitoring")) {
            return [
              existingPath.replace(
                "/Orchestration/pipeline-monitoring",
                "/Spark/pipeline-monitoring",
              ),
            ];
          }
          if (existingPath.includes("/data-modeling/gems/target-models/")) {
            return [
              existingPath.replace(
                "/data-modeling/gems/target-models/",
                "/SQL/development/target-models/",
              ),
            ];
          }
          if (
            existingPath.includes("/data-modeling/visual-expression-builder")
          ) {
            return [
              existingPath.replace(
                "/data-modeling/visual-expression-builder",
                "/SQL/development/visual-editor/visual-expression-builder",
              ),
            ];
          }
          if (existingPath.includes("/administration/fabrics/Spark-fabrics/")) {
            return [
              existingPath.replace(
                "/administration/fabrics/Spark-fabrics/",
                "/Spark/fabrics/",
              ),
            ];
          }
          if (existingPath.includes("/administration/fabrics/sql-fabrics")) {
            return [
              existingPath.replace(
                "/administration/fabrics/sql-fabrics",
                "/SQL/fabrics/",
              ),
            ];
          }
          if (existingPath.includes("/administration/secrets")) {
            return [
              existingPath.replace(
                "/administration/secrets",
                "/Spark/secret-management",
              ),
            ];
          }
          if (existingPath.includes("/administration/authentication")) {
            return [
              existingPath.replace(
                "/administration/authentication",
                "/architecture/self-hosted/authentication/",
              ),
            ];
          }
          if (existingPath.includes("/administration/self-hosted")) {
            return [
              existingPath.replace(
                "/administration/self-hosted",
                "/architecture/self-hosted/",
              ),
            ];
          }
          if (existingPath.includes("/administration/settings")) {
            return [
              existingPath.replace("/administration/settings", "/settings"),
            ];
          }
          if (existingPath.includes("/ci-cd/deployment")) {
            return [existingPath.replace("/ci-cd/deployment", "/deployment")];
          }
          if (existingPath.includes("/ci-cd/prophecy-build-tool")) {
            return [
              existingPath.replace(
                "/ci-cd/prophecy-build-tool",
                "/deployment/prophecy-build-tool",
              ),
            ];
          }
          if (existingPath.includes("/ci-cd/data-tests")) {
            return [
              existingPath.replace("/ci-cd/data-tests", "/SQL/data-tests"),
            ];
          }
          if (existingPath.includes("/extensibility/package-hub")) {
            return [
              existingPath.replace(
                "/extensibility/package-hub",
                "/package-hub",
              ),
            ];
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
          if (existingPath.includes("/Orchestration")) {
            return [existingPath.replace("/Orchestration", "/low-code-jobs")];
          }
          if (existingPath.includes("/data-modeling")) {
            return [existingPath.replace("/data-modeling", "/low-code-sql")];
          }
          if (existingPath.includes("/data-modeling")) {
            return [existingPath.replace("/data-modeling", "/SQL")];
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
