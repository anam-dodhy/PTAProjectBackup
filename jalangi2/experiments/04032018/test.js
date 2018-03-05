x = 3;
y = 5;
function parent() {
  var x = 2, y = 4;
  var geval = eval; // equivalent to calling eval in the global scope
  geval('function indirectEval() {console.log("In function indirectEval: ",x); return x + y; }'); // Indirect call, uses global scope, throws ReferenceError because `x` is undefined
  indirectEval();
}

parent();