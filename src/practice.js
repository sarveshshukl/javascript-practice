function func() {
  var length = parseInt(document.getElementById("len").value);
  var width = parseInt(document.getElementById("wid").value);

  let res2 = x(length, width);
  let result = y(length, width);

  document.getElementById("res").innerText = res2;
  document.getElementById("res1").innerText = result;
}
function x(l, b) {
  return l * b;
}
function y(l, b) {
  return 2 * (l + b);
}
