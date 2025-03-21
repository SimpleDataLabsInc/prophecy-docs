---
title: Flatten Schema
id: flattenschema
description: Flatten nested data
tags:
  - gems
  - schema
  - explode
  - flatten
---

<h3><span class="badge">SQL Gem</span></h3>

The FlattenScema gem helps you flatten complex data types, such as `Struct` and `Array`, to preserve all schemas when you process raw data.

You can use the FlattenSchema gem on sources that have nested columns that you'd like to extract into a flat schema.

## Example

Assume you have [variant schema](docs/SQL/visual-expression-builder/variant-schema.md) in the following format, and you want to extract the `contact` field:

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```json
{
  "first_name": "Remmington",
  "last_name": "Smith",
  "age": "68",
  "business": [
    {
      "address": [
        {
          "manager": "Liara Andrew",
          "name": "RS Enterprises",
          "contact": [
            {
              "content": "rsmith@example.com",
              "type": "email"
            },
            {
              "content": "1234-345-56",
              "type": "phone"
            }
          ],
          "is_still_active": true
        }
      ]
    }
  ]
}
```
````

### Expressions

The FlattenSchema gem allows you to extract nested fields into a flattened schema.

For example, to extract the `contact` field:

1. In the **Input** tab, navigate to the `contact` field.
1. Hover over the `contact` field and click the **Add Column** button.

   Now, the `contact` field is in the `Expressions` section.

   :::tip
   You can click to add all columns, which would make all nested lowest-level values of an object visible as columns.
   :::

   ![Adding expressions](./img/flatten_add_exp.png)

1. (Optional) To change the name of the column in the output, change the value in the `Output Column` for the `contact` row.

1. Click **Run**.

### Output

After you run the FlattenSchema gem, click the **Data** button to see your schema based on the selected columns:

![Output interim](./img/flatten_output_interim.png)

The FlattenSchema gem flattened the `contact` field, which gives you individual rows for each `content` type.
