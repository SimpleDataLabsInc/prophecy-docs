---
title: Syncing audit logs from SAAS
id: audit-logging
description: Prophecy Audit logs available to be exported in S3
sidebar_position: 7
tags:
  - audit logs
  - s3
---

Prophecy provides access to audit logs of activities performed by Prophecy users, allowing your enterprise to monitor detailed usage patterns.
The Prophecy admin can configure a S3 bucket to sync these events from Prophecy to their environment.

:::info
This is only available for our SaaS Users only. Also, the initial Setup to enable this would require Manual Effort. Please [contact us](https://www.prophecy.io/request-a-demo) to learn more about this in detail.
:::

An empty AWS S3 bucket with read/write permissions is required. Follow the guidelines below to set up the bucket correctly.

## Configure S3 bucket for logs

1. Create the S3 Bucket:
   - Log in to your AWS account and navigate to the S3 service.
   - Click on "Create Bucket" to initiate the bucket creation process.
   - Choose a unique name for your bucket, following the format: `prophecy-customer-backend-events-xyz`, where `xyz` represents your name or any identifier of your choice.
   - Select the desired AWS Region for the bucket. Ideally, choose the `us-east-1 (N. Virginia)`. If this region is not available, please inform us which region you selected as it requires additional configuration on our end.
2. Set Object Ownership:

   - After creating the bucket, ensure that the object ownership is set to `ACLs disabled (recommended)`. This can be done during or after the bucket creation process.

3. Configuring Bucket Permissions for Prophecy:
   - Open the newly created bucket in the AWS Management Console.
   - Go to the "Permissions" section and locate the "Bucket Policy" tab.
   - Apply the following permissions to allow Prophecy's IAM role to sync S3 objects using AWS DataSync.

```
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

In the sample above, replace `arn:aws:s3:::prophecy-customer-backend-events-xyz` with the ARN of your destination bucket.

Note that we need the Prophecy user principal (`s3access`) to be able to create S3 location at Prophecy's account and hence require this role with Sid `DataSyncCreateS3Location`.
Please [contact us](mailto:success@Prophecy.io) with bucket ARN and region to enable this in your account.

## Audit events

This table lists events for each Entity/Action along with the Request parameters grouped by the entity.

:::info

Prophecy Uses GraphQL queries so you may find some difference in Request and Response parameters depending upon where the Queries are used from.

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
