---
title: Configure Audit Logging
id: auditLogging
description: Prophecy Audit logs available to be exported in S3
sidebar_position: 6
tags:
  - Audit Logs
---

Prophecy provides access to audit logs of activities performed by Prophecy users, allowing your enterprise to monitor detailed usage patterns.

For a list of each of these types of events and the associated parameters, see Audit events.

## Configure S3 bucket for logs

1. Create/reuse a new AWS IAM user who is responsible for Prophecy libs.
2. Share the ARN of the AWS user to grant permissions to our newly created S3 bucket. It should be of the format `arn:aws:iam::{{Customer-Account-ID}:user/{Customer-User}` with the actual customer details. Eg: `arn:aws:iam::022726153140:user/prashanth`
3. Download the AWS CLI on customer machine and set it up on their machine.
4. Create/reuse AWS access keys using the above user and configure the AWS CLI to use it.
5. Use the below command to get the latest events bucket locally. You may use similar mechanism to access it from your applications.

```
cd {desired-directory}
aws s3 sync s3://customer-backend-events-xyz .
```

## Audit events

This table lists events for each Entity Type/Action along with the Request parameters grouped by the entity.

| Entity     | Query                                  | Description                                         | Request Parameters                                                                                                   |
| ---------- | -------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Fabric     | FabricDetailQuery                      | Get Fabric Details                                  | ["id"]                                                                                                               |
|            | addFabric                              |                                                     | ["name", "ownerUid"]                                                                                                 |
|            | Update owned by                        |                                                     | ["id","targetUid"]                                                                                                   |
|            | UserFabricQuery                        | Get all Fabrics for User                            | ["uid"]                                                                                                              |
| Project    | Add project                            |                                                     | ["name","forkMode","language", "ownerUid", "mainBranchModificationAllowed"]                                          |
|            | Get Details                            |                                                     | ["projectId"]                                                                                                        |
|            | Update Project                         |                                                     | -                                                                                                                    |
|            | Project List Query                     | List all projects for User                          | ["uid"]                                                                                                              |
|            | Team Project Available                 | Available Projects for that Team                    | ["uid", "language"]                                                                                                  |
|            | Add Project Dependency                 | Add a dependency Project to Current                 | ["projectId", "DependencyProjectUid"]                                                                                |
|            | Update Project Dependency              | Update dependency Project to a new released version | ["projectId", "DependencyProjectUid", "ReleaseTag"]                                                                  |
|            | Remove Project Dependency              | Removed an added dependency                         | ["projectId", "DependencyProjectUid"]                                                                                |
|            | Project Dependencies Query             | List all project Dependencies                       | ["projectId"]                                                                                                        |
|            | Project Release Status                 | Gives Status of last Release for given project      | ["projectID", "statuses"]                                                                                            |
|            | Project Sync From Git                  | Status of Git sync of project                       | ["uid"]                                                                                                              |
|            | Release Project                        |                                                     | ["branch", "message","version","projectID", "CommitHash"]                                                            |
|            | Git Footer                             | Details for Git for commit/branchNAme etc           | ["projectID"]                                                                                                        |
|            | Add Subscriber To Project              |                                                     | ["uid", "teamId"]                                                                                                    |
|            | Project Branches                       | List of available branches for this project         | ["projectId"]                                                                                                        |
|            | Clone Project                          | Created clone of current project                    | ["uid", "name", "teamUid", "copyMainBranchReleaseTags"]                                                              |
| Pipeline   | Add Pipeline                           | Add a new Pipeline                                  | ["name", "branch", "ownerId", "doCheckout"]                                                                          |
|            | Pipeline Table Query for given project | Lists all pipelines for project                     | ["projectId", "sortOrder", "sortColumn"]                                                                             |
|            | Pipeline Table query for User          | Lists all pipelines for User                        | ["uid", "sortOrder", "sortColumn"]                                                                                   |
|            | Git Details of Pipeline                | Get Git details of Pipeline                         | ["Uid"]                                                                                                              |
|            | Pipeline Details Query                 | Get Details of Pipeline                             | ["Uid"]                                                                                                              |
|            | Clone Pipeline                         | Cloned a Pipeline                                   | ["branch", "sourcePipelineId", "targetPipelineName", "ownerUid", "doCheckout"]                                       |
|            | Add Subgraph                           | When Subgraph is added to a Pipeline                | ["mode", "name", "language", "ownerUID"]                                                                             |
|            | Add UDF Bulk                           | UDFs added to a Project                             | ["udfs.name","udfs.description", "projectUID"]                                                                       |
|            | Remove UDF Buld                        | UDFs removed form a project                         | ["uids"]                                                                                                             |
|            | Get Subgraph                           | Get Subgraph by given Id                            | ["uid"]                                                                                                              |
| Job        | addJob                                 |                                                     | ["name", "branch","fabricUID", "scheduler", "doCheckout", "projectUID"]                                              |
|            | updateJobConfiguration                 | Job configurations are updated                      | ["emails", "jobUID", "enabled", "onStart", "fabricId", "onFailure", "onSuccess", "clusterMode", "scheduleCron"]      |
|            | LatestJobReleaseByJobIdAndFabricID     | Get Jobs Release by Fabric Id                       | ["jobUID", "fabricUID"]                                                                                              |
|            | jobReleaseByProjectRelease             | Gets Jobs Released by Project ID                    | ["projectReleaseUID"]                                                                                                |
|            | jobQuery                               | Geta a Job by gievn Id                              | ["uid"]                                                                                                              |
|            | addJobRelease                          | Adds a Job released mapping to project Release      | ["jobUID", "fabricUID", "scheduler", "schedulerJobUID", "projectReleaseUID"]                                         |
|            | tableQueryJob                          |                                                     | ["uid", "sortOrder", "sortColumn"]                                                                                   |
| Dataset    | queryDataset                           | When Datasets are queried from any page             | ["uid", "optionalProjectUID"]                                                                                        |
|            | addDataset                             | Added a new Dataset                                 | ["mode", "name", "ownerUID", "fabricUID", "datasetType"]                                                             |
|            | addMultipleDatasets                    |                                                     | ["names", "ownerUID", "tableNameList", "schemaNameList", "descriptionsList", "schemaAspectList", "databaseNamesList] |
| Team       | addTeam                                | Added a new Team                                    | ["name", "adminUid"]                                                                                                 |
|            | getUserTeam                            | Get Teams for a User                                | ["uid"]                                                                                                              |
|            | addteamAdmin                           | Add a user as Admin                                 | ["teamUid", "userUid", "invitationAccepted"]                                                                         |
|            | Initial Gql Query Setting Team Page    | List All teams for Users with Members               | ["uid"]                                                                                                              |
|            | Add User to Team                       |                                                     | []                                                                                                                   |
|            | Remove User from team                  |                                                     | []                                                                                                                   |
| User       | getUser                                |                                                     | ["email"]                                                                                                            |
|            | addUser                                |                                                     | []                                                                                                                   |
|            | tableQueryUser                         | List query for the User                             | ["uid", "sortOrder", "sortColumn"]                                                                                   |
|            | dserAllFabricInfoAspect                | Get User Details                                    | ["uid"]                                                                                                              |
|            | setPassword                            | user Sets a new Password                            | ["uid", "newPassword"]                                                                                               |
| Git        | deleteBranch                           |                                                     | ["projectId", "branchName"]                                                                                          |
|            | checkout                               | Checkout a new branch                               | ["projectId" , "branchName"]                                                                                         |
|            | prCreationRedirectUrl                  | Pr Creation button clicked                          | ["to", "from", "projectId"]                                                                                          |
|            | createPR                               | Pr Creation button clicked                          | [{"to", "from", "toFork", "fromFork":, "projectId"]                                                                  |
|            | cleanCommit                            | Committed any changes                               | ["message", "projectId"]                                                                                             |
|            | commit                                 | Commit button clicked                               | ["branch", "message", "projectId"]                                                                                   |
|            | PullOrigin                             | pull origin branch                                  | ["branch", "projectId"]                                                                                              |
|            | checkGitConnection                     | Test Git connection                                 | ["externalUriArg", "pushAccessCheck", "userGitCredsUID"]                                                             |
|            | linkSavedCredsToExternalGit            | Linked Saved Creds to a project                     | ["projectUID", "userGitCredsUID"]                                                                                    |
|            | unlinkExternalGit                      | Unlink the saved creds                              | ["projectUID"]                                                                                                       |
|            | addUserGitCreds                        | when User adds a new Git Credentials                | []                                                                                                                   |
|            | checkout                               | When USer checks out a new branch                   | ["branchName","projectUID"]                                                                                          |
|            | BranchDivergence                       | When user compares two branches for commit screen   | ["projectId", "branchName", "baseBranchName"]                                                                        |
|            | BranchInfo                             | Gives details of a particular working branch        | ["projectId", "branchName", "remoteType"]                                                                            |
|            | setPrCreationTemplate                  | When user Sets PR creation template                 | ["projectId", "customPrTemplate", "prCreationEnabled"}]                                                              |
|            | getPrCreationTemplate                  | Gets PR creation template                           | ["projectId"]                                                                                                        |
|            | deleteUserGitCreds                     | When user deleted saved Git creds                   | ["uid"]                                                                                                              |
|            | linkExternalGit                        | Link saved Git creds                                | ["projectUID", "externalRepoUri", "userGitCredsUID"]                                                                 |
|            | mergeMaster                            | Merge to master branch                              | ["prNumber", "projectId", "entityConflicts", "projectConflicts", "resolvedConflicts"]                                |
| Transpiler | transpilerImport                       | Transpiler Import started                           | ["uid"]                                                                                                              |
|            | addTranspilerImport                    | Importing files to Prophecy Transpiler              | ["name", "status", "storagePath", "transpilerType"]                                                                  |
| Generic    | removeEntity                           | When any entity is removed                          | ["uid", "entityKind"]                                                                                                |
|            | updateEntity                           | When any entity is updated                          | ["uid", "entityKind", "entityFieldName", "entityFieldValue"]                                                         |
