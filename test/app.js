'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var mockery = require('mockery');
var os = require('os');

describe('Alfresco component generator', function () {
  before(function () {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
    });
  });

  after(function () {
    mockery.disable();
  });

  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });

  describe('defaults', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(os.tmpdir(), './temp'))
        .withPrompts({
          projectName: 'component-fake',
          description: 'A awesome angular 2 component',
          githubAccount: 'componentCreatorAccount',
          authorName: 'Alfresco Team',
          authorEmail: 'Sonikku.Hejjihoggu@alfresco.com',
          authorUrl: 'http://Hejjihoggu.io',
          keywords: ['generator-keyword', 'component-keyword', 'angular2-keyword'],
          license: 'MIT'
        })
        .withOptions({'skip-install': true})
        .on('end', done);
    });

    it('created and CD into a folder named like the component', function () {
      assert.equal(path.basename(process.cwd()), 'component-fake');
    });

    it('creates files', function () {
      var expected = [
        '.travis.yml',
        '.gitignore',
        '.editorconfig',
        'LICENSE',
        'README.md',
        'package.json',
        'typings.json',
        'tsconfig.json',
        'tslint.json',
        'component-fake.ts',
        'karma.conf.js',
        'karma-test-shim.js',
        'assets/license_header.txt',
        'demo/.gitignore',
        'demo/.editorconfig',
        'demo/tsconfig.json',
        'demo/tslint.json',
        'demo/typings.json',
        'demo/package.json',
        'demo/README.md',
        'demo/index.html',
        'demo/src/main.ts',
        'demo/systemjs.config.js',
        'demo/browser-sync-config.js',
        'src/component-fake.component.ts',
        'src/component-fake.component.spec.ts'
      ];

      assert.file(expected);
    });

    it('fills the README with project data', function () {
      assert.fileContent('README.md', 'component-fake');
      assert.fileContent('README.md', 'A awesome angular 2 component');
      assert.fileContent('README.md', 'https://github.com/componentCreatorAccount/component-fake/releases');
    });

    it('fills the package.json with project data', function () {
      assert.fileContent('package.json', '"name": "component-fake"');
      assert.fileContent('package.json', '"author": "Alfresco Team"');
      assert.fileContent('package.json', '"description": "A awesome angular 2 component"');
      assert.fileContent('package.json', '"url": "https://github.com/componentCreatorAccount/component-fake/issues"');
      assert.fileContent('package.json', '"alfresco-component"');
      assert.fileContent('package.json', '"generator-keyword"');
    });

    it('fills the src file with project data', function () {
      assert.fileContent('src/component-fake.component.ts', 'class ComponentFake');
      assert.fileContent('src/component-fake.component.ts', 'Hello World Angular 2 component-fake');
    });

    it('fills the test file with project data', function () {
      assert.fileContent('src/component-fake.component.spec.ts', 'Hello World Angular 2 component-fake');
      assert.fileContent('src/component-fake.component.spec.ts', 'ComponentFake');
    });

    it('fills the barrel file with project data', function () {
      assert.fileContent('component-fake.ts', './src/component-fake.component');
    });

    it('fills the demo package.json with project data', function () {
      assert.fileContent('demo/package.json', '"name": "component-fake-demo"');
      assert.fileContent('demo/package.json', '"description": "A awesome angular 2 component - Demo"');
      assert.fileContent('demo/package.json', '"author": "Alfresco Team"');
      assert.fileContent('demo/package.json', '"component-fake": "file:../"');
    });

    it('fills the demo README with project data', function () {
      assert.fileContent('demo/README.md', 'component-fake - Demo');
    });

    it('fills the demo file with project data', function () {
      assert.fileContent('demo/index.html', 'component-fake Angular 2');
    });

    it('fills the systemjs.config.js file with project data', function () {
      assert.fileContent('demo/systemjs.config.js', '\'component-fake\': \'node_modules/component-fake\'');
    });

    it('fills the main file with project data', function () {
      assert.fileContent('demo/src/main.ts', 'component-fake/dist/component-fake');
    });
  });
});
