const { exec } = require('child_process');

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
            dist: ['dist/']
		},

		copy: {
			images: {
				expand: true,
				cwd: 'assets/img/',
				src: ['OAG-Logo-EN_first-Black.svg', 'OAG-Logo-EN_first-White.svg'],
				dest: 'dist/assets/img/'
			},
			css: {
				expand: true,
				cwd: 'dist/assets/css/',
				src: '**/*.min.css',
				dest: '_site/assets/css/'
			}
		},		

        shell: {
            jekyllServe: {
                command: 'bundle exec jekyll serve --livereload'
            }
        }
	});

	grunt.registerTask('postcss-cli', 'Run PostCSS CLI', function() {
        const done = this.async();
        exec('npx postcss assets/css/oag.css --use postcss-nested --use postcss-custom-properties --use autoprefixer --use cssnano -o dist/assets/css/oag.min.css --no-map', (err, stdout, stderr) => {
			

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
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['clean', 'postcss-cli', 'copy']);
};
