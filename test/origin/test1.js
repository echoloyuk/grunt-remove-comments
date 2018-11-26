/**
 * This js is a test.
 * multiline comments
 */

// function begins. singleline comments.
(function () {
  var a = 1;
  var b = 2;
  /**
   * foo is a function.
   * Multiline comments
   */
  var foo = function () {
    // direct return. sinle line comments.
    return a + b;
  }
  // we do not return any function or var. singleline comments
})();

// new function. single line comments.

(function () {
  /**
   * Doc comments
   * @param {*} a 
   * @param {*} b
   * This is a test. multiline comments. 
   */
  function add(a, b) {
    return a + b;/** block comments. */
  }
  /* this is a single asterisk comment. singleline comments */
  window.add = add;// line comments.
})();

/* ===================================
  this is a title comment
  multiline comments.
=================================== */

(function () {
  function sub(a, b) {/* another comment. block comment. */
    return a - b;
  }
  /**
   * this is a test comment
   * multiline comments.
   */
  window.sub = sub;
})();

/*!
 * An important comment
 * taking up
 * multiple lines
 */
(function () {
  var a = /\/*[a-z]\\*/;
  var str = " /* not a real comment */ ";
  /*@cc_on @*/
  /*@if (@_jscript_version == 4)
  alert("JavaScript version 4");
  @else @*/
  alert("Blah blah blah");
  /*@end @*/
})()