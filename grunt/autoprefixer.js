module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			browsers: ['last 3 version', 'ie 8', 'ie 9']
		},
		build: {
			expand: true,
			src: [ '**/*.css' ],
			//cwd: 'dist/htdocs/css',
			//dest: 'dist/htdocs/css',
			//cwd: '<% config.dirs.dist %>/htdocs/css',
			//dest: '<% config.dirs.dist %>/htdocs/css',
			cwd: grunt.config.data.config.dirs.dist + '/htdocs/css',
			dest: grunt.config.data.config.dirs.dist + '/htdocs/css',
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');

}