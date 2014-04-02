module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			browsers: ['last 3 version', 'ie 8', 'ie 9']
		},
		build: {
			expand: true,
			src: [ '**/*.css' ],
			cwd: '<%= config.dirs.dist %>/htdocs/css',
			dest: '<%= config.dirs.dist %>/htdocs/css',
		}
	});

	//grunt.loadNpmTasks('grunt-autoprefixer');

}