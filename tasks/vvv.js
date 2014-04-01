var path = require( 'path' );
var fs = require( 'fs' );
var _ = require( 'underscore' );

module.exports = function(grunt) {
	'use strict';
	var vvv = require( './lib/vvv.js').init( grunt );

	grunt.registerMultiTask( 'vvv', 'Prepare VVV', function() {
		var scope = this;
		var data = _.extend( {
			install : './.vvv',
			mods : './vvv'
		}, scope.data );

		if( fs.existsSync( data.install + '/.git/' ) ) {
			grunt.log.writeln( 'Updating VVV ' + scope.target.cyan + '...' );
			vvv.update( data, scope.async(), scope );
			return;
		}

		grunt.log.writeln( 'Installing VVV ' + scope.target.cyan + '...' );
		vvv.install( data, scope.async(), scope );
	} );
};