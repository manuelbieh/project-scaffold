module.exports = function(grunt) {

	grunt.config('uglify', {
		"dev": {
			options: {
				preserveComments: 'some',
				sourceMap: true,
			}			
		},
		"prod": {
			options: {
				preserveComments: 'some',
			},
			files: {
				'<%= config.dirs.dist %>/htdocs/js/main.js': ['<%= config.dirs.src %>/js/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

}