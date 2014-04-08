module.exports = function(grunt) {

	grunt.config('usemin', {
		html: ['<%= config.dirs.dist %>/{,*/}*.html'],
		//html: ['<%= config.dirs.dist %>/htdocs/index.html']
		css: ['<%= config.dirs.dist %>/css/{,*/}*.css']
	});

	//grunt.loadNpmTasks('grunt-usemin');

}