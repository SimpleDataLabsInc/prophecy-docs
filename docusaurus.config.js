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
            to: "/engineers/copilot",
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
            to: "/engineers/multi-jobs-trigger",
            from: "/tutorials/Orchestration/multi-jobs-trigger",
          },
          {
            to: "/engineers/ci-cd",
            from: "/tutorials/Orchestration/reliable-ci-cd",
          },
          {
            to: "/engineers/orchestration",
            from: "/tutorials/Orchestration",
          },
          {
            to: "/engineers/xlsx",
            from: "/tutorials/Spark/excel",
          },
          {
            to: "/engineers/pipeline-development",
            from: "/Spark",
          },
          {
            to: "/engineers/pipeline-development",
            from: "/tutorials/Spark/",
          },
          {
            to: "/engineers/pipeline-development",
            from: "/tutorials/videos/design-pipeline",
          },
          {
            to: "/engineers/pipeline-development",
            from: "/tutorials/videos/schedule-pipeline",
          },
          {
            to: "/engineers/pipeline-development",
            from: "/tutorials/videos/test-pipeline",
          },
          {
            to: "/engineers/pipeline-development",
            from: "/tutorials/videos/",
          },
          {
            to: "/engineers/pipelines",
            from: "/Spark/pipelines",
          },
          {
            to: "/engineers/configurations",
            from: "/Spark/pipelines/configuration",
          },
          {
            to: "/engineers/pipeline-configuration-secrets",
            from: "/Spark/pipelines/secrets-configs",
          },
          {
            to: "/engineers/pipeline-settings",
            from: "/Spark/pipelines/pipeline-settings",
          },
          {
            to: "/engineers/dataset",
            from: "/Spark/dataset",
          },
          {
            to: "/engineers/gems",
            from: "/Spark/gems",
          },
          {
            to: "/engineers/source-target",
            from: "/Spark/gems/source-target",
          },
          {
            to: "/engineers/avro",
            from: "/Spark/gems/source-target/file/avro",
          },
          {
            to: "/engineers/csv",
            from: "/Spark/gems/source-target/file/csv",
          },
          {
            to: "/engineers/data-generator",
            from: "/Spark/gems/source-target/file/data-generator",
          },
          {
            to: "/engineers/delta",
            from: "/Spark/gems/source-target/file/delta",
          },
          {
            to: "/engineers/fixed-format",
            from: "/Spark/gems/source-target/file/fixed-format",
          },
          {
            to: "/engineers/json",
            from: "/Spark/gems/source-target/file/json",
          },
          {
            to: "/engineers/kafka",
            from: "/Spark/gems/source-target/file/kafka",
          },
          {
            to: "/engineers/orc",
            from: "/Spark/gems/source-target/file/orc",
          },
          {
            to: "/engineers/parquet",
            from: "/Spark/gems/source-target/file/parquet",
          },
          {
            to: "/engineers/seed",
            from: "/Spark/gems/source-target/file/seed",
          },
          {
            to: "/engineers/text",
            from: "/Spark/gems/source-target/file/text",
          },
          {
            to: "/engineers/upload-file",
            from: "/Spark/gems/source-target/file/upload-file",
          },
          {
            to: "/engineers/xlsx",
            from: "/Spark/gems/source-target/file/xlsx",
          },
          {
            to: "/engineers/xml",
            from: "/Spark/gems/source-target/file/xml",
          },
          {
            to: "/engineers/bigquery",
            from: "/Spark/gems/source-target/warehouse/bigquery",
          },
          {
            to: "/engineers/cosmosdb",
            from: "/Spark/gems/source-target/warehouse/cosmos",
          },
          {
            to: "/engineers/db2",
            from: "/Spark/gems/source-target/warehouse/db2",
          },
          {
            to: "/engineers/jdbc",
            from: "/Spark/gems/source-target/warehouse/jdbc",
          },
          {
            to: "/engineers/mongodb",
            from: "/Spark/gems/source-target/warehouse/mongodb",
          },
          {
            to: "/engineers/oracle",
            from: "/Spark/gems/source-target/warehouse/oracle",
          },
          {
            to: "/engineers/redshift",
            from: "/Spark/gems/source-target/warehouse/redshift",
          },
          {
            to: "/engineers/salesforce",
            from: "/Spark/gems/source-target/warehouse/salesforce",
          },
          {
            to: "/engineers/snowflake",
            from: "/Spark/gems/source-target/warehouse/snowflake",
          },
          {
            to: "/engineers/teradata",
            from: "/Spark/gems/source-target/warehouse/teradata",
          },
          {
            to: "/engineers/delta-table",
            from: "/Spark/gems/source-target/catalog-table/delta",
          },
          {
            to: "/engineers/hive-table",
            from: "/Spark/gems/source-target/catalog-table/hive",
          },
          {
            to: "/engineers/iceberg",
            from: "/Spark/gems/source-target/catalog-table/iceberg",
          },
          {
            to: "/engineers/lookup",
            from: "/Spark/gems/source-target/lookup",
          },
          {
            to: "/engineers/aggregate",
            from: "/Spark/gems/transform/aggregate",
          },
          {
            to: "/engineers/bulk-column-expressions",
            from: "/Spark/gems/transform/bulk-column-expressions",
          },
          {
            to: "/engineers/bulk-column-rename",
            from: "/Spark/gems/transform/bulk-column-rename",
          },
          {
            to: "/engineers/column-parser",
            from: "/Spark/gems/transform/column-parser",
          },
          {
            to: "/engineers/data-cleansing",
            from: "/Spark/gems/transform/data-cleansing",
          },
          {
            to: "/engineers/data-quality-check",
            from: "/Spark/gems/transform/data-quality-check",
          },
          {
            to: "/engineers/deduplicate",
            from: "/Spark/gems/transform/deduplicate",
          },
          {
            to: "/engineers/dynamic-replace",
            from: "/Spark/gems/transform/dynamic-replace",
          },
          {
            to: "/engineers/dynamic-select",
            from: "/Spark/gems/transform/dynamic-select",
          },
          {
            to: "/engineers/filter",
            from: "/Spark/gems/transform/filter",
          },
          {
            to: "/engineers/flatten-schema",
            from: "/Spark/gems/transform/flatten-schema",
          },
          {
            to: "/engineers/fuzzy-match",
            from: "/Spark/gems/transform/fuzzy-match",
          },
          {
            to: "/engineers/limit",
            from: "/Spark/gems/transform/limit",
          },
          {
            to: "/engineers/order-by",
            from: "/Spark/gems/transform/order-by",
          },
          {
            to: "/engineers/reformat",
            from: "/Spark/gems/transform/reformat",
          },
          {
            to: "/engineers/sample-rows",
            from: "/Spark/gems/transform/sample-rows",
          },
          {
            to: "/engineers/schema-transform",
            from: "/Spark/gems/transform/schema-transform",
          },
          {
            to: "/engineers/set-operation",
            from: "/Spark/gems/transform/set-operation",
          },
          {
            to: "/engineers/unpivot",
            from: "/Spark/gems/transform/unpivot",
          },
          {
            to: "/engineers/window-function",
            from: "/Spark/gems/transform/window-function",
          },
          {
            to: "/engineers/join-split",
            from: "/Spark/gems/join-split/join-split",
          },
          {
            to: "/engineers/compare-columns",
            from: "/Spark/gems/join-split/compare-columns",
          },
          {
            to: "/engineers/join",
            from: "/Spark/gems/join-split/join",
          },
          {
            to: "/engineers/repartition",
            from: "/Spark/gems/join-split/Repartition",
          },
          {
            to: "/engineers/row-distributor",
            from: "/Spark/gems/join-split/row-distributor",
          },
          {
            to: "/engineers/basic-subgraph",
            from: "/Spark/gems/subgraph/basic-subgraph",
          },
          {
            to: "/engineers/table-iterator",
            from: "/Spark/gems/subgraph/table-iterator",
          },
          {
            to: "/engineers/while-iterator",
            from: "/Spark/gems/subgraph/while-iterator",
          },
          {
            to: "/engineers/machine-learning",
            from: "/Spark/gems/machine-learning",
          },
          {
            to: "/engineers/openai",
            from: "/Spark/gems/machine-learning/ml-openai",
          },
          {
            to: "/engineers/pinecone-lookup",
            from: "/Spark/gems/machine-learning/ml-pinecone-lookup",
          },
          {
            to: "/engineers/text-processing",
            from: "/Spark/gems/machine-learning/ml-text-processing",
          },
          {
            to: "/engineers/generative-ai-chatbot",
            from: "/Spark/gems/machine-learning/gen-ai-chatbot",
          },
          {
            to: "/engineers/custom",
            from: "/Spark/gems/custom",
          },
          {
            to: "/engineers/script",
            from: "/Spark/gems/custom/script",
          },
          {
            to: "/engineers/sql-statement",
            from: "/Spark/gems/custom/sql-statement",
          },
          {
            to: "/engineers/delta-table-operations",
            from: "/Spark/gems/custom/delta-ops",
          },
          {
            to: "/engineers/file-operation",
            from: "/Spark/gems/custom/file-operations",
          },
          {
            to: "/engineers/rest-api-enrich",
            from: "/Spark/gems/custom/rest-api-enrich",
          },
          {
            to: "/engineers/directory",
            from: "/Spark/gems/custom/directory",
          },
          {
            to: "/engineers/expression-builder",
            from: "/Spark/gems/expression-builder",
          },
          {
            to: "/engineers/data-explorer",
            from: "/Spark/data-explorer",
          },
          {
            to: "/engineers/data-explorer",
            from: "/Spark/data-explorer/data-profile",
          },
          {
            to: "/engineers/business-rules",
            from: "/Spark/data-explorer/functions/business-rules-engine",
          },
          {
            to: "/engineers/user-defined-functions",
            from: "/Spark/functions/udfs",
          },
          {
            to: "/engineers/spark-streaming",
            from: "/Spark/spark-streaming",
          },
          {
            to: "/engineers/spark-streaming",
            from: "/Spark/spark-streaming/streaming-sources-and-targets",
          },
          {
            to: "/engineers/file-based-streaming-source-and-targets",
            from: "/Spark/spark-streaming/streaming-sources-and-targets/streaming-file-apps",
          },
          {
            to: "/engineers/event-based-streaming-source-and-targets",
            from: "/Spark/spark-streaming/streaming-sources-and-targets/streaming-event-apps",
          },
          {
            to: "/engineers/warehouse-based-streaming-source-and-targets",
            from: "/Spark/spark-streaming/streaming-sources-and-targets/streaming-warehouse-apps",
          },
          {
            to: "/engineers/spark-streaming-transformations",
            from: "/Spark/spark-streaming/transformations-streaming",
          },
          {
            to: "/engineers/models",
            from: "/data-modeling",
          },
          {
            to: "/engineers/models",
            from: "/engineers/data-models",
          },
          {
            to: "/engineers/models",
            from: "/data-modeling/Model",
          },
          {
            to: "/engineers/data-modeling-gems",
            from: "/data-modeling/gems",
          },
          {
            to: "/analysts/model-sources-and-targets",
            from: "/data-modeling/gems/datasources",
          },
          {
            to: "/analysts/model-sources-and-targets",
            from: "/engineers/model-sources",
          },
          {
            to: "/analysts/model-sources-and-targets",
            from: "/data-modeling/gems/target-models",
          },
          {
            to: "/analysts/model-sources-and-targets",
            from: "/engineers/target-models",
          },
          {
            to: "/engineers/location-target-model",
            from: "/data-modeling/gems/target-models/location",
          },
          {
            to: "/engineers/schema-target-model",
            from: "/data-modeling/gems/target-models/schema",
          },
          {
            to: "/engineers/sql-query-target-model",
            from: "/data-modeling/gems/target-models/sql-query",
          },
          {
            to: "/engineers/type-and-format-target-model",
            from: "/data-modeling/gems/target-models/type-and-format",
          },
          {
            to: "/engineers/write-options-target-model",
            from: "/data-modeling/gems/target-models/write-options",
          },
          {
            to: "/engineers/models",
            from: "/data-modeling/execution",
          },
          {
            to: "/engineers/models",
            from: "/engineers/data-model-execution",
          },
          {
            to: "/engineers/data-model-configurations",
            from: "/data-modeling/configuration",
          },
          {
            to: "/engineers/lineage",
            from: "/lineage",
          },
          {
            to: "/engineers/lineage-extractor",
            from: "/lineage/lineage-extractor",
          },
          {
            to: "/engineers/lineage",
            from: "/lineage/lineage-run-and-diagnose",
          },
          {
            to: "/engineers/lineage",
            from: "/lineage/lineage-view-and-search",
          },
          {
            to: "/engineers/git",
            from: "/ci-cd/git",
          },
          {
            to: "/engineers/git-workflow",
            from: "/ci-cd/git/git-workflow",
          },
          {
            to: "/engineers/resolve-git-conflicts",
            from: "/ci-cd/git/git-resolve",
          },
          {
            to: "/engineers/git-pull-requests",
            from: "/ci-cd/git/pr-templates",
          },
          {
            to: "/engineers/unit-tests",
            from: "/ci-cd/tests/",
          },
          {
            to: "/engineers/data-diff",
            from: "/ci-cd/data-diff",
          },
          {
            to: "/engineers/deployment",
            from: "/ci-cd/deployment",
          },
          {
            to: "/engineers/develop-and-deploy",
            from: "/ci-cd/deployment/deploy-project",
          },
          {
            to: "/engineers/external-release-tags",
            from: "/ci-cd/deployment/use-external-release-tags",
          },
          {
            to: "/engineers/prophecy-build-tool",
            from: "/ci-cd/prophecy-build-tool",
          },
          {
            to: "/engineers/github-actions-prophecy-build-tool",
            from: "/ci-cd/prophecy-build-tool/prophecy-build-tool-github-actions",
          },
          {
            to: "/engineers/jenkins-prophecy-build-tool",
            from: "/ci-cd/prophecy-build-tool/prophecy-build-tool-jenkins",
          },
          {
            to: "/engineers/orchestration",
            from: "/Orchestration",
          },
          {
            to: "/engineers/pipeline-monitoring",
            from: "/Orchestration/pipeline-monitoring",
          },
          {
            to: "/engineers/enable-pipeline-monitoring",
            from: "/Orchestration/pipeline-monitoring/enable-pipeline-monitoring",
          },
          {
            to: "/engineers/use-pipeline-monitoring",
            from: "/Orchestration/pipeline-monitoring/use-pipeline-monitoring",
          },
          {
            to: "/engineers/airflow",
            from: "/Orchestration/airflow",
          },
          {
            to: "/engineers/spark-airflow-tutorial",
            from: "/Orchestration/airflow/airflow-tutorial-spark",
          },
          {
            to: "/engineers/databricks-jobs",
            from: "/Orchestration/databricks-jobs",
          },
          {
            to: "/engineers/multi-jobs-trigger",
            from: "/Orchestration/multi-jobs-trigger",
          },
          {
            to: "/engineers/extensibility",
            from: "/extensibility",
          },
          {
            to: "/engineers/package-hub",
            from: "/extensibility/package-hub",
          },
          {
            to: "/engineers/shareable-pipelines",
            from: "/extensibility/package-hub/shareable-pipelines",
          },
          {
            to: "/engineers/shareable-datasets",
            from: "/extensibility/package-hub/shareable-datasets",
          },
          {
            to: "/engineers/shareable-subgraphs",
            from: "/extensibility/package-hub/shareable-subgraphs",
          },
          {
            to: "/engineers/shareable-udfs",
            from: "/extensibility/package-hub/sharable-udfs",
          },
          {
            to: "/engineers/gem-builder-reference",
            from: "/extensibility/gem-builder/gem-builder-reference",
          },
          {
            to: "/engineers/optimization-functions",
            from: "/extensibility/gem-builder/optimization-functions",
          },
          {
            to: "/gems",
            from: "/concepts/gems/",
          },
          {
            to: "/engineers/dataset",
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
            to: "/engineers/dataset",
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
            to: "/engineers/spark-airflow-tutorial",
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
            to: "/engineers/git",
            from: "/metadata/git",
          },
          {
            to: "/engineers/git",
            from: "/metadata/git/git-commit",
          },
          {
            to: "/engineers/git",
            from: "/metadata/git/git-merge",
          },
          {
            to: "/engineers/git-pull-requests",
            from: "/metadata/pr-templates",
          },
          {
            to: "/engineers/git",
            from: "/metadata/git/git-fork",
          },
          {
            to: "/engineers/resolve-git-conflicts",
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
            to: "/engineers/unit-tests",
            from: "/Spark/tests",
          },
          {
            to: "/engineers/ci-cd",
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
            to: "/engineers/optimization-functions",
            from: "/Spark/extensibility/gem-builder/optimization-functions",
          },
          {
            to: "/engineers/user-defined-functions",
            from: "/Spark/extensibility/udfs",
          },
          {
            to: "/engineers/business-rules",
            from: "/Spark/business-rules-engine/",
          },
          {
            to: "/engineers/data-modeling",
            from: "/SQL/development/",
          },
          {
            to: "/engineers/package-hub",
            from: "/package-hub/package-builder/",
          },
          {
            to: "/analysts/variant-schema",
            from: "/SQL/development/visual-editor/variant-schema",
          },
          {
            to: "/engineers/data-modeling",
            from: "/SQL/development/visual-editor/",
          },
          {
            to: "/engineers/data-modeling",
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
            to: "/engineers/generative-ai-chatbot",
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
            to: "/engineers/extensibility",
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
            to: "/engineers/spark-dependencies",
            from: "/extensibility/dependencies/spark-dependencies",
          },
          {
            to: "/engineers/prophecy-libraries",
            from: "/extensibility/dependencies/prophecy-libraries",
          },
          {
            to: "/analysts/ai-chat",
            from: "/analysts/gem-generation",
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
