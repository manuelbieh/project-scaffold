module.exports = function(grunt) {

	grunt.config('clean', {
		pre: [
			'<%= config.dirs.dist %>/*'
		],
		post: [
			'<%= config.dirs.dist %>/**/*.scss',
			'<%= config.dirs.dist %>/**/*.sass',
			'<%= config.dirs.dist %>/**/*.coffee',
			'<%= config.dirs.dist %>/**/*.styl',
			'<%= config.dirs.dist %>/**/*.less'
		]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');

}