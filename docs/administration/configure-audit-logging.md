---
title: Audit logs
id: audit-logging
description: List of audit events and sync options
tags:
  - audit logs
  - reference
---

This page describes how Prophecy generates, stores, and shares audit logs for Prophecy deployments. Use this information to decide if you need to enable and export audit logs.

Setting up audit logs requires collaboration with Prophecy. [Contact Prophecy](https://www.prophecy.io/request-a-demo) to:

- Enable audit logging in Prophecy-managed storage.
- Export audit logs on demand.
- Configure automatic syncing to your own storage.
- Set a custom retention period for stored logs (by default, logs are stored indefinitely).

## Storage location

Prophecy stores audit logs in the same cloud platform as your deployment:

- For AWS deployments, audit logs are stored in Amazon S3.
- For Azure deployments, audit logs are stored in Azure Blob Storage.
- For Google Cloud Platform deployments, audit logs are stored in Google Cloud Storage.

## Audit event reference

When audit logs are enabled for your Prophecy deployment, they capture the following information:

- User interactions with the Prophecy UI
- GraphQL API calls

The following tables list the audit events that Prophecy logs, organized by entity type.

:::note
Prophecy uses GraphQL for API operations. Request and response parameters may vary depending on where you call the query.
:::

| Entity     | Query                              | Description                                         | Request Parameters                                                                                                   |
| ---------- | ---------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Fabric     | fabricDetailQuery                  | Get Fabric Details                                  | ["id"]                                                                                                               |
|            | addFabric                          | Add a Fabric                                        | ["name", "ownerUid"]                                                                                                 |
|            | updateOwnedBy                      | Update Team owing the Fabric                        | ["id","targetUid"]                                                                                                   |
|            | userFabricQuery                    | Get all Fabrics for User                            | ["uid"]                                                                                                              |
| Project    | addProject                         | Add a project                                       | ["name","forkMode","language", "ownerUid", "mainBranchModificationAllowed"]                                          |
|            | getDetails                         | Get Details of a Project                            | ["projectId"]                                                                                                        |
|            | project                            | List all projects for User                          | ["uid"]                                                                                                              |
|            | teamProjectAvailable               | Available Projects for that Team                    | ["uid", "language"]                                                                                                  |
|            | addProjectDependency               | Add a dependency Project to Current                 | ["projectId", "DependencyProjectUid"]                                                                                |
|            | updateProjectDependency            | Update dependency Project to a new released version | ["projectId", "DependencyProjectUid", "ReleaseTag"]                                                                  |
|            | removeProjectDependency            | Removed an added dependency                         | ["projectId", "DependencyProjectUid"]                                                                                |
|            | projectDependenciesQuery           | List all project Dependencies                       | ["projectId"]                                                                                                        |
|            | projectReleaseStatus               | Gives Status of last Release for given project      | ["projectID", "statuses"]                                                                                            |
|            | projectSyncFromGit                 | Status of Git sync of project                       | ["uid"]                                                                                                              |
|            | releaseProject                     | Release a Project                                   | ["branch", "message","version","projectID", "CommitHash"]                                                            |
|            | gitFooter                          | Details for Git for commit/branchNAme etc           | ["projectID"]                                                                                                        |
|            | addSubscriberToProject             | Add Subscriber to a Project                         | ["uid", "teamId"]                                                                                                    |
|            | projectBranches                    | List of available branches for this project         | ["projectId"]                                                                                                        |
|            | cloneProject                       | Created clone of current project                    | ["uid", "name", "teamUid", "copyMainBranchReleaseTags"]                                                              |
| Pipeline   | addPipeline                        | Add a new Pipeline                                  | ["name", "branch", "ownerId", "doCheckout"]                                                                          |
|            | tableQueryPipeline                 | Lists all pipelines for project                     | ["projectId", "sortOrder", "sortColumn"]                                                                             |
|            | tableQueryPipeline                 | Lists all pipelines for User                        | ["uid", "sortOrder", "sortColumn"]                                                                                   |
|            | pipelineDetailsQuery               | Get Details of Pipeline                             | ["Uid"]                                                                                                              |
|            | clonePipeline                      | Cloned a Pipeline                                   | ["branch", "sourcePipelineId", "targetPipelineName", "ownerUid", "doCheckout"]                                       |
|            | addSubgraph                        | When Subgraph is added to a Pipeline                | ["mode", "name", "language", "ownerUID"]                                                                             |
|            | addUDFBulk                         | UDFs added to a Project                             | ["udfs.name","udfs.description", "projectUID"]                                                                       |
|            | removeUDFBulk                      | UDFs removed form a project                         | ["uids"]                                                                                                             |
|            | getSubgraph                        | Get Subgraph by given Id                            | ["uid"]                                                                                                              |
| Job        | addJob                             | Add a Job                                           | ["name", "branch","fabricUID", "scheduler", "doCheckout", "projectUID"]                                              |
|            | updateJobConfiguration             | Job configurations are updated                      | ["emails", "jobUID", "enabled", "onStart", "fabricId", "onFailure", "onSuccess", "clusterMode", "scheduleCron"]      |
|            | latestJobReleaseByJobIdAndFabricID | Get Jobs Release by Fabric Id                       | ["jobUID", "fabricUID"]                                                                                              |
|            | jobReleaseByProjectRelease         | Gets Jobs Released by Project ID                    | ["projectReleaseUID"]                                                                                                |
|            | jobQuery                           | Geta a Job by gievn Id                              | ["uid"]                                                                                                              |
|            | addJobRelease                      | Adds a Job released mapping to project Release      | ["jobUID", "fabricUID", "scheduler", "schedulerJobUID", "projectReleaseUID"]                                         |
|            | tableQueryJob                      | list query for Jobs                                 | ["uid", "sortOrder", "sortColumn"]                                                                                   |
| Dataset    | queryDataset                       | When Datasets are queried from any page             | ["uid", "optionalProjectUID"]                                                                                        |
|            | addDataset                         | Added a new Dataset                                 | ["mode", "name", "ownerUID", "fabricUID", "datasetType"]                                                             |
|            | addMultipleDatasets                | Add Multiple Datasets                               | ["names", "ownerUID", "tableNameList", "schemaNameList", "descriptionsList", "schemaAspectList", "databaseNamesList] |
| Team       | addTeam                            | Added a new Team                                    | ["name", "adminUid"]                                                                                                 |
|            | getUserTeam                        | Get Teams for a User                                | ["uid"]                                                                                                              |
|            | addteamAdmin                       | Add a user as Admin                                 | ["teamUid", "userUid", "invitationAccepted"]                                                                         |
|            | user                               | List All teams for Users with Members               | ["uid"]                                                                                                              |
| User       | getUser                            | Get User                                            | ["email"]                                                                                                            |
|            | tableQueryUser                     | List query for the User                             | ["uid", "sortOrder", "sortColumn"]                                                                                   |
|            | userAllFabricInfoAspect            | Get User Details                                    | ["uid"]                                                                                                              |
|            | setPassword                        | user Sets a new Password                            | ["uid", "newPassword"]                                                                                               |
| Git        | deleteBranch                       | Deleted a Branch                                    | ["projectId", "branchName"]                                                                                          |
|            | checkout                           | Checkout a new branch                               | ["projectId" , "branchName"]                                                                                         |
|            | prCreationRedirectUrl              | Pr Creation button clicked                          | ["to", "from", "projectId"]                                                                                          |
|            | createPR                           | Pr Creation button clicked                          | ["to", "from", "toFork", "fromFork":, "projectId"]                                                                   |
|            | cleanCommit                        | Committed any changes                               | ["message", "projectId"]                                                                                             |
|            | commit                             | Commit button clicked                               | ["branch", "message", "projectId"]                                                                                   |
|            | pullOrigin                         | pull origin branch                                  | ["branch", "projectId"]                                                                                              |
|            | checkGitConnection                 | Test Git connection                                 | ["externalUriArg", "pushAccessCheck", "userGitCredsUID"]                                                             |
|            | linkSavedCredsToExternalGit        | Linked Saved Creds to a project                     | ["projectUID", "userGitCredsUID"]                                                                                    |
|            | unlinkExternalGit                  | Unlink the saved creds                              | ["projectUID"]                                                                                                       |
|            | checkout                           | When USer checks out a new branch                   | ["branchName","projectUID"]                                                                                          |
|            | branchDivergence                   | When user compares two branches for commit screen   | ["projectId", "branchName", "baseBranchName"]                                                                        |
|            | branchInfo                         | Gives details of a particular working branch        | ["projectId", "branchName", "remoteType"]                                                                            |
|            | setPrCreationTemplate              | When user Sets PR creation template                 | ["projectId", "customPrTemplate", "prCreationEnabled"}]                                                              |
|            | getPrCreationTemplate              | Gets PR creation template                           | ["projectId"]                                                                                                        |
|            | deleteUserGitCreds                 | When user deleted saved Git creds                   | ["uid"]                                                                                                              |
|            | linkExternalGit                    | Link saved Git creds                                | ["projectUID", "externalRepoUri", "userGitCredsUID"]                                                                 |
|            | mergeMaster                        | Merge to master branch                              | ["prNumber", "projectId", "entityConflicts", "projectConflicts", "resolvedConflicts"]                                |
| Transpiler | transpilerImport                   | Transpiler Import started                           | ["uid"]                                                                                                              |
|            | addTranspilerImport                | Importing files to Prophecy Transpiler              | ["name", "status", "storagePath", "transpilerType"]                                                                  |
| Generic    | removeEntity                       | When any entity is removed                          | ["uid", "entityKind"]                                                                                                |
|            | updateEntity                       | When any entity is updated                          | ["uid", "entityKind", "entityFieldName", "entityFieldValue"]                                                         |

## Sync data to S3

If your Prophecy deployment is hosted on AWS, you can sync your Prophecy audit logs to your own Amazon S3 bucket. Follow these steps to configure your S3 bucket and grant Prophecy the required access.

### Step 1: Create the S3 bucket

1. Open the Amazon S3 console and choose **Create bucket**.
1. Enter a **Bucket name**, following the format `prophecy-customer-backend-events-foo`. Replace `foo` with an identifier for your organization.
1. Choose a **Region**.

   - Prophecy recommends u**s-east-1 (N. Virginia)** for best performance.
   - If you select a different region, contact Prophecy so we can accommodate this preference.

1. Complete the remaining setup options as needed, then create the bucket.
1. Set **Object Ownership** to **ACLs disabled (recommended)**. You can apply this setting during bucket creation or by editing bucket permissions after creation.

### Step 2: Configure bucket permissions for Prophecy

1. In the Amazon S3 console, open your bucket and choose the **Permissions** tab.
1. Under Bucket policy, select **Edit**.
1. Paste the following policy JSON, replacing the placeholders as described below.

```json
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "DataSyncCreateS3LocationAndTaskAccess",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::133450206866:role/AWSDataSyncS3BucketAccessCustomerBackendEventsRole"
      },
      "Action": [
        "s3:GetBucketLocation",
        "s3:ListBucket",
        "s3:ListBucketMultipartUploads",
        "s3:AbortMultipartUpload",
        "s3:GetObject",
        "s3:ListMultipartUploadParts",
        "s3:PutObject",
        "s3:GetObjectTagging",
        "s3:PutObjectTagging",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::prophecy-customer-backend-events-xyz",
        "arn:aws:s3:::prophecy-customer-backend-events-xyz/*"
      ]
    },
    {
      "Sid": "DataSyncCreateS3Location",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::133450206866:user/s3access"
      },
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::prophecy-customer-backend-events-xyz"
    }
  ]
}
```

To use this example JSON:

- Replace all instances of `prophecy-customer-backend-events-xyz` with your bucket ARN.
- The Prophecy IAM user `s3access` requires the `DataSyncCreateS3Location` role to create S3 locations in Prophecy’s account.
- After applying the policy, contact Prophecy and provide:

  - Your bucket ARN
  - The AWS region

Prophecy will complete the configuration and enable syncing for your environment.
