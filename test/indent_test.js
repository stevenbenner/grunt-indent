'use strict';

var grunt = require('grunt');

function getNormalizedFile(filePath) {
  return grunt.util.normalizelf(grunt.file.read(filePath));
}

exports.indent = {

  increaseWithSpaces: function(test) {
    var actualJs = getNormalizedFile('tmp/increase/test.spaces.js'),
      actualCss = getNormalizedFile('tmp/increase/test.spaces.css'),
      expectedJs = getNormalizedFile('test/expected/increase/test.spaces.js'),
      expectedCss = getNormalizedFile('test/expected/increase/test.spaces.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file with spaces indent correctly increased');
    test.equal(actualCss, expectedCss, 'css file with spaces indent correctly increased');

    test.done();
  },

  decreaseWithSpaces: function(test) {
    var actualJs = getNormalizedFile('tmp/decrease/test.spaces.js'),
      actualCss = getNormalizedFile('tmp/decrease/test.spaces.css'),
      expectedJs = getNormalizedFile('test/expected/decrease/test.spaces.js'),
      expectedCss = getNormalizedFile('test/expected/decrease/test.spaces.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file with spaces indent correctly decreased');
    test.equal(actualCss, expectedCss, 'css file with spaces indent correctly decreased');

    test.done();
  },

  increaseWithTabs: function(test) {
    var actualJs = getNormalizedFile('tmp/increase/test.tabs.js'),
      actualCss = getNormalizedFile('tmp/increase/test.tabs.css'),
      expectedJs = getNormalizedFile('test/expected/increase/test.tabs.js'),
      expectedCss = getNormalizedFile('test/expected/increase/test.tabs.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file with tabs indent correctly increased');
    test.equal(actualCss, expectedCss, 'css file with tabs indent correctly increased');

    test.done();
  },

  decreaseWithTabs: function(test) {
    var actualJs = getNormalizedFile('tmp/decrease/test.tabs.js'),
      actualCss = getNormalizedFile('tmp/decrease/test.tabs.css'),
      expectedJs = getNormalizedFile('test/expected/decrease/test.tabs.js'),
      expectedCss = getNormalizedFile('test/expected/decrease/test.tabs.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file with tabs indent correctly decreased');
    test.equal(actualCss, expectedCss, 'css file with tabs indent correctly decreased');

    test.done();
  },

  jsfile: function(test) {
    var actualJs = getNormalizedFile('tmp/test.js'),
      expectedJs = getNormalizedFile('test/expected/test.js');

    test.expect(1);

    test.equal(actualJs, expectedJs, 'js file with spaces indent correctly increased');

    test.done();
  }

};
