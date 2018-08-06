# frt-web

[![build status](https://img.shields.io/travis/simonyiszk/frt-web/master.svg)](https://travis-ci.org/simonyiszk/frt-web)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Website of BME Formula Racing Team.

## 🚀 Getting started

- Clone this project and install all the required dependencies using [yarn][]
- Start a development server with `yarn develop`
  - _Other scripts like `build`, [`format`](#automatic-code-formatting) and [`lint`](#linting) are also available_

[yarn]: https://yarnpkg.com/

## 💅 Style management

[Rebass][], a React UI component library & design system, is used for styling components. Based on [styled-components][] and [styled-system][], it provides a delightful way for managing styles.

[rebass]: https://jxnblk.com/rebass/
[styled-components]: https://www.styled-components.com/
[styled-system]: https://jxnblk.com/styled-system/

## ✨ Developer experience

### Automatic code formatting

[Prettier][] is an opinionated code formatter aiming to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting Prettier is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### Linting

[Linters][lint] are tools that analyze source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.

- JavaScript is linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an overridable set of rules provided by [eslint-config-airbnb-base][].
- Styles are linted by [stylelint][], adhering to the rules specified in [stylelint-config-recommended][].

[lint]: https://en.wikipedia.org/wiki/Lint_(software)
[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb-base]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[stylelint]: https://stylelint.io/
[stylelint-config-recommended]: https://github.com/stylelint/stylelint-config-recommended
