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
			//	'<%= config.dirs.dist %>/htdocs/js/main.js': [
			//		'<%= config.dirs.src %>/js/*.js'
			//	],
			//	'<%= config.dirs.dist %>/htdocs/js/vendor.js': [
			//		'<%= config.dirs.src %>/components/jquery/jquery.js',
			//		'<%= config.dirs.src %>/js/vendor/*.js'
			//	]
			//	'<%= config.dirs.dist %>/htdocs/js/main.min.js': [
			//		'<%= config.dirs.dist %>/htdocs/js/main.js'
			//	]
			}

		}

	});

	//grunt.loadNpmTasks('grunt-contrib-uglify');

}