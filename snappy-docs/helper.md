# Helper

Snappy provides a set of default helper functions grouped under the static `Utils` class. This class serves as a simple utility collection without adhering to any specific design pattern. You are free to extend it by adding your own custom functions, which can then be accessed using `Utils::yourFunction()`.

## responseHeader

`responseHeader(string $code, [boolean $textonly = false]): string`

Returns response header. If `$textonly` is true then it returns response text only of $code parameter.
