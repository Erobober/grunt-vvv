# grunt-vvv v0.1.5

> Bundle custom VVV configurations for your project with ease.

## Getting Started
This plugins requires Grunt `-0.4.0` and Git.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command

```shell
npm install grunt-vvv
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vvv');
```

## Using grunt-vvv

### Sample `Gruntfile.js`

```js
'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		vvv: {
			production: {
				install: '.vvv-prod',
				mods: 'vvv-prod'
			},
			development: {
				install: '.vvv-dev',
				mods: 'vvv-dev'
			}
		}
	});

	grunt.loadNpmTasks('grunt-vvv');
	grunt.registerTask('default', ['vvv:production']);
};
```