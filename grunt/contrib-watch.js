module.exports = function(grunt) {

	grunt.config('watch', {
		prod: {
			files: [
				'<%= compass.options.sassDir %>/**/*.scss',
				'<%= config.dirs.src %>/**/*.html',
				'<%= config.dirs.src %>/**/.js',
				'<%= config.dirs.src %>/**/.json',
				'<%= config.dirs.src %>/**/.css'
			],
			tasks: ['build']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

}