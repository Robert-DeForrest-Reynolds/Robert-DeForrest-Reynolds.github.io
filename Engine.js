const ReservedKeywordList = document.getElementById("ReservedKeywordsList");
const CommentExample = document.getElementById("CommentExample");
const VariableExample = document.getElementById("VariableExample");
const FunctionExample = document.getElementById("FunctionExample");
const ConditionalExample = document.getElementById("ConditionalExample");

var ReservedKeywordsListString= "\
    Str             Int\n\
    Flt             Lst\n\
    Dct             Out\n\
    In              Enumerate\n\
    Break           Return\n\
    Open            Range\n\
    Length          Cast\n\
    Ref\n\
"

var CommentExampleString = "\
# Single Line Comments #\n\
#\n\
Multi-line\n\
Comments\n\
#\n\
\n\
";

var VariableExampleString = "\
Str Name = \"Roger\";\n\
Int Five = 5;\n\
Flt Wallet = 50.25\n\
Lst Fruits = [\"Apple\", \"Orange\"];\n\
Dct MyCarData = {\n\
    \"Brand\":\"Honda\",\n\
    \"Model\":\"Accord\",\n\
    \"Year\":1999,\n\
}\n\
";

var FunctionExampleString = "\
Func Sum(Int X, Int Y){\n\
    Return X + Y;\n\
}\n\
";

var ConditionalExampleString = "\
Int X = 5;\n\
Int Y = 8;\n\
If(X > Y){\n\
    Out(\"X is greater than Y.\");\n\
}\n\
Elif (Y > X){\n\
    Out(\"Y is greater than X.\");\n\
}\n\
Else{\n\
    Out(\"X and Y are equal.\"\n\
}\n\
";

ReservedKeywordList.innerHTML = ReservedKeywordsListString;
VariableExample.innerHTML = VariableExampleString;
CommentExample.innerHTML = CommentExampleString;
FunctionExample.innerHTML = FunctionExampleString;
ConditionalExample.innerHTML = ConditionalExampleString;