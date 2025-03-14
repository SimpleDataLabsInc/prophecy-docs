---
title: Package Hub
id: package-hub
description: Create and Share Reusable Pipeline Components
tags: [package-hub]
---

Prophecy introduces **Package Hub,** which enables data practitioners to create and share pipeline components.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/699b96r7w8?seo=false?videoFoam=true" title="Getting Started With SQL Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

<br />

A Package is a versioned project that can be shared across teams. As such, a Package can contain pipeline templates, [custom gems](docs/extensibility/gem-builder/spark-gem-builder.md), functions, subgraph templates, etc - a reusable version of everything a project contains. Package dependencies allow us to re-use components so we don’t have to rebuild them. The coding community has been using packages for ages, and finally the non-coding data practitioners can take advantage of the same idea. Packages are shareable within and across teams. For extra visibility, the Package Hub is a curated selection of Packages that your teams create and publish for other users to leverage.

Just include a Package as a dependency to take advantage of its contents. See the sections below for step-by-step instructions on how to [use](#use-a-package), [build](#build-a-package), and [share](#share-a-package) Packages.

## Use a package

Open the helloworld project or create a new project. Notice the dependencies include `SparkBasics` project:

![2](img/2-ph.png)

On opening a new pipeline, notice all the transformation dropdown gems are from `SparkBasics` package. Drag and drop a gem like Deduplicate from SparkBasics package to use in a NewProject pipeline.

![3](img/3-ph.png)
Already you are employing an engineering best practice: package dependencies! When we say that a project USES a package, another way to say it is “a project has a dependency on the Package.” `NewProject` has a dependency on SparkBasics Package. But don’t stop there. You’ll want to use packages shared by your teammates!

Adding a Package to your project is easy. From a pipeline, just **(1)Add a new Package.** Now the Package and all of the contents - pipeline templates, custom gems, jobs, UDFs, etc - will be accessible in your pipeline and the entire project. Want to see the list of Packages available for your project? From the **(2)Project page,** click **(3)Dependencies** to see the Packages listed as Dependencies for your project. **(4)Add or remove** dependencies using the dropdown.

![4](img/4-ph.png)

Another great way to find Packages is via the **(1)Package Hub.** This Hub serves to give visibility to the best, curated Packages that Teams want to highlight. Therefore, only Published Packages appear in the PackageHub. Search for a Package by search string, or filter by content, type, or team. **(2)Select a package card** and **(3)Use** the Package as a dependency to a new or existing project.

![5](img/5-ph.png)

A Package can contain pipeline templates, custom gems, Subgraph templates, Functions, and more. In fact, a Package can contain anything a project contains. Why? **A Package is a project that has been released with a version.**

A Package is a set of logic to apply in various situations. Any changes to this logic would be done via versioned package release. For this reason, the projects that USE the package will not be able to change the package.

Let’s diagram a slightly more complex scenario that represents how your teams might use Packages. (So far we’ve considered `SparkBasics`, a project created by the engineering team at Prophecy which only contains the gems we already know and love.) We need a slightly more complex scenario to explore re-using pipeline templates and custom gems. (Detailed pages exploring re-usable subgraphs, UDFs, and jobs will be available in the near future.)

Consider now the `Framework` project and two projects that have dependencies on the `Framework` project.

![6](img/6-ph.png)

### Re-using pipelines

Since `MarketingLeads` project lists package `Framework` as a dependency, any pipelines from `Framework` will be accessible in `MarketingLeads` by passing [configurable variables](/docs/Spark/configuration.md). The `MarketingLeads` project cannot change the Framework pipelines. This is a good thing - the Platform team decides how `Framework` will evolve.

![7](img/7-ph.png)
The MarketingAnalytics team can create a **(1)new pipeline configuration** and **(2)name** it `LeadsCleanup`. Then **(3)select** that configuration, perhaps change the variable “table” value from default to a more interesting **(4)value** for their use case. `LeadsCleanup` is a configuration instance of the `GenericCleanup` pipeline template.

![8](img/8-ph.png)

Now, in the same `CustomersModeling` project, **(1)select** the desired configuration instance, and **(2)run** the pipeline with that configuration. Here the `GenericCleanup` pipeline is a readonly template, so the MarketingAnalytics team gets to take advantage of the logic while passing configurations relevant for their own use cases.

If a change is needed in the `Framework` pipelines, the changes must be made in the `Framework` project. When the `Framework` project is released with the changes, `MarketingLeads` project can **(3)update** the dependency. With `Framework v0.0.2`, the `GenericCleanup` pipeline has been updated with **(4)additional gems** which can now be used with the `LeadsCleanup` configuration.

### Re-using custom gems

Configuring pipelines is just one way to take advantage of the shared, reusable components in a Package. Another (very powerful) way is to use custom gems.

![9](img/9-ph.png)

If the MarketingAnalytics team wishes to use one of the custom gems from `Framework` in a new pipeline, just **(1)drag-and-drop the gem**, e.g. DataMasking , to the pipeline canvas. **(2)Visually configure** the gem and execute the pipeline as you would for any Transformation gem.

Likewise, new Dataset Format gems from `Framework` can be used in a new pipeline.

![10](img/10-ph.png)

Select from the **(1)source/target** dropdown menu, and **(2)select** the new Dataset format card from the options. The Platform and MarketingAnalytics teams are using the industry best-practice for re-usable components.

Try this out for yourself! In the next sections, we’ll walk through how to [build](/docs/extensibility/package-hub/package-hub.md#build-a-package) and [share](#share-a-package) a package.

## Build a package

A package is simply a released project. The project can contain pipeline templates, functions, subgraph templates, custom gems, etc. The most important of these components are custom gems, so we’ll focus on building a Package with a Custom gem here.

![11](img/11-ph.png)

Start by **(1)creating** a new project called `SecurityPython`. There are no changes needed; use the default settings to **(2)Complete** project creation.

![12](img/12-ph.png)

From the Project Browser, **(1)Create a new gem.** Give the gem a **(2)name** like `Encrypt`. This will be a Transformation gem; another time try creating a different gem mode or category.

Next specify the gem’s code.

![13](img/13-ph.png)

When you create a new gem, a **(1)code guide** appears. Use the guide or replace with your **(2)custom code.** Explore the [Gem Structure](docs/extensibility/gem-builder/spark-gem-builder.md) to understand the code requirements. Then go to the **(3)Visual View** and make sure the UI appears with [no errors.](docs/extensibility/gem-builder/spark-gem-builder.md) Now the Custom gem is ready to try in the canvas.

![14](img/14-ph.png)

**(1)Click and drag** the custom gem Encrypt (in the list of gems within the SecurityPython project) to a new or existing pipeline canvas. **(2) Configure** the custom gem as with any other gem: **(3)define expressions,** check the **(4)output** column list, even **(5)infer** the schema based on the attached fabric. **(6)Save** the configured gem to start using it.

![15](img/15-ph.png)

**(1)Run** the custom gem to check whether the functionality works as expected. Click **(2)Data** to view the data input and **(3)output** preview. The `customer_id` is encrypted after our function is applied.

Click [here](docs/extensibility/gem-builder/spark-gem-builder.md) for a deep dive on building Packages with Custom gems.

Once you have tested your gem in the canvas, and you are happy with both the **Gem UI Component** and **Gem Code Logic**, you will want to release a tagged version.

![16](img/16-ph.png)

**(1) Commit** and **(2)Release** the project, including the Custom gem. Continue developing and releasing new versions as incremental improvements!

```
Note:
The release must be made from the branch specified on project creation, usually main or master.
This implementation ensures teams will review code before releasing.
```

Now we have built a package! Now other projects owned by the same team can use the package as a versioned dependency.

## Share a package

The entire project is **(1)packaged** into a jar or wheel file and uploaded to Prophecy’s artifactory. Once the Package is successfully released, it can be shared with specific teams or highlighted by publishing to the Package Hub.

![17](img/17-ph.png)

Select the **(2) Metadata** tab, then select your **(3)Project’s page**. Then select **(4)Access**, select the **(5)Teams** that should have access to the package. **(6)Send an invitation** to those teams. For the team’s best packages that are intended for broad consumption, **(7)Publish** to the Package Hub.

If another team wants to use the `SecurityPython` package in their newProject, just add `SecurityPython` as a dependency for `newProject`. Now the user can see and use the `Encrypt` custom gem.

We have built and shared our package with a custom `Encrypt` gem!

With Package Hub, Platform teams can build solutions once, and re-use the logic for additional cases. Errors can be handled just once. Updated Packages take advantage of logic updates and error-fixes. Data Analyst teams will build pipelines faster by taking advantage of the building blocks - custom gems, UDFs - provided by the Platform team. Or, Data Analyst teams might create their own building blocks! Everyone can create and share pipeline components with Package Hub. We’d love to hear how your teams are creating, sharing, and even curating Packages. [Schedule](https://www.prophecy.io/request-a-demo) some time with us - we would LOVE to hear your feedback!

## FAQ

**Q: I shared a dependency to a team, but we don’t see any email notification.**
A: The share “invitation” is not sent via email. Rather, the team would be able to add that project as a dependency to their new or existing projects.

**Q: I shared a dependency to a team, but they don’t see the package listed when they try to add as a dependency.**
A: Be sure the new project and dependent project are using the same language, like Scala or Python. If the new project is a Scala project, only Scala Packages can be added as dependencies.

**Q: How do I use subgraphs from a dependency?**
A: Like pipelines, Subgraphs can be used by dependent projects via [configurable variables.](docs/extensibility/package-hub/ShareableSubgraphs.md)

**Q: How would I take a Package built by another team and evolve it in a new direction? That is, how can two teams take a single project in two different directions?**
A: One excellent option here is to **Clone** the project instead of use as a Package Dependency. For example, let’s say the MarketingAnalytics team loved the `Framework` Package and wanted it to become a holding place for all the Marketing pipelines. The Platform team, however, wants to keep the `Framework` project as general as possible. How can the two teams each take a version of the project in their own direction?

![18](img/18-ph.png)
Just **(1)Clone** the `Framework` project, and **(2)provide** a new name, team, Git account, and repository.

Now the MarketingAnalytics team has their own project, `MarketingFramework`, to evolve in their own direction. Notice the pipelines are not templates, rather the `GenericCleanup` pipeline can be edited by adding a new gem, like Repartition:
![19](img/19-ph.png)
