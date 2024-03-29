# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.1](https://github.com/alexlafroscia/file-fixture-factory/compare/v4.0.0...v4.0.1) (2024-01-06)

### Bug Fixes

- update scripts to build correctly in yarn@4 ([17b7234](https://github.com/alexlafroscia/file-fixture-factory/commit/17b7234b6c080bab96a606eea98ce79cf123e34e))

## [4.0.0](https://github.com/alexlafroscia/file-fixture-factory/compare/v3.1.0...v4.0.0) (2024-01-06)

### ⚠ BREAKING CHANGES

- Node 18 is now the minimum version that is tested against. Older versions might work, but use them at your own risk.

### Features

- add the `root` option ([#372](https://github.com/alexlafroscia/file-fixture-factory/issues/372)) ([2756453](https://github.com/alexlafroscia/file-fixture-factory/commit/27564537cca101de733c819dcd635c58985818e6))

- Test against node@18 and node@20, Migrate to yarn@4 (#370) ([13e583e](https://github.com/alexlafroscia/file-fixture-factory/commit/13e583e63fa409723b8efd098dd75bd5a01e9c19)), closes [#370](https://github.com/alexlafroscia/file-fixture-factory/issues/370)

## [3.1.0](https://github.com/alexlafroscia/file-fixture-factory/compare/v3.0.0...v3.1.0) (2022-06-10)

### Features

- expose `TempDirectory` class ([44baa1c](https://github.com/alexlafroscia/file-fixture-factory/commit/44baa1cf00287b128fc19ed1ef533718bbffd7e9))

## [3.0.0](https://github.com/alexlafroscia/file-fixture-factory/compare/v2.0.1...v3.0.0) (2022-06-09)

### ⚠ BREAKING CHANGES

- This API is only available on Node 14.14 or later

### Bug Fixes

- use non-deprecated util for removing directory ([d4d08f5](https://github.com/alexlafroscia/file-fixture-factory/commit/d4d08f52ba0d4d1d16eef1b04ab61ef7e0d6469d))

### [2.0.1](https://github.com/alexlafroscia/file-fixture-factory/compare/v2.0.0...v2.0.1) (2022-02-18)

## [2.0.0](https://github.com/alexlafroscia/ripgrep-js/compare/v1.1.0...v2.0.0) (2022-01-22)

### ⚠ BREAKING CHANGES

- The core API for the package has changed to use better naming. To migrate, replace all calls to `createStructure` with a call to `createDirectory` instead.

- rename `createStructure` to `createDirectory` ([dd62f67](https://github.com/alexlafroscia/ripgrep-js/commit/dd62f67ca6bd631928a460b00621a0e072986edb))

## [1.1.0](https://github.com/alexlafroscia/ripgrep-js/compare/v1.0.1...v1.1.0) (2022-01-20)

### Features

- add method to see if a file or folder exists ([5ed32c9](https://github.com/alexlafroscia/ripgrep-js/commit/5ed32c983e89a1ea6bb34b7779e9d17e17f84087))

### [1.0.1](https://github.com/alexlafroscia/ripgrep-js/compare/v1.0.0...v1.0.1) (2021-03-19)

### Bug Fixes

- handle directories with only other directories in it ([c1b054f](https://github.com/alexlafroscia/ripgrep-js/commit/c1b054fa99a46d7501f1745e821689f10bd62518))

## 1.0.0 (2021-02-12)

### Features

- implement library v1 ([05472fb](https://github.com/alexlafroscia/ripgrep-js/commit/05472fb8a176a132d10fd7f8b76502e105060da7))
