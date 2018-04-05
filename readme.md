# textmate
[![GitHub issues](https://img.shields.io/github/issues/dunstontc/textmate.svg)](https://github.com/dunstontc/textmate/issues)
[![License](https://img.shields.io/github/license/dunstontc/textmate.svg)](https://github.com/dunstontc/textmate/blob/master/LICENSE)

<!-- TOC -->

- [textmate](#textmate)
    - [Textmate Language Grammars](#textmate-language-grammars)
        - [Sources](#sources)
        - [VSCode Specific](#vscode-specific)
        - [Examples](#examples)
    - [JSON Schema](#json-schema)
        - [Tools](#tools)

<!-- /TOC -->

## Textmate Language Grammars
- `name`
  - This should be a unique name for the grammar, following the convention of being a dot-separated name where each new (left-most) part specializes the name. 
  - Normally it would be a two-part name where the first is either `text` or `source` and the second is the name of the language or document type. 
  - But if you are specializing an existing type, you probably want to derive the name from the type you are specializing. 
- `scopeName`
  - This should be a unique name for the grammar.
- `fileTypes`
  - This is an array of file type extensions that the grammar should (by default) be used with. 
- `firstLineMatch`
  - A regular expression which is matched against the first line of the document (when it is first loaded).
- `patterns`
  - An array with the actual rules used to parse the document.
- `repository`
  - A dictionary (i.e. key/value pairs) of rules which can be included from other places in the grammar. 
  - The key is the name of the rule and the value is the actual rule.
- `name`
  - The name which gets assigned to the portion matched. 
  - This is used for styling and scope-specific settings and actions, which means it should generally be derived from one of the standard names.
- `match`
  - A regular expression which is used to identify the portion of text to which the `name` should be assigned. 
  - Example: '\b(true|false)\b'.
- `begin`, `end` 
  - These keys allow matches which span several lines and must both be mutually exclusive with the `match` key. 
  - Each is a regular expression pattern. `begin` is the pattern that starts the block and `end` is the pattern which ends the block. 
  - Captures from the `begin` pattern can be referenced in the `end` pattern by using normal regular expression back-references.
- `contentName`
  - This key is similar to the `name` key but only assigns the `name` to the text between what is matched by the `begin`/`end` patterns.
- `captures`, `beginCaptures`, `endCaptures` 
  - These keys allow you to assign attributes to the captures of the `match`, `begin`, or `end` patterns. 
  - Using the captures key for a `begin`/`end` rule is short-hand for giving both `beginCaptures` and `endCaptures` with same values.
  - The value of these keys is a dictionary with the key being the capture number and the value being a dictionary of attributes to assign to the captured text. 
  - Currently `name` is the only attribute supported.
- `include`
  - This allows you to reference a different language, recursively reference the grammar itself or a rule declared in this file’s `repository`.

### Sources
- [Sublime3 - Scope Naming](https://www.sublimetext.com/docs/3/scope_naming.html)
- [Textmate Manual - Language Grammars](https://manual.macromates.com/en/language_grammars.html)
- [Textmate - Intro to Scopes](http://blog.macromates.com/2005/introduction-to-scopes/)
  - [Textmate Manual - Scope Selectors](https://manual.macromates.com/en/scope_selectors)
### VSCode Specific
- [Microsoft/vscode-textmate](https://github.com/Microsoft/vscode-textmate)
  - [types.ts](https://github.com/Microsoft/vscode-textmate/blob/master/src/types.ts)
- [extensionAPI - language-support](https://code.visualstudio.com/docs/extensionAPI/language-support)
### Examples
- [Microsoft/vscode/extensions](https://github.com/Microsoft/vscode/tree/master/extensions)
  - [csharp.tmLanguage.json](https://github.com/Microsoft/vscode/blob/master/extensions/csharp/syntaxes/csharp.tmLanguage.json)
  - [html.tmLanguage.json](https://github.com/Microsoft/vscode/blob/master/extensions/html/syntaxes/html.tmLanguage.json)
  - [JSON.tmLanguage.json](https://github.com/Microsoft/vscode/blob/master/extensions/json/syntaxes/JSON.tmLanguage.json)
  - [markdown.tmLanguage.json](https://github.com/Microsoft/vscode/blob/master/extensions/markdown-basics/syntaxes/markdown.tmLanguage.json)
  - [MagicPython.tmLanguage.json](https://github.com/Microsoft/vscode/blob/master/extensions/python/syntaxes/MagicPython.tmLanguage.json)
  - [swift.tmLanguage.json](https://github.com/Microsoft/vscode/blob/master/extensions/swift/syntaxes/swift.tmLanguage.json)





## JSON Schema
- [json-schema.org](http://json-schema.org/)
- [JSON Schema Store](http://schemastore.org/json/)
### Tools
- [Newtonsoft JSON Schema Validator](https://www.jsonschemavalidator.net/)
- [JSONschema.net](https://jsonschema.net/)

