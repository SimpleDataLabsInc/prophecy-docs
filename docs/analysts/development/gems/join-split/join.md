---
title: Join
id: join
description: Join two or more datasets
tags:
  - gems
  - analyst
  - join
---

Use the Join gem to combine data from two or more tables based on a shared column value. This helps you link related information, such as customer details and purchase history, or user activity logs and account records.

## Input and Output

| Port    | Description                                             |
| ------- | ------------------------------------------------------- |
| **in0** | The first input table in the join.                      |
| **in1** | The second input table in the join.                     |
| **inN** | Optional: Additional input table for the join.          |
| **out** | A single table that results from the join operation(s). |

To add additional input ports, click `+` next to **Ports**.

## Parameters

To configure the Join gem, you need to define join conditions and select the columns that will appear in the output table.

### Join conditions

You can add one or more join conditions to the gem depending on the number of input tables added.

| Parameters     | Description                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| Join type      | The different join types you can choose from. These may vary by SQL provider. Learn about different join types below. |
| Join condition | The condition that matches rows between tables.                                                                       |

:::info Custom Join
If you want to use a type of join that is available in your SQL warehouse, you can type the name of that join directly in Prophecy.
:::

### Expressions

| Parameters  | Description                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expressions | Defines the output columns that will be returned by the gem. If left empty, Prophecy passes through all the input columns without any modifications. |

### Example

Assume you have two tables: _orders_ and _customers_. You want the orders table to include customer information, so you need to join the tables based on customer ID. You only want to preserve records in the output that have a match. To do so:

1. Connect **orders** to **in0** and **customers** to **in1**.
1. Choose **Inner Join** as the join type.
1. If using a visual expression, use the following join condition: **in0.CustomerID _equals_ in1.customer_id**
1. If using the code expression, use the following SQL join condition: **in0.CustomerID = in1.customer_id**
1. Leave the **Expressions** tile empty.
1. Save and run the gem.

## Join types

Suppose there are two tables, _Employees_ and _Departments_, with the following contents:

### Employees

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_ID |
| :---------- | :------------ | :------------ |
| 1           | Alice         | 10            |
| 2           | Bob           | 20            |
| 3           | Charlie       | 30            |
| 4           | David         | NULL          |
| 5           | Eve           | 20            |

### Departments

| DEPARTMENT_ID | DEPARTMENT_NAME |
| :------------ | :-------------- |
| 10            | HR              |
| 20            | Engineering     |
| 30            | Sales           |
| 40            | Marketing       |

### INNER JOIN

Inner Join will return columns from both the tables and only the matching records as long as the condition is satisfied.

For example, if the Join condition provided was `employees.department_id = departments.department_id`, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 5           | Eve           | Engineering     |
| 3           | Charlie       | Sales           |

### LEFT JOIN / LEFT OUTER JOIN

Left Join (or Left Outer join) will return columns from both the tables and match records with records from the left table. The result-set will contain null for the rows for which there is no matching row on the right side.

For example, if the Join condition provided was `employees.department_id = departments.department_id`, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.department_id;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 3           | Charlie       | Sales           |
| 4           | David         | NULL            |
| 5           | Eve           | Engineering     |

### RIGHT JOIN / RIGHT OUTER JOIN

Right Join (or Right Outer join) will return columns from both the tables and match records with records from the right table. The result-set will contain null for the rows for which there is no matching row on the left side.

For example, if the Join condition provided was `employees.department_id = departments.department_id`, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
OUTER JOIN departments d
ON e.department_id = d.department_id;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 5           | Eve           | Engineering     |
| 3           | Charlie       | Sales           |
| NULL        | NULL          | Marketing       |

### FULL JOIN / FULL OUTER JOIN

Full Outer Join will return columns from both the tables and matching records with records from the left table and records from the right table. The result-set will contain NULL values for the rows for which there is no matching.

For example, if the Join condition provided was `employees.department_id = departments.department_id`, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
FULL OUTER JOIN departments d
ON e.department_id = d.department_id;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 3           | Charlie       | Sales           |
| 4           | David         | NULL            |
| 5           | Eve           | Engineering     |
| NULL        | NULL          | Marketing       |

### CROSS JOIN

Returns the Cartesian product of two datasets. It combines all rows from both tables. Cross Join will not have any Join conditions specified.

For example, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
CROSS JOIN departments d;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 1           | Alice         | Engineering     |
| 1           | Alice         | Sales           |
| 1           | Alice         | Marketing       |
| 2           | Bob           | HR              |
| 2           | Bob           | Engineering     |
| 2           | Bob           | Sales           |
| 2           | Bob           | Marketing       |
| 3           | Charlie       | HR              |
| 3           | Charlie       | Engineering     |
| 3           | Charlie       | Sales           |
| 3           | Charlie       | Marketing       |
| 4           | David         | HR              |
| 4           | David         | Engineering     |
| 4           | David         | Sales           |
| 4           | David         | Marketing       |
| 5           | Eve           | HR              |
| 5           | Eve           | Engineering     |
| 5           | Eve           | Sales           |
| 5           | Eve           | Marketing       |

### NATURAL INNER JOIN

A natural join (or Natural Inner Join) is identical to an explicit Inner Join but it automatically joins columns with the same names in both tables. Natural Join will not have any join conditions specified.

For example, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
CROSS JOIN departments d;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 5           | Eve           | Engineering     |
| 3           | Charlie       | Sales           |

### NATURAL LEFT OUTER JOIN

A natural Left Outer join (or Natural Left Join) is identical to an explicit Left Outer Join but it automatically joins columns with the same names in both tables. Natural Left Outer Join will not have any join conditions specified.

For example, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
NATURAL LEFT OUTER JOIN departments d;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 3           | Charlie       | Sales           |
| 4           | David         | NULL            |
| 5           | Eve           | Engineering     |

### NATURAL RIGHT OUTER JOIN

A natural Left Right join (or Natural Right Join) is identical to an explicit Right Outer Join but it automatically joins columns with the same names in both tables. Natural Right Outer Join will not have any join conditions specified.

For example, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
NATURAL RIGHT OUTER JOIN departments d;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 5           | Eve           | Engineering     |
| 3           | Charlie       | Sales           |
| NULL        | NULL          | Marketing       |

### NATURAL FULL OUTER JOIN

A natural Full Outer join (or Natural Full Join) is identical to an explicit Full Outer Join but it automatically joins columns with the same names in both tables. Natural Full Outer Join will not have any join conditions specified.

For example, the sample query would be:

```
SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e
NATURAL FULL OUTER JOIN departments d;
```

| EMPLOYEE_ID | EMPLOYEE_NAME | DEPARTMENT_NAME |
| :---------- | :------------ | :-------------- |
| 1           | Alice         | HR              |
| 2           | Bob           | Engineering     |
| 3           | Charlie       | Sales           |
| 4           | David         | NULL            |
| 5           | Eve           | Engineering     |
| NULL        | NULL          | Marketing       |
