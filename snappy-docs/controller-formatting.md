---
title: Snappy output format
head:
  - - meta
    - name: description
      content: Snappy supports JSON, JSONP, XML, and HTML response formats, making it easy to build flexible APIs for web, frontend apps, or RESTful integrations.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy, API response formats, JSON, JSONP, XML, HTML templates, RESTful API, PHP framework, frontend API, API output types, flexible API response
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy output format
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Snappy supports JSON, JSONP, XML, and HTML response formats, making it easy to build flexible APIs for web, frontend apps, or RESTful integrations.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/controller-formatting.html
---

# Formatting

Snappy supports multiple response formats, giving you flexibility in how your API communicates with clients. By default, it can return data in JSON, JSONP, XML, or HTML formats as web page.

Whether you're building a RESTful API, feeding data to a frontend app, or generating lightweight HTML templates, Snappy handles the response formatting seamlessly—without requiring additional configuration.

## JSON/JSONP

:bulb: **Usage**

::: tip returns JSON/JSONP formatted string

```php
$this->json( array $result ): string
```

**`result`**

&emsp; An associative array/fetched data from database
:::

_Example url:_
<br/>
yourdomain.com/examples/10

_Output:_

```json
{
  "response": 200,
  "message": "OK",
  "result": [
    {
      "id": 10,
      "FirstName": "Misha",
      "LastName": "Geroldi",
      "Email": "mgeroldi9@google.co.uk",
      "Status": "INACTIVE"
    }
  ]
}
```

::: warning :information_source: NOTE
If `jsonpcallback` is defined in the url as query string then the result will return JSONP.
:::

_Example url:_
<br/>
yourdomain.com/examples/10?jsonpcallback=mycallback

_Output:_

```
mycallback({"response":200,"message":"OK","result":[{"id":10,"FirstName":"Misha","LastName":"Geroldi","Email":"mgeroldi9@google.co.uk","Status":"INACTIVE"}]})
```

## XML

:bulb: **Usage**

::: tip returns XML formatted string

```php
$this->xml( array $result ): string
```

**`result`**

&emsp; An associative array/fetched data from database

:::

_Example url:_
<br/>
yourdomain.com/examples/10

_Output:_

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <response>200</response>
    <message>OK</message>
    <result>
        <record>
            <id>10</id>
            <FirstName>Misha</FirstName>
            <LastName>Geroldi</LastName>
            <Email>mgeroldi9@google.co.uk</Email>
            <Status>INACTIVE</Status>
        </record>
    </result>
</root>
```

## HTML

:bulb: **Usage**

::: tip returns HTML formatted string

```php
$this->html( string $template, array $result = [] ): string
```

**`template`**

&emsp; A file name of your HTML template with mentioning its extension

**`result`** (optional)

&emsp; An associative array/etched data from database. Leave blank if no data is required for template

:::

::: warning :information_source: NOTE
HTML template location depends on `view` setting in environment. The default location is under `/view` directory.
:::

Snappy doesn't have special template syntax on how to handle the `$result` data, but how to parse it is the same as native PHP when sending values as POST method.

_Example url:_
<br/>
yourdomain.com/examples/10

_Output:_

```php
// controller/somecontroller.php

$data = [
  "status" => 200,
  "message" => "OK",
  "result" => [
    "FirstName" => "John",
    "LastName" => "Doe",
    "Email" => "john@doe.com",
    "Status" => "ACTIVE",
  ]
];
$this->html("web-page/view-examples.php", $data["result"]);

// view/web-page/view-examples.php

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Employee list</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <?=$_POST["FirstName"]?>
            <?=$_POST["LastName"]?>
          </td>
          <td><?=$_POST["Email"]?></td>
          <td><?=ucfirst(strtolower($_POST["Status"]))?></td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```
