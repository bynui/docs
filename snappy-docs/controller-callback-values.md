---
title: Snappy callback values
head:
  - - meta
    - name: description
      content: Snappy uses $callbackValues to store and return data from route callbacks, allowing further processing or formatting before sending the API response.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy, callback values, route callback, PHP framework, API response handling, controller return value, callback data, PHP API framework, response formatting
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy callback values
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Snappy uses $callbackValues to store and return data from route callbacks, allowing further processing or formatting before sending the API response.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/controller-callback-values.html
---

# Callback values

`$callbackValues` (you may rename this to any variable name you prefer) represents the return value produced by each route callback. This value is what your controller logic generates and can be used for further processing, response formatting etc.

Callback values consist of:

| Property  | Description                               |
| --------- | ----------------------------------------- |
| `queries` | Query string that available in the url.   |
| `url`     | Details of url.                           |
| `headers` | Get http headers.                         |
| `keys`    | placeholder/named parameter of the route. |
| `data`    | data passed in request body.              |
| `records` | hold result of data fetched from model.   |

::: warning :information_source: NOTE
The default of `headers` is all headers containing "HTTP" key. You can customize what headers to get by modifying it in `config/app.php` in the header section.
:::

:bulb: **Usage**

::: tip callback values of each route & get the data

```php
"/your-route" => function($callbackValues){
  $callbackValues::getData(string $key);
}
```

**`key`**

&emsp; String as dot notation (e.g: `data.name.last`)
:::

::: tip get all callback values

```php
"/your-route" => function($callbackValues){
  $callbackValues::all();
}
```

:::

_Example:_

A route pattern `/firstname/:first/lastname/:last` with POST request & query string, its url is `yourdomain.com/examples/firstname/john/lastname/doe?status=active` and `headers` configuration in `config/app.php` is `HTTP` and the form data is:

```json
{
  "email": "johndoe@domain.com",
  "birthdate": "1990-07-09",
  "name": {
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

the details of `$callbackValues` will be:

```php
Array
  (
    [queries] => Array
        (
            [status] => active
        )
    [url] => Array
        (
            [controller] => examples
            [endpoint] => /examples/firstname/john/lastname/doe
            [base] => /
            [method] => GET
            [url] => http://yourdomain.com/examples/firstname/john/lastname/doe
            [path] => /examples/firstname/john/lastname/doe
        )
    [headers] => Array
        (
            [HTTP_CACHE_CONTROL] => no-cache
            [HTTP_HOST] => yourdomain
            [HTTP_ACCEPT_ENCODING] => gzip, deflate, br
            [HTTP_CONNECTION] => keep-alive
        )
    [keys] => Array
        (
            [first] => john
            [last] => doe
        )
    [data] => Array
        (
            [email] => johndoe@domain.com
            [birthdate] => 1990-07-09
            [name] => [
                [firstname] => John
                [lastname] => Doe
            ]
        )
    [records] => Array()
  )
```

::: warning :information_source: NOTE
Default structure of `records` value from fetched data is explained in [model](/model#methods)
:::

_Example:_

From URL above

```php
// controller/Examples.php

namespace Controller
use Core\Controller

class Examples extends Controller{
  public function post(){
    $this->map(array(
      "/firstname/:first/lastname/:last" => function( $callbackValues ) {
        // get status query string
        $callbackValues::getData("queries.status") // output: active

        // get named parameters
        $callbackValues::getData("keys.x") // output: john

        // get last name of post data
        $callbackValues::getData("data.name.last") // output: Doe
      }
    ));
  }
}
```
