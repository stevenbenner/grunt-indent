'use strict';

var grunt = require('grunt');

exports.indent = {

  increase: function(test) {
    var actualJs = grunt.file.read('tmp/increase/test.js'),
      actualCss = grunt.file.read('tmp/increase/test.css'),
      expectedJs = grunt.file.read('test/expected/increase/test.js'),
      expectedCss = grunt.file.read('test/expected/increase/test.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file indent correctly increased');
    test.equal(actualCss, expectedCss, 'css file indent correctly increased');

    test.done();
  },

  decrease: function(test) {
    var actualJs = grunt.file.read('tmp/decrease/test.js'),
      actualCss = grunt.file.read('tmp/decrease/test.css'),
      expectedJs = grunt.file.read('test/expected/decrease/test.js'),
      expectedCss = grunt.file.read('test/expected/decrease/test.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file indent correctly decreased');
    test.equal(actualCss, expectedCss, 'css file indent correctly decreased');

    test.done();
  },

  jsfile: function(test) {
    var actualJs = grunt.file.read('tmp/test.js'),
      expectedJs = grunt.file.read('test/expected/test.js');

    test.expect(1);

    test.equal(actualJs, expectedJs, 'js file indent correctly increased');

    test.done();
  }

};
