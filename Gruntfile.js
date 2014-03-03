/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.loadTasks('grunt');

	// Default task.
	grunt.registerTask('dev',
		'Start a live-reloading dev webserver on localhost.',
		['clean', 'compass:dev']
	);

	grunt.registerTask('build',
		'Build site files for testing or deployment.',
		['jshint', 'clean', 'jade:prod', 'requirejs:prod', 'stylus:prod']
	);

	grunt.registerTask('default', ['build', 'watch']);

	grunt.registerTask('build',
		'Build site files for testing or deployment.',
		[
			'clean:pre',
			'copy',
			'useminPrepare',
			'bowerInstall',
			'compass:prod',
			'concat',
			'uglify',
			'cssmin',
			'autoprefixer',
			'rev',
			'usemin',
			'clean:post'
		]
	);

    grunt.registerTask('serve', 
		'Starts a static webserver with livereload',
		function (target) {

			if (target === 'dist') {
				return grunt.task.run(['build', 'connect:dist:keepalive']);
			}

			grunt.task.run([
				'build',
				'connect:livereload',
				'watch'
			]);

		}

    );

};
