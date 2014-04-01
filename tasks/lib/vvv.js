'use strict';

var exec = require( 'child_process' ).exec;
var ncp = require('ncp').ncp;
var fs = require( 'fs' );

exports.init = function( grunt ) {

	function copyMods( data, callback, process ) {
		if( ! fs.existsSync( data.mods ) ) {
			grunt.log.writeln( 'No VVV modifications exist, skipping customization routine...'.yellow );
			return callback( true );
		}

		ncp.limit = 16;
		ncp( data.mods, data.install, callback );
	}

	exports.install = function( data, callback, process ) {
		var command = 'git clone https://github.com/Varying-Vagrant-Vagrants/VVV.git ' + data.install;
		exec( command, function( error, stdout, stderror) {
			if( error ) {
				grunt.warn( 'VVV exists but could not be updated.'.red );
				return callback();
			}

			copyMods( data, function( error ) {
				if( error ) {
					grunt.log.writeln( 'Could not copy VVV modifications, skipping customization routine...'.yellow );
					return callback();
				}

				grunt.log.writeln( 'Installed!'.green );
				return callback();
			}, process );
		} );
	};

	exports.update = function( data, callback, process ) {
		var command = 'cd ' + data.install + ' && git reset --hard HEAD && git pull origin master';
		exec( command, function( error, stdout, stderror ) {
			if( error ) {
				grunt.log.writeln( 'Unable to update VVV, skipping...'.yellow );
				return callback();
			}

			copyMods( data, function( error ) {
				if( error ) {
					grunt.log.writeln( 'Could not copy VVV modifications, skipping customization routine...'.yellow );
					return callback();
				}

				grunt.log.writeln( 'Updated!'.green );
				return callback();
			}, process );
		} );
	};

	return exports;
};