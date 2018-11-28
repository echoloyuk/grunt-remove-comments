(function () {
  var a = 1;
  var b = 2;
  var foo = function () {
    return a + b;
  }
})();

(function () {
  function add(a, b) {
    return a + b;
  }
  window.add = add;
})();

(function () {
  function sub(a, b) {
    var c = 5;  var d = 6; 
    return a - b;
  }
  window.sub = sub;
})();
(function () {
  alert("Hello");
})()