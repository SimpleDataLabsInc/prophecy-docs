---
title: Code editor
id: code-editor
description: Code editor for SQL
sidebar_position: 4
tags:
  - execution
  - explorer
  - sort
  - filter
  - interim
  - data
---

Engineers can use SQL and advanced macros through a code-based editor. Prophecy parses their code and visualizes it on an editable canvas and ensures both views remain in sync at all times.

## Code view

The visual developers will appreciate the drag-n-drop canvas, but sometimes it's also nice to view the code. Already Prophecy creates highly performant code behind the scenes. Just click the **Code View** to reveal the SQL queries we've generated using our visual design editor. Each Gem is represented by a CTE or subquery. For example, the Join Gem `NATIONS_CUSTOMERS` is highlighted in both visual and code views.

![aa](./img/CodeEqualsVisual.png)
-to update to just code editor image (with callouts?)

You may wish to edit the code view - give it a try! Add a SQL statement in the code view and notice the visual editor displays the updated code. For example, we've added a limit statement in the code view, and a new limit Gem appears in the visual view.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/gpb6yu0bxv?videoFoam=true" title="Edit Code Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Code within Gems

You can modify Gems on the code level after building them.

### Allow user to define Gem dependencies

As a Gem evolves over time, the properties of the Gem will change. Some of these changes will require explicit logic to migrate existing instances of the Gem in pipelines. A Gem architect should be able to define these evolutions in the Gem spec itself. Prophecy should be able to execute these evolutions on older existing instances of gems upon dependency update for the users.

Feature description

- Allow users to define dependencies for each Gem (E.g. - mysql for MySQL source Gem)
- Automatically add dependencies to Pipeline when Gem is used.
- Internal packages are pretty critical - MS etc
- Allowing external third party libraries to be used inside onChange and validate method.
- Allow transitive dependencies.
  - Some artifacts might require their own set of dependencies to run correctly in sandbox.
  - Complex libraries can have large set of transitive dependencies. - Spark excel has 25 dependent jars.
  - Adding these many dependencies to interpreter can get very messy. Proper error propagation might also prove difficult.

User flows

- Gem creation
  - User needs to be able to add dependencies to a Gem from Gem editor
  - User should be able to test Gem in Gem editor as well as Pipeline editor in same branch.
- Gem Usage
  - Downstream users should be able to use Gem with dependencies in the Pipeline editor
  - Schema analysis should work as expected

User workflows

- Updating dependencies
  - User clicks on update dependency.
  - User is asked to save any changes before migration & code regeneration starts. (For easier roll back)
  - Project is marked as migrating
    - no one can edit & can view ? (View depends on dialog which depends on props, will have to wait for migration)
  - Post migration, pipelines will be marked for auto generate
  - User should be able to track the progress of migration and code regeneration
- Changing Gem properties
  - User opens Gem editor and creates the necessary migration.
  - Will have to document how to write migrations(documentation)
  - Share real world examples(we can share our secret management related migrations)
