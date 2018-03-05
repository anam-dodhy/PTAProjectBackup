J$.iids = {"9":[10,25,10,32],"17":[10,33,10,57],"25":[10,25,10,58],"33":[10,25,10,58],"41":[10,25,10,58],"49":[11,1,11,18],"57":[11,32,11,33],"65":[11,1,11,34],"67":[11,1,11,31],"73":[11,1,11,35],"81":[1,1,18,1],"89":[1,1,18,1],"97":[1,1,18,1],"105":[1,1,18,1],"nBranches":0,"originalCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\mainExample.js","instrumentedCodeFileName":"E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\mainExample_jalangi_.js","code":"//var function_declaration = require(\"./function_declaration.js\")\r\n//function_declaration.functionParent(\"hello\");\r\n\r\n//var function_expression = require(\"./function_expression.js\")\r\n//function_expression.functionOne(2);\r\n\r\n//var function_expression_anonymous = require(\"./function_expression_anonymous.js\")\r\n//function_expression_anonymous.functionOne(2);\r\n\r\nvar recursion_example = require(\"./recursion_example.js\")\r\nrecursion_example.getCountDown(3);\r\n\r\n//var indirect_eval = require(\"./indirect_eval_example.js\")\r\n//indirect_eval.parent();\r\n\r\n//var direct_eval = require(\"./direct_eval_example.js\")\r\n//direct_eval.parent();\r\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\mainExample_jalangi_.js', 'E:\\TUD\\PTA\\PTAProject\\jalangi2\\experiments\\mainExample.js');
            J$.N(89, 'recursion_example', recursion_example, 0);
            var recursion_example = J$.X1(41, J$.W(33, 'recursion_example', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "./recursion_example.js", 21, false)), recursion_example, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'recursion_example', recursion_example, 1), 'getCountDown', 0)(J$.T(57, 3, 22, false)));
        } catch (J$e) {
            J$.Ex(97, J$e);
        } finally {
            if (J$.Sr(105)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
