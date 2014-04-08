module.exports = function(grunt) {

	grunt.config('sass', {
		"dev": {
			"files": {
				"htdocs/css/custom.css" : "src/scss/custom.scss"
			},
			"options": {
				"lineNumbers": true,
				"sourcemap": true
			},
			"compass": true
		},
		"prod": {
			"files": {
				"htdocs/css/custom.min.css" : "src/scss/custom.scss"
			},
			"options": {
				"style": "compressed"
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-sass');

}