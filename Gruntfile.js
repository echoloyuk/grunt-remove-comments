/*
 * grunt-remove-comments
 * https://github.com/mac/grunt-remove-comments
 *
 * Copyright (c) 2018 echoloyuk
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporterOutput: ''
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    remove_comments: {
      default: {
        options: {
          multiline: true,
          singleline: false,
          keepSpecialComments: false,
          linein: true
        },
        cwd: 'test/origin/',
        src: '**/*.js',
        expand: true,
        dest: 'test/dest/'
      },
      css: {
        options: {
          multiline: true,
          singleline: true,
          keepSpecialComments: true,
          linein: true
        },
        cwd: 'test/origin/',
        src: '**/*.css',
        expand: true,
        dest: 'test/dest/'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'remove_comments', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
