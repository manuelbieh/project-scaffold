module.exports = function(grunt) {

	grunt.config('cssmin', {
	//	prod: {
	//		files: {
	//			'<%= config.dirs.dist %>/htdocs/css/styles.css': [
				//	'.tmp/concat/css/vendor.css',
	//				'<%= config.dirs.dist %>/htdocs/css/styles.css',
	//			]
	//		}
	//	}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

}
