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

  grunt.registerMultiTask('indent', 'Change the indentation of files.', function() {

    // get options object with defaults
    var options = this.options({
      style: 'tab',
      size: 1,
      change: 0
    });

    // define one indent string
    var indent = '';
    if (options.style === 'tab') {
      indent = grunt.util._.repeat('\t', options.size);
    } else if (options.style === 'space') {
      indent = grunt.util._.repeat(' ', options.size);
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
        grunt.util._.lines(grunt.file.read(src)).forEach(function(line) {
          if (line) {
            if (options.change > 0) {
              line = grunt.util._.repeat(indent, options.change) + line;
            } else if (options.change < 0) {
              var i = options.change;
              while (grunt.util._.startsWith(line, indent) && i < 0) {
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
