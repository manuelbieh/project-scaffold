module.exports = function(grunt) {

	grunt.config('connect', {

		options: {
			port: 9009,
			livereload: 35731, 
			// Default is 35729. Feel free to change when working on several projects
			// at the same time to prevent "port already in use" errors
			useAvailablePort: true,
			hostname: 'localhost' // use 0.0.0.0 to make it available to public
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

	//grunt.loadNpmTasks('grunt-contrib-connect');

}
