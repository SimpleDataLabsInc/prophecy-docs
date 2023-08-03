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

This guide showcases how easy it is to build a live chatbot application using your internal datasets on Spark. Here is a summary of the steps you'll take to setup and explore the Generative AI Chatbot Pipelines:

**Step 1. Setup.** Configure the dependencies, define credentials, and load the Pipelines from a Git repository.

**Step 2. Run ETL Pipelines to build a Knowledge Warehouse.**
A set of Spark Pipelines to
[(a)ingest](/docs/concepts/genaichatbot.md#2a-web-ingest-pipeline) unstructured data from your applications, pre-process, and
[(b)vectorize](/docs/concepts/genaichatbot.md#2b-web-vectorize-pipeline) and store the data within your vector database of choice.

**Step 3. Run Live Inference Pipeline.** A Spark streaming [Chatbot](/docs/concepts/genaichatbot.md#step-3-live-inference) Pipeline reads messages from Slack (soon also Teams) and answers them live using gathered knowledge

![Architecture Diagram](img/genai_architecture.png)

After setup, just explore and run the Pipelines in Steps 2 and 3. You'll have a live chatbot where you can pose questions in Slack and recieve answers from a Generative AI model. This template works best with [Databricks](https://Databricks.com/) and [Prophecy](https://www.prophecy.io/). However, you can run it on any Spark. Spark allows us to easily scale and operationalize our chatbot to big datasets and large user bases, and Prophecy allows for easy development and debugging of the Pipelines.

![gen-ai-chatbot-template-streaming](img/genai_intro_video.gif)

This guide is an expanded view of [these](https://Github.com/atbida/gen-ai-chatbot-template/tree/main) succinct instructions and [this](https://www.youtube.com/watch?v=1exLfT-b-GM&t=1090s) Data+AI Summit session.

## Requirements

### External dependencies

Optional, but recommended for best results:

1. [**Pinecone**](https://www.pinecone.io/) - allows for efficient storage and retrieval of vectors. To simplify, it's possible to use Spark-ML cosine similarity alternatively; however, since that doesn't feature KNNs for more efficient lookup, it's only recommended for small datasets.
2. [**OpenAI**](https://openai.com/) - for creating text embeddings and formulating questions. Alternatively, one can use Spark's [word2vec](https://spark.apache.org/docs/2.2.0/mllib-feature-extraction.html#word2vec) for word embeddings and an [alternative LLM (e.g., Dolly)](https://github.com/prophecy-io/spark-ai/tree/main) for answer formulation based on context.
3. [**Slack**](https://slack.com/) or [**Teams**](https://teams.com/) (support coming soon) - for the chatbot interface. An example batch Pipeline is present for fast debugging when unavailable.

### Cluster dependencies

Required:

1. [**Spark-AI**](https://github.com/prophecy-io/spark-ai/tree/main) - Toolbox for building Generative AI applications on top of Apache Spark.

### Platform recommendations

Below is a platform recommendation. The template is entirely code-based and also runs on open-source projects like Spark.

1. [**Prophecy Low-Code**](https://www.prophecy.io/) (version 3.1 and above) - for building the data Pipelines. A free account is available.
2. [**Databricks**](https://Databricks.com/) (DBR 12.2 ML and above) - for running the data Pipelines. A free community edition is available, or Prophecy provides Databricks' free trial.

## Step 1: Setup

### 1a. Dependencies

Ensure that the above dependencies are satisfied. Create appropriate accounts on the services you want to use above. After that, save the generated tokens within the `.env` file (you can base it on the `sample.env` file).

1. **Slack** - [quick video here](https://www.loom.com/share/2d7afeacd92e44809ab29b43665329dd?sid=c4e08d9d-bf86-4a6f-9e9d-fce9d7a12578)

   1. Use the slack workspace where you have permissions on the following steps.
   2. [Setup Slack application](https://api.slack.com/reference/manifests#creating_apps) using the manifest file in [apps/slack/manifest.yml](https://github.com/prophecy-samples/gen-ai-chatbot-template/blob/main/apps/slack/manifest.yaml).
   3. Install the Slack app to the workspace.
   4. Create an App-Level Token with `connections:write` permission. This token is going to be used for receiving messages from Slack. Save it as `SLACK_APP_TOKEN`.
   5. Find the Bot User OAuth Token. The permissions (or scopes, in Slack terminology) are defined in the [manifest](https://github.com/prophecy-samples/gen-ai-chatbot-template/blob/main/apps/slack/manifest.yaml) file. This token is going to be used for sending messages to Slack. Save it as `SLACK_TOKEN`
   6. Create a new Slack channel in this Slack workspace.
   7. Invite your Slack app to the channel.<br></br>

2. **OpenAI**

   1. Join your company's OpenAI Organization by asking your Admin for an email invite.
   2. Alternatively, create an account [here](https://platform.openai.com/signup).
   3. Generate an OpenAI api key. Save it as `OPEN_AI_API_KEY`.

3. **Pinecone**
   1. Join your company's Pinecone Organization by asking your Admin for an email invite.
   2. Alternatively, create an account [here](https://app.pinecone.io).
   3. Open an existing Pinecone Project or create a new one.
   4. Create an index. We used an index with dimensions 1536, Cosine metric, and s1 pod type.
   5. Within the appropriate Pinecone Project, generate a Pinecone api key. Save it as `PINECONE_TOKEN`.

### 1b. Databricks Secrets and Schemas

1.  Ensure that your `.env` file contains all the above secrets. Use the sample.env as an example, and `source` your `.env` file.
2.  Install the `Databricks-cli` using `pip install Databricks`. Currently version 0.17.x is supported.
3.  Update this file: `/Users/<username>/.Databrickscfg` with the Databricks host and personal access token (PAT).
4.  Run `setup_Databricks.sh` to create the required secrets and schemas.
5.  Expected output of [setup_Databricks.sh]

    - variable definitions
    - resources created, eg catalog tables, Databricks scopes, secrets

6.  Verify `setup_Databricks.sh` creates the needed resources using these commands:

```
   Databricks unity-catalog catalogs list | grep gen_ai
   Databricks unity-catalog schemas list --catalog-name gen_ai
   Databricks secrets list-scopes
   Databricks secrets list --scope slack
```

### 1c. Load the Git repository

1.  Fork the [gen-ai-chatbot-template](https://github.com/prophecy-samples/gen-ai-chatbot-template) repository.
2.  Login to [Prophecy](https://app.prophecy.io/metadata/auth/signup)
3.  Create a new Prophecy Project.
4.  Load the forked Git repository to the Prophecy Project as shown in this 30 sec [video.](https://github.com/prophecy-samples/gen-ai-chatbot-template/assets/3248329/dcdfabaf-4870-421d-9f92-4ab028c5db5a)
5.  Add a dependency for the [spark-ai](https://Github.com/prophecy-io/spark-ai/tree/main) library following [these steps.](https://docs.prophecy.io/low-code-spark/extensibility/dependencies/#add-dependency) TODO: verify if this works ootb for this project or it needs to be a step here. TODO: add picture.
6.  Connect to your Spark cluster by creating a Fabric following [these steps.](https://docs.prophecy.io/concepts/fabrics/create-a-fabric/#Databricks)

### 1d. Setup Databases

This project runs on Databrick's Unity Catalog by default. However, you can also reconfigure Source & Target gems to use alternative sources.

For Databricks Unity Catalog, the `setup_Databricks.sh` script has already created the following catalog: `gen_ai` and the following databases: `web_bronze` and `web_silver`. The tables are going to be created automatically on the first boot-up.

### 1e. Explore the Low-Code Interface

![Explore the low-code interface](img/genai_low_code_interface.png)

When you open any Prophecy Pipeline, you’ll see lots of features accessible. From the Environment tab, browse available datasets and tables in the linked data catalog. See a variety of Gems available out-of-the-box by clicking for example the Transformation or Join/Split headers. The visually designed Pipeline is translated to actual Spark code written in Scala, pySpark, or SQL. Just click at the top of the canvas to switch from the visual editor to the code editor. At the very bottom notice there’s a button to commit local changes to Git. Prophecy Pipelines are committed to the user’s Git repository and therefore offer the best software development practices: code review, versioning, proper releases, etc.

The “play” button runs the Pipeline and offers data previews between Gems. This interactive feature is super handy to see how each Gem manipulates the data and to identify errors along the way. The project runs entirely on Spark natively. The data is processed as [Dataframes](https://docs.Databricks.com/getting-started/dataframes-scala.html) so the logic scales for large datasets.

Now that we’ve had a brief introduction to the Prophecy Pipeline editor, let’s dig into the Pipelines specific for the Generative AI Chatbot. The Pipelines accomplish two goals: (a) ingest web documentation text data and vectorize it, and (b) a streaming inference Pipeline to read messages from Slack, lookup vectors, query a LLM to formulate answers and send them back to Slack. Notice most of the data manipulations are standard transformations to help construct a prompt for the OpenAI model (or the model of your choice).

## Step 2: ETL to build a Knowledge Warehouse

### 2a. Web Ingest Pipeline

We are ingesting unstructured data from [Prophecy Documentation](https://docs.prophecy.io/), in particular the [sitemap](https://docs.prophecy.io/sitemap.xml) which has links to all the individual web pages.

![Web Ingest Pipeline](img/genai_web_ingest.png)

A new Gem is introduced in this Pipeline: the TextProcessing Gem helps scrape the URL and content from the Documentation pages.

The series of data transformations culminates with nicely formatted web Documentation data saved in a Unity Catalog table to end the Web Ingest Pipeline.

### 2b. Web Vectorize Pipeline

Continuing with the goal of ingesting and vectorizing our web content, here we have the Web Vectorize Pipeline. We want to assign each document a number sequence, or vector, to map the similarity and relationships between those documents. Here we selected OpenAI [ada-002](https://openai.com/blog/new-and-improved-embedding-model) model based on performance and cost. As some of the documents are very long, we split them into smaller chunks. Each chunk is sent to OpenAI’s ada model. Run the Pipeline using the “Play” button and data preview buttons appear between Gems. Open the data preview following the OpenAI Gem and see the schema now includes a vector (or “embedding”) provided by the OpenAI model for each text chunk.

![Web Vectorize Pipeline](img/genai_web_vectorize.png)

Once the document chunks have each been assigned a vector, these “embeddings” are stored to the Unity Catalog and to a vector database. We chose Pinecone, and you can choose any other vector database to store the vector embedding and the corresponding ID. The Pinecone database will be queried in the next Pipeline.

#### 2b.i Configuring the Web Vectorize Pipeline

1. Verify the Vectorize OpenAI Gem is configured with Databricks scope `open_ai` and Databricks key `api_key`.
2. Verify the vector_db Target Gem is configured with the Databricks scope `pinecone` and Databricks key `token`.

## Step 3: Live Inference

### 3a. Chatbot Live Pipeline

Finally we get to run the most exciting Pipeline! The Chatbot_Live streaming Pipeline ingests messages from Slack and sends the question and the relevant context to OpenAI which provides an answer.

After ingesting the Slack question message and doing some transformation steps, the Chatbot_Live Pipeline queries OpenAI to create an embedding specifically for the question. Then, the Pinecone Lookup Gem identifies documents, based on their vectors, which could be relevant for the question. With the IDs and vectors in hand, we need to pull from the full document corpus the relevant documentation text. The Join Gem does exactly this: gets content for the relevant document IDs. Now we are well on our way to creating a wonderful prompt! The OpenAI Gem sends the relevant content chunks and the Slack question in a prompt to OpenAI, and the model returns an answer. Finally, the Pipeline writes the answer back to the Slack thread.

![Chatbot Live Pipeline](img/genai_chatbot_live.png)

#### 3a.1 Configuring the Chatbot Live Pipeline

1. Verify the source [slack_chat] Gem is configured with Databricks scope `slack` and Databricks Key `app_token`. While this token begins with `xapp-`, be sure not to use the plaintext value, as using the Databricks secret is a much more secure approach.
2. Update the only_user_msgs Filter Gem with the slack app member ID
   [show picture]
3. Verify the bot_message Target Gem is configured with Databricks scope `slack` and Databricks Key `token`. While this bot user oauth token begins with `xoxb-`, be sure not to enter the plaintext value.
4. Run the streaming Pipeline using the big “play” button rather than the individual Gem play buttons
5. Type a question into the Slack channel and check the Pipeline to see if the question is ingested and processed. Open the data previews! (Data previews are the little blue boxes between Gems of a running Pipeline. They are handy when checking how far the Pipeline has succeeded.) Error messages are visible in the data preview samples.
6. Ask lots of questions!

And that’s it! Congratulations on running the Generative AI Chatbot with Prophecy on Spark! You can check out the end result on the [video here](https://www.loom.com/share/a89ee52de80e41abb9b5647c1da73e18?sid=6fcf0298-79e8-412b-8e48-f58c9d6d7f3b) and a longer version [here](https://www.youtube.com/watch?v=1exLfT-b-GM&t=1090s). Don't forget, all of these visually developed Pipelines are converted to Spark code behind the scenes. Toggle to the code editor to see the code. This code is available in your forked GitHub repository when you commit, merge, and release your changes via the Prophecy UI. Now your Spark project can be run on any Spark cluster via the Prophecy interface or using your favorite build and deploy toolset. You may notice a Chatbot Batch Pipeline available in the Project for those who wish to explore it. We won’t go into detail on Chatbot Batch because the steps are similar to those in the Chatbot Live (streaming) Pipeline.

## Summary

Making a GenAI chatbot is largely an ETL problem which we can solve using a low-code interface. Most of the work is setting up the dependencies (Slack, OpenAI, and Pinecone - or your favorite replacements for these). The ETL Pipelines ingest and vectorize the web content. Then the Chatbot Pipeline constructs a prompt for OpenAI using a question in Slack and the documentation content scraped from the web. Once we have the prompt, OpenAI (or another model) can respond with an answer.

What kind of Generative AI applications will you create? We’d love to hear your feedback - send us an email TODO: ADD LINKS or join our slack community. We are eager to share the Prophecy interface with as many low-code users as we can, because we think enabling more people to build their own solutions is the best way to use the latest technologies.

## FAQ

**What features will be coming soon?**

Stay tuned for support for additional models beyond those provided by OpenAI! Also Prophecy will support private models and offer additional machine learning Gems out of the box. Minor improvements coming too, including support for the latest Databricks cli and [**Teams**](https://teams.com/) message ingestion.

**Exactly which content is sent to OpenAI in the Chatbot Live Pipeline?**

For this to work, you’re sending the scraped web data (here we use Prophecy documentation) to OpenAI for the vectorization Pipeline and again to answer the question. By the way, coming soon, Prophecy will support private models!
