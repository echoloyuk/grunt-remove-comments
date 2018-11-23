/*
 * grunt-remove-comments
 * https://github.com/mac/grunt-remove-comments
 *
 * Copyright (c) 2018 echoloyuk
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var RemoveCommentFactory = require('../lib/remove-comment-factorys');

  grunt.registerMultiTask('remove_comments', 'To remove the comments in JS and CSS. Support single line comments and mulitiline comments.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    // console.log(this.files);
    this.files.forEach(function(f) {
      // Concat specified files.
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          var src = grunt.file.read(filepath);
          console.log(src);
          return true;
        }
      });

      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
