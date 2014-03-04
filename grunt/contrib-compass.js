module.exports = function(grunt) {

	grunt.config('compass', {

		options: {
			sassDir: '<%= config.dirs.src %>/scss',
			cssDir: '<%= config.dirs.dist %>/htdocs/css',
			generatedImagesDir: '.tmp/images/generated',
			imagesDir: '<% config.dirs.src %>/images',
			javascriptsDir: '<% config.dirs.src %>/scripts',
			fontsDir: '<% config.dirs.src %>/fonts',
			httpImagesPath: '../images',
			httpGeneratedImagesPath: '../images/generated',
			httpFontsPath: '/fonts',
			relativeAssets: false,
			assetCacheBuster: false
		},

		prod: {
			options: {
				debugInfo: false,
				//outputStyle: 'compressed'
				outputStyle: 'expanded'
			},
			//sourcemap: true
		},

		dev: {
			options: {
				debugInfo: true,
				outputStyle: 'expanded'
			},
			raw: "sass_options = {:sourcemap => true}",
			sourcemap: true
		}

	});

	grunt.loadNpmTasks('grunt-contrib-compass');

}