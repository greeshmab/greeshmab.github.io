'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
    'gh-pages': {
        options: {
            base: '_site',
            repo: 'git@github.com:greeshmab/greeshmab.github.io.git',
            branch: 'master'
        },
        src: ['**']
    },
    watch: {
        js: {
            files: [
                '<%= jshint.all %>'
            ],
            tasks: ['jshint','uglify']
        }
    },
    clean: {
        dist: [
            'assets/js/scripts.min.js'
        ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Register tasks
  grunt.registerTask('default', [
      'clean',
      'uglify',
      'imagemin',
      'svgmin',
  ]);
  grunt.registerTask('dev', [
      'watch'
  ]);
  grunt.registerTask('images', [
      'imagemin',
      'svgmin'
  ]);
  grunt.registerTask('deploy', [
      'gh-pages'
  ]);

};
