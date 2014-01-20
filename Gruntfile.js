module.exports = function(grunt) {
  "use strict";

	grunt.initConfig({
    nunjucks: {
      precompile: {
        src: 'gira/templates/*',
        dest: 'gira/templates.js'
      }
    },
		concat: {
			dev: {
				src: ['gira/initVariableDev.js','gira/gira.js'],
				dest: 'data/gira.all.js'
			},
			prod: {
				src: ['gira/initProdVariables.js','gira/gira.js'],
				dest: 'data/gira.all.js'
			}
		},
		copy: {
      javascripts: {
        files: [{
          cwd     : 'gira/',
          src     : ['libs/*.js','gira.all.js','templates.js'], 
          dest    : 'data/',
          flatten : true,
          expand  : true
        }]
      }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-nunjucks');
	grunt.registerTask('default', ['nunjucks', 'concat:prod','copy:javascripts']);
	grunt.registerTask('dev', ['nunjucks', 'concat:dev']);
};
