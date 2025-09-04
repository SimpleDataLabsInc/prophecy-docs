/** @type {import('@docusaurus/plugin-client-redirects').ClientRedirectsPluginOptions} */

module.exports = {
  redirects: [
    {
      to: "/administration/",
      from: [
        "/architecture/deployment/enable-data-copilot",
        "/copilot/enable-data-copilot",
        "/architecture/deployment/private-saas/backup-restore",
        "/architecture/deployment/private-saas/",
        "/architecture/deployment/private-saas/audit-events",
        "/architecture/deployment/private-saas/object-store-config",
        "/architecture/deployment/private-saas/sandbox-config",
        "/architecture/deployment/private-saas/alerts-config",
        "/architecture/deployment/private-saas/download-logs",
        "/architecture/deployment/installation-guide",
        "/feature-matrix",
        "/administration/feature-matrix",
        "/metadata/metadata-connections",
        "/concepts/metadata",
        "/concepts/copilot/enable-data-copilot",
        "/architecture",
        "/architecture/self-hosted/install-prophecy/installation-helm",
        "/architecture/self-hosted/install-prophecy/installation-helm/install-on-aws",
        "/architecture/self-hosted/install-prophecy/installation-marketplaces",
        "/architecture/self-hosted/install-prophecy/installation-marketplaces/install-azure-marketplace",
        "/administration/self-hosted/configurations",
        "/administration/self-hosted/configurations/configure-alerts/",
        "/administration/self-hosted/configurations/configure-audit-logs/",
        "/administration/self-hosted/configurations/configure-object-store/",
        "/administration/self-hosted/configurations/sandbox-configuration/",
        "/administration/self-hosted/installation-helm",
        "/administration/self-hosted/installation-helm/install-on-aws/",
        "/administration/self-hosted/installation-marketplaces",
        "/administration/self-hosted/installation-marketplaces/install-azure-marketplace/",
        "/administration/self-hosted",
        "/administration/self-hosted/bring-your-own-spark/",
        "/administration/self-hosted/configure-sparkedge/",
        "/administration/self-hosted/download-logs/",
        "/administration/self-hosted/enable-data-copilot/",
        "/administration/self-hosted/resource-monitoring/",
        "/administration/self-hosted/upgrade-backup-restore/",
      ],
    },
    {
      to: "/administration/audit-logging",
      from: [
        "/metadata/audit-logging",
        "/administration/saas/audit-logging",
        "/settings/audit-logging",
      ],
    },
    {
      to: "/administration/authentication/",
      from: "/architecture/authentication",
    },
    {
      to: "/administration/authentication/active_directory",
      from: "/architecture/authentication/active_directory",
    },
    {
      to: "/administration/authentication/azure-ad",
      from: "/architecture/authentication/azure_ad",
    },
    {
      to: "/administration/authentication/saml-scim",
      from: [
        "/architecture/authentication/azuread_scim",
        "/architecture/authentication/saml_okta",
        "/administration/authentication/azuread-scim",
        "/administration/authentication/saml-okta",
      ],
    },
    {
      to: "/administration/fabrics/Spark-fabrics/Fabrics",
      from: ["/Spark/fabrics/"],
    },
    {
      to: "/administration/fabrics/Spark-fabrics/databricks/",
      from: "/Spark/fabrics/databricks-fabric",
    },
    {
      to: "/administration/fabrics/Spark-fabrics/emr",
      from: [
        "/architecture/deployment/EMR-livy-installation-guide",
        "/Spark/fabrics/EMR-serverless-fabric-configuration",
        "/Spark/fabrics/EMR-fabric-configuration",
      ],
    },
    {
      to: "/administration/fabrics/Spark-fabrics/livy",
      from: [
        "/architecture/authentication/admin-settings",
        "/administration/authentication/security-settings",
      ],
    },
    {
      to: "/administration/fabrics/sql-fabrics/Fabrics",
      from: ["/SQL/fabrics/"],
    },
    {
      to: "/administration/prophecy-deployment",
      from: ["/architecture/deployment", "/administration/deployment"],
    },
    {
      to: "/administration/secrets/",
      from: ["/Spark/secret-management/"],
    },
    {
      to: "/administration/settings",
      from: "/administration/teams-users/settings",
    },
    {
      to: "/administration/team-based-access",
      from: "/administration/teams-users/team-based-access",
    },
    {
      to: "/administration/teams-users/teams-users",
      from: ["/concepts/teamuser", "/administration/settings/teamuser"],
    },
    {
      to: "/analysts/ai-chat",
      from: "/analysts/gem-generation",
    },
    {
      to: "/analysts/dependencies",
      from: "/SQL/extensibility/dependencies",
    },
    {
      to: "/analysts/gem-builder",
      from: [
        "/SQL/extensibility/gem-builder/",
        "/extensibility/gem-builder/sql-gem-builder",
      ],
    },
    {
      to: "/analysts/variant-schema",
      from: "/SQL/development/visual-editor/variant-schema",
    },
    {
      to: "/analysts/spatial-gems",
      from: "/engineers/spatial-gems",
    },
    {
      to: "/analysts/transform-gems",
      from: "/engineers/transform-gems",
    },
    {
      to: "/analysts/prepare-gems",
      from: "/engineers/prepare-gems",
    },
    {
      to: "/analysts/join-gems",
      from: "/engineers/join-gems",
    },
    {
      to: "/analysts/parse-gems",
      from: "/engineers/parse-gems",
    },
    {
      to: "/analysts/custom-gems",
      from: "/engineers/custom-gems",
    },
    {
      to: "/analysts/report-gems",
      from: "/engineers/report-gems",
    },
    {
      to: "/api",
      from: [
        "/architecture/deployment/private-saas/generate-api-key",
        "/metadata/prophecyAPI",
        "/getting-help/prophecyAPI",
        "/administration/self-hosted/generate-api-key",
      ],
    },
    {
      to: "/analysts/data-tests",
      from: ["/SQL/data-tests/"],
    },
    {
      to: "/engineers/ci-cd",
      from: ["/deployment/"],
    },
    {
      to: "/engineers/prophecy-build-tool",
      from: ["/deployment/prophecy-build-tool/"],
    },
    {
      to: "/data-copilot",
      from: [
        "/copilot/",
        "/concepts/copilot/",
        "/copilot/copilot-data-privacy",
      ],
    },
    {
      to: "/analysts/visual-expression-builder",
      from: [
        "/SQL/development/visual-editor/visual-expression-builder/",
        "/data-modeling/visual-expression-builder/",
      ],
    },
    {
      to: "/databricks-oauth-authentication",
      from: "/administration/authentication/databricks_oauth",
    },
    {
      to: "/engineers/aggregate",
      from: ["/Spark/gems/transform/aggregate"],
    },
    {
      to: "/engineers/avro",
      from: "/Spark/gems/source-target/file/avro",
    },
    {
      to: "/engineers/basic-subgraph",
      from: "/Spark/gems/subgraph/basic-subgraph",
    },
    {
      to: "/engineers/bigquery",
      from: "/Spark/gems/source-target/warehouse/bigquery",
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
      to: "/engineers/business-rules",
      from: [
        "/Spark/data-explorer/functions/business-rules-engine",
        "/Spark/business-rules-engine/",
      ],
    },
    {
      to: "/engineers/ci-cd",
      from: [
        "/tutorials/Orchestration/reliable-ci-cd",
        "/Orchestration/reliable-ci-cd",
      ],
    },
    {
      to: "/engineers/column-parser",
      from: "/Spark/gems/transform/column-parser",
    },
    {
      to: "/engineers/compare-columns",
      from: "/Spark/gems/join-split/compare-columns",
    },
    {
      to: "/engineers/conditional-execution",
      from: "/Spark/configuration/conditional-execution",
    },
    {
      to: "/engineers/configurations",
      from: [
        "/Spark/pipelines/configuration",
        "/Spark/configuration",
        "/low-code-spark/parameterized-gems",
      ],
    },
    {
      to: "/engineers/cosmosdb",
      from: "/Spark/gems/source-target/warehouse/cosmos",
    },
    {
      to: "/engineers/csv",
      from: "/Spark/gems/source-target/file/csv",
    },
    {
      to: "/engineers/custom",
      from: "/Spark/gems/custom",
    },
    {
      to: "/engineers/data-cleansing",
      from: "/Spark/gems/transform/data-cleansing",
    },
    {
      to: "/engineers/data-diff",
      from: "/ci-cd/data-diff",
    },
    {
      to: "/engineers/data-explorer",
      from: ["/Spark/data-explorer", "/Spark/data-explorer/data-profile"],
    },
    {
      to: "/engineers/data-generator",
      from: "/Spark/gems/source-target/file/data-generator",
    },
    {
      to: "/engineers/data-model-configurations",
      from: "/data-modeling/configuration",
    },
    {
      to: "/engineers/data-quality-check",
      from: "/Spark/gems/transform/data-quality-check",
    },
    {
      to: "/engineers/data-sampling",
      from: "/low-code-spark/execution/executions_on_databricks_clusters",
    },
    {
      to: "/engineers/dataset",
      from: [
        "/Spark/dataset",
        "/concepts/dataset",
        "/concepts/project/dataset",
      ],
    },
    {
      to: "/engineers/databricks-jobs",
      from: "/Orchestration/databricks-jobs",
    },
    {
      to: "/engineers/db2",
      from: "/Spark/gems/source-target/warehouse/db2",
    },
    {
      to: "/engineers/deduplicate",
      from: "/Spark/gems/transform/deduplicate",
    },
    {
      to: "/engineers/delta",
      from: "/Spark/gems/source-target/file/delta",
    },
    {
      to: "/engineers/delta-table",
      from: "/Spark/gems/source-target/catalog-table/delta",
    },
    {
      to: "/engineers/delta-table-operations",
      from: "/Spark/gems/custom/delta-ops",
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
      to: "/engineers/directory",
      from: "/Spark/gems/custom/directory",
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
      to: "/engineers/event-based-streaming-source-and-targets",
      from: "/Spark/spark-streaming/streaming-sources-and-targets/streaming-event-apps",
    },
    {
      to: "/engineers/execution",
      from: "/Spark/execution/interactive-execution",
    },
    {
      to: "/engineers/execution-metrics",
      from: [
        "/Spark/execution/execution-metrics",
        "/low-code-spark/execution/execution-metrics",
      ],
    },
    {
      to: "/engineers/expression-builder",
      from: "/Spark/gems/expression-builder",
    },
    {
      to: "/analysts/extensibility",
      from: ["/extensibility", "/low-code-spark/extensibility/dependencies"],
    },
    {
      to: "/engineers/external-release-tags",
      from: "/ci-cd/deployment/use-external-release-tags",
    },
    {
      to: "/engineers/file-based-streaming-source-and-targets",
      from: "/Spark/spark-streaming/streaming-sources-and-targets/streaming-file-apps",
    },
    {
      to: "/engineers/file-operation",
      from: "/Spark/gems/custom/file-operations",
    },
    {
      to: "/engineers/filter",
      from: "/Spark/gems/transform/filter",
    },
    {
      to: "/engineers/fixed-format",
      from: "/Spark/gems/source-target/file/fixed-format",
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
      to: "/engineers/gem-builder",
      from: [
        "/Spark/extensibility/gem-builder/",
        "/package-hub/package-builder/Gem-builder",
        "/extensibility/package-hub/Gem-builder",
        "/extensibility/gem-builder/spark-gem-builder",
      ],
    },
    {
      to: "/engineers/gem-builder-reference",
      from: "/extensibility/gem-builder/gem-builder-reference",
    },
    {
      to: "/engineers/gems",
      from: "/Spark/gems",
    },
    {
      to: "/engineers/generative-ai-chatbot",
      from: [
        "/Spark/gems/machine-learning/gen-ai-chatbot",
        "/getting-started/gen-ai-chatbot",
      ],
    },
    {
      to: "/engineers/git",
      from: [
        "/ci-cd/git",
        "/metadata/git",
        "/metadata/git/git-commit",
        "/metadata/git/git-merge",
        "/metadata/git/git-fork",
      ],
    },
    {
      to: "/engineers/git-pull-requests",
      from: ["/ci-cd/git/pr-templates", "/metadata/pr-templates"],
    },
    {
      to: "/engineers/git-workflow",
      from: "/ci-cd/git/git-workflow",
    },
    {
      to: "/engineers/github-actions-prophecy-build-tool",
      from: "/ci-cd/prophecy-build-tool/prophecy-build-tool-github-actions",
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
      to: "/engineers/jdbc",
      from: "/Spark/gems/source-target/warehouse/jdbc",
    },
    {
      to: "/engineers/jenkins-prophecy-build-tool",
      from: "/ci-cd/prophecy-build-tool/prophecy-build-tool-jenkins",
    },
    {
      to: "/engineers/join",
      from: "/Spark/gems/join-split/join",
    },
    {
      to: "/engineers/join-split",
      from: "/Spark/gems/join-split/join-split",
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
      to: "/engineers/limit",
      from: "/Spark/gems/transform/limit",
    },
    {
      to: "/engineers/lineage",
      from: [
        "/lineage",
        "/lineage/lineage-run-and-diagnose",
        "/lineage/lineage-view-and-search",
        "/metadata/lineage/",
        "/lineage/lineage-extractor",
      ],
    },
    {
      to: "/engineers/lookup",
      from: "/Spark/gems/source-target/lookup",
    },
    {
      to: "/engineers/machine-learning",
      from: "/Spark/gems/machine-learning",
    },
    {
      to: "/engineers/models",
      from: [
        "/data-modeling",
        "/engineers/data-models",
        "/data-modeling/Model",
        "/data-modeling/gems",
        "/data-modeling/execution",
        "/engineers/data-model-execution",
        "/SQL/development/",
        "/SQL/development/visual-editor/",
        "/SQL/development/code-editor",
        "/getting-started/sql-with-snowflake",
        "/getting-started/sql-with-databricks",
        "/low-code-sql/",
        "/SQL/",
      ],
    },
    {
      to: "/engineers/model-sources-and-targets",
      from: [
        "/data-modeling/gems/datasources",
        "/engineers/model-sources",
        "/SQL/development/target-models/",
        "/data-modeling/gems/target-models",
        "/engineers/target-models",
        "/data-modeling/gems/target-models/location",
        "/data-modeling/gems/target-models/schema",
        "/data-modeling/gems/target-models/sql-query",
        "/data-modeling/gems/target-models/type-and-format",
        "/data-modeling/gems/target-models/write-options",
      ],
    },
    {
      to: "/engineers/mongodb",
      from: "/Spark/gems/source-target/warehouse/mongodb",
    },
    {
      to: "/engineers/multi-jobs-trigger",
      from: [
        "/tutorials/Orchestration/multi-jobs-trigger",
        "/Orchestration/multi-jobs-trigger",
      ],
    },
    {
      to: "/engineers/openai",
      from: "/Spark/gems/machine-learning/ml-openai",
    },
    {
      to: "/engineers/optimization-functions",
      from: [
        "/extensibility/gem-builder/optimization-functions",
        "/Spark/extensibility/gem-builder/optimization-functions",
      ],
    },
    {
      to: "/engineers/oracle",
      from: "/Spark/gems/source-target/warehouse/oracle",
    },
    {
      to: "/engineers/orchestration",
      from: ["/tutorials/Orchestration", "/Orchestration", "/low-code-jobs/"],
    },
    {
      to: "/engineers/order-by",
      from: "/Spark/gems/transform/order-by",
    },
    {
      to: "/engineers/orc",
      from: "/Spark/gems/source-target/file/orc",
    },
    {
      to: "/engineers/package-hub",
      from: ["/extensibility/package-hub", "/package-hub/package-builder/"],
    },
    {
      to: "/engineers/parquet",
      from: "/Spark/gems/source-target/file/parquet",
    },
    {
      to: "/engineers/pinecone-lookup",
      from: "/Spark/gems/machine-learning/ml-pinecone-lookup",
    },
    {
      to: "/engineers/pipeline-configuration-secrets",
      from: "/Spark/pipelines/secrets-configs",
    },
    {
      to: "/engineers/pipeline-development",
      from: [
        "/Spark",
        "/tutorials/Spark/",
        "/tutorials/videos/design-pipeline",
        "/tutorials/videos/schedule-pipeline",
        "/tutorials/videos/test-pipeline",
        "/tutorials/videos/",
        "/low-code-spark/",
      ],
    },
    {
      to: "/engineers/pipeline-monitoring",
      from: [
        "/Orchestration/pipeline-monitoring",
        "/Spark/pipeline-monitoring/",
      ],
    },
    {
      to: "/engineers/enable-pipeline-monitoring",
      from: "/Orchestration/pipeline-monitoring/enable-pipeline-monitoring",
    },
    {
      to: "/engineers/pipeline-settings",
      from: "/Spark/pipelines/pipeline-settings",
    },
    {
      to: "/engineers/pipelines",
      from: "/Spark/pipelines",
    },
    {
      to: "/engineers/project-lifecycle",
      from: "/getting-started/spark-with-databricks",
    },
    {
      to: "/engineers/prophecy-build-tool",
      from: "/ci-cd/prophecy-build-tool",
    },
    {
      to: "/engineers/prophecy-libraries",
      from: [
        "/concepts/fabrics/prophecy-libraries",
        "/extensibility/dependencies/prophecy-libraries",
      ],
    },
    {
      to: "/engineers/prophecy-managed-fabric",
      from: [
        "/administration/fabrics/Spark-fabrics/prophecy-managed-databricks",
        "/Spark/fabrics/prophecy-managed-databricks",
      ],
    },
    {
      to: "/engineers/redshift",
      from: "/Spark/gems/source-target/warehouse/redshift",
    },
    {
      to: "/engineers/reformat",
      from: "/Spark/gems/transform/reformat",
    },
    {
      to: "/engineers/repartition",
      from: "/Spark/gems/join-split/Repartition",
    },
    {
      to: "/engineers/resolve-git-conflicts",
      from: ["/ci-cd/git/git-resolve", "/metadata/git/git-resolve"],
    },
    {
      to: "/engineers/rest-api-enrich",
      from: "/Spark/gems/custom/rest-api-enrich",
    },
    {
      to: "/engineers/row-distributor",
      from: "/Spark/gems/join-split/row-distributor",
    },
    {
      to: "/engineers/salesforce",
      from: "/Spark/gems/source-target/warehouse/salesforce",
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
      to: "/engineers/script",
      from: "/Spark/gems/custom/script",
    },
    {
      to: "/engineers/seed",
      from: "/Spark/gems/source-target/file/seed",
    },
    {
      to: "/engineers/set-operation",
      from: "/Spark/gems/transform/set-operation",
    },
    {
      to: "/engineers/snowflake",
      from: "/Spark/gems/source-target/warehouse/snowflake",
    },
    {
      to: "/engineers/source-target",
      from: "/Spark/gems/source-target",
    },
    {
      to: "/engineers/orchestration",
      from: [
        "/engineers/airflow",
        "/Orchestration/airflow/airflow-tutorial-spark",
        "/getting-started/airflow",
        "/engineers/spark-airflow-tutorial",
        "/Orchestration/airflow/prophecy-managed/",
        "/Orchestration/airflow/setup/prophecy-managed/",
        "/administration/fabrics/airflow-fabrics/",
        "/administration/fabrics/airflow-fabrics/connections/",
        "/administration/fabrics/airflow-fabrics/connections/dbx_spark_connections",
        "/administration/fabrics/airflow-fabrics/connections/dbx_sql_connections",
        "/administration/fabrics/airflow-fabrics/connections/airflow_snowflake_connections",
        "/administration/fabrics/airflow-fabrics/connections/aws-connection",
        "/administration/fabrics/airflow-fabrics/connections/airflow_email_connections",
        "/administration/fabrics/airflow-fabrics/prophecy_managed_airflow_fabric",
        "/administration/fabrics/airflow-fabrics/composer_fabric",
        "/administration/fabrics/airflow-fabrics/MWAA_fabric",
        "/administration/fabrics/airflow-fabrics/open-source-airflow",
      ],
    },
    {
      to: "/engineers/spark-dependencies",
      from: "/extensibility/dependencies/spark-dependencies",
    },
    {
      to: "/engineers/spark-streaming",
      from: [
        "/Spark/spark-streaming",
        "/Spark/spark-streaming/streaming-sources-and-targets",
      ],
    },
    {
      to: "/engineers/spark-streaming-transformations",
      from: "/Spark/spark-streaming/transformations-streaming",
    },
    {
      to: "/engineers/sql-statement",
      from: "/Spark/gems/custom/sql-statement",
    },
    {
      to: "/engineers/subgraph",
      from: ["/Spark/gems/subgraph", "/low-code-spark/gems/subgraph/"],
    },
    {
      to: "/engineers/table-iterator",
      from: "/Spark/gems/subgraph/table-iterator",
    },
    {
      to: "/engineers/teradata",
      from: "/Spark/gems/source-target/warehouse/teradata",
    },
    {
      to: "/engineers/text",
      from: "/Spark/gems/source-target/file/text",
    },
    {
      to: "/engineers/text-processing",
      from: "/Spark/gems/machine-learning/ml-text-processing",
    },
    {
      to: "/engineers/unit-tests",
      from: ["/ci-cd/tests/", "/Spark/tests"],
    },
    {
      to: "/engineers/unpivot",
      from: "/Spark/gems/transform/unpivot",
    },
    {
      to: "/engineers/upload-file",
      from: "/Spark/gems/source-target/file/upload-file",
    },
    {
      to: "/engineers/use-imported-package",
      from: [
        "/engineers/shareable-pipelines",
        "/engineers/shareable-datasets",
        "/engineers/shareable-subgraphs",
        "/engineers/shareable-udfs",
        "/extensibility/package-hub/shareable-pipelines",
        "/extensibility/package-hub/shareable-datasets",
        "/extensibility/package-hub/shareable-subgraphs",
        "/extensibility/package-hub/sharable-udfs",
      ],
    },
    {
      to: "/engineers/user-defined-functions",
      from: ["/Spark/functions/udfs", "/Spark/extensibility/udfs"],
    },
    {
      to: "/engineers/warehouse-based-streaming-source-and-targets",
      from: "/Spark/spark-streaming/streaming-sources-and-targets/streaming-warehouse-apps",
    },
    {
      to: "/engineers/while-iterator",
      from: "/Spark/gems/subgraph/while-iterator",
    },
    {
      to: "/engineers/window-function",
      from: "/Spark/gems/transform/window-function",
    },
    {
      to: "/engineers/xlsx",
      from: "/tutorials/Spark/excel",
    },
    {
      to: "/engineers/xml",
      from: "/Spark/gems/source-target/file/xml",
    },
    {
      to: "/fabric-diagnostics",
      from: "/administration/Spark-fabrics/fabric-diagnostics",
    },
    {
      to: "/fabrics",
      from: "/concepts/fabrics",
    },
    {
      to: "/gems",
      from: "/concepts/gems/",
    },
    {
      to: "/getting-help/",
      from: ["/getting-started/getting-help/"],
    },
    {
      to: "/getting-help/prophecy-details",
      from: "/getting-started/getting-help/logs/",
    },
    {
      to: "/getting-help/spark-cluster-details",
      from: [
        "/getting-started/getting-help/logs/config-sparkui",
        "/getting-started/getting-help/logs/config-sparknotebook",
      ],
    },
    {
      to: "/getting-started",
      from: "/developer/videos/",
    },

    {
      to: "/pipelines",
      from: "/concepts/project/pipeline",
    },
    {
      to: "/projects",
      from: "/concepts/project",
    },
  ],
};
