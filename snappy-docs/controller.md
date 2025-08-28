---
title: Snappy controller
head:
  - - meta
    - name: description
      content: Snappy uses auto-routing by mapping URLs to controller files, simplifying RESTful API development with clean, maintainable PHP code.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy controller, PHP framework, routing system, automatic routing, controller mapping, RESTful API, PHP API framework, HTTP methods, no routing file, convention over configuration, API development, URL to controller mapping
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy controller
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Snappy uses auto-routing by mapping URLs to controller files, simplifying RESTful API development with clean, maintainable PHP code.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/controller.html
---

# Controller

Snappy uses a semi-auto routing system, removing the need for a separate routing file. Instead, the URL endpoint is automatically mapped to a controller based on its filename, allowing for a clear and intuitive structure. When a request is made to a given URL —for example `/products`— the framework automatically looks for a controller file named `products.php`. This means the naming of your controller files directly determines the base URL path for accessing that controller’s logic.

Within the controller, you define the behavior for different types of HTTP requests by creating public functions, keeping your endpoint logic self-contained and easy to manage. This convention-based approach simplifies routing and reduces boilerplate, making your API structure more maintainable as it grows.

::: warning :information_source: NOTE
Follow the [RESTful API resource naming principles](https://restfulapi.net/resource-naming) of being clean, clear, and simple.
:::

## Creating controller

How to create a controller:

1. Define `namespace Controller`
2. Define `use Core\Controller`
3. Create class name using PascalCase and extends your class from `Controller`
4. Save it with the same class name using PascalCase under controller directory

_Example:_

```php
// controller/YourControllerName.php

namespace Controller
use Core\Controller

class YourControllerName extends Controller{

}
```

## Methods

Snappy will execute the method inside the controller that matches the HTTP request method used in the request — such as `get()` for GET requests, `post()` for POST requests, and so on. This convention allows you to define clean and organized RESTful endpoints without the need for manual routing configuration.

:bulb: **Usage**

::: tip GET method handler

```php
public function get(): void
```

:::

::: tip POST method handler

```php
public function post(): void
```

:::

::: tip DELETE method handler

```php
public function delete(): void
```

:::

::: tip PUT method handler

```php
public function put(): void
```

:::

::: tip PATCH method handler

```php
public function patch(): void
```

:::

_Example:_

```php
// controller/YourControllerName.php

namespace Controller
use Core\Controller

class YourControllerName extends Controller{
  public function yourRequestMethod(){

  }
}
```

public `public function yourRequestMethod()` is the name of the request methods act as a function.

::: warning :information_source: NOTE
Write only the method handlers you need.
:::
