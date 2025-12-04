---
title: XML
id: xml
slug: /analysts/xml
description: Read and write XML files
tags: []
---

This page describes the **XML-specific properties** that appear in the **Properties** tab of Source and Target gems. These settings are the same for XML files regardless of which connection type is configured in the gem (for example, S3, SFTP, or SharePoint).

If you need details on configuring a Source or Target gem end to end (including all tabs such as **Location**), see the documentation for the specific file storage connection:

- [Amazon S3](/analysts/s3-gem)
- [Databricks](/analysts/databricks-volumes-gem)
- [Microsoft OneDrive](/analysts/onedrive-gem)
- [SFTP](/analysts/sftp-gem)
- [SharePoint](/analysts/sharepoint-gem)

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use XML files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Properties

### Source properties

The following properties are available for the XML Source gem.

| Property                      | Description                                                    | Default |
| ----------------------------- | -------------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                      | None    |
| Row Tag                       | XML tag that identifies a single row or record in the dataset. | None    |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema.     | `0`     |

### Target properties

The following properties are available for the XML Target gem.

| Property    | Description               | Default |
| ----------- | ------------------------- | ------- |
| Description | Description of the table. | None    |

### Schema validation

Prophecy lets you enable schema validation for XML files. If you provide a schema, the **Infer Schema** button in the **Properties** tab will only run successfully if the source file schema matches the validation schema.

:::note Prerequisites

To use schema validation, you need an XSD schema file in the same directory as your source XML file. If your schema uses `xs:include` or `xs:import` to reference external schemas, those referenced schema files must also be in the same directory.

:::

Use XSD schema validation to ensure XML files conform to a predefined structure before processing.

1. In the Location tab, toggle **Enable XSD Schema Validation**.
1. Provide a path to the XSD file that you will use to validate against.
1. Open the Properties tab.
1. Click **Infer Schema**.

If the source file schema matches the validation schema, the schema will appear in the table.

If the schemas do not match, the infer schema process will fail. To troubleshoot, look for the error in the [runtime logs](/docs/analysts/development/pipelines/runtime-logs.md). Here is an example error:

```
Failed due to error in "reports_xml". Error: XML validation failed against XSD schema for file /path/to/your/file.xml: /tmp/xml_val_1234567890.xml:117: element invalidElement: Schemas validity error : Element '{http://example.com/namespace/v1.0}invalidElement': This element is not expected. Expected is one of ( {http://example.com/namespace/v1.0}validElement1, {http://example.com/namespace/v1.0}validElement2, {http://example.com/namespace/v1.0}validElement3 ).
```

The following tabs display a sample XML file and a corresponding XSD schema file that would validate successfully.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="xml" label="users.xml">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<users xmlns="http://example.com/users">
  <user>
    <id>1</id>
    <name>John Doe</name>
    <email>john.doe@example.com</email>
  </user>
</users>
```

</TabItem>
<TabItem value="xsd" label="users.xsd">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://example.com/users"
           xmlns="http://example.com/users"
           elementFormDefault="qualified">
  <xs:element name="users">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="user" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="id" type="xs:integer"/>
              <xs:element name="name" type="xs:string"/>
              <xs:element name="email" type="xs:string"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

</TabItem>
</Tabs>
