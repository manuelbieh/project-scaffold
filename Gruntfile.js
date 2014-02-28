/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

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

	grunt.registerTask('prod',
		'Build site files for testing or deployment.',
		['clean:pre', 'compass:prod', 'autoprefixer', 'uglify:prod', 'clean:post']
	);

	grunt.registerTask('ap', ['autoprefixer']);

	grunt.registerTask('default', ['prod', 'watch:prod']);

};
