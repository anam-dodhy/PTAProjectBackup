J$.iids = {"9":[10,5,10,6],"17":[10,5,10,6],"25":[10,1,10,7],"33":[11,5,11,6],"41":[11,5,11,6],"49":[11,1,11,7],"57":[12,13,12,17],"65":[12,13,12,17],"73":[12,13,12,17],"81":[14,11,14,12],"89":[14,11,14,12],"97":[14,11,14,12],"105":[15,11,15,12],"113":[15,11,15,12],"121":[15,11,15,12],"129":[16,3,16,8],"137":[16,9,16,52],"145":[16,3,16,53],"153":[16,3,16,54],"161":[17,10,17,22],"169":[17,10,17,24],"177":[17,10,17,24],"185":[17,3,17,25],"193":[13,1,18,2],"201":[13,1,18,2],"209":[13,1,18,2],"217":[13,1,18,2],"225":[21,1,21,7],"233":[22,11,22,19],"241":[21,18,23,2],"249":[21,1,23,2],"257":[21,1,23,2],"265":[1,1,23,2],"273":[1,1,23,2],"281":[13,1,18,2],"289":[1,1,23,2],"297":[13,1,18,2],"305":[13,1,18,2],"313":[1,1,23,2],"321":[1,1,23,2],"nBranches":0,"originalCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\indirect_eval_example.js","instrumentedCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\indirect_eval_example_jalangi_.js","code":"/*x = 3;\r\ny = 5;\r\nfunction parent() {\r\n  var a = 2, b = 4;\r\n  var geval = eval; // equivalent to calling eval in the global scope\r\n  geval('function indirectEval() {console.log(\"In function indirectEval: \",x); return x + y; }'); // Indirect call, uses global scope, returns 3\r\n  indirectEval();\r\n}*/\r\n\r\nx = 3;\r\ny = 5;\r\nvar geval = eval;\r\nfunction funcEval() {\r\n  var x = 2;\r\n  var y = 4;\r\n  geval('function indirectEval() { return x + y; }');\r\n  return indirectEval();\r\n}\r\n\r\n\r\nmodule.exports = {\r\n  parent: funcEval\r\n}"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(265, 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\indirect_eval_example_jalangi_.js', 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\indirect_eval_example.js');
            function funcEval() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            J$.N(209, 'x', x, 0);
                            J$.N(217, 'y', y, 0);
                            var x = J$.X1(97, J$.W(89, 'x', J$.T(81, 2, 22, false), x, 1));
                            var y = J$.X1(121, J$.W(113, 'y', J$.T(105, 4, 22, false), y, 1));
                            J$.X1(153, J$.F(145, J$.R(129, 'geval', geval, 1), 0)(J$.T(137, 'function indirectEval() { return x + y; }', 21, false)));
                            return J$.X1(185, J$.Rt(177, J$.F(169, J$.R(161, 'indirectEval', indirectEval, 2), 0)()));
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(273, 'geval', geval, 0);
            funcEval = J$.N(289, 'funcEval', J$.T(281, funcEval, 12, false, 193), 0);
            J$.X1(25, x = J$.W(17, 'x', J$.T(9, 3, 22, false), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            J$.X1(49, y = J$.W(41, 'y', J$.T(33, 5, 22, false), J$.I(typeof y === 'undefined' ? undefined : y), 4));
            var geval = J$.X1(73, J$.W(65, 'geval', J$.R(57, 'eval', eval, 2), geval, 3));
            J$.X1(257, J$.P(249, J$.R(225, 'module', module, 2), 'exports', J$.T(241, {
                parent: J$.R(233, 'funcEval', funcEval, 1)
            }, 11, false), 0));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
