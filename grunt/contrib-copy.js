module.exports = function(grunt) {

	grunt.config('copy', {
		dist: {
			files: [{
				expand: true,
				dot: true,
				cwd: '<%= config.dirs.src %>',
				dest: '<%= config.dirs.dist %>',
				src: [
					'{,*/}*.{ico,png,txt,json}',
					'.htaccess',
					'images/{,*/}*.{webp,gif,GIF}',
					'css/fonts/{,*/}*.*',
					'js/vendor/*.js'
				]
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

}