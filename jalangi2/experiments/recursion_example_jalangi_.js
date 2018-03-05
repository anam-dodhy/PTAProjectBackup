J$.iids = {"8":[3,7,3,14],"9":[3,7,3,12],"10":[3,7,3,14],"17":[3,13,3,14],"18":[4,32,4,39],"25":[4,13,4,31],"33":[4,32,4,37],"41":[4,38,4,39],"49":[4,13,4,40],"57":[4,13,4,40],"65":[4,6,4,41],"73":[7,13,7,18],"81":[7,13,7,18],"89":[7,6,7,19],"97":[2,2,9,3],"105":[2,2,9,3],"113":[2,2,9,3],"121":[10,5,10,23],"129":[10,24,10,38],"137":[10,5,10,39],"145":[10,5,10,40],"153":[1,1,11,2],"161":[1,1,11,2],"169":[1,1,11,2],"177":[2,2,9,3],"185":[1,1,11,2],"193":[24,1,24,7],"201":[25,19,25,31],"209":[24,18,26,2],"217":[24,1,26,2],"225":[24,1,26,2],"233":[1,1,27,1],"241":[1,1,11,2],"249":[1,1,27,1],"257":[3,4,8,5],"265":[2,2,9,3],"273":[2,2,9,3],"281":[1,1,11,2],"289":[1,1,11,2],"297":[1,1,27,1],"305":[1,1,27,1],"nBranches":2,"originalCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\recursion_example.js","instrumentedCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\recursion_example_jalangi_.js","code":"function getCountdown(countdownValue){\r\n function calculateCountdown(value) {\r\n   if(value>0) {\r\n     return calculateCountdown(value-1);\r\n   }\r\n   else{\r\n     return value;\r\n   }\r\n }\r\n    calculateCountdown(countdownValue);\r\n}\r\n\r\n/*function getCountDown(countdownValue){\r\n    function countdown(value) { //hoistable\r\n        if (value > 0) {\r\n            return countdown(value - 1);\r\n        } else {\r\n        return value;\r\n        }\r\n    }\r\n    return countdown(countdownValue);\r\n}*/\r\n\r\nmodule.exports = {\r\n    getCountDown: getCountdown\r\n}\r\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(233, 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\recursion_example_jalangi_.js', 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\recursion_example.js');
            function getCountdown(countdownValue) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            function calculateCountdown(value) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(97, arguments.callee, this, arguments);
                                            arguments = J$.N(105, 'arguments', arguments, 4);
                                            value = J$.N(113, 'value', value, 4);
                                            if (J$.X1(257, J$.C(8, J$.B(10, '>', J$.R(9, 'value', value, 0), J$.T(17, 0, 22, false), 0)))) {
                                                return J$.X1(65, J$.Rt(57, J$.F(49, J$.R(25, 'calculateCountdown', calculateCountdown, 0), 0)(J$.B(18, '-', J$.R(33, 'value', value, 0), J$.T(41, 1, 22, false), 0))));
                                            } else {
                                                return J$.X1(89, J$.Rt(81, J$.R(73, 'value', value, 0)));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(265, J$e);
                                        } finally {
                                            if (J$.Fr(273))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            countdownValue = J$.N(169, 'countdownValue', countdownValue, 4);
                            calculateCountdown = J$.N(185, 'calculateCountdown', J$.T(177, calculateCountdown, 12, false, 97), 0);
                            J$.X1(145, J$.F(137, J$.R(121, 'calculateCountdown', calculateCountdown, 0), 0)(J$.R(129, 'countdownValue', countdownValue, 0)));
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            getCountdown = J$.N(249, 'getCountdown', J$.T(241, getCountdown, 12, false, 153), 0);
            J$.X1(225, J$.P(217, J$.R(193, 'module', module, 2), 'exports', J$.T(209, {
                getCountDown: J$.R(201, 'getCountdown', getCountdown, 1)
            }, 11, false), 0));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
