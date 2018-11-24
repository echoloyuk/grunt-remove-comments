/**
 * This is a test js file. for test comments syntax
 * multiline comments
 */

/**
 * ES5
 * multiline comments
 */
(function () {
  /** This is a test single line comments. single comments */
  var a = 5;
  var b = 6;
  // This function is used in closure. single comments
  function foo() {
    return a + b;
  }
  foo();

  /**
   * 
   * @param {*} _a add params1 
   * @param {*} _b add params2
   * returns _a + _b
   */
  function add(_a, _b) {
    return _a + _b;
  }

  // mount on the global.
  window.add = add;
})();

/**
 * Test for single line comments plugin in the code
 */
(function () {
  function sub(a, b) { /** function name. single line comments */
    return a - b;
  }
  window.sub = sub; // mount in global. single line comments
})()