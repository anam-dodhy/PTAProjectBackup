function functionParent(a) {
  var b = 1;

  function functionChild3() {
    var z = a + "Child3";
  }
  function functionChild4() {
    b = b + "Child4";
  }
  function functionChild2() {
    var x = "Child2";

    function functionChild3(){
        var y = 8;
        return
    }
    return functionChild3();
  }
 functionChild4()
 functionChild3()
 return functionChild2();
}

module.exports = {
    functionParent: functionParent
}
