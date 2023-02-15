---
title: Prophecy Metadata API Enums
id: mdapi-enums
description: Metadata API Enums
sidebar_position: 1
tags: []
---

## ExternalGitProviderType

```
enum ExternalGitProviderType {
    Github
    GithubEnterprise
    AzureDevOps
    BitBucket
    GitLab
    GitLabEnterprise
    Other
    ProphecyManaged
    Unknown
}
```

## BackEndCodeLanguage

```
enum BackEndCodeLanguage {
    scala
    python
}
```

## WorkflowMode

```
enum WorkflowMode {
    batch
    stream
}
```

## BuildSystem

```
enum BuildSystem {
    maven
    wheel
}
```

## MergeStatus

```
enum MergeStatus {
    Success
    Conflicted
}
```

## AspectKind

Supported aspect types

```
enum AspectKind {
    "List of Pipeline in job"
    PipelinesInJob

    "Dependency information"
    Dependency

    "Configuration content. Versioned."
    Configuration

    "Hive metastore related information."
    Storage

    "Airflow connections info"
    AirflowConnectionInfo

    "Unit test execution result information"
    TestResult

    "Dag Information "
    DagInformation

    "Job size information like resources etc."
    JobSize

    "Spark Provider Information for a fabric"
    SparkProviderInfo

    "Scheduler Provider Information for a fabric"
    SchedulerProviderInfo

    "Code content. Versioned."
    Code

    "Unit Tests. Versioned."
    TestVisual

    "Dataset schema information"
    Schema

    "Version information of Entity"
    MigrationInfo

    "Commit ids sorted by date for deploy option in scheduler"
    ListCommits

    "Git storage information like repo url etc."
    GitStorage

    "Git storage information like repo url etc. for Projects"
    GitConfig

    "General information like description"
    Info

    "Code dependency information"
    CodeDeps

    "Lineage Branch information"
    LineageBranch

    "Lineage"
    Lineage

    "Lineage Release information"
    LineageRelease

    "Lineage Commit information"
    LineageCommit

    "Cluster information"
    ClusterInfo

    "User fabric info for all fabrics"
    UserAllFabricInfo

    "Job Deployment Airflow Info"
    JobDeploymentAirflowInfo

    "ExpressionInfo"
    ExpressionsInfo

    "Databricks Deployment"
    DatabricksDeployment

    "Run Info"
    RunInfo

    "Transpiler Import Input Info"
    InputInfo

    "Transpiler Import Output Pipeline Info"
    OutputInfo

    "Snapshot of entity at a point in time"
    Snapshot

    "Detailed information for datasets in Pipeline Runs"
    DatasetDetails

    "Interim content for a dataset"
    Interim

    "Partner Info aspect"
    PartnerInfo

    "Resolution Mode for library"
    ResolutionModeInfo

    "Admin level information for an entity"
    AdminInfo
}
```

## SectionType

SelectionType

```
enum SectionType{
    "EntityAndAspects"
    EntityAndAspects

    "Author"
    Author

    "Team"
    Team

    "Project"
    Project

    "Recency"
    Recency
}
```

## ItemSelectionType

ItemSelectionType

```
enum ItemSelectionType {
    AtMostOne
    ExactlyOne
    Many
}
```

## DatasetType

Supported Dataset types

```
enum DatasetType {
    File
    Database
    Stream
    TestData
    Warehouse
    Table
}
```

## EntityKind

Supported entity types

```
enum EntityKind {
    "Deployment Entity"
    Deployment

    "Repository Entity"
    Repository

    "Team Entity"
    Team

    "Dataset Entity"
    Dataset

    "Schedule Entity - renamed to Job"
    Schedule

    "Job Entity"
    Job

    "PhysicalDataset Entity"
    PhysicalDataset

    "Workflow Entity - renamed to Pipeline"
    Workflow

    "Pipeline Entity"
    Pipeline

    "Project Entity"
    Project

    "Subgraph Entity"
    Subgraph

    "Configuration Entity"
    Configuration

    "PipelineConfigurations Entity"
    PipelineConfigurations

    "User Entity"
    User

    "Fabric Entity"
    Fabric

    "Library Entity"
    Library

    "Gem Entity"
    Gem

    "Udf Entity"
    Udf

    "Udaf Entity"
    Udaf

    "Expression Entity"
    Expression

    "Dependency Entity"
    Dependency

    "ProjectRelease Entity"
    ProjectRelease

    "JobRelease Entity"
    JobRelease

    "TranspilerImport Entity"
    TranspilerImport

    "Template Entity"
    Template

}
```

## CommitLogEntityMutationType

Supported Commit Log Mutation Type

```
enum CommitLogEntityMutationType {
    "New Mutation"
    New

    "Modified Mutation"
    Modified

    "Deleted Mutation"
    Deleted
}
```

## ForkMode

Forking Modes for Git Repo

```
enum ForkMode {
    Multi
    Single
}
```

## ForkType

Type of fork of the repository [Master / User]

```
enum ForkType {
    Master
    User
}
```

## Role

User role in team

```
enum Role{
    owner,
    admin,
    member
}
```

## ResolutionStrategy

Supported resolution types

```
enum ResolutionStrategy {
    LeftBranch
    RightBranch
}
```

## RemoteType

```
enum RemoteType {
    Local
    Upstream
    Origin
}
```

## SyncMode

Project's Git Repos Syncing Modes

```
enum SyncMode {
    External
    Internal
}
```

## UserAccountType

Type of User's Account

```
enum UserAccountType {
    "Licensed Account for SaSS User"
    CeLicenseAcquired

    "The Default Account for User"
    Enterprise

    "A user coming from AWS"
    AwsMarketplace

    "A user coming from Azure"
    AzureMarketplace

    "Free Account for SaSS User"
    CeFree

    "A user coming from Databricks Partner Hub"
    DatabricksPartner

    "A user which is on Enterprise Trial"
    EnterpriseTrial

    "A user to manage Prophecy cluster"
    ClusterAdmin

    "A support user to manage Prophecy IDE"
    Support
}
```

## UserManagedType

The user managed type

```
enum UserManagedType {
    "The prophecy managed user type"
    ProphecyManaged

    "The LDAP managed user type"
    Ldap

    "The SAML managed user type"
    Saml

    "The AzureAD managed user type"
    AzureAd

    "The Google managed user type"
    Google
}
```

## Scheduler

Scheduler Enum

```
enum Scheduler {

    "Amazon Managed Workflows for Apache Airflow"
    MWAA

    "Astronomer - Airflow"
    Astronomer

    "Databricks Jobs"
    Databricks
}
```

## CloudProvider

Cloud Provider Enum

```
enum CloudProvider {

    "Amazon Web Services"
    AWS

    "Microsoft Azure"
    Azure

    "Google Cloud Provider"
    GCP
}
```

## Status

Release Status enum

```
enum Status {

    "Pending, Not Started"
    Pending

    "RUNNING"
    Running

    "Succeeded"
    Succeeded

    "Retrying"
    Retrying

    "Failed"
    Failed
}
```

## TeamKind

```
enum TeamKind {
    ProphecyManaged,
    IdpOrganizationWide,
    IdpGroup
}
```
