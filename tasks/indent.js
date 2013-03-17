/*
 * grunt-indent
 * https://github.com/stevenbenner/grunt-indent
 *
 * Copyright (c) 2013 Steven Benner
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('indent', 'Adjust the indentation of files.', function() {

    // get options object with defaults
    var options = this.options({
      style: 'tab',
      size: 1,
      change: 0
    });

    // define one indent string
    var indent = '';
    for (var i = 0; i < options.size; i++) {
      if (options.style === 'tab') {
        indent += '\t';
      } else if (options.style === 'space') {
        indent += ' ';
      }
    }

    // process the files
    this.files.forEach(function(file) {
      file.src.filter(function(filePath) {
        // filter out nonexistent files
        if (!grunt.file.exists(filePath)) {
          grunt.log.warn('Source file "' + filePath + '" not found.');
          return false;
        }
        return true;
      }).forEach(function(src) {
        var dest = file.dest,
          newFile = [];

        // if dest is a folder  use the src file name
        if (grunt.util._.endsWith(dest, '/')) {
          dest += path.basename(src);
        }

        // walk the file line-by-line
        grunt.file.read(src).split('\n').forEach(function(line) {
          var i;
          if (line) {
            if (options.change > 0) {
              for (i = 0; i < options.change; i++) {
                line = indent + line;
              }
            } else if (options.change < 0) {
              i = options.change;
              while (line.indexOf(indent) === 0 && i < 0) {
                line = line.substring(options.size);
                i++;
              }
            }
          }
          newFile.push(line);
        });

        grunt.file.write(dest, newFile.join('\n'));
      });
    });

  });

};
