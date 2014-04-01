'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			},
		},
		watch: {
			all: {
				files: ['<%= jshint.all %>'],
				tasks: ['jshint']
			},
		},
		vvv: {
			production: {
				install: '.vvv',
				mods: 'vvv',
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'vvv:production']);
};