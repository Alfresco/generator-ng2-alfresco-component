<h1 align="center">Yeoman Generator for Alfresco Angular 2 Component</h1>
<p align="center">
  <img title="yeoman generator" src='assets/yeoman.png' alt='yeoman logo'  />
</p>
<p align="center">
  <a title='Build Status' href="https://travis-ci.org/Alfresco/generator-ng2-alfresco-component">
    <img src='https://travis-ci.org/Alfresco/generator-ng2-alfresco-component.svg?branch=master' alt='Build Status'  />
  </a>
  <a href='https://codecov.io/gh/Alfresco/generator-ng2-alfresco-component'>
    <img src='https://img.shields.io/codecov/c/github/Alfresco/generator-ng2-alfresco-component/master.svg?maxAge=2592000' alt='Coverage Status' />
  </a>
  <a href='https://github.com/Alfresco/generator-ng2-alfresco-component/blob/master/LICENSE'>
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' alt='license' />
  </a>
  <a alt='downloads stats' href='https://npmjs.org/package/generator-ng2-alfresco-component'>
    <img src='https://img.shields.io/npm/dt/generator-ng2-alfresco-component.svg' alt='downloads stats' />
  </a>
  <a href="https://nodei.co/npm/generator-ng2-alfresco-component/">
    <img src="http://img.shields.io/npm/v/generator-ng2-alfresco-component.svg" alt='npm version' >
  </a>
</p>

## Introduction

See the following [page](https://github.com/Alfresco/app-dev-framework/blob/master/INTRODUCTION.md) for an introduction to the Alfresco Application Development Framework.

## Prerequisites

Before you start using this development framework and the generator, make sure you have installed all required software and done all the
necessary configuration, see this [page](https://github.com/Alfresco/app-dev-framework/blob/master/PREREQUISITES.md).

## Installing Yeoman and the Component Generator

First, install [Yeoman](http://yeoman.io):

```sh
npm install -g yo
```

Then the Alfresco Component Generator:

```sh
npm install -g generator-ng2-alfresco-component
```

##  Generating a new component project

First, move into the folder where you want create your component.

```sh
yo ng2-alfresco-component
```

![alfresco generator](assets/generator.png)

Which will generate project structure similar to the following:

    ├── assets/
    │   └── license_header.txt
    ├── demo/
    │   ├── src/
    │   │   └── main.ts
    │   ├── .editorconfig
    │   ├── .gitignore
    │   ├── index.html
    │   ├── package.json
    │   ├── README.md
    │   ├── systemjs.config.js
    │   ├── tsconfig.json
    │   ├── tslint.json
    │   └── typings.json
    ├── src/
    │   ├── my-element.component.spec.ts
    │   └── my-element.component.ts
    ├── .editorconfig
    ├── .gitignore
    ├── .travis.yml
    ├── index.ts
    ├── karma-test-shim.js
    ├── karma.conf.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json
    └── typings.json

You will need to run the following scripts in the generated folder:

```sh
npm install
npm run build
```

Alternatively you can use generator with `install` switch to trigger automatic installation of dependencies via `npm install` script:

```sh
yo ng2-alfresco-component --install
```

## npm scripts

| Command | Description |
| --- | --- |
| npm run build | compiles component |
| npm run build:w | compiles component, watches for changes and recompiles if needed |
| npm run test | compiles, runs and watches the karma unit tests (console version) |
| npm run test-browser | compiles, runs and watches the karma unit tests (browser version) |
| num run coverage | runs unit tests, generates and opens code coverage report in browser |

## Running demo

If you have answered `Yes` for the generator question `Do you want a demo project to be generated?` you will get an additional demo project in the `demo` folder.

You will need installing npm dependencies for the generated demo project separately:

```sh
cd demo
npm install
npm run start
```

## Contributing to the generator

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make some changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

>To contribute to the existing code base add test cases to cover the new behaviour, and make sure all the existing tests are still green.

To test the generator run:

```sh
npm run test
```

### Debugging generator

```sh
# OS X / Linux
DEBUG=yeoman:generator yo ng2-alfresco-component

# Windows
set DEBUG=yeoman:generator yo ng2-alfresco-component
```

More on [debugging generators](http://yeoman.io/authoring/debugging.html).

## Advanced options

```sh
yo ng2-alfresco-component --alfresco
```

Typically used for internal purposes and adds the following extras to the generated project structure:

- adds Alfresco license headers to all code files
- configures component `package.json` with additional license checker configurations (devDependencies, scripts, etc.)

## History

For detailed changelog, see [Releases](https://github.com/Alfresco/generator-ng2-alfresco-component/releases).

## Contributors

| Contributor | GitHub profile | Twitter profile |
| --- | --- | --- |
| Eugenio Romano | [Eugenio Romano](https://github.com/eromano) | [@RomanoEugenio](https://twitter.com/RomanoEugenio) |
| Denys Vuika | [Denys Vuika](https://github.com/denisvuyka) | [@denisvuyka](https://twitter.com/denisvuyka) |

[See all contributors](https://github.com/alfresco/generator-ng2-alfresco-component/graphs/contributors)

## License
[Apache Version 2.0](https://github.com/alfresco/generator-ng2-alfresco-component/blob/master/LICENSE)
