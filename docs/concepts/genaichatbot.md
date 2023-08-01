---
title: Generative AI Chatbot (NEW!)
id: gen-ai-chatbot
description: Build a generative AI application that answers questions in Slack based on relevant content from the web.
sidebar_position: 9
tags:
  - concepts
  - generativeai
  - chatbot
---

## Overview

This is a guide for building a Generative AI Chatbot on Enterprise Data with Spark and Prophecy. This guide is an expanded view of [these](https://Github.com/atbida/gen-ai-chatbot-template/tree/main) succinct repository instructions. You can also see this project built in 13 minutes live during the latter half of [this](https://www.youtube.com/watch?v=1exLfT-b-GM&t=1090s) Data+AI Summit session.

TODO: unfortunately we'll have to copy paste from the git repo here

## Architecture

## Requirements

External dependencies

Cluster dependencies

Platform recommendations

## Setup

Dependencies Setup

Slack: use the slack workspace where you have permissions for the following:

1. create a slack app
2. Install the slack app to the workspace
3. create an API_TOKEN with scope [connections:write]
4. get the bot TOKEN with scopes defined in manifest
5. create a new slack channel in this workspace
6. invite your slack app to the channel

OpenAI

1. Join your company OpenAI organization or create a new subscription.
2. create an OpenAI token.

Pinecone

1. Join your company Pinecone Organization by asking your Admin for an email invite. Alternatively, create your own Pinecone subscription.
2. Open an existing Pinecone project or create a new project.
3. Create an index. We used an index with dimensions 1536, Cosine metric and s1 pod type.
4. Within the appropriate project, create a Pinecone token.

Setup Databricks secrets & schemas

1. currently supports Databricks-cli 0.17.x, install using [pip install Databricks]
2. update this file: `/Users/<username>/.Databrickscfg` with the Databricks host and personal access token (PAT)
3. expected output of [setup_Databricks.sh]

- variable definitions
- resources created, eg catalog tables, Databricks scopes, secrets

4. verify setup_Databricks.sh creates the needed resources using these commands:

```
   Databricks unity-catalog catalogs list | grep gen_ai
   Databricks unity-catalog schemas list --catalog-name gen_ai
   Databricks secrets list-scopes
   Databricks secrets list --scope slack
```

Load the Git repository

1. Login to [Prophecy](https://app.prophecy.io/metadata/auth/signup)
2. Create a new project. If you get stuck, see the quick steps [here.](https://docs.prophecy.io/concepts/project/#1-create-new-project)
3. When it’s time to enter the Project repository, you’ll need a fork of the repo: [TODO: add pictures here]
4. Add a dependency for the [spark-ai](https://Github.com/prophecy-io/spark-ai/tree/main) library following [these steps.](https://docs.prophecy.io/low-code-spark/extensibility/dependencies/#add-dependency) TODO: verify if this works ootb for this project or it needs to be a step here. TODO: add picture.
5. Connect to your Spark cluster by creating a Fabric following [these steps.](https://docs.prophecy.io/concepts/fabrics/create-a-fabric/#Databricks)
6. Explore the Prophecy Pipeline interface as in the picture below.

![Explore the low-code interface](img/genai_low_code_interface.png)

When you open any Prophecy Pipeline, you’ll see lots of features accessible. From the Environment tab, browse available datasets and tables in the linked data catalog. See a variety of Gems available out-of-the-box by clicking for example the Transformation or Join/Split headers. The visually designed Pipeline is translated to actual Spark code written in Scala, pySpark, or SQL. Just click at the top of the canvas to switch from the visual editor to the code editor. At the very bottom notice there’s a button to commit local changes to Git. Prophecy Pipelines are committed to the user’s Git repository and therefore offer the best software development practices: code review, versioning, proper releases, etc.

The “play” button runs the Pipeline and offers data previews between Gems. This interactive feature is super handy to see how each Gem manipulates the data and to identify errors along the way. The project runs entirely on Spark natively. The data is processed as [Dataframes](https://docs.Databricks.com/getting-started/dataframes-scala.html) so the logic scales for large datasets.

Now that we’ve had a brief introduction to the Prophecy Pipeline editor, let’s dig into the Pipelines specific for the Generative AI Chatbot. The Pipelines accomplish two goals: (a) ingest web documentation text data and vectorize it, and (b) a streaming inference Pipeline to read messages from Slack, lookup vectors, query a LLM to formulate answers and send them back to Slack. Notice most of the data manipulations are standard transformations to help construct a prompt for the OpenAI model (or the model of your choice).

## ETL Pipelines to build a knowledge warehouse

### First Pipeline: Web Ingest

We are ingesting unstructured data from [Prophecy Documentation](https://docs.prophecy.io/), in particular the [sitemap](https://docs.prophecy.io/sitemap.xml) which has links to all the individual web pages.

![Web Ingest Pipeline](img/genai_web_ingest_Pipeline.png)

A new Gem is introduced in this Pipeline: the TextProcessing Gem helps scrape the URL and content from the Documentation pages.

The series of data transformations culminates with nicely formatted web Documentation data saved in a Unity Catalog table to end the Web Ingest Pipeline.

Configuring the Web Ingest Pipeline:

### Second Pipeline: Web Vectorize

Continuing with the goal of ingesting and vectorizing our web content, here we have the Web Vectorize Pipeline. We want to assign each document a number sequence, or vector, to map the similarity and relationships between those documents. Here we selected OpenAI [ada-002](https://openai.com/blog/new-and-improved-embedding-model) model based on performance and cost. As some of the documents are very long, we split them into smaller chunks. Each chunk is assigned an ID and sent to OpenAI’s ada model. Run the Pipeline using the “Play” button and you can see what each Gem is doing by opening the data previews between Gems. See the returned vector (or “embedding”) for each text chunk in the data preview following the OpenAI Gem.

![Web Vectorize Pipeline](img/genai_web_vectorize_Pipeline.png)

Once the document chunks have each been assigned a vector, these “embeddings” are stored to the Unity Catalog and to a vector database. We chose Pinecone; you can choose any other vector database which enables quick lookup of content, id, and vector. The Pinecone vector db will be queried in the next Pipeline to figure out which document (chunks) are relevant for the question posed in Slack.

## Streaming Inference Pipelines to query LLMs

### Third Pipeline: Chatbot Live

Finally we get to run the most exciting Pipeline! The Chatbot_Live streaming Pipeline ingests messages from Slack and sends the question and the relevant context to OpenAI which provides an answer.

As pictured below, the Chatbot_Live Pipeline first queries OpenAI to create an embedding specifically for the question. Then, the Pinecone Lookup Gem identifies documents, based on their vectors, which could be relevant for the question. With the IDs and vectors in hand, we need to pull from the full document corpus the relevant documentation text. The Join Gem does exactly this: gets content for the relevant document IDs. Now we are well on our way to creating a wonderful prompt! The OpenAI Gem sends the question and relevant document IDs in a prompt to OpenAI, and the model returns an answer. Finally, the Pipeline writes the answer back to the Slack thread.

![Chatbot Live Pipeline](img/genai_chatbot_live.png)

Configuring the Chatbot Live Pipeline

1. Update the source [slack_chat] Gem with Databricks scope `slack` and Databricks Key `app_token` that begins with `xapp-`
1. Update the user_msgs [update name] Filter Gem with the slack app member ID
1. [show picture]
1. Update the bot_message Target Gem with Databricks scope `slack` and Databricks Key `token` for the bot user oauth token that begins with `xoxb-`
1. Run the streaming Pipeline using the big “play” button rather than the individual Gem play buttons
1. Type a question into the Slack channel and check the Pipeline to see if the question is ingested and processed. Open the data previews! (Data previews are the little blue boxes between Gems of a running Pipeline. They are handy when checking how far the Pipeline has succeeded.) Error messages are visible in the data preview samples.

And that’s it! Congratulations on running the Generative AI Chatbot with Prophecy on Spark! You may notice a Chatbot Batch Pipeline available in the Project for those who wish to explore it. We won’t go into detail on Chatbot Batch because the steps are similar to those in the Chatbot Live (streaming) Pipeline.

## Summary

Making a GenAI chatbot is largely an ETL problem which we can solve using a low-code interface. Most of the work is setting up the dependencies (Slack, OpenAI, and Pinecone - or your favorite replacements for these). We are constructing a prompt for OpenAI using a question in Slack and the documentation content scraped from the web. Once we have the prompt, OpenAI (or another model) can respond with an answer.

What kind of chatbots will you create? We’d love to hear your feedback - send us an email TODO: ADD LINKS or join our slack community. We are eager to share the Prophecy interface with as many low-code users as we can, because we think enabling more people to build their own solutions is the best way to use the latest technologies.

## Limitations

## Coming soon

Stay tuned for support for additional models beyond those provided by OpenAI! Also Prophecy will support private models and offer additional machine learning Gems out of the box. Minor improvements coming too, including support for the latest Databricks cli.

## FAQ

**Exactly which content is sent to OpenAI in the chatbot_live Pipeline?**

For this to work, you’re sending the scraped web data (here we use Prophecy documentation) to OpenAI for the vectorization Pipeline and again to answer the question. By the way, coming soon, Prophecy will support private models!
