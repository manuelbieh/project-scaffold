module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			browsers: ['last 2 version', 'ie 8', 'ie 9']
		},
		build: {

			//expand: true,
			//cwd: '<% config.dirs.dist %>/htdocs/css',
			//src: [ '**/*.css' ],
			//dest: '<% config.dirs.dist %>/htdocs/css',

			//src: 'dist/htdocs/css/master.css',
			//dest: 'dist/htdocs/css/master-ap.css'

			expand: true,
			cwd: 'dist/htdocs/css',
			src: [ '**/*.css' ],
			dest: 'dist/htdocs/css'
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');

}