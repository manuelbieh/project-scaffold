module.exports = function(grunt) {

	grunt.config('bowerInstall', {
		js: {
			src: [
			  'src/**/*.html',
			],
			exclude: [/jquery\.js/], // jquery is loaded via cdn
			ignorePath: 'src/',
		}
	});

	//grunt.loadNpmTasks('grunt-bower-install');

}