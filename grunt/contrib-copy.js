module.exports = function(grunt) {

	grunt.config('copy', {
		prod: {
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
		},
		dev: {
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
					'js/**/*.js',
					'components/**/*'
				]
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

}