<h1 align="center">Yeoman Generator Angular 2 Alfresco Component</h1>
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

>Yeoman generator generating a Angular2 Alfresco Component scaffold

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

<img src="assets/generator.png" alt='alfresco generator' >

Which will generate the following project structure and run `npm install` for you to fetch all dependencies:


    ├── .editorconfig
    ├── .gitignore
    ├── tsconfig.json
    ├── tslint.json
    ├── package.json
    ├── typings.json
    ├── karma.conf.js
    ├── karma-test-shim.js
    ├── LICENSE
    ├── README.md
    ├── my-element.ts
    ├── assets/license_header.txt
    ├── demo/.gitignore
    ├── demo/.editorconfig
    ├── demo/package.json
    ├── demo/tsconfig.json
    ├── demo/tslint.json
    ├── demo/typings.json
    ├── demo/README.html
    ├── demo/index.html
    ├── demo/app/main.ts
    ├── src/my-element-tests.component.ts
    └── src/my-element.component.ts

## Generated component commands

* To test your component

```sh
npm run test
```

* To run the test in the browser

```sh
npm run test-browser
```

* To run the test coverage

```sh
npm run coverage
```

* To build the component

```sh
npm run build
```

* To build the component and keep watching the changes

```sh
npm run build:w
```

* To provide a live demo

```sh
cd demo
npm install
npm run start
```

## Support Angular Cli

If you are familiar with angular-cli, you can use the following command also inside the generated project.

```bash
ng generate component my-new-component
ng g component my-new-component # using the alias

# components support relative path generation
# if in the directory src/app/feature/ and you run
ng g component new-cmp
# your component will be generated in src/app/feature/new-cmp
# but if you were to run
ng g component ../newer-cmp
# your component will be generated in src/app/newer-cmp
```
You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
Component | `ng g component my-new-component`
Directive | `ng g directive my-new-directive`
Pipe      | `ng g pipe my-new-pipe`
Service   | `ng g service my-new-service`
Class     | `ng g class my-new-class`
Interface | `ng g interface my-new-interface`
Enum      | `ng g enum my-new-enum`

If you don't have the angular-cli installed and you want to install it run the following command:

```bash
npm install -g angular-cli
```

## Contributing to the generator

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make some changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

>To contribute to the existing code base add test cases to cover the new behaviour, and make sure all the existing tests are still green.

* To test the generator

```sh
npm run test
```

## History

For detailed changelog, see [Releases](https://github.com/Alfresco/generator-ng2-alfresco-component/releases).

## Contributors

Contributor | GitHub profile | Twitter profile |
--- | --- | ---
Eugenio Romano (contributor)| [Eugenio Romano](https://github.com/eromano) | [@RomanoEugenio](https://twitter.com/RomanoEugenio)

All contributors [contributors](https://github.com/alfresco/generator-ng2-alfresco-component/graphs/contributors).

## License
[Apache Version 2.0](https://github.com/alfresco/generator-ng2-alfresco-component/blob/master/LICENSE)

 * 2016-07-11  v0.0.26 Add basic support for generate command of angular-cli
 * 2016-06-30  v0.0.24 Fix readme
 * 2016-06-30  v0.0.23 Angular RC3
 * 2016-06-17  v0.0.19 Angular RC2
 * 2016-06-03  v0.0.18 Angular Beta  
