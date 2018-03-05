/*x = 3;
y = 5;
function parent() {
  var a = 2, b = 4;
  var geval = eval; // equivalent to calling eval in the global scope
  geval('function indirectEval() {console.log("In function indirectEval: ",x); return x + y; }'); // Indirect call, uses global scope, returns 3
  indirectEval();
}*/

x = 3;
y = 5;
var geval = eval;
function funcEval() {
  var x = 2;
  var y = 4;
  geval('function indirectEval() { return x + y; }');
  return indirectEval();
}


module.exports = {
  parent: funcEval
}