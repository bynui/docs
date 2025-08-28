---
title: Snappy model
head:
  - - meta
    - name: description
      content: Snappy's Model layer handles secure database operations using PDO and prepared statements, keeping data logic clean, organized, and easy to maintain.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy, model layer, PHP framework, database operations, PDO, prepared statements, data access layer, clean architecture, SQL queries, controller model interaction
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy model
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Snappy's Model layer handles secure database operations using PDO and prepared statements, keeping data logic clean, organized, and easy to maintain.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/model.html
---

# Model

Model layer is responsible for handling database operations using **PDO** with **prepared statements**, providing a secure and consistent way to interact with your database. Each model includes a dedicated function that executes raw or parameterized SQL queries and returns the result directly to the controller. This design keeps your business logic clean by separating data access into its own layer, while also improving security and performance through the use of prepared statements. The controller simply calls the model when it needs to fetch, insert, update, or delete data—making your application logic easy to follow and maintain.

## Creating model

How to create model:

1. Define `namespace Model`
2. Define `use Core\Model`
3. Create class name using PascalCase and extends your class from `Model`
4. Save it with the same class name using PascalCase under model directory

_Example:_

```php
// model/YourClassName.php

namespace Model
use Core\Model

class YourClassName extends Model{

}
```

## Methods

Snappy’s Model class provides a streamlined entry point for executing SQL queries along with their parameters.

:bulb: **Usage**

::: tip execute sql query string

```php
$this->execute( string $sql, array $parameter = [] ): array
```

**`sql`**

&emsp; Your raw sql query

**`parameter`** (optional)

&emsp; A parameter that its structure follows PDO array named values.

:::

_Example:_

```php
$sql = "select * from table_name where id = :id";
$parameter = [":id" => "10"];
return $this->execute($sql, $parameter);
```

::: tip output structure

```php
[
  status: int $responseStatus,
  message: string $message,
  result: array $fetchedResult
]
```

:::

**Multiple parameters**

The `execute` method in Snappy is designed to accept either a single set or multiple sets of parameters. This makes it particularly useful when you need to perform the same query repeatedly with different values — such as fetching data for multiple users, filtering records by varying conditions, or processing batch queries. By reusing the prepared statement for each execution, it maintains performance and security while offering flexibility for complex, multi-parameter operations.

::: warning :information_source: NOTE
When provided with an array of parameter arrays, it loops **PARAMETER ONLY** through each set and executes the prepared SQL statement **ONE TIME** but with different parameters.
:::

_Example:_

```php
$sql = "update user_table set email = :email, status = :status where id = :id";
$params = [
    [ ":id" => 1, ":email" => "alice@example.com", ":status" => "active" ],
    [ ":id" => 2, ":email" => "bob@example.com",   ":status" => "inactive" ],
    [ ":id" => 3, ":email" => "carol@example.com", ":status" => "active" ]
];
return $this->execute($sql, $params);
```
