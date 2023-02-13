---
title: Prophecy Metadata API Inputs
id: mdapi-inputs
description: Metadata API Inputs
sidebar_position: 2
tags: []
---

## FilterContextInput

```
input FilterContextInput{
    "selectionType"
    sectionType: SectionType!,

    "ids"
    ids: [String!]!
}
```

## PaginationContext

PageContext

```
input PaginationContext{
    "page"
    page:Int!,

    "pageSize"
    pageSize:Int!
}
```

## AspectQuery

Arguments to fetch versioned aspect

```
input AspectQuery {
    "Aspect Kind"
    aspect: AspectKind!

    "Optional. Aspect version to fetch. Latest version is fetched by default."
    version: String

    "Optional. Files to fetch. All files in latest version is fetched by default."
    files: [String!]
}
```

## AuthorizationContext

AuthorizationContext

```
input AuthorizationContext{
    authEntityKind:EntityKind!
    authEntityId:String!
}
```

## executionMetricsArg

ExecutionMetrics Input Type

```
input executionMetricsArg {

    "Pipeline metrics table fully qualified name"
    pipelineMetricsTable: String

    "Component metrics table fully qualified name"
    componentMetricsTable: String

    "Interims table fully qualified name"
    interimsTable: String

    "Whether metrics are enabled by default for all projects of this team"
    enabled: Boolean!
}
```

## entityConflicts

```
input entityConflicts {
    "Entity Kind"
    entityKind: EntityKind!

    "Entity Id"
    entityId: String!

    "Entity Name"
    entityName: String!

    "Resolution Strategy"
    strategy: ResolutionStrategy!
}
```

## projectConflicts

```
input projectConflicts {

    key: String!

    displayKey: String!

    leftValue: String!

    rightValue: String!

    strategy: ResolutionStrategy!
}
```
