module.exports = function(grunt) {

	grunt.config('connect', {

		options: {
			port: 9009,
			livereload: 35731, 
			// Default is 35729. Feel free to change when working on several projects
			// at the same time to prevent "port already in use" errors
			useAvailablePort: true,
			hostname: 'localhost' // use 0.0.0.0 to make it available to public. Note: 0.0.0.0 might be fucked up on windows machines.
		},
		rules: [
			{
				from: '/example.html',
				to: '/index.html'
			}
		],
		livereload: {

			options: {

				open: true,
				base: [
					'.tmp',
					'<%= config.dirs.dist %>/htdocs'
				],
				middleware: function(connect, options) {

					var middlewares = [];

					// Add RewriteRules support
					middlewares.push(
						require('grunt-connect-rewrite/lib/utils').rewriteRequest
					);

					if (!Array.isArray(options.base)) {
						options.base = [options.base];
					}

					var directory = options.directory || options.base[options.base.length - 1];
					options.base.forEach(function (base) {
						middlewares.push(connect.static(base));
					});

					// Make directory browse-able.
					middlewares.push(connect.directory(directory));

					return middlewares;

				}

			},

		},

		dist: {
			options: {
				open: true,
				base: '<%= config.dirs.dist %>/htdocs',
				livereload: false,
				middleware: '<%= connect.livereload.options.middleware %>'
			},
		}

	});

	//grunt.loadNpmTasks('grunt-contrib-connect');

}
