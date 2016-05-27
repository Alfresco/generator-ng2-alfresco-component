/**
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function (global) {

  // map tells the System loader where to look for things
  var map = {
    '<%= projectName %>': 'node_modules/<%= projectName %>',
    'rxjs': 'node_modules/rxjs',
    'angular2': 'node_modules/angular2',
    'app': 'dist/main'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'src': {
      defaultExtension: 'js'
    },
    '<%= projectName %>': {
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'angular2': {
      defaultExtension: 'js'
    }
  };

  var config = {
    defaultJSExtensions: true,
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
