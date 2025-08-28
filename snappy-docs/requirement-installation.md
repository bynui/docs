---
title: Snappy installation
head:
  - - meta
    - name: description
      content: Snappy requirement and installation
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: snappy installation, snappy requirement, controller, model, middleware, php api framework
  - - meta
    - property: og:title
      content: Snappy installation
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Snappy requirement and installation
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/what-is-snappy.html
---

# Introduction

## Requirements

- PHP 7.0 or latest
- PDO
- Zlib Functions enabled

## Installation

1. Fork [Snappy github repo](https://github.com/bynui/snappy) to your own repo and clone it to your local machine or download as zip file and extract to your PHP web server.

2. Adjust the value of `RewriteBase` line in the .htaccess file and point to your Snappy working directory.

```
 RewriteBase /yourworkingdirectory
```

3. Do `composer install`

This repository includes example files for a controller, middleware, model, and a SQL schema to help you get started quickly.
To try it out:

- Create a new database in MySQL.
- Import the snappy.sql file included in this repo.

You're now ready to explore and build with Snappy!

## Structure

Snappy applies MVC design pattern with OOP. There is no separated router to handle the endpoint url since the endpoint name and its handler are the controller name.

```
.
├─ App
│  ├─ assets
│  ├─ config
│  ├─ core
│  │  └─ error
│  │  └─ traits
│  ├─ log
│  ├─ src
│  │  └─ controller
│  │  └─ model
│  │  └─ middleware
│  │  └─ helper
│  │  └─ view
│  └─ vendor
└─ package.json

```

| Directory        | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| `assets`         | To store your asset files                                           |
| `config`         | For configurations or middlewares list                              |
| `core`           | Contains main files that make this framework works                  |
| `core/error`     | Global error handler                                                |
| `core/traits`    | Global traits                                                       |
| `log`            | To store log file. Further details of this is explained in Log page |
| `src`            | Your main working directory                                         |
| `src/controller` | For your controllers as the handler of the router endoint           |
| `src/model`      | For your model files that contain SQL queries                       |
| `src/middleware` | For your middlewares                                                |
| `src/helper`     | For your own custom library                                         |
| `src/view`       | For your template files                                             |
| `vendor`         | For 3rd party libraries                                             |
