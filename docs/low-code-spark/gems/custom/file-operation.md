---
sidebar_position: 3
title: File Operation
id: file-operations
description: Perform file operations on different file systems
tags:
  - file
  - dbfs
---

Helps perform file operations like `copy` and `move` on different file systems

## Parameters

| Parameter          | Description                                                                                                                                                | Required |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| File System        | `Local` - for operations on driver node file system <br/> `DBFS` - for operations on Databricks file system <br/> `S3` - for operations on S3 object store | True     |
| Operation          | Operation to perform, `Copy`, `Move` or `Sync`                                                                                                             | True     |
| Filename Regex     | File name Regex Eg: stdlog.\*\.txt                                                                                                                         | False    |
| Ignore empty files | Ignore if file size is empty                                                                                                                               | False    |
| Recurse            | Boolean for performing `Operation` recursively. Default is `False`                                                                                         | False    |
| Source Path        | Path of source file/directory. <br/>Eg: /dbfs/source_file.txt, dbfs:/source_file.txt, s3://source_bucket/source_prefix/filename.txt                        | True     |
| Destination Path   | Path of destination file/directory. <br/> Eg: /dbfs/target_file.txt, dbfs:/target_file.txt, s3://target_bucket/target_prefix/filename.txt                  | True     |

:::info
You can perform operations on DBFS files using `Local` file system too by providing path under `/dbfs`!<br/> This is because Databricks uses a FUSE mount to provide local access to the files stored in the cloud. A FUSE mount is a secure, virtual filesystem.
:::

## Examples

---

### Copy Single File

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/6db06ea9-27ef-4833-a837-a49adf3ff2c6" title="File Copy single file" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="DBFS">

```py
def copy_file(spark: SparkSession):
    from pyspark.dbutils import DBUtils
    DBUtils(spark).fs.cp(
        "dbfs:/Prophecy/example/source/person.json",
        "dbfs:/Prophecy/example/target/person.json",
        recurse = False
    )
```

</TabItem>
<TabItem value="py2" label="Local">

```py
def copy_file(spark: SparkSession):
    import os
    import shutil
    shutil.copy2("/dbfs/Prophecy/example/source/person.json",
                 "/dbfs/Prophecy/example/target/person.json")
```

</TabItem>
<TabItem value="py3" label="S3">

```py
def copy_file(spark: SparkSession):
    import boto3
    import re
    from urllib.parse import urlparse
    dest_files = {}
    mode = "copy"
    fileRegex = None
    ignoreEmptyFiles = False
    src_url = urlparse("s3://Prophecy/example/source/person.json")
    dest_url = urlparse("s3://Prophecy/example/target/person.json")
    src_bucket = src_url.netloc
    src_prefix = src_url.path.lstrip('/')
    dest_bucket = dest_url.netloc
    dest_prefix = dest_url.path.lstrip('/')
    s3 = boto3.client("s3")

    for obj in boto3.client("s3").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:
        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)

        if (
            (
              mode in ["copy", "move"]
              and not obj['Key'].endswith("/")
            )
            or (
              not obj['Key'].endswith("/")
              and mode == "sync"
              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files
            )
        ):

            if (
                (
                  bool(ignoreEmptyFiles) == True
                  and (
                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']
                    == 0
                  )
                )
                or (
                  bool(fileRegex)
                  and fileRegex != ""
                  and not bool(
                    re.compile(fileRegex).match(obj['Key'].split('/')[- 1])
                  )
                )
            ):
                continue

            s3.copy(
                {'Bucket' : src_bucket, 'Key' : obj['Key']},
                dest_bucket,
                re.sub(src_prefix, dest_prefix, obj['Key'], 1)
            )

            if props.operation == "move":
                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])

```
</TabItem>
</Tabs>

````

---

### Copy All Files From A Directory

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/107a8195-e76a-48ab-900f-28e07b7798ed" title="File Copy a directory" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

````mdx-code-block
<Tabs>

<TabItem value="py" label="DBFS">

```py
def copy_file(spark: SparkSession):
    from pyspark.dbutils import DBUtils
    DBUtils(spark).fs.cp(
        "dbfs:/Prophecy/example/source/",
        "dbfs:/Prophecy/example/target/",
        recurse = True
    )
```

</TabItem>
<TabItem value="py2" label="Local">

```py
def copy_file(spark: SparkSession):
    import os
    import shutil
    shutil.copytree(
        "/dbfs/Prophecy/example/source/",
        "/dbfs/Prophecy/example/target/",
        copy_function = shutil.copy2,
        dirs_exist_ok = True
    )
```

</TabItem>
<TabItem value="py3" label="S3">

```py
def copy_file(spark: SparkSession):
    import boto3
    import re
    from urllib.parse import urlparse
    dest_files = {}
    mode = "copy"
    fileRegex = None
    ignoreEmptyFiles = False
    src_url = urlparse("s3://Prophecy/example/source/person.json")
    dest_url = urlparse("s3://Prophecy/example/target/person.json")
    src_bucket = src_url.netloc
    src_prefix = src_url.path.lstrip('/')
    dest_bucket = dest_url.netloc
    dest_prefix = dest_url.path.lstrip('/')
    s3 = boto3.client("s3")

    for obj in boto3.client("s3").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:
        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)

        if (
            (
              mode in ["copy", "move"]
              and not obj['Key'].endswith("/")
            )
            or (
              not obj['Key'].endswith("/")
              and mode == "sync"
              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files
            )
        ):

            if (
                (
                  bool(ignoreEmptyFiles) == True
                  and (
                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']
                    == 0
                  )
                )
                or (
                  bool(fileRegex)
                  and fileRegex != ""
                  and not bool(
                    re.compile(fileRegex).match(obj['Key'].split('/')[- 1])
                  )
                )
            ):
                continue

            s3.copy(
                {'Bucket' : src_bucket, 'Key' : obj['Key']},
                dest_bucket,
                re.sub(src_prefix, dest_prefix, obj['Key'], 1)
            )

            if props.operation == "move":
                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])

```

</TabItem>
</Tabs>

````

---

### Move Files

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/6bbd4a4e-2b6a-4cf6-bb07-0712f6720650" title="Move File" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

````mdx-code-block

<Tabs>

<TabItem value="py" label="DBFS">

```py
def move_file(spark: SparkSession):
    from pyspark.dbutils import DBUtils
    DBUtils(spark).fs.mv("dbfs:/Prophecy/example/source/", "dbfs:/Prophecy/example/target/", recurse = False)

```

</TabItem>
<TabItem value="py2" label="Local">

```py
def move_file(spark: SparkSession):
    import os
    import shutil
    shutil.copy2("/Prophecy/example/source/", "/Prophecy/example/target/")
    shutil.rmtree("/Prophecy/example/source/")
```

</TabItem>
<TabItem value="py3" label="S3">

```py
def move_file(spark: SparkSession):
    import boto3
    import re
    from urllib.parse import urlparse
    dest_files = {}
    mode = "move"
    fileRegex = ""
    ignoreEmptyFiles = False
    src_url = urlparse("s3://Prophecy/example/source/")
    dest_url = urlparse("s3://Prophecy/example/target/")
    src_bucket = src_url.netloc
    src_prefix = src_url.path.lstrip('/')
    dest_bucket = dest_url.netloc
    dest_prefix = dest_url.path.lstrip('/')
    s3 = boto3.client("s3")

    for obj in boto3.client("s3").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:
        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)

        if (
            (
              mode in ["copy", "move"]
              and not obj['Key'].endswith("/")
            )
            or (
              not obj['Key'].endswith("/")
              and mode == "sync"
              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files
            )
        ):

            if (
                (
                  bool(ignoreEmptyFiles) == True
                  and (
                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']
                    == 0
                  )
                )
                or (
                  bool(fileRegex)
                  and fileRegex != ""
                  and not bool(re.compile(fileRegex).match(obj['Key'].split('/')[- 1]))
                )
            ):
                continue

            s3.copy(
                {'Bucket' : src_bucket, 'Key' : obj['Key']},
                dest_bucket,
                re.sub(src_prefix, dest_prefix, obj['Key'], 1)
            )

            if mode == "move":
                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])


```
</TabItem>
</Tabs>

````

---

### S3 - Sync Entire Directory

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/2e579779-3d61-476d-9f04-38f687c96ebf" title="S3 File Sync" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

````mdx-code-block
<Tabs>

<TabItem value="py" label="S3">

```python
def sync_file(spark: SparkSession):
    import boto3
    import re
    from urllib.parse import urlparse
    mode = "sync"
    fileRegex = ""
    ignoreEmptyFiles = False
    src_url = urlparse("s3://Prophecy/example/source/")
    dest_url = urlparse("s3://Prophecy/example/target/")
    src_bucket = src_url.netloc
    src_prefix = src_url.path.lstrip('/')
    dest_bucket = dest_url.netloc
    dest_prefix = dest_url.path.lstrip('/')
    s3 = boto3.client("s3")
    dest_files = set(
        [
          f_object['Key'].lstrip('/')
          for f_object in boto3.client("s3").list_objects_v2(Bucket = dest_bucket, Prefix = dest_url.path.lstrip('/'))['Contents']
          if not f_object['Key'].endswith("/")
        ]
    )

    for obj in boto3.client("s3").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:
        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)

        if (
            (
              mode in ["copy", "move"]
              and not obj['Key'].endswith("/")
            )
            or (
              not obj['Key'].endswith("/")
              and mode == "sync"
              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files
            )
        ):

            if (
                (
                  bool(ignoreEmptyFiles) == True
                  and (
                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']
                    == 0
                  )
                )
                or (
                  bool(fileRegex)
                  and fileRegex != ""
                  and not bool(re.compile(fileRegex).match(obj['Key'].split('/')[- 1]))
                )
            ):
                continue

            s3.copy(
                {'Bucket' : src_bucket, 'Key' : obj['Key']},
                dest_bucket,
                re.sub(src_prefix, dest_prefix, obj['Key'], 1)
            )

            if mode == "move":
                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])

```

</TabItem>
</Tabs>

````

---
