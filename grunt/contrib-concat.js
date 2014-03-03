module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			stripBanners: false,
		},
		prod: {
			files: {
				'<%= config.dirs.dist %>/htdocs/css/styles.css': [
					'<%= config.dirs.src %>/components/normalize.css/*.css',
					'<%= config.dirs.dist %>/htdocs/css/custom.css'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

}
