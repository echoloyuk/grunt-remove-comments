'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.remove_comments = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    // test.expect(1);
    var DEST = 'test/dest/';
    var EXP = 'test/expected/';
    // read all files
    grunt.file.recurse(DEST, function (abspath, rootdir, subdir, filename) {
      console.log(abspath, rootdir, subdir, filename);
      var origin = grunt.file.read(DEST + filename);
      var exp = grunt.file.read(EXP + filename);
      test.equal(origin, exp, 'Verify: ' + DEST + filename);
    });
    

    // var actual = grunt.file.read('test/dest/test1.js');
    // var expected = grunt.file.read('test/expected/test1.js');
    // test.equal(actual, expected, 'Verify dest is correct');

    test.done();
  }
};
