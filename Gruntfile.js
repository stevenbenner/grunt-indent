/*
 * grunt-indent
 * https://github.com/stevenbenner/grunt-indent
 *
 * Copyright (c) 2017 Steven Benner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    clean: {
      tests: ['tmp'],
    },
    indent: {
      increaseWithSpaces: {
        src: ['test/fixtures/*.spaces.js', 'test/fixtures/*.spaces.css'],
        dest: 'tmp/increase/',
        options: {
          style: 'space',
          size: 2,
          change: 1
        }
      },
      decreaseWithSpaces: {
        src: ['test/fixtures/*.spaces.js', 'test/fixtures/*.spaces.css'],
        dest: 'tmp/decrease/',
        options: {
          style: 'space',
          size: 2,
          change: -2
        }
      },
      increaseWithTabs: {
        src: ['test/fixtures/*.tabs.js', 'test/fixtures/*.tabs.css'],
        dest: 'tmp/increase/',
        options: {
          style: 'tab',
          size: 1,
          change: 1
        }
      },
      decreaseWithTabs: {
        src: ['test/fixtures/*.tabs.js', 'test/fixtures/*.tabs.css'],
        dest: 'tmp/decrease/',
        options: {
          style: 'tab',
          size: 1,
          change: -1
        }
      },
      jsfile: {
        src: 'test/fixtures/test.spaces.js',
        dest: 'tmp/test.js',
        options: {
          style: 'space',
          size: 2,
          change: 2
        }
      }
    },
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint', 'clean', 'indent', 'nodeunit']);

};
