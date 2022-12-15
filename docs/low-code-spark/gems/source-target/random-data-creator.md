---
title: Random Data Generator
id: random-data-creator
description: Random Data Generator
sidebar_position: 4
tags:
- gems
- data
- random data
---
# Introduction

Our Random Data Creator Gem is a Source Gem which can Generate random data to quickly do POCs in case data isn't ready.    
This Gem takes two things as Input:
- Number of Rows to Generate
- Data Configuration

//TODO: Insert Screenshot.

## Data Configuration: What is possible?
An Example Configuration for Random Data Creator is the following:
```json
{
  "numeric":["num_col1", "num_col2", "num_col3", "num_col4", "num_col5", "num_col6"], 
  "numeric_normal":32, 
  "string(256)":20,
  "boolean":5,
  "date":10,
  "datetime":10,"id":10,
  "randInt(30, 70)":2,
  "json":[{
    "numeric":4,
    "json":[{
      "string(256)":2,
      "numeric":3
    }],
    "string(500)":2
  },
  {
    "numeric":4,
    "json":[{
      "numeric":3,
      "json":[{
          "string(250)":2
        },
        {
          "numeric":2
        }
      ]
    }],
    "string(500)":2
  }]
}
```

Here, data would be created with the following characteristics:
1. 6 Numeric columns having a uniform distribution would be created with names `num_col11`, `num_col2` etc. : These are `DoubleType` columns, with data lying between 0 and 10000000
2. 32 Numeric columns having a normal distribution would be created. These would have names like `numeric_normal_1`, `numeric_normal_2` etc.
3. 20 String Columns would be created having a length of `256` characters (see `string(256)`)  
4. 5 Boolean columns would be created
5. 10 date and 10 datetime columns would be created respectively
6. 10 ID columns would be created which are nothing but `string(20)` columns at some level.
7. 2 Random Integer Columns would be created, whose value lies between 30-70. Note that for creating Join Keys, we would recommend using `randInt(start, end)` columns
8. 2 JSON Columns would be created:
   1. The first contains 2 fields of `string(500)` and 4 `numeric` fields. This also contains a nested JSON which itself contains 2 `string(256)` and 3 `numeric` fields.
   2. The second contains 4 `numeric` fields, 2 `string(500)` columns. It also contains two nested JSONs inside: 
      1. The first JSON contains 3 `numeric` columns and an inner `json` column which contains two `string(250)` fields.
      2. The second JSON contains 2 `numeric` columns

