---
title: Configure Audit Logging
id: auditLogging
description: Prophecy Audit logs available to be exported in S3
sidebar_position: 6
tags:
  - Audit Logs
---

Prophecy provides access to audit logs of activities performed by Prophecy users, allowing your enterprise to monitor detailed usage patterns.

## Configure S3 bucket for logs

1. Create/reuse an AWS IAM user who requires access to Prophecy audit logs. There is no need to attach any policies to this user.
2. Share the ARN of the AWS user with Prophecy, inorder to grant permissions to access the audit events stored in Prophecy S3 bucket. The ARN should be of the format `arn:aws:iam::{{Customer-Account-ID}:user/{Customer-User}` with the actual customer details. Eg: `arn:aws:iam::123456789012:user/bob`.
3. Reach out to Prophecy at [contact us](mailto:success@Prophecy.io) with above details to enable this in your account.
4. Prophecy would provide the required access and communicate back the S3 bucket URL that can be used to access the events.
5. You may now be able to access this bucket over an application (or) AWS CLI using the above user credentials.
6. Example of AWS CLI access is given below. Use the below command to get the latest events bucket locally. You may use similar mechanism to access it from your applications.

```
aws configure --> with user access keys
cd {desired-directory}
aws s3 sync s3://customer-backend-events-xyz
```

## Audit events

This table lists events for each Entity Type/Action along with the Request parameters grouped by the entity.

| Entity     | Query                               | Description                                         | Request Parameters                                                                                                   |
| ---------- | ----------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Fabric     | fabricDetailQuery                   | Get Fabric Details                                  | ["id"]                                                                                                               |
|            | addFabric                           | Add a Fabric                                        | ["name", "ownerUid"]                                                                                                 |
|            | updateOwnedBy                       | Update Team owing the Fabric                        | ["id","targetUid"]                                                                                                   |
|            | userFabricQuery                     | Get all Fabrics for User                            | ["uid"]                                                                                                              |
| Project    | addProject                          | Add a project                                       | ["name","forkMode","language", "ownerUid", "mainBranchModificationAllowed"]                                          |
|            | getDetails                          | Get Details of a Project                            | ["projectId"]                                                                                                        |
|            | Project List Query                  | List all projects for User                          | ["uid"]                                                                                                              |
|            | teamProjectAvailable                | Available Projects for that Team                    | ["uid", "language"]                                                                                                  |
|            | add Project Dependency              | Add a dependency Project to Current                 | ["projectId", "DependencyProjectUid"]                                                                                |
|            | updateProjectDependency             | Update dependency Project to a new released version | ["projectId", "DependencyProjectUid", "ReleaseTag"]                                                                  |
|            | removeProjectDependency             | Removed an added dependency                         | ["projectId", "DependencyProjectUid"]                                                                                |
|            | projectDependenciesQuery            | List all project Dependencies                       | ["projectId"]                                                                                                        |
|            | projectReleaseStatus                | Gives Status of last Release for given project      | ["projectID", "statuses"]                                                                                            |
|            | projectSyncFromGit                  | Status of Git sync of project                       | ["uid"]                                                                                                              |
|            | releaseProject                      | Release a Project                                   | ["branch", "message","version","projectID", "CommitHash"]                                                            |
|            | gitFooter                           | Details for Git for commit/branchNAme etc           | ["projectID"]                                                                                                        |
|            | addSubscriberToProject              | Add Subscriber to a Project                         | ["uid", "teamId"]                                                                                                    |
|            | projectBranches                     | List of available branches for this project         | ["projectId"]                                                                                                        |
|            | cloneProject                        | Created clone of current project                    | ["uid", "name", "teamUid", "copyMainBranchReleaseTags"]                                                              |
| Pipeline   | addPipeline                         | Add a new Pipeline                                  | ["name", "branch", "ownerId", "doCheckout"]                                                                          |
|            | tableQueryPipeline                  | Lists all pipelines for project                     | ["projectId", "sortOrder", "sortColumn"]                                                                             |
|            | tableQueryPipeline                  | Lists all pipelines for User                        | ["uid", "sortOrder", "sortColumn"]                                                                                   |
|            | Git Details of Pipeline             | Get Git details of Pipeline                         | ["Uid"]                                                                                                              |
|            | pipelineDetailsQuery                | Get Details of Pipeline                             | ["Uid"]                                                                                                              |
|            | clonePipeline                       | Cloned a Pipeline                                   | ["branch", "sourcePipelineId", "targetPipelineName", "ownerUid", "doCheckout"]                                       |
|            | addSubgraph                         | When Subgraph is added to a Pipeline                | ["mode", "name", "language", "ownerUID"]                                                                             |
|            | addUDFBulk                          | UDFs added to a Project                             | ["udfs.name","udfs.description", "projectUID"]                                                                       |
|            | removeUDFBulk                       | UDFs removed form a project                         | ["uids"]                                                                                                             |
|            | getSubgraph                         | Get Subgraph by given Id                            | ["uid"]                                                                                                              |
| Job        | addJob                              | Add a Job                                           | ["name", "branch","fabricUID", "scheduler", "doCheckout", "projectUID"]                                              |
|            | updateJobConfiguration              | Job configurations are updated                      | ["emails", "jobUID", "enabled", "onStart", "fabricId", "onFailure", "onSuccess", "clusterMode", "scheduleCron"]      |
|            | LatestJobReleaseByJobIdAndFabricID  | Get Jobs Release by Fabric Id                       | ["jobUID", "fabricUID"]                                                                                              |
|            | jobReleaseByProjectRelease          | Gets Jobs Released by Project ID                    | ["projectReleaseUID"]                                                                                                |
|            | jobQuery                            | Geta a Job by gievn Id                              | ["uid"]                                                                                                              |
|            | addJobRelease                       | Adds a Job released mapping to project Release      | ["jobUID", "fabricUID", "scheduler", "schedulerJobUID", "projectReleaseUID"]                                         |
|            | tableQueryJob                       | list query for Jobs                                 | ["uid", "sortOrder", "sortColumn"]                                                                                   |
| Dataset    | queryDataset                        | When Datasets are queried from any page             | ["uid", "optionalProjectUID"]                                                                                        |
|            | addDataset                          | Added a new Dataset                                 | ["mode", "name", "ownerUID", "fabricUID", "datasetType"]                                                             |
|            | addMultipleDatasets                 | Add Multiple Datasets                               | ["names", "ownerUID", "tableNameList", "schemaNameList", "descriptionsList", "schemaAspectList", "databaseNamesList] |
| Team       | addTeam                             | Added a new Team                                    | ["name", "adminUid"]                                                                                                 |
|            | getUserTeam                         | Get Teams for a User                                | ["uid"]                                                                                                              |
|            | addteamAdmin                        | Add a user as Admin                                 | ["teamUid", "userUid", "invitationAccepted"]                                                                         |
|            | Initial Gql Query Setting Team Page | List All teams for Users with Members               | ["uid"]                                                                                                              |
| User       | getUser                             | Get User                                            | ["email"]                                                                                                            |
|            | tableQueryUser                      | List query for the User                             | ["uid", "sortOrder", "sortColumn"]                                                                                   |
|            | dserAllFabricInfoAspect             | Get User Details                                    | ["uid"]                                                                                                              |
|            | setPassword                         | user Sets a new Password                            | ["uid", "newPassword"]                                                                                               |
| Git        | deleteBranch                        | Deleted a Branch                                    | ["projectId", "branchName"]                                                                                          |
|            | checkout                            | Checkout a new branch                               | ["projectId" , "branchName"]                                                                                         |
|            | prCreationRedirectUrl               | Pr Creation button clicked                          | ["to", "from", "projectId"]                                                                                          |
|            | createPR                            | Pr Creation button clicked                          | [{"to", "from", "toFork", "fromFork":, "projectId"]                                                                  |
|            | cleanCommit                         | Committed any changes                               | ["message", "projectId"]                                                                                             |
|            | commit                              | Commit button clicked                               | ["branch", "message", "projectId"]                                                                                   |
|            | PullOrigin                          | pull origin branch                                  | ["branch", "projectId"]                                                                                              |
|            | checkGitConnection                  | Test Git connection                                 | ["externalUriArg", "pushAccessCheck", "userGitCredsUID"]                                                             |
|            | linkSavedCredsToExternalGit         | Linked Saved Creds to a project                     | ["projectUID", "userGitCredsUID"]                                                                                    |
|            | unlinkExternalGit                   | Unlink the saved creds                              | ["projectUID"]                                                                                                       |
|            | checkout                            | When USer checks out a new branch                   | ["branchName","projectUID"]                                                                                          |
|            | BranchDivergence                    | When user compares two branches for commit screen   | ["projectId", "branchName", "baseBranchName"]                                                                        |
|            | BranchInfo                          | Gives details of a particular working branch        | ["projectId", "branchName", "remoteType"]                                                                            |
|            | setPrCreationTemplate               | When user Sets PR creation template                 | ["projectId", "customPrTemplate", "prCreationEnabled"}]                                                              |
|            | getPrCreationTemplate               | Gets PR creation template                           | ["projectId"]                                                                                                        |
|            | deleteUserGitCreds                  | When user deleted saved Git creds                   | ["uid"]                                                                                                              |
|            | linkExternalGit                     | Link saved Git creds                                | ["projectUID", "externalRepoUri", "userGitCredsUID"]                                                                 |
|            | mergeMaster                         | Merge to master branch                              | ["prNumber", "projectId", "entityConflicts", "projectConflicts", "resolvedConflicts"]                                |
| Transpiler | transpilerImport                    | Transpiler Import started                           | ["uid"]                                                                                                              |
|            | addTranspilerImport                 | Importing files to Prophecy Transpiler              | ["name", "status", "storagePath", "transpilerType"]                                                                  |
| Generic    | removeEntity                        | When any entity is removed                          | ["uid", "entityKind"]                                                                                                |
|            | updateEntity                        | When any entity is updated                          | ["uid", "entityKind", "entityFieldName", "entityFieldValue"]                                                         |
