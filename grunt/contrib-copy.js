module.exports = function(grunt) {

	grunt.config('copy', {
		dist: {
			files: [{
				expand: true,
				dot: true,
				cwd: '<%= config.dirs.src %>',
				dest: '<%= config.dirs.dist %>/htdocs',
				src: [
					'*.html',
					'{,*/}*.{ico,png,txt,json}',
					'.htaccess',
					'images/{,*/}*.{webp,gif,GIF}',
					'fonts/{,*/}*.*',
					//'js/vendor/*.js',
					//'components/**/*'
				]
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

}