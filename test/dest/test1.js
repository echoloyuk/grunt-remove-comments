

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
    return a - b;
  }
  window.sub = sub;
})();
(function () {
  var a = /\/*[a-z]\\*/;
  var str = " /* not a real comment */ ";
  alert("Blah blah blah");
})()