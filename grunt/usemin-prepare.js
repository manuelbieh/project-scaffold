module.exports = function(grunt) {

	grunt.config('useminPrepare', {
		options: {
			dest: '<%= config.dirs.dist %>/htdocs'
		},
		html: '<%= config.dirs.src %>/index.html'
	});

	//grunt.loadNpmTasks('grunt-usemin');

}