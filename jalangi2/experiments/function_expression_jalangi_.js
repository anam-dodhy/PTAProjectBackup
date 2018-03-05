J$.iids = {"9":[2,9,2,10],"10":[4,14,4,22],"17":[2,9,2,10],"18":[6,21,6,26],"25":[2,9,2,10],"33":[4,14,4,19],"41":[4,21,4,22],"49":[4,14,4,22],"57":[4,14,4,22],"65":[6,21,6,22],"73":[6,25,6,26],"81":[6,21,6,26],"89":[6,21,6,26],"97":[7,20,7,21],"105":[7,20,7,21],"113":[7,13,7,22],"121":[5,18,8,12],"129":[5,18,8,12],"137":[5,18,8,12],"145":[5,18,8,12],"153":[5,18,8,12],"161":[5,18,8,12],"169":[5,18,8,12],"177":[9,18,9,23],"185":[9,18,9,25],"193":[9,18,9,25],"201":[9,11,9,25],"209":[3,12,10,8],"217":[3,12,10,8],"225":[3,12,10,8],"233":[3,12,10,8],"241":[3,12,10,8],"249":[3,12,10,8],"257":[3,12,10,8],"265":[3,12,10,8],"273":[11,10,11,13],"281":[11,10,11,15],"289":[11,10,11,15],"297":[11,3,11,16],"305":[1,11,12,2],"313":[1,11,12,2],"321":[1,11,12,2],"329":[1,11,12,2],"337":[1,11,12,2],"345":[1,11,12,2],"353":[1,11,12,2],"361":[1,11,12,2],"369":[1,11,12,2],"377":[15,1,15,7],"385":[16,18,16,21],"393":[15,18,17,2],"401":[15,1,17,2],"409":[15,1,17,2],"417":[1,1,18,1],"425":[1,1,18,1],"433":[5,18,8,12],"441":[5,18,8,12],"449":[3,12,10,8],"457":[3,12,10,8],"465":[1,11,12,2],"473":[1,11,12,2],"481":[1,1,18,1],"489":[1,1,18,1],"nBranches":0,"originalCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_expression.js","instrumentedCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_expression_jalangi_.js","code":"var one = function functionOne(param) {\r\n  var b=1;\r\n  var two= function functionTwo(){\r\n     var v = param +1;\r\n     var three = function functionThree(){\r\n            var c = c + 1;\r\n            return c;\r\n          }\r\n          return three()\r\n      }\r\n  return two();\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    functionOne: one\r\n}\r\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(417, 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_expression_jalangi_.js', 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\function_expression.js');
            J$.N(425, 'one', one, 0);
            var one = J$.X1(369, J$.W(361, 'one', J$.T(353, function functionOne(param) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            functionOne = J$.N(321, 'functionOne', functionOne, 0);
                            param = J$.N(329, 'param', param, 4);
                            J$.N(337, 'b', b, 0);
                            J$.N(345, 'two', two, 0);
                            var b = J$.X1(25, J$.W(17, 'b', J$.T(9, 1, 22, false), b, 1));
                            var two = J$.X1(265, J$.W(257, 'two', J$.T(249, function functionTwo() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(209, arguments.callee, this, arguments);
                                            arguments = J$.N(217, 'arguments', arguments, 4);
                                            functionTwo = J$.N(225, 'functionTwo', functionTwo, 0);
                                            J$.N(233, 'v', v, 0);
                                            J$.N(241, 'three', three, 0);
                                            var v = J$.X1(57, J$.W(49, 'v', J$.B(10, '+', J$.R(33, 'param', param, 0), J$.T(41, 1, 22, false), 0), v, 1));
                                            var three = J$.X1(169, J$.W(161, 'three', J$.T(153, function functionThree() {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(121, arguments.callee, this, arguments);
                                                            arguments = J$.N(129, 'arguments', arguments, 4);
                                                            functionThree = J$.N(137, 'functionThree', functionThree, 0);
                                                            J$.N(145, 'c', c, 0);
                                                            var c = J$.X1(89, J$.W(81, 'c', J$.B(18, '+', J$.R(65, 'c', c, 0), J$.T(73, 1, 22, false), 0), c, 1));
                                                            return J$.X1(113, J$.Rt(105, J$.R(97, 'c', c, 0)));
                                                        } catch (J$e) {
                                                            J$.Ex(433, J$e);
                                                        } finally {
                                                            if (J$.Fr(441))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 121), three, 1));
                                            return J$.X1(201, J$.Rt(193, J$.F(185, J$.R(177, 'three', three, 0), 0)()));
                                        } catch (J$e) {
                                            J$.Ex(449, J$e);
                                        } finally {
                                            if (J$.Fr(457))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 209), two, 1));
                            return J$.X1(297, J$.Rt(289, J$.F(281, J$.R(273, 'two', two, 0), 0)()));
                        } catch (J$e) {
                            J$.Ex(465, J$e);
                        } finally {
                            if (J$.Fr(473))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 305), one, 3));
            J$.X1(409, J$.P(401, J$.R(377, 'module', module, 2), 'exports', J$.T(393, {
                functionOne: J$.R(385, 'one', one, 1)
            }, 11, false), 0));
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
