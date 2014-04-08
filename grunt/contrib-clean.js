module.exports = function(grunt) {

	grunt.config('clean', {
		dev: [
			'<%= config.dirs.dist %>/htdocs/css/*',
			'<%= config.dirs.dist %>/htdocs/js/*'
		],
		pre: [
			'<%= config.dirs.dist %>/*'
		],
		post: [
			'<%= config.dirs.dist %>/**/*.scss',
			'<%= config.dirs.dist %>/**/*.sass',
			'<%= config.dirs.dist %>/**/*.coffee',
			'<%= config.dirs.dist %>/**/*.styl',
			'<%= config.dirs.dist %>/**/*.less',
			'<%= config.dirs.dist %>/htdocs/css/!(*.styles|*.vendor).css',
			'<%= config.dirs.dist %>/htdocs/js/!(*.main).js',
			'.tmp'
		]
	});

	//grunt.loadNpmTasks('grunt-contrib-clean');

}