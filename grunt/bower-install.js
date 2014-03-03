module.exports = function(grunt) {

	grunt.config('bowerInstall', {
		js: {
			src: [
			  'src/**/*.html',
			],
			exclude: [/\.css/, /jquery/], // jquery is loaded via cdn
			ignorePath: 'src/',
		},
		css: {
			src: [
			'src/**/*.html',
			],
			exclude: [/\.js/]
		}
	});

	grunt.loadNpmTasks('grunt-bower-install');

}