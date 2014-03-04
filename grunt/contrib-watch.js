module.exports = function(grunt) {

	grunt.config('watch', {

		prod: {

			options: {
				livereload: true
			},

			files: [
				'<%= compass.options.sassDir %>/**/*.scss',
				'<%= config.dirs.src %>/**/*.{html,js,json,css,scss,less}'
			],

			tasks: ['build']

		},

		bower: {
			options: {
				livereload: true
			},
			files: [
				'<%= config.dirs.src %>/components/*'
			],
			tasks: ['bowerInstall']
		},

		livereload: {

			options: {
				livereload: '<%= connect.options.livereload %>'
			},

			files: [
				'<%= config.dirs.src %>/{,*/}*.html',
				'<%= config.dirs.dist %>/{,*/}*.css',
				'<%= config.dirs.dist %>/{,*/}*.js',
				'<%= config.dirs.dist %>/{,*/}*.html',
				'.tmp/styles/{,*/}*.css',
				'<%= config.dirs.src %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
			]

		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');

}