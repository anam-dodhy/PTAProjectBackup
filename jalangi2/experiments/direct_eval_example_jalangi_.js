J$.iids = {"9":[10,5,10,6],"17":[10,5,10,6],"25":[10,1,10,7],"33":[11,5,11,6],"41":[11,5,11,6],"49":[11,1,11,7],"57":[13,10,13,11],"65":[13,10,13,11],"73":[13,10,13,11],"81":[14,10,14,11],"89":[14,10,14,11],"97":[14,10,14,11],"105":[15,7,15,48],"113":[15,7,15,48],"121":[15,2,15,50],"129":[16,9,16,19],"137":[16,9,16,21],"145":[16,9,16,21],"153":[16,2,16,22],"161":[12,1,17,2],"169":[12,1,17,2],"177":[12,1,17,2],"185":[12,1,17,2],"193":[19,1,19,7],"201":[20,11,20,19],"209":[19,18,21,2],"217":[19,1,21,2],"225":[19,1,21,2],"233":[1,1,21,2],"241":[12,1,17,2],"249":[1,1,21,2],"257":[12,1,17,2],"265":[12,1,17,2],"273":[1,1,21,2],"281":[1,1,21,2],"nBranches":0,"originalCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\direct_eval_example.js","instrumentedCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\direct_eval_example_jalangi_.js","code":"/*x = 3;\r\ny = 5;\r\nfunction parent() {\r\n  var x = 2, y = 4;\r\n  // Direct call, uses local scope, result is 6\r\n  eval('function directEval() {console.log(\"In function directEval: \",x); return x + y; }');\r\n  directEval();\r\n}*/\r\n\r\nx = 3;\r\ny = 5;\r\nfunction funcEval() {\r\n var x = 2;\r\n var y = 4;\r\n eval('function directEval() { return x + y; }');\r\n return directEval();\r\n}\r\n\r\nmodule.exports = {\r\n  parent: funcEval\r\n}"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(233, 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\direct_eval_example_jalangi_.js', 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\direct_eval_example.js');
            function funcEval() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            J$.N(177, 'x', x, 0);
                            J$.N(185, 'y', y, 0);
                            var x = J$.X1(73, J$.W(65, 'x', J$.T(57, 2, 22, false), x, 1));
                            var y = J$.X1(97, J$.W(89, 'y', J$.T(81, 4, 22, false), y, 1));
                            J$.X1(121, eval(J$.instrumentEvalCode(J$.T(105, 'function directEval() { return x + y; }', 21, false), 113, true)));
                            return J$.X1(153, J$.Rt(145, J$.F(137, J$.R(129, 'directEval', directEval, 2), 0)()));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            funcEval = J$.N(249, 'funcEval', J$.T(241, funcEval, 12, false, 161), 0);
            J$.X1(25, x = J$.W(17, 'x', J$.T(9, 3, 22, false), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            J$.X1(49, y = J$.W(41, 'y', J$.T(33, 5, 22, false), J$.I(typeof y === 'undefined' ? undefined : y), 4));
            J$.X1(225, J$.P(217, J$.R(193, 'module', module, 2), 'exports', J$.T(209, {
                parent: J$.R(201, 'funcEval', funcEval, 1)
            }, 11, false), 0));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
