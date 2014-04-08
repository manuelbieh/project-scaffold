module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			stripBanners: false,
		},
		prod: {
			files: {
				'<%= config.dirs.dist %>/htdocs/css/styles.css': [
					'<%= config.dirs.dist %>/htdocs/css/vendor.css',
					'<%= config.dirs.dist %>/htdocs/css/custom.css'
				]
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-concat');

}
