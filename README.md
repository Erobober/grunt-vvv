# grunt-vvv v0.1.8

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

### Options

These options can be used to customize your local VVV install or split your development environments apart.

#### install

Type: `String`
Default: `.vvv`

This is the relative directory where VVV will be installed and cached for future usage.

#### mods

Type: `String`
Default: `vvv`

This is the relative directory where you can store your modifications to VVV. Files in this folder must match the corresponding directory structure in VVV in order to be overwritten. If a file exists, it will override VVV when loaded.