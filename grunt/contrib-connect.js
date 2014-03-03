module.exports = function(grunt) {

	grunt.config('connect', {

		options: {
			port: 9000,
			livereload: 35729,
			hostname: 'localhost'
		},

		livereload: {
			options: {
				open: true,
				base: [
					'.tmp',
					'<%= config.dirs.dist %>/htdocs'
				]
			}
		},

		dist: {
			options: {
				open: true,
				base: '<%= config.dirs.dist %>/htdocs',
				livereload: false
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');

}
