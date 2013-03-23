'use strict';

var grunt = require('grunt');

function getNormalizedFile(filePath) {
  return grunt.util.normalizelf(grunt.file.read(filePath));
}

exports.indent = {

  increase: function(test) {
    var actualJs = getNormalizedFile('tmp/increase/test.js'),
      actualCss = getNormalizedFile('tmp/increase/test.css'),
      expectedJs = getNormalizedFile('test/expected/increase/test.js'),
      expectedCss = getNormalizedFile('test/expected/increase/test.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file indent correctly increased');
    test.equal(actualCss, expectedCss, 'css file indent correctly increased');

    test.done();
  },

  decrease: function(test) {
    var actualJs = getNormalizedFile('tmp/decrease/test.js'),
      actualCss = getNormalizedFile('tmp/decrease/test.css'),
      expectedJs = getNormalizedFile('test/expected/decrease/test.js'),
      expectedCss = getNormalizedFile('test/expected/decrease/test.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file indent correctly decreased');
    test.equal(actualCss, expectedCss, 'css file indent correctly decreased');

    test.done();
  },

  jsfile: function(test) {
    var actualJs = getNormalizedFile('tmp/test.js'),
      expectedJs = getNormalizedFile('test/expected/test.js');

    test.expect(1);

    test.equal(actualJs, expectedJs, 'js file indent correctly increased');

    test.done();
  }

};
