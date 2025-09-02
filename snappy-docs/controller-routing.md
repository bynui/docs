---
title: Snappy semi-auto routing
head:
  - - meta
    - name: description
      content: How Snappy handles clean and semi-auto API routing using controller-based paths, named parameters, query strings, and optional mod_rewrite support.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy, PHP routing, API routes, RESTful routing, clean URLs, mod_rewrite, named parameters, query string routing, controller mapping, PHP framework routing
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy semi-auto routing
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: How Snappy handles clean and semi-auto API routing using controller-based paths, named parameters, query strings, and optional mod_rewrite support.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/controller-routing.html
---

# Semi-auto routing

Although routing automatically maps the endpoint to your controller class name, you still need to define your route corresponding to the controller like below:

:bulb: **Usage**

::: tip Routing

```php
$this->map([
  "/yourRoute" => function( $callbackvalues ){
    // Your code logic is here
  },
])
```

:::

_Example:_

```php
// controller/YourClassName.php

namespace Controller
use Core\Controller

class YourClassName extends Controller{
  public function yourRequestMethod(){
    $this->map([
      "/" => function( $callbackValues ) {},
      "/:id" => function( $callbackValues ) {},
      "/order/:id/detail" => function( $callbackValues ) {},
      ...
    ]);
  }
}
```

## Defining route

How to define routes is similar like other common practice:

- Base route
  <br/>
  `"/"` without trailing endpoint will refer to the controller file name. The API URL will be yourdomain.com/yourclassname

- With trailing endpoint
  <br/>
  ex: `"/firstname"`. The API URL will be yourdomain.com/yourclassname/firstname

- With named parameter
  <br/>
  ex: `/:yourparametername`. The parameter name must start with `:` character followed by the parameter name. This is a placeholder for the actual value that will be inserted into the URL. Example: `/:id`, the API URL will be yourdomain.com/yourclassname/123. The id is a parameter name with value 123.

- With query string
  <br/>
  This URL doesn't need to be defined as a different/specific route. It follows any route as long as the API URL matches the specified route pattern. Snappy handles it as a regular query parameter. Examples:

  - URL yourdomain.com/yourclassname?page=2 will be executed under `/` base route.
  - URL yourdomain.com/yourclassname/123?page=2 will be executed under `/:id` named parameter route.
  - URL yourdomain.com/yourclassname/firstname?page=2 will be executed under `/firstname` route.

  Combination of routes can be defined like `/firstname/:x/lastname/:y` and the URL will be yourdomain.com/yourclassname/firstname/john/lastname/doe or the URL can be like this as well yourdomain.com/yourclassname/firstname/john/lastname/doe?page=2

::: warning :information_source: NOTE
Snappy recognizes the difference between `/:id` and `/firstname` routes.
<br/>
If `/firstname` IS DEFINED as a route then URL like yourdomain.com/yourclassname/firstname will be executed under `/firstname` route.
<br/>
If `/firstname` IS NOT DEFINED as a route then URL like yourdomain.com/yourclassname/firstname will be executed under `/:id` route and the value of parameter name `id` is firstname.
:::

## Mod_rewrite support

Snappy supports clean, readable URLs by default using Apache’s `mod_rewrite` through `.htaccess`. However, when `mod_rewrite` is not available, change the `settings["supportHtaccess"]` configuration to be `false` and Snappy gracefully falls back to a query string-based routing mode using `/?endpoint=`, while keeping controller route definitions unchanged.

::: warning :information_source: NOTE
If `supportHtaccess` is set to `false` then you **MUST** use query string style in your URL using `/?endpoint=`.

If `supportHtaccess` is set to `true` then you **MUST** use pretty URL.

Otherwise, error will be thrown.
:::

_Example:_

Route: `"/"`
<br/>

> With .htaccess enabled:
>
> - simple url: yourdomain.com/yourcontroller
> - with query string: yourdomain.com/yourcontroller?page=2

> Without .htaccess enabled:
>
> - simple url: yourdomain.com/?endpoint=yourcontroller
> - with query string: yourdomain.com/?endpoint=yourcontroller&page=2
