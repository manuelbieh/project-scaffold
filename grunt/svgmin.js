module.exports = function(grunt) {

	grunt.config('svgmin', {
		options: {
			 plugins: [
				{ cleanupAttrs: true },
				{ cleanupEnableBackground: true },
				{ cleanupIDs: true },
				{ cleanupNumericValues: true },
				{ collapseGroups: true },
				{ convertColors: true },
				{ convertPathData: true },
				{ convertShapeToPath: true },
				{ convertStyleToAttrs: true },
				{ convertTransform: true },
				{ mergePaths: true },
				{ moveElemsAttrsToGroup: true },
				{ moveGroupAttrsToElems: true },
				{ removeComments: true },
				{ removeDoctype: true },
				{ removeEditorsNSData: true },
				{ removeEmptyAttrs: true },
				{ removeEmptyContainers: true },
				{ removeEmptyText: true },
				{ removeHiddenElems: true },
				{ removeMetadata: true },
				{ removeNonInheritableGroupAttrs: true },
				{ removeRasterImages: true },
				{ removeTitle: true },
				{ removeUnknownsAndDefaults: true },
				{ removeUnusedNS: true },
				{ removeUselessStrokeAndFill: false }, // Enabling this may cause small details to be removed
				{ removeViewBox: false }, // Keep the viewBox because that's where illustrator hides the SVG dimensions
				{ removeXMLProcInst: false }, // Enabling this breaks grunticon because it removes the XML header
				{ sortAttrs: true },
				{ transformsWithOnePath: false } // Enabling this breaks Illustrator SVGs with complex text
			]
		},
		all: {
			files: [
				{
					cwd: '<%= config.dirs.src %>/img/',
					dest: '<%= config.dirs.dist %>/htdocs/img/',
					expand: true,
					ext: '.svg',
					src: ['**/*.svg']
				}
			]
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-imagemin');

}