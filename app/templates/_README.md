# &lt;<%= projectName %>&gt;
[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![Style guide][style-image]][style-url]          
[![Alfresco component][alfrescocomponent-image]][alfrescocomponent-url]          
                  
## About <%= projectName %>
> <%= description %>

## Installation

```bash
npm install <%= projectName %> --save
```

## Example

```html
<<%= projectName %>></<%= projectName %>>
```

## Reference

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`foo`         | *string*    | `bar`        | Lorem ipsum dolor.


Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`methodName()`   | None.        | void    | Lorem ipsum dolor.

## Develop command list 


* To test your component

    ```sh
    $ npm run test
    ```
    
* To run the test in the browser

    ```sh
    $ npm run test-browser
    ```    

* To run the test coverage

    ```sh
    $ npm run coverage
    ```
        
* To build the component

    ```sh
    $ npm run build
    ```
    
* To build the component and keep watching the changes

    ```sh
    $ npm run build:w
    ```

* To provide a live demo

    ```sh
    $ cd demo
    $ npm run start
    ```
    
* To clean npm_modules and typings folder

    ```sh
    $ npm run clean
    ```
    
## History

For detailed changelog, check [Releases](https://github.com/<%= githubAccount %>/<%= projectName %>/releases).

## Contributors

[Contributors](https://github.com/<%= githubAccount %>/<%= projectName %>/graphs/contributors)


[npm-image]: https://badge.fury.io/js/<%= projectName %>.svg
[npm-url]: https://npmjs.org/package/<%= projectName %>
[travis-image]: https://travis-ci.org/<%= githubAccount %>/<%= projectName %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= githubAccount %>/<%= projectName %>
[daviddm-image]: https://david-dm.org/<%= githubAccount %>/<%= projectName %>.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/<%= githubAccount %>/<%= projectName %>
[coveralls-image]: https://coveralls.io/repos/<%= githubAccount %>/<%= projectName %>/badge.svg
[coveralls-url]: https://coveralls.io/r/<%= githubAccount %>/<%= projectName %>
[style-url]: https://github.com/mgechev/angular2-style-guide
[style-image]: https://mgechev.github.io/angular2-style-guide/images/badge.svg
[alfrescocomponent-image]: https://img.shields.io/badge/Alfresco%20component-approved-green.svg
[alfrescocomponent-url]: https://www.alfresco.com
