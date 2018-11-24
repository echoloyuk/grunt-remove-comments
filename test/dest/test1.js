(function () {
  var a = 5;
  var b = 6;
  function foo() {
    return a + b;
  }
  foo();
  function add(_a, _b) {
    return _a + _b;
  }
  window.add = add;
})();
(function () {
  function sub(a, b) { /** function name. single line comments */
    return a - b;
  }
  window.sub = sub; // mount in global. single line comments
})()