/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: grunt.file.readJSON('grunt/_config.json')
	});

	//grunt.loadTasks('grunt/_config.js');
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
		'Quickly build site files for development.',
		[
			'clean:dev',
			'copy:dev',
			'useminPrepare',
			//'bowerInstall',
			'compass:dev',
			'concat',
			'uglify',
			'cssmin',
			'autoprefixer',
			'compress:gzip',
			'rev',
			'usemin',
			'newer:imagemin',
			//'clean:post'
		]
	);

	grunt.registerTask('build',
		'Build site files for deployment.',
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
			'imagemin',
			'svgmin',
			'clean:post'
		]
	);

	grunt.registerTask('default', ['serve:dev']);
	//grunt.registerTask('default', ['build', 'watch']);

};
