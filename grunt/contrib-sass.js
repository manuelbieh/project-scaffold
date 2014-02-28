module.exports = function(grunt) {

	grunt.config('sass', {
		"dev": {
			"files": {
				"htdocs/css/layout.css" : "src/scss/master.scss"
			},
			"options": {
				"lineNumbers": true
			}
		},
		"prod": {
			"files": {
				"htdocs/css/layout.min.css" : "src/scss/master.scss"
			},
			"options": {
				"style": "compressed"
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

}