<%- licenseHeader %>
'use strict';
(function(/*global*/) {

  // map tells the System loader where to look for things
  var map = {
    app: 'dist/',
    '@angular': 'node_modules/@angular',
    rxjs: 'node_modules/rxjs',

    'ng2-translate': 'node_modules/ng2-translate',
    'ng2-alfresco-core': 'node_modules/ng2-alfresco-core/dist',

    '<%= projectName %>': 'node_modules/<%= projectName %>/dist'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    app: { main: 'main.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' },

    'ng2-translate': { defaultExtension: 'js' },
    'ng2-alfresco-core': { main: 'index.js', defaultExtension: 'js' },

    '<%= projectName %>': { main: 'index.js', defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
