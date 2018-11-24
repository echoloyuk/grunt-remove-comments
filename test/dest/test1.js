(function () {
  var a = 1;
  var b = 2;
  var foo = function () {
    return a + b;
  }
})();

(function () {
  function add(a, b) {
    return a + b;/** block comments. */
  }
  window.add = add;// line comments.
})();

(function () {
  function sub(a, b) {/* another comment. block comment. */
    return a - b;
  }
  window.sub = sub;
})();
(function () {
  var a = /\/*[a-z]\\*/;
  var regex = //*.*/;
  var str = " /* not a real comment */ ";
  alert("Blah blah blah");
})()