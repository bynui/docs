---
title: Snappy configuration
head:
  - - meta
    - name: description
      content: Configure Snappy using global, custom, and environment-specific settings
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: snappy configuration, php framework, light php framework, api generator, php api generator, OOP framework, xml generator, json generator, jsonp generator, html generator
  - - meta
    - name: author
      content: Shindu Samodra
  - - meta
    - property: article:author
      content: Shindu Samodra
  - - meta
    - property: og:title
      content: Snappy configuration
  - - meta
    - property: og:site_name
      content: "Snappy: straight-forward framework"
  - - meta
    - property: og:type
      content: Documentation website
  - - meta
    - property: og:description
      content: Configure Snappy using global, custom, and environment-specific settings
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/configuration.html
---

# Manual

## Configuration

Default configurations are categorized as:

- app configuration
- env-based configuration
- custom configuration

  Those files are located under `config/`.

:bulb: **Usage**

::: tip Get configuration value from config file name

```php
Config::getConfig(string $key, string $configname = "environment"): mixed
```

**`key`**

&emsp; A dot notation (e.g: `data.name.last`)

**`configname`** (optional)

&emsp; Your configuration file name without extension

:::

::: tip Check a configuration key if has value from config file name

```php
Config::hasConfig(string $key, string $configname = "environment"): bool
```

**`key`**

&emsp; A dot notation (e.g: `data.name.last`)

**`configname`** (optional)

&emsp; Your configuration file name without extension

:::

::: tip Get all configurations from config file name

```php
Config::allConfig(string $configname = "environment"): mixed
```

**`configname`** (optional)

&emsp; Your configuration file name without extension
:::

::: warning :information_source: NOTE
`configname` default value is "environment". If you don't supply `configname` parameter, it gets environment-based configuration and will give result following the environment already defined in `env` (for example: development or staging or production)
:::

## App configuration

It's located in `config/app.php`. You can add, change the configuration or create your own config file for your need

| Config             | Type    | Description                                                                                                                                                                                                                            |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lctime`           | String  | Local region information.                                                                                                                                                                                                              |
| `timezone`         | String  | Your app time zone. List can be seen [here](https://www.php.net/manual/en/timezones.php).                                                                                                                                              |
| `supportHtaccess`  | Boolean | htaccess support in your server. Setting true or false whether your server doesn't support htaccess or you don't use htaccess. <br/> `mod_rewrite` support is explained in [Routing](/controller-routing.md#mod-rewrite-support) page. |
| `connectionheader` | String  | Controls whether the network connection stays open after the current transaction finishes.<br/>The detail is explained in [this page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Connection).                 |
| `errorformat`      | String  | Output format for error as JSON, XML or HTML.<br/>The detail is explained in [this page](/error-handler)                                                                                                                               |

_Example_:

```php
Config::getConfig("settings.timezone", "app"); // output: Asia/Jakarta
```

## Environment-based configuration

Snappy supports environment-based configuration, allowing you to define different settings for development, testing, and production. This helps your application automatically load the appropriate configuration based on the current environment.

Environment-based configuration is taking from `config/environment.php`

| Config      | Description                                               |
| ----------- | --------------------------------------------------------- |
| `db`        | database connection configuration.                        |
| `view`      | location of your template files.                          |
| `email`     | your email configuration.                                 |
| `assets`    | location of your assets files such as images, videos etc. |
| `showerror` | to show/hide error message in the response body.          |
| `logerror`  | to log error message in a file under `log/` directory.    |

_Example_:

```php
Config::getConfig("showerror"); // true
```

## Custom configuration

Create a file under `config/` directory containing an associative array. You may also define nested associative arrays if needed. The file name will be the config name.

_Example_:

```php
// config/myconfig.php
return [
    "list" => [
        "john" => "doe",
        "jane" => "dane",
        "anotherconfig" => [
          "subconfig" => 123
        ],
    ],
    "name" => "John Doe"
];

// accessing custom config
Config::getConfig("list.john","myconfig"); //output: doe
Config::getConfig("list.anotherconfig.subconfig","myconfig"); //output: 123
Config::getConfig("name","myconfig"); //output: John Doe

```
