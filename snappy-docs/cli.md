---
title: CLI
head:
  - - meta
    - name: description
      content: Learn Snappy CLI generate commands to scaffold controllers, models, and middleware, including with-model and with-middleware flags.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy CLI, PHP CLI generator, generate controller, generate model, generate middleware, Snappy framework
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy CLI
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Learn Snappy CLI generate commands to scaffold controllers, models, and middleware, including with-model and with-middleware flags.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/cli.html
---

# CLI

Snappy has CLI feature to create cotroller, model or middlerware automatically to ease and standarized all the files

## Generate Controller, Model, and Middleware

Use the `generate` command to programmatically scaffold framework components with consistent structure.

### 1. Basic commands

Create a controller:

```bash
php snappy generate controller:ControllerName
```

Create a model:

```bash
php snappy generate model:ModelName
```

Create a middleware:

```bash
php snappy generate middleware:MiddlewareName
```

### 2. Create controller with model (same name)

This creates a controller and a model with the same base name as `ControllerName`.

```bash
php snappy generate controller:ControllerName --with-model
```

### 3. Create controller with model (different name)

This creates a controller named `ControllerName` and a model named `OtherModelName`.

```bash
php snappy generate controller:ControllerName --with-model:OtherModelName
```

### 4. Create controller with model and middleware (same name)

This creates:

- Controller: `ControllerName`
- Model: `ControllerName`
- Middleware: `ControllerName`

```bash
php snappy generate controller:ControllerName --with-model --with-middleware
```

::: warning :information_source: NOTE
`--with-middleware` always generates middleware using the same name as `ControllerName`.

If you need a different middleware name, create it separately using:

```bash
php snappy generate middleware:MiddlewareName
```

:::
