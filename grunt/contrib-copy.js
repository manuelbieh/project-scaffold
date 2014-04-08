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
					'img/{,*/}*.{webp,gif,GIF,jpeg,jpg}',
					'fonts/{,*/}*.*',
					'js/**/*.js',
					'css/**/*.css',
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
					'img/{,*/}*.{webp,gif,GIF,jpeg,jpg}',
					'fonts/{,*/}*.*',
					'js/**/*.js',
					'css/**/*.css',
				//	'components/**/*'
				]
			}]
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-copy');

}