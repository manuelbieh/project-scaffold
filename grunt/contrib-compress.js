module.exports = function(grunt) {

	var fileConfig = {
		svg: [{ expand: true, cwd: '<%= config.dirs.dist %>/htdocs/', dest: '<%= config.dirs.dist %>/htdocs/', src: ['**/*.svg'], ext: '.svg.gz' }],
		 js: [{ expand: true, cwd: '<%= config.dirs.dist %>/htdocs/', dest: '<%= config.dirs.dist %>/htdocs/', src: ['**/*.js'], ext: '.js.gz' }],
		css: [{ expand: true, cwd: '<%= config.dirs.dist %>/htdocs/', dest: '<%= config.dirs.dist %>/htdocs/', src: ['**/*.css'], ext: '.css.gz' }],
	};

	grunt.config('compress', {
		svg: {
			options: {
				mode: 'gzip'
			},
			files: fileConfig.svg
		},
		js: {
			options: {
				mode: 'gzip'
			},
			files: fileConfig.js
		},
		css: {
			options: {
				mode: 'gzip'
			},
			files: fileConfig.css
		},
		gzip: {
			options: {
				mode: 'gzip'
			},
			files: (function(fileConfig) {
				var all = [];
				Array.prototype.forEach.call(Object.keys(fileConfig), function(key) {
					Array.prototype.forEach.call(fileConfig[key], function(data) {
						all.push(data);
					});
				});
				return all;
			}(fileConfig))
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-compress');

}
