module.exports = function(grunt) {

	grunt.config('watch', {
		prod: {
			files: '<%= compass.options.sassDir %>/**/*.scss',
			tasks: ['prod']
		},
		dev: {
			files: '<%= compass.options.sassDir %>/**/*.scss',
			tasks: ['dev']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

}