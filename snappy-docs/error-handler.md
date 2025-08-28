---
title: Snappy error handler
head:
  - - meta
    - name: description
      content: Snappy custom error handler centralized error management with clean logs and flexible output in JSON, XML, or HTML making debugging easier and applications more reliable.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy, error handler, error handling format in JSON, error handling format in XML, error handling format in HTML.
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy error handler
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Snappy custom error handler centralized error management with clean logs and flexible output in JSON, XML, or HTML making debugging easier and applications more reliable.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/middleware.html
---

# Error Handler

Snappy has error handler that centralizes error management and streamlines debugging. It supports flexible output formats — JSON, XML, and HTML — making it ideal for both APIs and web applications.

Settings related to error handling are: `errorformat`, `showerror`, `logerror` and is explained in [this page](/configuration)

## Error catching

:bulb: **Usage**

::: tip catch error

```php
throw new \Core\Error\ErrorWrapper(Throwable | string $input, int $code = 0): void;
```

**`input`**

&emsp; String message or Throwable object

**`code`** (optional)

&emsp; HTTP response status code
:::

_Examples:_

```php
// with try-catch
try{
  // your logic here
}catch(\Throwable $e){
    throw new \Core\Error\ErrorWrapper($e);
}

// without try-catch
undefinedFunction(); // call an undefined function or anything that cause error
throw new \Core\Error\ErrorWrapper("Error undefined function", 404);
```

::: warning :information_source: NOTE
If the error code doesn't represent HTTP error response then Error Handler will produce error 500
:::
