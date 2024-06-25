---
title: Prophecy Metadata API Types
id: mdapi-types
description: Metadata API Types
sidebar_position: 3
tags: []
---

## Query

Queries supported by Hub

```
type Query {


    "Check if a entity name already exists within the owner entity"
    EntityNameExists(
        "Entity name"
        name : String!,

        "Owner UID"
        ownerUID : String

        "Entity Kind"
        entityKind : EntityKind!
    ) : EntityExistence!

    "Validates git connection"
    checkGitConnection(
        "External Repo URI"
        externalUriArg : String,

        "Email for Git Provider (Optional)"
        externalRepoEmail : String,

        "Username for Git Provider (Optional)"
        externalRepoUsername : String,

        "Access Token for Git Provider (Optional)"
        externalRepoAccessToken : String,

        "Optional project UID in case linking single fork project"
        optionalProjectUID : String,

        "Verify Push Access"
        pushAccessCheck : Boolean,

        "Optional user git creds, in case using saved creds"
        userGitCredsUID : String
    ): Int!


    linkedProjects(
        uid : String!
    ): [Project!]!

    "Fetches a team"
    Team(
        "Entity ID (optional)"
        uid: String,

        "Entity Name (optional)"
        name: String): Team

    UserGitSavedCreds(
        uid: String!
    ): UserGitCreds!

    "Fetches all aspects"
    AllAspects(
        uids : [String!],

        entityKind : EntityKind!,

        aspect : [AspectKind!]

    ) : [Aspect!]!

    "Fetches front end events"
    FrontendEvent(
        feType: String!

    ):[FrontendEventType!]!


    "Fetches a user"
    User(
        "User email (optional)"
        email: String,

        "Entity ID (optional)"
        uid: String,

        "Token corresponding to the User"
        token: String): User

    "Fetches all users' Emails"
    allUsers: [User!]!

    "Release tags of project"
    ReleaseTagsOfProject(
        "Project UID"
        uid: String!): [String!]!


    ProjectFiles(
        "Project UID"
        uid: String!,

        "Reads complete project along with outside SubPath content (Optional)"
        readWithExternalContent : Boolean

        filterFiles : [String!]

    ) : String!

    "Checks if user is project admin"
    isProjectAdmin (

        "Project UID"
        uid : String!,

    ) : Boolean!

    "Checks if user is team admin"
    isTeamAdmin (

        "Team UID"
        uid : String!,

    ) : Boolean!

    "Fetches a project"
    Project(
        "Entity ID"
        uid: String!, releaseTag : String, optionalProjectUID: String): Project

    "Fetches a pipeline"
    Pipeline(
        "Entity ID"
        uid: String!

        ownerProjectUID: String

        optionalProjectUID: String
    ): Pipeline

    "Fetches configurations for a pipeline"
    PipelineConfigurations(
        "Entity ID"
        uid: String!

        optionalProjectUID: String
    ): PipelineConfigurations

    "Fetches configurations for a pipeline"
    Configuration(
        "Entity ID"
        uid: String!

        optionalProjectUID: String
    ): Configuration

    "Fetches a teamplate"
    Template(
        "Entity ID"
        uid: String!

        optionalProjectUID: String
    ): Template

    "Fetches a subgraph"
    Subgraph(
        "Entity ID"
        uid: String!

        optionalProjectUID: String

    ) : Subgraph

    "Fetches a job"
    Job(
        "Entity ID"
        uid: String!

        optionalProjectUID: String

    ): Job

    "Fetches a logical dataset"
    Dataset(
        "Entity ID"
        uid: String!

        "Pipeline entity ID (Optional)"
        pipelineUID: String

        optionalProjectUID: String

    ): Dataset

    "Fetches a physical dataset"
    PhysicalDataset(
        "Entity ID"
        uid: String!,

        "Fabric ID"
        fabricUID: String!

        "Pipeline entity ID (Optional)"
        pipelineUID: String

        optionalProjectUID: String

    ): PhysicalDataset

    "Fetches a fabric"
    Fabric(
        "Entity Name (optional)"
        name: String,

        "Team ID (optional)"
        teamUIDOptional: String,

        "Entity ID (optional)"
        uid: String): Fabric

    "Fetches a Deployment"
    Deployment(
        "Entity ID"
        uid: String!): Deployment

    "Fetches a Library"
    Library(
        "Entity ID"
        uid: String!

        optionalProjectUID: String

    ): Library


    "Fetches a Gem"
    Gem(
        "Entity ID"
        uid: String!

        optionalProjectUID: String

    ): Gem


    "Fetches a Udf"
    Udf(
        "Entity ID"
        uid: String!

        optionalProjectUID: String

    ): Udf


    "Fetches a Udaf"
    Udaf(
        "Entity ID"
        uid: String!

        optionalProjectUID: String

    ): Udaf

    "Fetches a Expression"
    Expression(
        "Entity ID"
        uid: String!

        optionalProjectUID: String

    ): Expression

    "Search"
    Search(
        "query"
        query: String!,
        "page"
        page: Int!,
        "filterContext"
        filterContext: [FilterContextInput!]):SearchResultMeta

    "EntitySearch"
    EntitySearch(
        "query"
        query:String!,
        "entityKind"
        entityKind:EntityKind!,
        "authorizationContext"
        authorizationContext:AuthorizationContext):MdClientEntitySearchMeta

    "AspectSearch"
    AspectSearch(
        "query"
        query:String!,
        "entityKind"
        entityKind:EntityKind!,
        "aspectKind"
        aspectKind:AspectKind!,
        "authorizationContext"
        authorizationContext:AuthorizationContext,
        "PaginationContext"
        paginationContext:PaginationContext):MdClientAspectSearchMeta

    cleanupPreview(
        "preview the user deletion, returns the entities that will get deleted (it will not do the actual delete)"
        preview: Boolean): [UIDEntityKindType!]!

    teamDeletionPreview(
        "preview of team Id to be deleted"
        teamId:String!
    ): [UIDEntityKindType!]!

    checkUserTeamStatus(
        "Check user's status wrt team"

        teamUID: String!

        userUID: String!
    ): UserTeamStatusType!

    "For a given pipeline get code snapshot"
    getPipelineCodeSnapshot(
        "Pipeline entity ID"
        pipelineUID: String!): VAspect!

    hasAccessToEntity(
        "Entity UID or URI"
        uid: String!,

        "Entity Kind"
        entityKind: EntityKind!): Boolean!

    "Fetches project release information"
    ProjectRelease(
        "Project Release entity ID"
        uid: String!): ProjectRelease!


    "Fetches project release information"
    ProjectReleaseByProjectAndReleaseTag(
        "Project entity ID"
        projectUID: String!

        "Release version"
        releaseVersion: String!): ProjectRelease!

    "Fetches project release information by statuses"
    ProjectReleaseByProjectIdAndStatus(
        "Optional projectId to filter on"
        optionalProjectUID: String

        "List input Release status"
        statuses: [Status!]!): [ProjectRelease!]!

    "Fetches job release information"
    JobRelease(
        "JobRelease entity ID"
        uid: String!): JobRelease!

    "Fetches job release by project release ID"
    JobReleaseByProjectRelease(
        "Project Release UID"
        projectReleaseUID: String!): [JobRelease!]!

    "Fetches job release by Job URI"
    JobReleaseByJobID(
        "Job ID"
        jobUID: String!): [JobRelease!]!

    "Fetches job release by Fabric ID"
    JobReleaseByFabricID(
        "Fabric ID"
        fabricUID: String!): [JobRelease!]!

    "Fetches Branch Information for commits / uncommitted files"
    BranchInfo(
        projectUID : String!

        branchName : String!

        "Remote Type. Local / Origin / Upstream , default is Local"
        remoteType : RemoteType

    ) : BranchDetail!

    "Fetches Branch Diff between given branch and base branch, gets ahead / behind number if branch is ahead / behind base branch"
    BranchDivergence(
        projectUID : String!

        branchName : String!

        "Remote Type. Local / Origin / Upstream , default is Local"
        remoteType : RemoteType

        baseBranchName : String!

        "Remote Type. Local / Origin / Upstream , default is Local"
        baseBranchRemoteType : RemoteType

    ) : BranchDivergence!

    "Validates the git token"
    validateGitToken(
        "Project ID"
        projectUID: String!): Int!

    "Gets the PR URL to be redirected to"
    prCreationRedirectUrl(
        projectUID: String!

        from: String!

        to: String!): ExternalPrRedirectUrl!

    "Gets the PR template for this repository"
    getPrCreationTemplate(
        projectUID: String!
    ): PrCreationTemplateSetting!

    "Fetches a TranspilerImport Entity"
    TranspilerImport(
        "Entity ID"
        uid: String!): TranspilerImport
}
```

## Mutate

Mutations supported by Hub

```
type Mutate {
    "Upserts (non-versioned) aspect of the entity"
    upsertAspect(
        "Entity ID"
        uid: String!,

        "Entity Kind"
        entityKind: EntityKind!,

        "Aspect Kind"
        aspectKind: AspectKind!,

        "Aspect content as stringified JSON"
        aspectValue: String!,

        branch : String,

        commitHash : String,

        releaseTag : String
    ): Int!

    removeAspect(
        "Entity ID"
        uid: String!,

        "Entity Kind"
        entityKind: EntityKind!,

        "Aspect Kind"
        aspectKind: AspectKind!,

        branch : String,

        commitHash : String,

        releaseTag : String
    ) : Int!

    "add frontend events"
    addFrontendEvent(
        "Entity ID"
        feEventData: String!,

        "Entity Kind"
        feUri: String!,

        "Aspect Kind"
        feType: String!
    ) :FrontendEventType!


    "Expects map of filename and file value as json in jsonContent field.Upserts versioned aspects. Entire content gets updated."
    upsertVersionedAspect(
        "Entity ID"
        uid: String!,

        "Entity Kind"
        entityKind: EntityKind!,

        "Aspect Kind"
        aspectKind: AspectKind!,

        "Aspect content as stringified JSON"
        aspectValue: String!,

        "Commit Message for New Version"
        commitMsg: String,

        "Validate versioned aspect by codegen"
        validate: Boolean! = true,

        "Branch name"
        branch: String): UpsertVersionedAspectResponse!

    "Expects map of filename and file value as json in jsonContent field.Appends the provided content to existing versioned aspect.It is an optimization for upsertVersionedAspect endpoint"
    addToVersionedAspect(
        "Entity ID"
        uid: String!,

        "Entity Kind"
        entityKind: EntityKind!,

        "Aspect Kind"
        aspectKind: AspectKind!,

        "Aspect content as stringified JSON"
        aspectValue: String!,

        "Commit Message for New Version"
        commitMsg: String,

        "Validate versioned aspect by codegen"
        validate: Boolean! = true,

        "Branch name"
        branch: String): UpsertVersionedAspectResponse!

    "Removes the provided files from existing versioned aspect."
    removeFromVersionedAspect(
        "Entity ID"
        uid: String!,

        "Entity Kind"
        entityKind: EntityKind!,

        "Aspect Kind"
        aspectKind: AspectKind!,

        "List of filenames"
        fileNames: [String!]!,

        "Commit Message for New Version"
        commitMsg: String,

        "Validate versioned aspect by codegen"
        validate: Boolean! = true,

        "Branch name"
        branch: String): UpsertVersionedAspectResponse!

    "Adds a team"
    addTeam(
        "A pattern validated Entity name"
        name: String!,

        "Team admin ID"
        adminUID: String,

        "Team kind"
        teamKind: TeamKind,

        "IDP Organization Identifier"
        idpOrganizationIdentifier: String,

        "IDP Group Name"
        idpGroupName: String): Team!

    "Adds user to team as member"
    addTeamMember(
        "Team ID"
        teamUID: String!,

        "User ID"
        userUID: String!,

        "invitation Status of an user"
        invitationAccepted: Boolean! = true): Int!

    "Adds user to team as admin"
    addTeamAdmin(
        "Team ID"
        teamUID: String!,

        "User ID"
        userUID: String!,

        "invitation Status of an user"
        invitationAccepted: Boolean! = true): Int!

    "Updates invitation status of a team member"
    updateTeamMemberInvitationStatus(
        "Team ID"
        teamUID: String!,

        "User ID"
        userUID: String!,

        "invitation Status of an user"
        invitationAccepted: Boolean! = true): Int!

    "Confirm invitation to all teams"
    confirmInvitationToAllTeams(
        "User ID"
        userUID: String!): Int!

    "Removes user from team"
    removeTeamMember(
        "Team ID"
        teamUID: String!,

        "User ID"
        userUID: String!): Int!

    "Removes user from team as admin, user continues to be a member"
    removeTeamAdmin(
        "Team ID"
        teamUID: String!,

        "User ID"
        userUID: String!): Int!

    "For all admin-only operations in the team admin tab"
    adminOperations(
        "Team ID"
        teamUID: String!,

        "User ID"
        executionMetrics: executionMetricsArg): Int!

    "Adds a user. If team UID is provided, user is added to the team. User is made admin of the team if isAdmin is set to true."
    addUser(
        "User first name"
        firstName: String!,

        "User last name"
        lastName: String!,

        "User email"
        email: String!,

        "Company name (optional)"
        company: String,

        "Team ID (optional)"
        teamUIDOptional: String,

        "Is user admin of the team provided (optional)"
        isAdmin: Boolean! = false,

        "Password"
        password: String!,

        "Type of User's Account"
        accountType: UserAccountType,

        "Trial Expiration as UTC ISO_8601 String"
        trialExpirationDate: String,

        "The user managed type"
        userManagedType: UserManagedType): User!

    "Updates user password"
    changePassword(
        "Current password"
        currentPassword: String!,

        "New password"
        newPassword: String!): Int!

    "Sets user password"
    setPassword(
        "Entity ID"
        uid: String!,

        "New password"
        newPassword: String!): Int!

    "Adds a project"
    addProject(
        "A pattern validated Entity name"
        name: String!,

        "Owner entity ID"
        ownerUID: String!,

        "Specify fork mode for the Project Repo"
        forkMode: ForkMode!,

        "Main branch of the project (Optional)"
        mainBranch: String,

        "If main branch modification is allowed for project"
        mainBranchModificationAllowed : Boolean,

        "If build templates are enabled for project"
        buildSystemTemplatesEnabled : Boolean,

        "External Sub Path (Optional)"
        externalSubPath: String,

        "External Repo URI (Optional)"
        externalUriArg: String,

        "Username for Github"
        externalRepoUsername: String,

        "Email for Git Provider"
        externalRepoEmail: String,

        "Access Token for Github"
        externalRepoAccessToken: String,

        "Main branch name"
        externalRepoBranch: String,

        "Description of the entity"
        description: String = "",

        "Optional language of project"
        language: BackEndCodeLanguage,

        "Optional build system of project"
        buildSystem : BuildSystem

        "list of projects to be added as dependencies"
        dependencyProjectUIDs: [String]!

        userGitCredsUID : Long

    ): Project!

    "Adds team as a subscriber to current project"
    addSubscriberToProject(
        "UID of Project"
        uid: String!,

        "Team UID to add as a subscriber"
        teamUID: String!): Int!

    "Removes team as a subscriber from current project"
    removeSubscriberFromProject(
        "UID of Project"
        uid: String!,

        "Team UID to remove as a subscriber"
        teamUID: String!): Int!

    resetCommit(
        projectUID : String!,

        branch : String,

        commit : String!
    ) : Int!

    "Releases a project with all the commits in the release branch and creates a release tag"
    releaseProject(
        "UID of Project"
        uid: String!,

        "Release version"
        releaseVersion: String!,

        "Release notes"
        releaseNotes: String!,

        "Optional commit hash"
        commitHash : String,

        "Optional branch"
        branch: String
    ): Int!

    "Does a git cleanup for branch"
    cleanupGitFiles(
        "Project ID"
        projectUID: String!,

        "Optional branch"
        branch : String,

        resetEntity: [String!]

    ): WorkingGitContext!

    "Adds a pipeline"
    addPipeline(
        "A pattern validated Entity name"
        name: String!,

        "Owner entity ID"
        ownerUID: String!,

        "ID of input dataset"
        inputUIDs: [String!],

        "ID of output dataset"
        outputUIDs: [String!],

        "Optional language of pipeline"
        language: BackEndCodeLanguage,

        "branch optional"
        branch : String,

        "If checkout to branch should be done"
        doCheckout : Boolean,

        "Optional mode of pipeline"
        mode: String): Pipeline!

    "Clone a pipeline within same project"
    clonePipeline(
        ownerUID: String!

        source: String!

        target: String!

        branch: String

        doCheckout: Boolean
    ): Pipeline!

    "Adds a configuration to shared pipeline"
    addPipelineConfiguration(
        "A pattern validated Entity name"
        name: String!,

        "Owner entity ID"
        ownerUID: String!,

        "shared pipeline URI"
        basePipeline: String!,

    ): PipelineConfigurations!

    addTemplate(
        "A pattern validated Entity name"
        name: String!,

        "Owner entity ID"
        ownerUID: String!
    ): Template!

    "Adds a subgraph"
    addSubgraph(
        "A pattern validated Entity name"
        name: String!

        "Project UID"
        ownerUID: String!

        "Optional language of pipeline"
        language: BackEndCodeLanguage,

        "Optional mode of pipeline"
        mode: String

    ): Subgraph!

    "Adds a datasetID to model as dependency"
    addDatasetsToModel(
        uid: String!

        datasetUIDList: [String!]!
    ): Int!

    "Removes a datasetID from model as dependency"
    removeDatasetsFromModel(
        uid: String!

        datasetUIDList: [String!]!
    ): Int!

    "Adds a model to another model as dependency"
    addModelToModel(
        uid: String!

        modelUID: String!
    ): Int!

    "Removes a model from another model as dependency"
    removeModelFromModel(
        uid: String!

        modelUID: String!
    ): Int!

    "Updates input/output dataset of a pipeline"
    updatePipelineDataset(
        "Entity ID"
        uid: String!,

        "ID of input dataset"
        inputUIDs: [String!],

        "ID of output dataset"
        outputUIDs: [String!]
    ): [Int!]!

    "Adds input dataset to a pipeline"
    addPipelineInputDataset(
        "Entity ID"
        uid: String!,

        "Dataset ID"
        datasetUID: String!): [Int!]!

    "Removes input dataset from a pipeline"
    removePipelineInputDataset(
        "Entity ID"
        uid: String!,

        "Dataset ID"
        datasetUID: String!): Int!

    "Adds output dataset to a pipeline"
    addPipelineOutputDataset(
        "Entity ID"
        uid: String!,

        "Dataset ID"
        datasetUID: String!): [Int!]!

    "Removes output dataset from a pipeline"
    removePipelineOutputDataset(
        "Entity ID"
        uid: String!,

        "Dataset ID"
        datasetUID: String!): Int!

    "Adds a job"
    addJob(
        "A pattern validated Entity name"
        name: String!,

        "project entity ID"
        projectUID: String!,

        "Scheduler for this job (Optional)"
        scheduler: Scheduler,

        "Cloud provider for this job's scheduler (Optional)"
        cloudProvider: CloudProvider

        "fabricUID"
        fabricUID: String

        "Comma separated emails (Optional)"
        emails: String

        "Whether to send alert on start of job (Optional)"
        onStart: Boolean

        "Whether to send alert on job success (Optional)"
        onSuccess: Boolean

        "Whether to send alert on job failure (Optional)"
        onFailure: Boolean

        "branch optional"
        branch : String,

        "If checkout to branch should be done"
        doCheckout : Boolean,

        "Job size (Optional)"
        jobSize: String

        "Schedule Cron (Optional)"
        scheduleCron: String,

        "Timeout (Optional)"
        timeout: Int

        "Enabled (Optional)"
        enabled: Boolean,

        "Initial pipeline entity ID (Optional)"
        pipelineUID: String): Job!

    "Updates JobRelease with unique ID for this job URI in a scheduler"
    updateSchedulerJobUID(

        "Job Release ID"
        uid: String!

        "Unique ID for this job in a scheduler (Optional)"
        schedulerJobUID: String!): JobRelease!

    "Updates job with pipelines being used in it"
    updateJobPipelines(

        "Job ID"
        jobUID: String!

        "List of pipelines (Fully qualified pipeline URIs)"
        pipelines: [String!]!): Job!

    "Updates job configuration"
    updateJobConfiguration(

        "Job ID"
        jobUID: String!

        "fabricId"
        fabricId: String!

        "Comma separated emails (Optional)"
        emails: String

        "Whether to send alert on start of job (Optional)"
        onStart: Boolean

        "Whether to send alert on job success (Optional)"
        onSuccess: Boolean

        "Whether to send alert on job failure (Optional)"
        onFailure: Boolean

        "Job size (Optional)"
        jobSize: String

        "Schedule Cron (Optional)"
        scheduleCron: String

        "Timeout (Optional)"
        timeout: Int

        "Enabled (Optional)"
        enabled: Boolean): Job!

    "Adds a logical dataset with the name and project id if doesn't already exist. If fabric UID and datasetType is provided, adds a physical dataset if it doesn't already exist"
    addDataset(
        "A pattern validated Entity name"
        name: String!,

        "Owner entity ID"
        ownerUID: String!,

        "Dataset Type (optional)"
        datasetType: DatasetType,

        "Fabric ID (optional)"
        fabricUID: String

        mode: String

        description: String

    addMultipleDatasets(
        "Owner entity ID"
        ownerUID: String!

        "List of dataset names to create"
        names: [String!]!

        "List of descriptions in order for created names"
        descriptionsList: [String!]

        "List of database names in order for created datasets"
        databaseNamesList: [String!]

        "List of schema names in order for created datasets"
        schemaNameList: [String!]

        "List of table names in order for created datasets"
        tableNameList: [String!]

        "List of json schemas in order for created datasets"
        schemaAspectList: [String!]

        "List of dataset modes (batch/stream)"
        datasetModeList: [String!]
    ): [Dataset!]!

    "Adds a fabric"
    addFabric(
        "A pattern validated Entity name"
        name: String!,

        "Owner entity ID"
        ownerUID: String!): Fabric!

    "Changes a fabric's team"
    updateFabricOwnedBy(
        "uid of fabric"
        uid: String!

        "uid of new owning team"
        targetUID: String!): Int!

    "Adds a Deployment"
    addDeployment(
        "A pattern validated Entity name"
        name: String!,

        "Job ID"
        jobUID: String!,

        "Fabric ID"
        fabricUID: String!): Deployment!

    "Destructive API, use with CAUTION. Deletes the user, its administered teams along with the team members"
    cleanup(
        "preview the user deletion (optional), returns the entities that will get deleted (it will not do the actual delete)"
        preview: Boolean
    ): [UIDEntityKindType!]!

    "Deletes an entity"
    removeEntity(
        "Entity ID"
        uid: String!,

        "Entity Kind"
        entityKind: EntityKind!): [UIDEntityKindType!]!

    "Updates the provided field name of entity"
    updateEntity(
        "Entity ID"
        uid: String!,

        "Name of field to be updated"
        entityFieldName: String!,

        "Value of field to be updated"
        entityFieldValue: String!,

        "Entity Kind"
        entityKind: EntityKind!): Int!

    "Commit uncommitted changes"
    commit(
        "Project ID"
        projectUID: String!,

        "Commit Message for New Version"
        commitMsg: String!,

        "Optional branch parameter on which commit will happen"
        branch: String
    ): GitResponseType!

    "rebase && squash"
    cleanCommit(
        "Project ID"
        projectUID: String!,

        "Commit Message for New Version"
        commitMsg: String!): GitResponseType!

    "Checkout a branch"
    checkout(
        "Project ID"
        projectUID: String!,

        "Branch Name"
        branchName: String!): WorkingGitContext!

    "Externally merged PR cleanup"
    mergedExternally (
        "From branch"
        from: String!,

        "main branch"
        to: String!,

        "Project ID"
        projectUID: String!,

    ):WorkingGitContext!

    "Creates a PR dialog tab"
    createPrDialog(
        "Project ID"
        projectUID: String!): PRDialog!

    "Creates pull request"
    createPR(
        "Project ID"
        projectUID: String!,

        "PR source branch"
        from: String!,

        "PR target/base branch"
        to: String!,

        "Specify fork type for the User"
        fromFork: ForkType!,

        "Specify fork type for the User"
        toFork: ForkType!): PR!

    "Merges main branch to dev/release branch"
    mergeMaster(
        "Project ID"
        projectUID: String!,

        "Pull request number"
        prNumber: Int!,

        "Aspect content as JSON"
        resolvedConflicts: String,

        "Conflict entities"
        entityConflicts: [entityConflicts!]!,

        projectConflicts: [projectConflicts!]!

    ): MergeMasterResponse!

    "Fetches pull request merged preview"
    prMergePreview(
        "Project ID"
        projectUID: String!,

        "Pull request number"
        prNumber: Int!): MergedPreview!

    "Pulls Fork's Master Branch from External Origin Master branch"
    pullUpstream(
        "Project ID"
        projectUID: String!,

        "Optional branch"
        branch : String
    ): GitResponseType!

    pullOrigin(
        "Project ID"
        projectUID: String!,

        "Optional branch"
        branch : String
    ): GitResponseType!

    "Unlinks external git"
    unlinkExternalGit(
        "Project ID"
        projectUID: String!): Int!

    "links external git"
    linkExternalGit(
        "Project ID"
        projectUID: String!,

        "External Repo URI (Optional)"
        externalRepoUri: String,

        "Username for Git Provider"
        externalRepoUsername: String,

        "Email for Git Provider"
        externalRepoEmail: String,

        "Access Token for Git Provider"
        externalRepoAccessToken: String,

        "External Sub Path (Optional)"
        externalSubPath: String

        userGitCredsUID : Long

    ): Int!



    "Updates the PR template for this repository"
    setPrCreationTemplate(
        projectUID: String!

        prCreationEnabled: Boolean!

        customPrTemplate: String
    ): Int!

    addLibrary(name : String! , ownerUID : String!) : Library!

    addGem(name : String! , libraryUID : String!) : Gem!

    addUdf(name : String! , libraryUID : String!) : Udf!

    addUdaf(name : String! , libraryUID : String!) : Udaf!

    addExpression(name : String! , libraryUID : String!) : Expression!

    deleteBranch(
        projectUID : String!,

        branchName  : String!
    ): Int!

    promoteAdminToOwner(
        "teamUID"
        teamUID:String!,

        "userUID"
        userUID:String!
    ): Int!

    "Adds a project release"
    addProjectRelease(
        "Project UID"
        projectUID: String!

        "releaseVersion"
        releaseVersion: String!

        "executionNode"
        executionNode: String!): ProjectRelease!

    "Updates project release status"
    updateProjectReleaseStatus(
        "ProjectRelease Entity UID"
        uid: String!

        "Release status"
        status: Status!): ProjectRelease!

    updateProjectReleaseStatusAndAttempt(
        "ProjectRelease Entity UID"
        uid: String!

        "Release status"
        status: Status!

        "attempt"
        attempt: Int!
    ): ProjectRelease!

    "Updates execution node's heart beat in a project release"
    updateProjectReleaseHeartBeat(
        "ProjectRelease Entity UID"
        uid: String!): ProjectRelease!

    "Adds a job release"
    addJobRelease(
        "Job URI"
        jobUID: String!

        "Project Release UID"
        projectReleaseUID: String!

        "Fabric ID"
        fabricUID: String!

        "Scheduler for this job (Optional)"
        scheduler: Scheduler,

        "Unique ID for this job in a scheduler"
        schedulerJobUID: String!): JobRelease!

    updateProject(
        "Project UID"
        uid: String!

        "Project Dependency JSON"
        projectDependency: String

        "If build system template enabled is set"
        buildSystemTemplatesEnabled : Boolean

        "Change log file"
        changelogFile : String

    ): Project!

    addFilesToProject(
        "Project UID"
        uid: String!

        "File content as JSON"
        filesToAdd: String

        "Boolean overwrite value"
        overwriteFiles: Boolean

        "If it starts writing from outside of external subPath"
        externalPathWrite: Boolean): Project!

    "Updates git token for a user"
    updateGitToken(
        "UID of Project"
        uid: String!,

        "The new access token for the user"
        externalRepoAccessToken: String!
    ): Int!

    "Clones the project"
    cloneProject(
        "UID of Project"
        uid: String!,

        "Cloned project name"
        name: String!,

        "The team to create the clone project in"
        teamUID: String!,

        "External Sub Path"
        externalSubPath: String,

        "External Repo URI"
        externalUriArg: String,

        "Username for Git provider"
        externalRepoUsername: String,

        "Email for Git provider"
        externalRepoEmail: String,

        "Access Token for Git provider"
        externalRepoAccessToken: String,

        "Migrate main branch code or all release branch codes"
        copyMainBranchReleaseTags: Boolean

        userGitCredsUID : Long

    ): Project!

    addUserGitCreds(

        externalGitHost: String,

        externalGitProvider : ExternalGitProviderType,

        externalRepoEmail : String!,

        externalRepoUsername : String!,

        externalRepoAccessToken : String!,

        externalGitAlias : String!

    ) : UserGitCreds!

    updateUserGitCreds(

        uid : String!,

        externalGitProvider : String,

        externalRepoUsername : String,

        externalRepoEmail : String,

        externalGitAlias : String,

        externalGitHost : String

        externalRepoAccessToken : String

    ): UserGitCreds!


    "Deletes user git cred's, soft delete"
    deleteUserGitCreds(
        uid : String!
    ) : Int!

    "Link git creds to external git, only if repository is already linked"
    linkSavedCredsToExternalGit(
        projectUID : String!

        userGitCredsUID : Long,

        externalRepoEmail : String,

        externalRepoUsername : String,

        externalRepoAccessToken : String,

    ) : Int!

    "Adds a project as dependency to another project"
    addProjectDependency(
        "UID of Project"
        uid: String,
        "UID of Project to be added as dependency"
        dependencyProjectUID: String
    ): Project!

    "Remove a project as dependency from another project"
    removeProjectDependency(
        "UID of Project"
        uid: String,
        "UID of Project to be removed as dependency"
        dependencyProjectUID: String
    ): Project!

    "Updates version of a  project dependency for another project"
    updateProjectDependency(
        "UID of Project"
        uid: String!,
        "UID of Project to be removed as dependency"
        dependencyProjectUID: String!,
        "version of dependency"
        releaseTag: String
    ): Project!

    addTranspilerImport(
        "Transpiler Import Name"
        name: String!,

        "Disk Storage Path"
        storagePath: String!,

        "Transpiler Import Status"
        status: String!,

        "Transpiler Type (abinitio, informatica etc.)"
        transpilerType: String!,

        "Transpiler Import Team Id (optional)"
        teamId: String
    ): TranspilerImport!

    removeJobReleases(
        "projectReleaseId"
        uid:String!,

        "prophecy job ID"
        jobUID:String!
    ): JobRelease!
}
```

## Aspect

(Non-versioned) Aspect Type

```
type Aspect {
    "Aspect Name"
    AspectName: AspectKind!

    "Aspect Value"
    AspectValue: String!

    "Schema"
    schema: String,

    uid : String!
}
```

## BranchDivergence

```
type BranchDivergence {
    ahead : Int!

    behind : Int!
}
```

## ExternalPrRedirectUrl

```
type ExternalPrRedirectUrl {
    isPrCreationEnabled : Boolean!

    externalPrUrlRedirect :  String

    warning : String
}
```

## PrCreationTemplateSetting

```
type PrCreationTemplateSetting {
    isPrCreationEnabled : Boolean!

    externalGitProvider : ExternalGitProviderType!

    prTemplate : String
}
```

## GitResponseType

```
type GitResponseType {
    merged : MergeStatus!
    fromBranch : String!
    toBranch : String!
    fromDisplayBranch : String!
    toDisplayBranch : String!
    mergeConflicts : PR!
}
```

## EntitySearchHitMetaWithHighlight

```
type EntitySearchHitMetaWithHighlight{
    "id"
    _id: String!,

    "score"
    score: Float!,

    "entityKind"
    entityKind: EntityKind!,

    "name"
    name: String!,

    "entityId"
    entityId: String!,

    "highlights"
    highlights: [String!]!,

    "viewContext"
    viewContext: String!,

    "createdAt"
    createdAt: String!,

    "ownedBy"
    ownedBy: String!,

    "userName"
    userName: String!,

    "teamName"
    teamName: String!,

    "projectName"
    projectName: String!
}
```

## MdClientEntitySearchHitMeta

MdClientEntitySearch

```
type MdClientEntitySearchHitMeta{
    "EntityKind"
    entityKind: EntityKind,

    "name"
    name: String!,

    "entityId"
    entityId: String!,

    "ownedBy"
    ownedBy: String!,

    "createdAt"
    createdAt: String!,

    "highlights"
    highlights: [String!],

    "score"
    score: Float!,

    "viewContext"
    viewContext: String!
}
```

## MdClientAspectSearchHitMeta

MdClientAspectSearchHitMeta

```
type MdClientAspectSearchHitMeta{
    "ownedBy"
    ownedBy: String!,

    "EntityKind"
    entityKind: EntityKind,!

    "aspectKind"
    aspectKind: AspectKind!,

    "content"
    jsonContent: String!,

    "createdAt"
    createdAt: String!,

    "score"
    score: Float!,

    "viewContext"
    viewContext: String!
}
```

## AspectGenericSearchHitMeta

AspectHit

```
type AspectGenericSearchHitMeta{
    "id"
    _id: String!,

    "score"
    score: Float!,

    "jsonContent"
    jsonContent: String!,

    "owned By"
    ownedBy: String!,

    "entityKind"
    entityKind: EntityKind!,

    "aspectKind"
    aspectKind: AspectKind!,

    "createdAt"
    createdAt: String!,

    "modifiedAt"
    modifiedAt: String!,

    "viewContext"
    viewContext: String!,

    "userName"
    userName: String!,

    "teamName"
    teamName: String!,

    "projectName"
    projectName: String!
}
```

## SearchHits

```
union searchHits = EntitySearchHitMetaWithHighlight | AspectGenericSearchHitMeta
```

## SectionItem

SectionItem

```
type SectionItem{
    "label"
    label: String,

    "id"
    id: String,

    "docCount"
    docCount: Int,

    "orderKey"
    orderKey: Int,

    "isSelected"
    isSelected: Boolean
}
```

## FilterSelection

Filter Selection

```
type FilterSelection{
    "sectionHeading"
    sectionHeading: String,

    "sectionType"
    sectionType: SectionType,

    "sectionItems"
    sectionItems: [SectionItem!],

    "itemSelectionType"
    itemSelectionType: ItemSelectionType,

    "orderKey"
    orderKey: Int
}
```

## MdClientPaginationInfo

PaginationInfo

```
type MdClientPaginationInfo{
    "page"
    page: Int!

    "pageCount"
    pageCount: Long!

    "totalCount"
    totalCount: Long!

    "totalPages"
    totalPages: Long!
}
```

## MdClientEntitySearchMeta

EntitySearchMeta

```
type MdClientEntitySearchMeta{
    "hits"
    hits: [MdClientEntitySearchHitMeta!]

    "paginationInfo"
    paginationInfo: MdClientPaginationInfo
}
```

## PaginationInfoMeta

```
type PaginationInfoMeta{
    "page"
    page: Int

    "pageSize"
    pageSize:Int,

    "pageCount"
    pageCount: Long

    "totalCount"
    totalCount: Long

    "totalPages"
    totalPages: Long
}
```

## SearchResultMeta

SearchResultMeta

```
type SearchResultMeta{
    "hits"
    hits: [searchHits!]

    "paginationInfo"
    paginationInfo: PaginationInfoMeta

    "filters"
    filters:[FilterSelection!]
}
```

## MdClientAspectSearchMeta

AspectSearchEntity

```
type MdClientAspectSearchMeta{
    "hits"
    hits: [MdClientAspectSearchHitMeta!]

    "paginationInfo"
    paginationInfo: MdClientPaginationInfo
}
```

## Branch

Git branch name and type. Type can be main/development/release

```
type Branch {
    "Branch name"
    name: String!

    "Branch type"
    type: String!

    "Uncommitted Files Count"
    uncommittedFilesCount : Int!

    "Uncommitted Files"
    uncommittedFiles : [String!]!
}
```

## Dataset

Logical Dataset Type. It a Fabric-unaware abstraction on top of physical Dataset.

```
type Dataset {
    "Logical dataset ID"
    _id: String!

    "Logical dataset name"
    name: String!

    "Mode (batch/stream) of the dataset"
    mode: String

    isExternal : Boolean!

    hasLatestVersion : Boolean!

    path : String!

    repositoryPath (releaseTag : String) : String

    "Logical dataset  creation timestamp"
    created: Long!

    "Logical dataset  creator"
    createdBy: String!

    "Logical dataset description"
    description: String!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Project which owns the logical dataset"
    project: Project!

    "Physical datasets associated with the logical dataset"
    physicalDatasets(
        "Fabric ID (optional)"
        fabricUID: String): [PhysicalDataset!]!

    "Dataset access privilege"
    privilege: String!

    "Pipelines to which logical dataset writes"
    writePipelines : [Pipeline!]!

    "Jobs to which dataset writes"
    writeJobs : [Job!]!

    "Pipelines from which logical dataset reads"
    readPipelines : [Pipeline!]!

    "Jobs from which dataset reads"
    readJobs : [Job!]!

    "Recent pipeline runs in which this dataset was used"
    hotness(
        "Fabric ID (optional)"
        fabricUID: String): [DatasetHotness!]!

    " Entity Commit Info"
    entityCommitInfo : EntityCommitInfo!
}
```

## Deployment

Deployment Type

```
type Deployment {
    "Deployment ID"
    _id: String!

    "Deployment name"
    name: String!

    "Deployment status"
    status: String!

    "Deployment creation timestamp"
    created: Long!

    "Deployment creator"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Job which owns the deployment"
    job: Job!

    "Fabric associated with this deployment"
    fabric: Fabric!
}
```

## EntityConflictInfo

```
type EntityConflictInfo {
    entityKind: EntityKind!
    entityId: String!
    strategy: ResolutionStrategy!
    entityName: String!
}
```

## ProjectFileConflictInfo

```
type ProjectFileConflictInfo {
    key: String!
    displayKey: String!
    leftValue: String!
    rightValue: String!
    strategy: ResolutionStrategy!
}
```

## ExternalSyncConfig

```
type ExternalSyncConfig {
    uri: String!
    username: String!
    accessToken: String!
    remoteName: String!
}
```

## Fabric

Fabric Type

```
type Fabric {
    "Fabric ID"
    _id: String!

    "Fabric name"
    name: String!

    "Fabric creation timestamp"
    created: Long!

    "Fabric created by"
    createdBy: String!

    "Team which owns the fabric"
    team: Team!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Cluster Endpoints"
    clusters: String

    "Jobs deployed on the fabric"
    deployments: [String!]
}
```

## TranspilerImport

TranspilerImport Type

```
type TranspilerImport {
    "Import Id"
    _id: String!

    "Import Name"
    name: String!

    "Import Creation Timestamp"
    createdAt: Long!

    "Id of the user who initiated"
    createdBy: String!

    "Team who owns it"
    teamId: String

    "Team name"
    teamName: String

    "Storage Path on Disk"
    storagePath: String!

    "Transpiler Status"
    status: String!

    "Transpiler Type ( Abinitio, Informatica etc.)"
    transpilerType: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!
}
```

## GitSyncLag

```
type GitSyncLag {
    remoteName: String!
    behind: Int!
    ahead: Int!
    warningText: String!
}
```

## GitSyncStateType

Git sync state

```
type GitSyncStateType {
    "Sync State"
    state: String!

    "Sync State"
    displayState: String!

    "Display message"
    displayMessage: String!

    "external repo url"
    url: String
}
```

## Member

Member Type

```
type Member {
    "Member"
    member: PostgresUser!

    "IsAdmin"
    isAdmin: Boolean!
}
```

## MemberWithAllRoles

Member Type

```
type MemberWithAllRoles {
    "Member"
    member: PostgresUser!

    "role"
    role: Role!
}
```

## MergeMasterResponse

MergeMasterResponse

```
type MergeMasterResponse {
    "Merge master response"
    message: String!
}
```

## MergedPreview

PR Merged Preview

```
type MergedPreview {
    "File Conflicts"
    fileConflicts: fileBasedMergedPreview!

    "Entity Conflicts"
    entityConflicts: [EntityConflictInfo!]!

    "Project conflicts"
    projectConflicts : [ProjectFileConflictInfo!]!
}
```

## EntityExistence

```
type EntityExistence {
    "If project name exists"
    doesExist : Boolean!

    "Message to be displayed"
    message : String!

}
```

## PR

Git PR number and preview of merged code

```
type PR {
    "PR Number"
    number: Int!

    "PR Creation Message"
    message: String!

    "Migration Version"
    migrationVersion: String!

    "Merged content preview"
    mergedPreview: MergedPreview!
}
```

## PRDialog

```
type PRDialog {
    branchTab: PRDialogTab
    forkTab: PRDialogTab
}
```

## PRDialogTab

```
type PRDialogTab {
    fromBranchLabel: String
    fromBranchPlaceholderText: String
    toBranchLabel: String
    toBranchPlaceholderText: String
    nameTextboxLabel: String
    nameTextboxPlaceholderText: String
    redirectToExternalText: String
    redirectToExternalUri: String
    fromBranchesDropdown: [Branch!]
    toBranchesDropdown: [Branch!]
}
```

## PhysicalDataset

Physical Dataset Type

```
type PhysicalDataset {
    "Physical dataset ID"
    _id: String!

    "Physical dataset name"
    name: String!

    "Physical dataset type"
    datasetType: DatasetType

    "Physical dataset creation timestamp"
    created: Long!

    "Physical dataset creator"
    createdBy: String!

    "Associated logical dataset"
    dataset: Dataset!

    "Fabric where physical dataset resides"
    fabric: Fabric!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!
}
```

## PostgresTeamMember

Team Member Type

```
type PostgresTeamMember {
    "User ID"
    _id: String!

    "User name"
    name: String!

    "User first name"
    firstName: String!

    "User last name"
    lastName: String!

    "User email (unique identifier)"
    email: String!

    "User creation timestamp"
    created: Long!

    "User created by"
    createdBy: String!

    "Invitation accepted"
    invitationAccepted: Boolean!
}
```

## PostgresUser

Postgres User Type

```
type PostgresUser {
    "User ID"
    _id: String!

    "User name"
    name: String!

    "User first name"
    firstName: String!

    "User last name"
    lastName: String!

    "User email (unique identifier)"
    email: String!

    "User creation timestamp"
    created: Long!

    "User created by"
    createdBy: String!
}
```

## Project

Project Type

```
type Project {
    "Project ID"
    _id: String!

    "Change log file of project"
    changelogFile : String!

    "Language of project"
    language : BackEndCodeLanguage!

    "Build system"
    buildSystem : BuildSystem!

    "Project name"
    name: String!

    "Project creation timestamp"
    created: Long!

    "Project created by"
    createdBy: String!

    "Default template for project build system and language"
    defaultTemplate : String!

    "Project dependencies"
    dependencies(
        "Release tag (optional)"
        releaseTag: String) : String!

    "Project Dependencies"
    projectDependencies: [ProjectDependency!]!

    "Project Dependency Info"
    projectDependencyInfo: ProjectDependencyInfo

    "Available Project Dependencies"
    availableProjectDependencies: [Project!]!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Latest code version id"
    latestCodeVersion(
        "Branch name"
        branch: String): String

    "Pipelines in the project"
    pipelines(
        "Release tag (optional)"
        releaseTag: String): [Pipeline!]!

    "Pipeline configurations in the project"
    pipelineConfigurations(
        "Release tag (optional)"
        releaseTag: String): [PipelineConfigurations!]!

    "Templates in the project"
    templates(
        "Release tag (optional)"
        releaseTag: String): [Template!]!


    "Subgraphs in the project"
    subgraphs(
        "Release tag (optional)"
        releaseTag: String): [Subgraph!]!

    "Libraries in the project"
    libraries(
        "Release tag (optional)"
        releaseTag: String): [Library!]!

    "Datasets in the project"
    datasets(
        "Release tag (optional)"
        releaseTag: String): [Dataset!]!

    "Jobs in the project"
    jobs(
        "Release tag (optional)"
        releaseTag: String): [Job!]!

    "Team which owns the project"
    team: Team!

    "External repo sync status"
    externalSyncStatus: GitSyncStateType!

    "If user's creds are present"
    savedGitCredsStatus : UserGitCreds

    "Fetches Users Currently Worked on Git Context"
    workingGitContext: WorkingGitContext!

    "External Origin URI for the Project (If it's externally linked)"
    externalOriginUri: String

    "Project's Fork Mode Status"
    forkMode: ForkMode!

    "Project's Sync Mode Status"
    syncMode: SyncMode!

    "Currently active branch"
    workingBranch: Branch!

    "Project main branch"
    mainBranch: String!

    "Main branch modification allowed on project"
    mainBranchModificationAllowed : Boolean!

    "Build templates enabled on project"
    buildSystemTemplatesEnabled : Boolean!

    "Subscribed projects"
    subscribedProjects: [Project!]!

    "Datasets of subscribed projects"
    subscribedDatasets: [Dataset!]!

    "Pipelines of subscribed projects"
    subscribedPipelines: [Pipeline!]!

    "Subscriber teams of this project"
    subscriberTeams: [SubscriberTeam!]!

    "List of teams not yet subscribed to this project"
    potentialSubscriberTeams: [SubscriberTeam!]!

    "Latest release tag of this project"
    latestReleaseVersion: String

    "Name of team owning this project"
    teamName: String!

    "Description of this project"
    description: String!

    "Project external subPath"
    externalSubPath : String!

    "Project cloning status"
    isCloning: Boolean!
}
```

## Job

Job Type. Represents a DAG of pipelines.

```
type Job {
    "Job ID"
    _id: String!

    "Job name"
    name: String!

    "Job creation timestamp"
    created: Long!

    path : String!

    repositoryPath (releaseTag : String) : String

    "Job creator"
    createdBy: String!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Latest code version id"
    latestCodeVersion(
        "Branch name"
        branch: String): String

    "Project which owns the job"
    project: Project!

    "All deployments associated with this job"
    deployments: [Deployment!]!

    "Scheduler for this job"
    scheduler: Scheduler!

    "Alerting information"
    alerting: Alerting

    "Fabric information"
    fabric: Fabric

    "Job size"
    jobSize: String

    "Schedule Cron"
    scheduleCron: String

    "Pipelines in this job"
    pipelines: [String!]!

    "Timeout of this job (seconds)"
    timeout: Int

    "Enabled"
    enabled: Boolean

    " Entity Commit Info"
    entityCommitInfo : EntityCommitInfo!
}
```

## BranchDetail

```
type BranchDetail {

    name : String!

    uncommittedFilesCount : Int!

    uncommittedFiles : [String!]!

    localCommitInfo : [CommitInfo!]!

    remoteCommitInfo : [CommitInfo!]!

    commitLogHeader: CommitLogHeader!

    uncommittedEntityInfo: [CommitLogEntityInfo!]!

    unModifiedEntityInfo: [CommitLogEntityInfo!]!

}
```

## CommitInfo

```
type CommitInfo {

    commitHash : String!

    message : String!

    created : Long!

    authorEmail : String!

    authorName : String!

    tags : [String!]!
}
```

## CommitLogHeader

```
type CommitLogHeader {
    hasEntityGrouping : Boolean!

    hasEntityLevelReset : Boolean!

    error : String
}
```

## CommitLogEntityInfo

```
type CommitLogEntityInfo {
    uid : String!

    entityKind : EntityKind!

    entityName : String!

    mutationType : CommitLogEntityMutationType

    dependentEntity : [CommitLogEntityInfo!]!

    files : [String!]!
}
```

## EntityCommitInfo

```
type EntityCommitInfo {
    uid : String!

    entityKind : EntityKind!

    entityName : String!

    mutationType : CommitLogEntityMutationType

    dependentEntity : [CommitLogEntityInfo!]!

    files : [String!]!
}
```

## Dependency

Dependency Type

```
type Dependency {

    "Dependency name"
    name: String!

    "Dependency project UID"
    projectUID: String!

    "Dependency Project name"
    projectName: String!

    "Dependency version"
    version: String!

    "Dependency project author"
    author: String!

    "Dependency project repository path"
    repositoryPath: String!

    "Dependency creation timestamp"
    createdAt: String!
}
```

## ProjectDependency

Project Dependency Type

```
type ProjectDependency {

    "Dependency version"
    version: String!

    directDependency: Boolean !

    "Project"
    project: Project!
}
```

## ProjectDependencyConflict

Project Dependency Conflict Type

```
type ProjectDependencyConflict {
    project: Project!,
    conflictingReleaseVersions: [String!]!
}
```

## ProjectDependencyInfo

Project Dependency Info Type

```
type ProjectDependencyInfo {

    dependencies: [ProjectDependency!]!
    dependencyConflicts: [ProjectDependencyConflict!]!
}
```

## Team

Team Type

```
type Team {
    "Team ID"
    _id: String!

    "Team name"
    name: String!

    "Team creation timestamp"
    created: Long!

    "Team created By"
    createdBy: String!

    "Team kind"
    teamKind: TeamKind!

    "Team admins"
    admins: [PostgresTeamMember!]!

    "Team members"
    members: [PostgresTeamMember!]!

    "Projects owned by the team"
    projects: [Project!]!

    "Projects subscribed by the team"
    subscribedProjects: [Project!]!

    "Pipelines owned by the team"
    pipelines: [Pipeline!]!

    "Configured Pipelines owned by the team"
    pipelineConfigurations: [PipelineConfigurations!]!

    "Jobs owned by the team"
    jobs : [Job!]!

    "Subgraphs owned by the team"
    subgraphs : [Subgraph!]!

    "Pipelines subscribed by the team"
    subscribedPipelines: [Pipeline!]!

    "Datasets owned by the team"
    datasets: [Dataset!]!

    "Libraries owned by the team"
    libraries: [Library!]!

    "Datasets subscribed by the team"
    subscribedDatasets: [Dataset!]!

    "Team members with type"
    membersWithType: [Member!]!

    "Team members with All Roles"
    membersWithAllRoles: [MemberWithAllRoles!]!

    "Fabrics owned by the team"
    fabrics: [Fabric!]!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "TranspilerImports imported by the team members"
    transpilerImports: [TranspilerImport!]!

    "Available Project Dependencies"
    availableProjectDependencies(language: BackEndCodeLanguage): [Project!]!

}
```

## UserGitCreds

```
type UserGitCreds {

    _id : String!

    externalRepoAccessToken : String!

    externalGitHost : String!

    externalRepoUsername : String!

    externalRepoEmail : String!

    saved : Boolean!

    externalGitAlias : String!

    created : Long!

    lastModified : Long!

    lastConnected : Long

    externalGitProvider : ExternalGitProviderType!

}
```

## ExecutionMetrics

ExecutionMetrics Input Type

```
type ExecutionMetrics {

    "Pipeline metrics table fully qualified name"
    pipelineMetricsTable: String!

    "Component metrics table fully qualified name"
    componentMetricsTable: String!

    "Interims table fully qualified name"
    interimsTable: String!

    "Whether metrics are enabled by default for all projects of this team"
    enabled: Boolean!
}
```

## TeamAdminInfo

TeamAdminInfo Type

```
type TeamAdminInfo {

    "Execution Metrics information"
    executionMetrics: ExecutionMetrics
}
```

## SubscriberTeam

SubscriberTeam Type

```
type SubscriberTeam {

    "Team ID"
    _id: String!

    "Team name"
    name: String!

    "Subscribed Project ID"
    subscribedProjectID: String!

    "Whether subscriber team is also author of project"
    isAuthor: Boolean!
}
```

## UIDEntityKindType

UIDEntityKindType

```
type UIDEntityKindType {
    "ID"
    _id: String!

    "Entity kind"
    entityKind: EntityKind!

    "Name of Entity"
    name: String!
}
```

## UserTeamStatusType

```
type UserTeamStatusType {
    isUserPresentInTeam: Boolean!

    hasUserAcceptedInvite: Boolean!
}
```

## UpsertVersionedAspectResponse

Response to UpsertVersionedAspectRequest

```
type UpsertVersionedAspectResponse {
    id: String
    validation: Validation!
}
```

## FrontendEventType

```
type FrontendEventType {
    uri: String
    data: String
    method: String

}
```

## User

User Type

```
type User {
    "User ID"
    _id: String!

    "User full name"
    name: String!

    "User first name"
    firstName: String!

    "User last name"
    lastName: String!

    "User email (unique identifier)"
    email: String!

    "User creation timestamp"
    created: Long!

    gitSavedCreds : [UserGitCreds!]!

    "User created by"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Teams user is part of"
    teams(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Team!]!

    "Projects user has access to"
    projects(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Project!]!

    "Projects user has read-access to"
    subscribedProjects: [Project!]!

    "Pipelines user has access to"
    pipelines(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Pipeline!]!

    "Configured Pipelines user has access to"
    pipelineConfigurations(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [PipelineConfigurations!]!


    "Subgraphs user has access to"
    subgraphs(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Subgraph!]!

    "Pipelines user has read-access to"
    subscribedPipelines: [Pipeline!]!

    "Libraries user has access to"
    libraries(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Library!]!

    "Datasets user has access to"
    datasets(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Dataset!]!

    "Datasets user has read-access to"
    subscribedDatasets: [Dataset!]!

    "Jobs user has access to"
    jobs(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Job!]!

    "Fabrics user has access to"
    fabrics(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [Fabric!]!

    "TranspilerImports user has access to"
    transpilerImports(
        "Optional uid list. If null, all accessible entities of request type will be fetched."
        uids: [String!]): [TranspilerImport!]!
}
```

## VAspect

Versioned Aspect Type

```
type VAspect {
    "Versioned aspect name"
    VersionedAspectName: AspectKind!

    "Versioned aspect value"
    VersionedAspectValue: String!

    "version"
    version: String
}
```

## Validation

Upsert Validation Status

```
type Validation {
    status: String!
    messages: [String!]!
}
```

## Pipeline

Pipeline Type

```
type Pipeline {
    "Pipeline ID"
    _id: String!

    "Pipeline name"
    name: String!

    "Pipeline created timestamp"
    created: Long!

    "Pipeline created By"
    createdBy: String!

    path : String!

    repositoryPath (releaseTag : String) : String

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!


    "Latest code version id"
    latestCodeVersion(
        "Branch name"
        branch: String): String

    "Project pipeline is part of"
    project: Project!

    "Fabrics pipeline can execute on"
    fabrics: [Fabric!]!

    "Datasets read by pipeline"
    readDatasets: [Dataset!]!

    "Datasets written by pipeline"
    writeDatasets: [Dataset!]!

    "Language of pipeline"
    language : BackEndCodeLanguage!

    "Mode of pipeline"
    mode : String!

    "All datasets visible to current pipeline"
    visibleDatasets: [Dataset!]!

    " Entity Commit Info"
    entityCommitInfo : EntityCommitInfo!
}
```

## Configuration

```
type Configuration{
    "Configuration ID"
    _id: String!

    "Configuration name"
    name: String!

    " Entity Commit Info"
    entityCommitInfo : EntityCommitInfo!

    "Project pipeline is part of"
    project: Project!

    basePipeline: Pipeline!
}
```

## PipelineConfigurations

Configured Pipeline Type

```
type PipelineConfigurations {
    "Pipeline ID"
    _id: String!

    "Pipeline name"
    name: String!

    "Pipeline created timestamp"
    created: Long!

    "Pipeline created By"
    createdBy: String!

    path : String!

    repositoryPath (releaseTag : String) : String

    configurations: [Configuration!]

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Project pipeline is part of"
    project: Project!

    " Entity Commit Info"
    entityCommitInfo : EntityCommitInfo!

    basePipeline: Pipeline!
}
```

## Template

Template Type

```
type Template {
    "Pipeline ID"
    _id: String!

    "Template name"
    name: String!

    repositoryPath (releaseTag : String) : String

    "Template created timestamp"
    created: Long!

    "Template created By"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Project pipeline is part of"
    project: Project!

    " Entity Commit Info"
    entityCommitInfo : EntityCommitInfo!
}
```

## Subgraph

Subgraph Type

```
type Subgraph {
    "Subgraph ID"
    _id: String!

    "Subgraph name"
    name: String!

    repositoryPath (releaseTag : String) : String

    "Subgraph created timestamp"
    created: Long!

    path : String!

    mode: String

    "Subgraph created By"
    createdBy: String!

    "Language of pipeline"
    language : BackEndCodeLanguage!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"

    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Latest code version id"
    latestCodeVersion(
        "Branch name"
        branch: String): String

    "Project subgraph is part of"
    project: Project!

    " Entity Commit Info"
    entityCommitInfo : EntityCommitInfo!
}
```

## Library

Library Type

```
type Library {
    "Library ID"
    _id: String!

    "Library name"
    name: String!

    path : String!

    repositoryPath (releaseTag : String) : String

    "Library created timestamp"
    created: Long!

    "Library created By"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Project library is part of"
    project: Project!

    "Gems in library"
    gems : [Gem!]!

    "Udfs in library"
    udfs : [Udf!]!

    "Udafs in library"
    udafs : [Udaf!]!

    "Expressions in library"
    expressions : [Expression!]!
}
```

## Gem

Gem Type

```
type Gem {
    "Gem ID"
    _id: String!

    "Gem name"
    name: String!

    "Gem created timestamp"
    created: Long!

    "Gem created By"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Project Gem is part of"
    project: Project!

    "library Gem is part of"
    library : Library!
}
```

## Udf

Udf Type

```
type Udf {
    "Udf ID"
    _id: String!

    "Udf name"
    name: String!

    "Udf created timestamp"
    created: Long!

    "Udf created By"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Project Udf is part of"
    project: Project!

    "library Udf is part of"
    library : Library!
}
```

## Udaf

Udaf Type

```
type Udaf {
    "Udaf ID"
    _id: String!

    "Udaf name"
    name: String!

    "Udaf created timestamp"
    created: Long!

    "Udaf created By"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Project Udaf is part of"
    project: Project!

    "library Udaf is part of"
    library : Library!
}
```

## Expression

Expression Type

```
type Expression {
    "Expression ID"
    _id: String!

    "Expression name"
    name: String!

    "Expression created timestamp"
    created: Long!

    "Expression created By"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String): [Aspect!]!

    "Aspects of the entity"
    versionedAspects(
        "Branch name"
        branch: String,

        "List of versioned aspect arguments. If null, all the supported versioned aspects will be fetched."
        aspectVers: [AspectQuery!]): [VAspect!]!

    "Project expression is part of"
    project: Project!

    "library Expression is part of"
    library : Library!
}
```

## WorkingGitContext

The Working Git Context for the Project

```
type WorkingGitContext {
    name: String!
    repoName: String!
    syncLagInfo: [GitSyncLag!]!
    syncHealth: String!
    externalSyncConfig: ExternalSyncConfig
    forkType: ForkType!
    forkMode: ForkMode!
    syncMode: SyncMode!
    workingBranch: Branch!
    lastCommitInfo : CommitInfo!
    currentUrl: String!
    branches: [Branch!]!
    remoteBranches : [Branch!]!
    forkTypeLabel: String!
    uncommittedFilesCount: Int!
    forkNameLabel: String!
    branchNameLabel: String!
    forkNameWarningLabel: String
    branchNameWarningLabel: String
    branchInfo : BranchDetail!
}
```

## fileBasedMergedPreview

File PR Merged Preview

```
type fileBasedMergedPreview {
    "Non Conflicted files"
    noConflicts: String!

    "Conflicted files"
    conflicts: String!
}
```

## Alerting

Alerting information

```
type Alerting {
    "Comma separated emails"
    emails: String!

    "Whether to send alert on start of job"
    onStart: Boolean!

    "Whether to send alert on job success"
    onSuccess: Boolean!

    "Whether to send alert on job failure"
    onFailure: Boolean!
}
```

## JobRelease

Job Release Type

```
type JobRelease {
    "Job Release UID"
    _id: String!

    "Project Release UID"
    projectReleaseUID: String!

    "Job UID"
    jobUID: String!

    "Fabric which job uses"
    fabric: Fabric!

    "Scheduler for this job"
    scheduler: Scheduler!

    "Job UID in the scheduler (Dag ID or Databricks Job ID)"
    schedulerJobUID: String

    "Job release created at timestamp"
    createdAt: Long!

    "Job release created by"
    createdBy: String!
}
```

## ProjectRelease

Project Release Type

```
type ProjectRelease {
    "Project Release UID"
    _id: String!

    "Project"
    project: Project!

    "Team which owns the project"
    team: Team!

    "Release tag"
    releaseTag: String!

    "Release submission time"
    submissionTime: Long!

    "Release status"
    status: Status!

    "Current attempt id"
    attempt: Int!

    "Execution node assigned"
    executionNode: String!

    "Execution node's last heart beat time"
    lastHeartBeatTime: Long!

    "Log path"
    logPath: String!

    "Job release created at timestamp"
    createdAt: Long!

    "Job release created by"
    createdBy: String!

    "Aspects of the entity"
    aspects(
        "List of aspects to fetch. If null, all the supported aspects will be fetched."
        aspect: [AspectKind!],

        "Branch name"
        branch: String,

        "Commit hash"
        commitHash : String,

        "Release tag"
        releaseTag : String

    ): [Aspect!]!

}
```

## DatasetHotness

```
type DatasetHotness {

    "Operation"
    operation: String!

    "Operation time"
    operationTime: Long!
}
```
