---
title: Development
id: development
description: Designing SQL projects with Copilot
sidebar_position: 2
tags:
  - SQL
  - development
  - model
  - gem
  - interactive
  - runs
  - ad-hoc
---

Prophecy Data Transformation Copilot for SQL combines the best of both worlds; **high-quality code** based on software engineering best practices with a complete, **easy-to-use visual** environment.

## Visual = Code for easy collaboration

Visual = Code allows both SQL coders and business users to easily collaborate on the same project.

### Code = Visual

Prophecy Copilot for SQL features two editors:

![CodeEqualsVisual](img/CodeEqualsVisual.png)

1. **Visual Editor** - enables data practitioners to easily see and modify the data model definitions in a graphical way. The visual graph is perfect to quickly grasp the purpose and inner workings of the existing models. It’s also a great way to develop brand new models with step-by-step [interactive execution](../execution/data-explorer.md). All models developed through the visual interface will be written in a highly standardized format.

2. **Code Editor** - enables the users already familiar with SQL to optimize and understand their queries in-depth. New data practitioners can also learn best practices as they develop their models by sneak-peaking into the code editor in real-time.

No matter which editor you prefer, Prophecy features a Code = Visual interface that allows teams to collaborate on both interfaces at the same time. Any changes made in the Visual Editor generate high-quality code on Git. And, any changes in the Code Editor can be visualized back as a visual graph.

**Do I have to save my work progress?**

No! Prophecy automatically saves your work as you develop in a working directory securely stored on the cloud. Just make sure to commit your changes every once in a while, to see your code reflected on your Git and to collaborate easier with your team.

**Are all SQL and dbt constructs supported?**

Vast majority of dbt and SQL constructs are supported within the Prophecy Visual editor. However, if something is not yet supported, don’t worry!

- **For SQL** - Prophecy automatically maps unsupported SQL statements to a generic SQL Gem, allowing you to still freely edit even unsupported code.
- **For dbt** - Features in dbt-core that may lack their visual-editor alternatives still work as expected from the standard dbt cli. Prophecy will never modify your existing codebase in unsupported ways.

## Interactive development

At any step of the process, data users can interactively run their models to make sure they're going in the right direction. Models can be additionally tested to ensure robustness over time. Power users can also extend the visual canvas through custom Gems; making even the most complex logic easily accessible in the visual view.

## Deployment from code on Git

Projects built through Prophecy are stored in the dbt Core format as repositories on Git, which allows data teams to follow best software engineering practices like CI/CD.

Maintenance is simple since Prophecy gems turn into code on Git that’s always up-to-date with the latest version of the warehouse or lakehouse used. And, to ensure the best performance at all times, Prophecy is smart about which code construct (subquery or CTE) to use.

## Sharing of Projects as Packages

Data users can import an existing dbt Core project or start from scratch. They can publish those projects to other teams or subscribe to already existing ones. Projects published as packages contain models, functions and Gems allowing for code reusability at every level.

## Learn more

A word from Prophecy's co-Founder, Maciej! See how Prophecy allows every team, whether visual or code developers, to use the same software development best practices.

<div class="wistia_responsive_padding" style={{padding:'56% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/3i9g2dciah?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Hands-on

To get started developing SQL models, check out the pages below or try this guide for [Databricks](/docs/getting-started/getting-started-with-low-code-sql.md) or [Snowflake](/docs/getting-started/getting-started-sql-snowflake.md).

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

As you're building your Model by adding [individual Gems](/docs/SQL/gems/gems.md), see how the process is going by interactively running the model. To learn more, see [Data Explorer](../execution/data-explorer.md).
