J$.iids = {"9":[2,11,2,12],"10":[5,13,5,25],"17":[2,11,2,12],"18":[8,9,8,21],"25":[2,11,2,12],"33":[5,13,5,14],"41":[5,17,5,25],"49":[5,13,5,25],"57":[5,13,5,25],"65":[4,3,6,4],"73":[4,3,6,4],"81":[4,3,6,4],"89":[8,9,8,10],"97":[8,13,8,21],"105":[8,9,8,21],"113":[8,5,8,22],"121":[7,3,9,4],"129":[7,3,9,4],"137":[11,13,11,21],"145":[11,13,11,21],"153":[11,13,11,21],"161":[14,17,14,18],"169":[14,17,14,18],"177":[14,17,14,18],"185":[15,9,15,15],"193":[15,9,15,15],"201":[13,5,16,6],"209":[13,5,16,6],"217":[13,5,16,6],"225":[17,12,17,26],"233":[17,12,17,28],"241":[17,12,17,28],"249":[17,5,17,29],"257":[10,3,18,4],"265":[10,3,18,4],"273":[10,3,18,4],"281":[13,5,16,6],"289":[10,3,18,4],"297":[19,2,19,16],"305":[19,2,19,18],"313":[19,2,19,18],"321":[20,2,20,16],"329":[20,2,20,18],"337":[20,2,20,18],"345":[21,9,21,23],"353":[21,9,21,25],"361":[21,9,21,25],"369":[21,2,21,26],"377":[1,1,22,2],"385":[1,1,22,2],"393":[1,1,22,2],"401":[1,1,22,2],"409":[4,3,6,4],"417":[1,1,22,2],"425":[7,3,9,4],"433":[1,1,22,2],"441":[10,3,18,4],"449":[1,1,22,2],"457":[24,1,24,7],"465":[25,21,25,35],"473":[24,18,26,2],"481":[24,1,26,2],"489":[24,1,26,2],"497":[1,1,27,1],"505":[1,1,22,2],"513":[1,1,27,1],"521":[4,3,6,4],"529":[4,3,6,4],"537":[7,3,9,4],"545":[7,3,9,4],"553":[13,5,16,6],"561":[13,5,16,6],"569":[10,3,18,4],"577":[10,3,18,4],"585":[1,1,22,2],"593":[1,1,22,2],"601":[1,1,27,1],"609":[1,1,27,1],"nBranches":0,"originalCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_declaration.js","instrumentedCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_declaration_jalangi_.js","code":"function functionParent(a) {\r\n  var b = 1;\r\n\r\n  function functionChild3() {\r\n    var z = a + \"Child3\";\r\n  }\r\n  function functionChild4() {\r\n    b = b + \"Child4\";\r\n  }\r\n  function functionChild2() {\r\n    var x = \"Child2\";\r\n\r\n    function functionChild3(){\r\n        var y = 8;\r\n        return\r\n    }\r\n    return functionChild3();\r\n  }\r\n functionChild4()\r\n functionChild3()\r\n return functionChild2();\r\n}\r\n\r\nmodule.exports = {\r\n    functionParent: functionParent\r\n}\r\n"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(497, 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_declaration_jalangi_.js', 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_declaration.js');
            function functionParent(a) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(377, arguments.callee, this, arguments);
                            function functionChild3() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(65, arguments.callee, this, arguments);
                                            arguments = J$.N(73, 'arguments', arguments, 4);
                                            J$.N(81, 'z', z, 0);
                                            var z = J$.X1(57, J$.W(49, 'z', J$.B(10, '+', J$.R(33, 'a', a, 0), J$.T(41, "Child3", 21, false), 0), z, 1));
                                        } catch (J$e) {
                                            J$.Ex(521, J$e);
                                        } finally {
                                            if (J$.Fr(529))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function functionChild4() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(121, arguments.callee, this, arguments);
                                            arguments = J$.N(129, 'arguments', arguments, 4);
                                            J$.X1(113, b = J$.W(105, 'b', J$.B(18, '+', J$.R(89, 'b', b, 0), J$.T(97, "Child4", 21, false), 0), b, 0));
                                        } catch (J$e) {
                                            J$.Ex(537, J$e);
                                        } finally {
                                            if (J$.Fr(545))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function functionChild2() {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(257, arguments.callee, this, arguments);
                                            function functionChild3() {
                                                jalangiLabel3:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(201, arguments.callee, this, arguments);
                                                            arguments = J$.N(209, 'arguments', arguments, 4);
                                                            J$.N(217, 'y', y, 0);
                                                            var y = J$.X1(177, J$.W(169, 'y', J$.T(161, 8, 22, false), y, 1));
                                                            return J$.X1(193, J$.Rt(185, undefined));
                                                        } catch (J$e) {
                                                            J$.Ex(553, J$e);
                                                        } finally {
                                                            if (J$.Fr(561))
                                                                continue jalangiLabel3;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }
                                            arguments = J$.N(265, 'arguments', arguments, 4);
                                            J$.N(273, 'x', x, 0);
                                            functionChild3 = J$.N(289, 'functionChild3', J$.T(281, functionChild3, 12, false, 201), 0);
                                            var x = J$.X1(153, J$.W(145, 'x', J$.T(137, "Child2", 21, false), x, 1));
                                            return J$.X1(249, J$.Rt(241, J$.F(233, J$.R(225, 'functionChild3', functionChild3, 0), 0)()));
                                        } catch (J$e) {
                                            J$.Ex(569, J$e);
                                        } finally {
                                            if (J$.Fr(577))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(385, 'arguments', arguments, 4);
                            a = J$.N(393, 'a', a, 4);
                            J$.N(401, 'b', b, 0);
                            functionChild3 = J$.N(417, 'functionChild3', J$.T(409, functionChild3, 12, false, 65), 0);
                            functionChild4 = J$.N(433, 'functionChild4', J$.T(425, functionChild4, 12, false, 121), 0);
                            functionChild2 = J$.N(449, 'functionChild2', J$.T(441, functionChild2, 12, false, 257), 0);
                            var b = J$.X1(25, J$.W(17, 'b', J$.T(9, 1, 22, false), b, 1));
                            J$.X1(313, J$.F(305, J$.R(297, 'functionChild4', functionChild4, 0), 0)());
                            J$.X1(337, J$.F(329, J$.R(321, 'functionChild3', functionChild3, 0), 0)());
                            return J$.X1(369, J$.Rt(361, J$.F(353, J$.R(345, 'functionChild2', functionChild2, 0), 0)()));
                        } catch (J$e) {
                            J$.Ex(585, J$e);
                        } finally {
                            if (J$.Fr(593))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            functionParent = J$.N(513, 'functionParent', J$.T(505, functionParent, 12, false, 377), 0);
            J$.X1(489, J$.P(481, J$.R(457, 'module', module, 2), 'exports', J$.T(473, {
                functionParent: J$.R(465, 'functionParent', functionParent, 1)
            }, 11, false), 0));
        } catch (J$e) {
            J$.Ex(601, J$e);
        } finally {
            if (J$.Sr(609)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
