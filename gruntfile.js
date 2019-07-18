/* eslint-env node */

module.exports = function( grunt ) {
	'use strict';

	require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig( {
		dist_dir: 'dist',

		clean: {
			dist: [ '<%= dist_dir %>' ],
		},

		copy: {
			dist: {
				src: [
					'*.php',
					'application-passwords.js',
					'application-passwords.css',
					'auth-app.js',
					'readme.md',
					'readme.txt',
				],
				dest: '<%= dist_dir %>',
				expand: true,
			},
		},

		wp_deploy: {
			options: {
				plugin_slug: 'application-passwords',
				build_dir: '<%= dist_dir %>',
				assets_dir: 'assets',
			},
			trunk: {
				deploy_tag: false,
				deploy_trunk: true,
			},
		},
	} );

	grunt.registerTask(
		'build', [
			'clean',
			'copy',
		]
	);

	grunt.registerTask(
		'deploy', [
			'build',
			'wp_deploy:trunk',
		]
	);

};
