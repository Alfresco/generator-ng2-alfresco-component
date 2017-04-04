'use strict';
var path = require('path');
var helpers = require('yeoman-test');
var mockery = require('mockery');
var tempDir;

describe('Alfresco component Integration test generator', function () {
  before(function () {
    tempDir = path.join(__dirname, '../temp');

    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
    });
  });

  after(function () {
    mockery.disable();
  });

  describe('Component ', function () {

    it('creation', function (done) {

      helpers.run(path.join(__dirname, '../app'))
        .inDir(tempDir + '/')
        .withPrompts({
          projectName: 'component-test',
          description: 'A awesome angular 2 component',
          githubAccount: 'componentCreatorAccount',
          authorName: 'Alfresco Team',
          authorEmail: 'Sonikku.Hejjihoggu@alfresco.com',
          authorUrl: 'http://Hejjihoggu.io',
          keywords: ['generator-keyword', 'component-keyword', 'angular2-keyword'],
          license: 'MIT'
        })
        .withOptions({alfresco: true})
        .on('end', done);
    });
  });
});
