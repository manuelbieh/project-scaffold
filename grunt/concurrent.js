module.exports = function(grunt) {

	grunt.config('concurrent', {
        minify: ['usemin', 'imagemin' ]
	});

	//grunt.loadNpmTasks('grunt-concurrent');

}