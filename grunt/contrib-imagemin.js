module.exports = function(grunt) {

	grunt.config('imagemin', {
		options: {
			optimizationLevel: 7
		},
		dist: {
			files: [
				{
					cwd: '<%= config.dirs.src %>/img/',
					dest: '<%= config.dirs.dist %>/htdocs/img/',
					expand: true,
					src: ['**/*.{jpg,png,gif}']
				}
			]
		},
	});

	//grunt.loadNpmTasks('grunt-contrib-imagemin');

}