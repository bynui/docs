---
title: Snappy log
head:
  - - meta
    - name: description
      content: Snappy’s Log utility offers centralized, timestamped logging with severity levels, ideal for tracking errors, debugging, and monitoring in any environment.
  - - meta
    - name: robots
      content: index,follow
  - - meta
    - name: keywords
      content: Snappy, logging, log utility, PHP logging, error tracking, debug logs, centralized log, production logging, log severity levels, PHP framework, debug tool
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
      content: Snappy’s Log utility offers centralized, timestamped logging with severity levels, ideal for tracking errors, debugging, and monitoring in any environment.
  - - meta
    - property: og:url
      content: https://bynui.github.io/snappy/log.html
---

# Log

Whether you're tracking errors, monitoring user actions, or debugging internal operations, Log provides a clean and centralized way to record those events into a standard log file.

Unlike traditional ad-hoc `echo` or `var_dump()` debugging, the Log utility ensures that messages are persistently stored, timestamped, and categorized by severity level — making it suitable for both development and production environments.

## Log file location

All log entries are saved in:

```
/log/snappy-YYYY-MM-DD.log
```

## Methods

Log function is available on all your classes in `$this` object. No need to import you can use it straight away. The output format is like below:

**Output**

```
[YYYY-MM-DD hh:mm:ss] [LEVEL] your message content
```

:bulb: **Usage**

::: tip log info message

```php
$this->logInfo( string $message ): void
```

**`message`**

&emsp; Message to be logged

:::

::: tip log debug with optional data & placeholder

```php
$this->logDebug( string $message, array $context = [] ): void
```

**`message`**

&emsp; Message to be logged

**`context`** (optional)

&emsp; An associative array to be parsed to the message

:::

::: tip log error message

```php
$this->logError( string $message, array $context = [], string $errornumber = "" ): void
```

**`message`**

&emsp; Message to be logged

**`context`** (optional)

&emsp; An associative array to be parsed to the message

**`errornumber`** (optional)

&emsp; Any error number format as you want for your own reference

:::

_Example:_

```php
$this->logInfo("This is information");
$this->logDebug("User {name} logged in with ID {id}", ["name" => "John Doe", "id" => 123])
$this->logError(message: "This is error message", errornumber: "A456XX");
```

_Output:_

```
[2025-08-07 18:09:27] INFO: This is information
[2025-08-07 18:09:27] DEBUG: User John Doe logged in with ID 123
[2025-08-07 18:09:27] ERROR: #A456XX This is error message #A456XX
```
