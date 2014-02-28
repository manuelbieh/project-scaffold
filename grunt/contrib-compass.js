module.exports = function(grunt) {

	grunt.config('compass', {

		options: {
			sassDir: '<%= config.dirs.src %>/scss',
			cssDir: '<%= config.dirs.dist %>/htdocs/css',
			generatedImagesDir: '.tmp/images/generated',
			imagesDir: '<% config.dirs.src %>/images',
			javascriptsDir: '<% config.dirs.src %>/scripts',
			fontsDir: '<% config.dirs.src %>/styles/fonts',
			httpImagesPath: '../images',
			httpGeneratedImagesPath: '../images/generated',
			httpFontsPath: '/styles/fonts',
			relativeAssets: false,
			assetCacheBuster: false
		},

		prod: {
			options: {
				generatedImagesDir: '<%= config.dirs.dist %>/images/generated',
				debugInfo: false,
				outputStyle: 'compressed'
			}
		},

		dev: {
			options: {
				debugInfo: true,
				outputStyle: 'expanded'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-compass');

}