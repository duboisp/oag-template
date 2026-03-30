const { exec } = require('child_process');

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: ['dist/'],
			tmp: ['tmp/']
		},
		copy: {
			images: {
				expand: true,
				cwd: 'assets/',
				src: ['*.svg'],
				dest: 'dist/'
			}
		},
		concat: {
			css: {
				src: [
					'tmp/css/oag.css',
					'tmp/css/oag-font-css-fix.css'
				],
				dest: 'dist/oag.min.css'
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/oag.min.js': ['assets/oag.js']
				}
			}
		},
		usebanner: {
			taskName: {
				options: {
					position: 'top',
					banner: '/*!\n * @title OAG template \n' +
					' * @license https://github.com/ServiceCanada/oag-template/blob/main/LICENSE\n' +
					' * v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n*/',
					linebreak: true
				},
				files: {
					src: [ 'dist/oag.min.css', 'dist/oag.min.js' ]
				}
			}
		},
	});

	grunt.registerTask('postcss-cli', 'Run PostCSS CLI', function() {
		const done = this.async();
		exec('npx postcss assets/*.css --use postcss-nested --use postcss-custom-properties --use autoprefixer --use cssnano --dir tmp/css --no-map', (err, stdout, stderr) => {
			
			if (err) {
				grunt.log.error(stderr);
				done(false);
			} else {
				grunt.log.writeln(stdout);
				done();
			}
		});
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-uglify');
	grunt.loadNpmTasks('grunt-banner');
	grunt.registerTask('default', ['clean:dist', 'copy', 'postcss-cli', 'concat:css', 'clean:tmp', 'uglify', 'usebanner']);
};
