---
title: Machine Learning
id: machine-learning
slug: /engineers/machine-learning
description: Preparing and Using Data for Machine Learning
tags: [generative-ai, machine-learning, llm, pinecone, openai]
---

Each page below describes one of the set of gems that prepare or use data for Machine Learning. These gems have a required [Cluster library dependency](/engineers/machine-learning#cluster-library-dependencies). For an example set of pipelines that use these gems to create a Generative AI Chatbot, see this [guide.](/engineers/generative-ai-chatbot)

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

### Cluster library dependencies

[**Spark-AI**](https://github.com/prophecy-io/spark-ai/tree/main) - Toolbox for building Generative AI applications on top of Apache Spark. This library dependency is required for the Machine Learning gem functionality. Setup this dependency in one of two ways:

- Option a. Import a project with the spark-ai dependency preconfigured, as in this [guide.](/engineers/generative-ai-chatbot#1c-load-the-git-repository)

- Option b. Alternatively, add `prophecy-spark-ai==0.1.8` as a Python library, and `io.prophecy:spark-ai_2.12:0.1.8` as a Maven library to the pipeline [dependencies.](/docs/extensibility/dependencies/spark-dependencies.md)

Click [here](https://github.com/prophecy-io/spark-ai/tree/main#roadmap) to see the roadmap for what's coming in the future with the Spark-AI toolbox.
