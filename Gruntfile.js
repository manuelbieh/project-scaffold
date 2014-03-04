/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.loadTasks('grunt');

    grunt.registerTask('serve', 
		'Starts a static webserver with livereload',
		function (target) {

			var tasks = [];

			if (target === 'dist') {
				return grunt.task.run(['build', 'connect:dist:keepalive']);
			} else if(target === 'dev') {
				tasks = ['dev', 'connect:livereload', 'watch'];
			} else {
				tasks = ['build', 'connect:livereload', 'watch'];
			}

			grunt.task.run(tasks);

		}

    );

	grunt.registerTask('dev',
		'Build site files for testing or deployment.',
		[
			'clean:pre',
			'copy:dev',
			'bowerInstall',
			'compass:dev',
		]
	);

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

	grunt.registerTask('default', ['build', 'watch']);

};
