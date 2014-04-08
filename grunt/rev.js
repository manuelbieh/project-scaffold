module.exports = function(grunt) {

	grunt.config('rev', {
		dist: {
			files: {
				src: [
					'<%= config.dirs.dist %>/htdocs/js/{,*/}*.js',
					'<%= config.dirs.dist %>/htdocs/css/{,*/}*.css',
					'<%= config.dirs.dist %>/htdocs/css/{,*/}*.gz',
					//'<%= config.dirs.dist %>/htdocs/img/{,*/}*.{gif,jpeg,jpg,png,webp}',
					//'<%= config.dirs.dist %>/htdocs/fonts/{,*/}*.*'
				]
			}
		}
	});

	//grunt.loadNpmTasks('grunt-rev');

}