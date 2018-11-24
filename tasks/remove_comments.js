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

  var removeComments = require('../lib/index');

  grunt.registerMultiTask('remove_comments', 'To remove the comments in JS and CSS.', function() {
    var options = this.options({
      multiline: true,
      singleline: true,
      keepSpecialComments: false
    });

    // console.log(this.files);
    this.files.forEach(function(f) {
      f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          var content = grunt.file.read(filepath);
          content = removeComments(content, options);
          
          var dest = f.dest || filepath;
          grunt.file.write(dest, content);
          grunt.log.writeln('File "' + dest + '" created.');
          return true;
        }
      });
      
    });
  });

};
