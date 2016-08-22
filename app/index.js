'use strict';
var alflogo = require('alfresco-logo');
var yeoman = require('yeoman-generator');
var githubUsername = require('github-username');
var path = require('path');
var mkdirp = require('mkdirp');
var _ = require('lodash');

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = yeoman.Base.extend({

  initializing: function () {
    this.props = {
      licenseHeader: '',
      licenseChecker: false
    };

    if (this.options.alfresco) {
      this.props.licenseHeader = this.fs.read(path.join(__dirname, './alfresco-license-header.ts'));
      this.props.licenseChecker = true;
    }
  },

  prompting: function () {
    var done = this.async();

    this.log(alflogo(
      'Welcome to the awesome\nAngular 2 component\ngenerator for Alfresco!\n',
      {'left-pad': '     '}));

    var prompts = [{
      name: 'projectName',
      message: 'What\'s the name of your component?',
      validate: function (str) {
        return str.length > 0;
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = _.extend(this.props, props);
      done();
    }.bind(this));
  },

  default: function () {
    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }
  },

  askFor: function () {
    var done = this.async();

    var prompts = [
      {
        name: 'description',
        message: 'How would you describe the element?'
      },
      {
        name: 'authorName',
        message: 'Author\'s Name',
        default: this.user.git.name(),
        store: true
      },
      {
        name: 'authorEmail',
        message: 'Author\'s Email',
        default: this.user.git.email(),
        store: true
      },
      {
        name: 'authorUrl',
        message: 'Author\'s Homepage',
        store: true
      },
      {
        name: 'keywords',
        message: 'Package keywords (comma to split)',
        filter: function (words) {
          if (words) {
            return words.split(/\s*,\s*/g);
          } else {
            return [];
          }
        }
      },
      {
        name: 'generateDemo',
        message: 'Do you want a demo project to be generated?',
        type: 'confirm'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = _.extend(this.props, props);
      done();
    }.bind(this));
  },

  askForGithubAccount: function () {
    var done = this.async();

    if (validateEmail(this.props.authorEmail)) {
      githubUsername(this.props.authorEmail, function (err, username) {
        if (err) {
          username = username || '';
        }

        var prompts = [{
          name: 'githubAccount',
          message: 'GitHub username or organization',
          default: username
        }];

        this.prompt(prompts, function (props) {
          this.props = _.extend(this.props, props);
          done();
        }.bind(this));
      }.bind(this));
    } else {
      done();
    }
  },

  writing: function () {
    this.props.projectNameCamelCase = _.chain(this.props.projectName).camelCase().upperFirst();

    if (this.props.licenseChecker) {
      this.fs.copyTpl(
        this.templatePath('_license_header.txt'),
        this.destinationPath('assets/license_header.txt')
      );
    }

    this.fs.copyTpl(
      this.templatePath('_karma.conf.js'),
      this.destinationPath('karma.conf.js')
    );

    this.fs.copyTpl(
      this.templatePath('_karma-test-shim.js'),
      this.destinationPath('karma-test-shim.js')
    );

    this.fs.copy(
      this.templatePath('_tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );

    this.fs.copy(
      this.templatePath('_tslint.json'),
      this.destinationPath('tslint.json')
    );

    this.fs.copy(
      this.templatePath('_typings.json'),
      this.destinationPath('typings.json')
    );

    this.fs.copy(
      this.templatePath('_.travis.yml'),
      this.destinationPath('.travis.yml')
    );

    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('_.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copyTpl(
      this.templatePath('_angular-cli.json'),
      this.destinationPath('angular-cli.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_index.ts'),
      this.destinationPath('index.ts'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_sourceFile.ts'),
      this.destinationPath('src/' + this.props.projectName + '.component.ts'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_testFile.spec.ts'),
      this.destinationPath('src/' + this.props.projectName + '.component.spec.ts'),
      this.props
    );

    mkdirp('src/app');

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );

    var currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    this.props.keywords.push('alfresco-component');

    var pkg = _.merge(
      currentPkg,
      { keywords: this.props.keywords }
    );

    if (this.props.licenseChecker) {
      pkg = _.merge(
          currentPkg,
          this.fs.readJSON(path.join(__dirname, './alfresco-license-check.json'), {})
      );
    }

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      this.props
    );

    this.composeWith('license', {
      options: {
        name: this.props.authorName,
        email: this.props.authorEmail,
        website: this.props.authorUrl
      }
    }, {
      local: require.resolve('generator-license/app')
    });
  },

  writeDemo: function () {
    if (!this.props.generateDemo) {
      return;
    }

    this.props.projectNameCamelCase = _.chain(this.props.projectName).camelCase().upperFirst();

    this.fs.copyTpl(
      this.templatePath('demo/_index.html'),
      this.destinationPath('demo/index.html'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('demo/_main.ts'),
      this.destinationPath('demo/src/main.ts'),
      this.props
    );

    this.fs.copy(
      this.templatePath('demo/_.editorconfig'),
      this.destinationPath('demo/.editorconfig')
    );

    this.fs.copy(
      this.templatePath('demo/_.gitignore'),
      this.destinationPath('demo/.gitignore')
    );

    this.fs.copy(
      this.templatePath('demo/_tsconfig.json'),
      this.destinationPath('demo/tsconfig.json')
    );

    this.fs.copy(
      this.templatePath('demo/_tslint.json'),
      this.destinationPath('demo/tslint.json')
    );

    this.fs.copy(
      this.templatePath('demo/_typings.json'),
      this.destinationPath('demo/typings.json')
    );

    this.fs.copyTpl(
      this.templatePath('demo/_package.json'),
      this.destinationPath('demo/package.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('demo/_README.md'),
      this.destinationPath('demo/README.md'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('demo/_systemjs.config.js'),
      this.destinationPath('demo/systemjs.config.js'),
      this.props
    );
  },

  install: function () {
    if (this.options.install) {
      this.npmInstall();
    }
  }
});
