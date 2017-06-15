# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

This changelog started from v0.8.4.  
If want to see more previous information to [Releases](https://github.com/archco/cosmos-css/releases) page.

## [Unreleased]
### Added
- Add sort type "number" and "date" in ElementUtil. #152
- Implement core of cosmos.js #150
- Add scss mixins for using flexbox. #143
- Add scss helper class for using flexbox. #167
- Add some colors into color-set.scss #156
- Improve Button: button group #138
- Now available give a option "container_position" in toast.js. #149

### Changed
- Improve Collapse: Available use instance for individual element. #153
- Change constructor of chip.js and collapse.js. #150
- Separates mixin.scss #162
- Change entry file name "style.scss" to "cosmos.scss". #162
- Improve grid with flexbox. #146
- Change html structure of navbar. #166
- Change html structure of dropdown. #148
- Change html structure of simple-crud. #159
- Change html structure of modal. #158

### Fixed
- Fix Dropdown: browser compatibility problem. #63
- Fix Nav: tag name selector problem #165

### Removed
- No jquery required anymore.

## [0.11.0] - 2017-05-08
### Added
- Add new js util library: ElementUtil #140
- Add scss helper: arrow #136
- Implement tab-vertical in tab module. #128
- Add new Module: Toast #137
- Create [github pages](https://archco.github.io/cosmos-css/) #141

### Changed
- Repackaging of js library files. #144
- Changed Collapse: optional icon at right. #135
- Separates component "list" from scaffolding.scss. #139
- Replace normalize.css as dependency. #151

### Deprecated
- Some js library functions will be deprecated. #145

## [0.10.2] - 2017-04-23
### Added
- Add scss helper class: `.caret` #134

### Changed
- Change dropdown style: appends caret automatically. #134

### Fixed
- Fix footer link color.

## [0.10.1] - 2017-04-21
### Changed
- Change scss function and mixin names to "hyphenated lowercase(kebab-case)." #132
- Improve scroll-to.js, html structure is changed. #133

## [0.10.0]
### Added
- Add a new component "Image" #84
- Add a new component "Loader" #116
- Add scss helper class "fixed-top" and "sticky-top" #124
- Add scss library "keyframes" #129

### Changed
- Change export module target. #122
- Change babel preset "es2015" to "env" #126

### Removed
- Remove ajax-loading. instead use loader. #116

### Fixed
- Fix nav-dropdown height problem. #125

## [0.9.1] - 2017-03-29
### Added
- Add "locationSearchToObject()" and "searchToObject()" method to Util.js #120
- Add "isContains()" method to Util.js

### Changed
- Modify "block code" style in scaffolding.scss #121
- Improve Nav - activator #119

### Fixed
- Fix Badge's link color problem #118

## [0.9.0] - 2017-03-24
### Added
- CHANGELOG.md file
- Adding optional class ".list", ".list-group" and ".list-horizontal" in scaffolding.scss. #111
- New Module - Button #113
- New Module - Chip #98

### Changed
- Tab: Adding class ".tab-content" into tab content automatically. #109
- Refactoring js modules. These classes extends "CosmosModule" #112
- helper.js move to "js/lib/" directory. now can import this as `{ Helper }` member.
- Applied new close button to message and modal modules. #113
- Modifying variables of badge. #114
- Improve Badge - Badge with Stacked Font Awesome Icon #100

### Fixed
- Fix inline code style overlap problem. #115
- Fix overflow-x problem in scaffolding codes. #117

## [0.8.4] - 2017-02-28
### Added
- Now available import [Util](https://github.com/archco/cosmos-css/wiki/util) and [Color](https://github.com/archco/cosmos-css/wiki/color) as library.
```javascript
import Cosmos from 'cosmos-css'; // import default member.
import { Util, Color } from 'cosmos-css'; // import member.
```

## [0.8.0] - 2017-02-24
### Changed
- "src/" directory structure is changed. #107
- Use npm scripts as build tool. #104

### Removed
- Removed deprecated scss class names. #99

### Fixed
- Underline problem in link as btn in table. #101

[Unreleased]: https://github.com/archco/cosmos-css/compare/v0.11.0...master
[0.11.0]: https://github.com/archco/cosmos-css/compare/v0.10.2...v0.11.0
[0.10.2]: https://github.com/archco/cosmos-css/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/archco/cosmos-css/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/archco/cosmos-css/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/archco/cosmos-css/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/archco/cosmos-css/compare/v0.8.4...v0.9.0
[0.8.4]: https://github.com/archco/cosmos-css/compare/v0.8.0...v0.8.4
[0.8.0]: https://github.com/archco/cosmos-css/compare/v0.7.0...v0.8.0
