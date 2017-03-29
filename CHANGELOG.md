# Change Log
This changelog started from v0.8.4.  
If want to see more previous information to [Releases](https://github.com/archco/cosmos-css/releases) page.  
This document guided from [Keep a CHANGELOG](http://keepachangelog.com/en/0.3.0/) format.

## [Unreleased]

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

[Unreleased]: https://github.com/archco/cosmos-css/compare/v0.9.1...master
[0.9.1]: https://github.com/archco/cosmos-css/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/archco/cosmos-css/compare/v0.8.4...v0.9.0
[0.8.4]: https://github.com/archco/cosmos-css/compare/v0.8.0...v0.8.4
[0.8.0]: https://github.com/archco/cosmos-css/compare/v0.7.0...v0.8.0
