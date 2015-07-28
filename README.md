# Geo Web Toolkit [![Build Status](https://travis-ci.org/GeoscienceAustralia/geo-web-toolkit.svg?branch=doco-comments)](https://travis-ci.org/GeoscienceAustralia/geo-web-toolkit) [![Coverage Status](https://coveralls.io/repos/GeoscienceAustralia/geo-web-toolkit/badge.svg)](https://coveralls.io/r/GeoscienceAustralia/geo-web-toolkit)

Geoscience Australia's web mapping toolkit.

Contains AngularJS-based modules to support rapid development of web mapping applications.

Available via `bower install geo-web-toolkit`.

## Requirements

Required:

* Java 1.6+
* Maven 3+

Recommended:

* NodeJS^

^a local copy is installed as part of the Maven build, but a global install will make it easier to quickly run the JS unit tests locally.

## Building

The toolkit can be built using Maven

`>> mvn clean install`

Or can be built without the need for Java using Grunt using `grunt build`.

Angular dependency graph can be generated using `grunt depgraph` but does required [`graphviz`](http://www.graphviz.org/) to be installed.

## Documentation

Maven build generates ngdocs in the `docs` directory.

[Generated docs are available](http://geoscienceaustralia.github.io/geo-web-toolkit/docs/).

[JSFiddle showing a simple example](https://jsfiddle.net/ky7nkr9s/3/).

These docs are also generated by using the default `grunt` task.

## Running tests locally

Make sure all NPM dependencies are installed.

`npm install`

Make sure all Bower dependencies are installed.

`bower install`

Then the Karma runner can be launched using the following (assuming you have installed Karma globally as described at http://karma-runner.github.io/0.12/intro/installation.html)

`>> karma start src/test/js/config/karma.conf.js`

Tests can be executed by using `grunt karma`

