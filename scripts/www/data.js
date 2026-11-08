/* 由 build.py 生成，请勿手改 */
window.QUIZ_DATA = {
 "meta": {
  "title": "客观题库 · C语言",
  "total": 404,
  "judge": 256,
  "choice": 148,
  "source": "客观题库--测试 (judge 333分 + choice 302分, 总分635)"
 },
 "questions": [
  {
   "id": "1-1",
   "section": 1,
   "number": 1,
   "type": "judge",
   "stem": "任何表达式语句都是表达式加分号组成的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": 1.0,
   "ch": 1,
   "expl": "表达式语句的语法形式就是表达式后接一个分号，因此该说法成立。"
  },
  {
   "id": "1-2",
   "section": 1,
   "number": 2,
   "type": "judge",
   "stem": "增1减1运算符的前缀运算和后缀运算的表达式值是相同的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 1,
   "expl": "前缀运算先加1再取值，后缀运算先取值再加1，两者表达式值不同。"
  },
  {
   "id": "1-3",
   "section": 1,
   "number": 3,
   "type": "judge",
   "stem": "C语言程序是从源文件的第一条语句开始执行的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 1,
   "expl": "程序从main函数的第一条可执行语句开始执行，不是源文件第一条语句。"
  },
  {
   "id": "1-4",
   "section": 1,
   "number": 4,
   "type": "judge",
   "stem": "语句printf(\"%.2f\",1.0/3); 输出为0.33。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": 1.0,
   "ch": 2,
   "expl": "1.0/3结果为0.3333…，格式符%.2f保留两位小数并四舍五入，输出0.33。"
  },
  {
   "id": "1-5",
   "section": 1,
   "number": 5,
   "type": "judge",
   "stem": "C语言源代码可以不经过编译而被计算机直接运行。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": 2.0,
   "ch": 1,
   "expl": "源程序必须经编译、链接生成可执行文件，计算机不能直接运行源代码。"
  },
  {
   "id": "1-6",
   "section": 1,
   "number": 6,
   "type": "judge",
   "stem": "C语言中，当int 型与double型数据进行算术运算时，数据类型由double型向int型转换。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "运算时int先转换成double，结果也是double，转换方向说反了。"
  },
  {
   "id": "1-8",
   "section": 1,
   "number": 8,
   "type": "judge",
   "stem": "执行以下程序段后，k的值为4。",
   "code": [
    "int k =3;\nsizeof(++k);"
   ],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 1,
   "expl": "sizeof只求操作数的类型大小，不计算++k，k仍为3，不是4。"
  },
  {
   "id": "1-9",
   "section": 1,
   "number": 9,
   "type": "judge",
   "stem": "实型数据可以进行求余数运算%。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "%只能用于整型操作数，实型数据求余会编译报错，故该说法错误。"
  },
  {
   "id": "1-10",
   "section": 1,
   "number": 10,
   "type": "judge",
   "stem": "运行包含以下代码段的程序将可能进入死循环。",
   "code": [
    "int i=1;\nwhile(i>0){i++;printf(\"%d\",i);}"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "i不断增大，溢出为负数后i>0不成立，循环会终止，不会死循环。"
  },
  {
   "id": "1-11",
   "section": 1,
   "number": 11,
   "type": "judge",
   "stem": "已知字符B的ASCII码是66,那么也可以通过转义符，用'\\66'来表示字符常量B。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "反斜杠后按八进制解释，'\\66'等于十进制54即字符'6'；B应写'\\102'。"
  },
  {
   "id": "1-12",
   "section": 1,
   "number": 12,
   "type": "judge",
   "stem": "假设有变量定义语句float f =1234567890123.123456;, 打印语句printf(\"f =%f\", f); 的输出是f= 1234567954432.000000。 那么可以这样解释这种想象：因为float 类型的数据精度是十进制7~8位，第9位以后的数据是随机的，即下次再输出这个数 时，第9位以后的数据可能会不一样。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "float只有约7位有效数字，第9位起是二进制舍入的确定结果，并非随机。"
  },
  {
   "id": "1-13",
   "section": 1,
   "number": 13,
   "type": "judge",
   "stem": "判断两个浮点数是否相同的运算虽然符合C语言规则，但是应该尽量避免。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "浮点数存在舍入误差，直接用==比较可能误判，应比较两数差的绝对值。"
  },
  {
   "id": "1-14",
   "section": 1,
   "number": 14,
   "type": "judge",
   "stem": "C语言程序不区分大小写。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "C语言区分大小写，int与Int、main与Main都是不同的标识符。"
  },
  {
   "id": "1-15",
   "section": 1,
   "number": 15,
   "type": "judge",
   "stem": "C语言中的转义字符'\\n' 表示的功能是换行。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "'\\n'是换行转义字符，输出时把光标移到下一行行首，不是其他功能。"
  },
  {
   "id": "1-16",
   "section": 1,
   "number": 16,
   "type": "judge",
   "stem": "C语言标识符中，大小写字母没有区别。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "标识符区分大小写，Sum与sum是两个互不相同的标识符，不能混用。"
  },
  {
   "id": "1-17",
   "section": 1,
   "number": 17,
   "type": "judge",
   "stem": "在C语言中，单精度的浮点类型用double表示。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "double是双精度浮点型，单精度是float，题中把两者说反了。"
  },
  {
   "id": "1-18",
   "section": 1,
   "number": 18,
   "type": "judge",
   "stem": "C语言中的转义字符'\\t’表示的功能是换行。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "'\\t'是水平制表符，用于输出时对齐；换行用的是'\\n'，两者不能混淆。"
  },
  {
   "id": "1-19",
   "section": 1,
   "number": 19,
   "type": "judge",
   "stem": "C语言标识符中，大小写字母是有区别的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "标识符区分大小写，Sum和sum代表两个不同的标识符，写法必须一致。"
  },
  {
   "id": "1-20",
   "section": 1,
   "number": 20,
   "type": "judge",
   "stem": "在if 语句的三种形式中，如果要想在满足条件时执行一组(多个)语句，则必须把这一组语句用}括起来组成一个复合语句。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "if后只能跟一条语句，要在条件成立时执行多条，须用花括号组成复合语句。"
  },
  {
   "id": "1-21",
   "section": 1,
   "number": 21,
   "type": "judge",
   "stem": "在switch 语句中，每一个的case常量表达式的值可以相同。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 3,
   "expl": "同一个switch中，各case后常量表达式的值必须互不相同。"
  },
  {
   "id": "1-22",
   "section": 1,
   "number": 22,
   "type": "judge",
   "stem": "case语句后如没有break, 顺序向下执行。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "case后没有break就不再判断，直接顺序执行下面各case的语句。"
  },
  {
   "id": "1-23",
   "section": 1,
   "number": 23,
   "type": "judge",
   "stem": "if(a=5) 是允许的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "if的条件是表达式，a=5是赋值表达式，值为5即为真，语法上允许。"
  },
  {
   "id": "1-25",
   "section": 1,
   "number": 25,
   "type": "judge",
   "stem": "在switch语句中，可以根据需要使用或不使用break语句。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "break用于跳出switch，需要跳出时才写，不需要继续执行时可省略。"
  },
  {
   "id": "1-26",
   "section": 1,
   "number": 26,
   "type": "judge",
   "stem": "在if 语句中，必须出现else。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 3,
   "expl": "if语句可以没有else，单分支if就是省略else的形式。"
  },
  {
   "id": "1-27",
   "section": 1,
   "number": 27,
   "type": "judge",
   "stem": "判断字符串a和b是否相等的表达式为if(a==b)。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "a==b比较的是两个字符数组的首地址，判断字符串相等必须用strcmp。"
  },
  {
   "id": "1-28",
   "section": 1,
   "number": 28,
   "type": "judge",
   "stem": "else总是与它上面最近的且尚未配对的if 配对。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "else与它上方最近的一个尚未配对的if结合，与书写缩进无关。"
  },
  {
   "id": "1-30",
   "section": 1,
   "number": 30,
   "type": "judge",
   "stem": "continue 不是结束本次循环，而是终止整个循环的执行。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "continue只结束本次循环、进入下一次，终止整个循环的是break。"
  },
  {
   "id": "1-31",
   "section": 1,
   "number": 31,
   "type": "judge",
   "stem": "do-while 循环的while 后的分号可以省略。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "do-while的while(表达式)后必须加分号，它就是语句结束标志。"
  },
  {
   "id": "1-32",
   "section": 1,
   "number": 32,
   "type": "judge",
   "stem": "do-while循环至少要执行一次循环语句。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "do-while先执行循环体再判断条件，所以循环体至少执行一次。"
  },
  {
   "id": "1-33",
   "section": 1,
   "number": 33,
   "type": "judge",
   "stem": "C语言的三种循环不可以互相嵌套。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "while、do-while、for三种循环可以任意相互嵌套。"
  },
  {
   "id": "1-35",
   "section": 1,
   "number": 35,
   "type": "judge",
   "stem": "在多层循环中，一个break语句只向外跳一层。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "break只能跳出它所在的那一层循环，外层循环仍继续执行，不会一起结束。"
  },
  {
   "id": "1-36",
   "section": 1,
   "number": 36,
   "type": "judge",
   "stem": "for循环的三个表达式都可以省略。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "for的三个表达式都可省略，但两个分号必须保留，如for(;;)。"
  },
  {
   "id": "1-37",
   "section": 1,
   "number": 37,
   "type": "judge",
   "stem": "while循环的条件满足的时候循环继续，而do-while的条件满足的时候循环就结束了。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "do-while是条件为真时继续循环、为假时结束，方向与while一致。"
  },
  {
   "id": "1-38",
   "section": 1,
   "number": 38,
   "type": "judge",
   "stem": "for语句的一般形式如下，其中的表达式1只执行一次。",
   "code": [
    "for(表达式1;表达式2;表达式3) 循环体语句"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "表达式1只在进入循环前执行一次，用来给循环变量赋初值，之后不再执行。"
  },
  {
   "id": "1-39",
   "section": 1,
   "number": 39,
   "type": "judge",
   "stem": "for 语句的一般形式如下，若表达式2的值为“真”,则先执行循环体语句，再计算表达式3,然后继续循环。",
   "code": [
    "for(表达式1;表达式2;表达式3) 循环体语句"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "表达式2为真时先执行循环体，再计算表达式3，然后回到条件判断。"
  },
  {
   "id": "1-40",
   "section": 1,
   "number": 40,
   "type": "judge",
   "stem": "循环体如包括有一个以上的语句，则必须用一对大括号{括起来，组成复合语句，复合语句在语法上被认为是一条语句。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "多条语句用一对花括号括起来组成复合语句，语法上视为一条语句。"
  },
  {
   "id": "1-41",
   "section": 1,
   "number": 41,
   "type": "judge",
   "stem": "执行以下程序段， sum的值是55。",
   "code": [
    "int i,sum;\nfor(i=1;i<=10;i++){ sum =sum +i;\n}"
   ],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 4,
   "expl": "sum没有赋初值，sum=sum+i用的是内存中的垃圾值，结果不是55。"
  },
  {
   "id": "1-42",
   "section": 1,
   "number": 42,
   "type": "judge",
   "stem": "以下程序段的功能是计算20的阶乘。",
   "code": [
    "int i;\ndouble product;\nproduct =0;\nfor(i=1;i<=20;i++){\nproduct =product *i;\n}"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "product初值为0，循环中0乘任何数仍为0，得不到20的阶乘。"
  },
  {
   "id": "1-43",
   "section": 1,
   "number": 43,
   "type": "judge",
   "stem": "执行以下程序段， sum的值是1.5。",
   "code": [
    "int i,sum;\nsum =0;\nfor(i =1;i<=2;i++){ sum =sum +1.0/i;\n}"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "sum是int型，1.0/i的小数部分被截断，i=1得1、i=2仍为1，结果是1。"
  },
  {
   "id": "1-44",
   "section": 1,
   "number": 44,
   "type": "judge",
   "stem": "执行以下程序段， sum的值是0.75。",
   "code": [
    "int i;\ndouble sum;\nsum =0;\nfor(i=2;i<=4;i=i+2){\nsum =sum +1/i;\n}"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "1/i是整数除法，i取2、4时商都为0，sum始终为0，不是0.75。"
  },
  {
   "id": "1-45",
   "section": 1,
   "number": 45,
   "type": "judge",
   "stem": "break statement can be only used in loop body.",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 3,
   "expl": "break还能用在switch中跳出分支，并非只能在循环体中使用。"
  },
  {
   "id": "1-46",
   "section": 1,
   "number": 46,
   "type": "judge",
   "stem": "while 语句的一般形式如下，当表达式的值为“真”时，循环执行，直到表达式的值为“假”,循环中止并继续执行while的下一条语句。",
   "code": [
    "while(表达式) 循环体语句"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "while先判断表达式，为真则执行循环体，为假就退出并执行下一条语句。"
  },
  {
   "id": "1-47",
   "section": 1,
   "number": 47,
   "type": "judge",
   "stem": "while语句的一般形式如下，其中的循环体语句只能是一条语句。",
   "code": [
    "while(表达式) 循环体语句"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "while 的循环体在语法上只能是一条语句，多条要写成复合语句。"
  },
  {
   "id": "1-48",
   "section": 1,
   "number": 48,
   "type": "judge",
   "stem": "若变量已正确定义，以下while循环结束时， i的值为11。",
   "code": [
    "i=1;\nwhile(i<=10){\nprintf(\"%d\\n\",i); }"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "循环体里没有改变 i，条件恒真会一直打印，i 永远到不了 11。"
  },
  {
   "id": "1-49",
   "section": 1,
   "number": 49,
   "type": "judge",
   "stem": "若变量已正确定义，执行以下while语句将陷入死循环。",
   "code": [
    "i=1;\nwhile(i<=10); i++;"
   ],
   "options": [],
   "answer": "T",
   "points": 1.0,
   "ch": 4,
   "expl": "while(i<=10)后紧跟分号，循环体为空且i不变，条件恒真成死循环。"
  },
  {
   "id": "1-50",
   "section": 1,
   "number": 50,
   "type": "judge",
   "stem": "如果for的循环体语句中没有使用continue语句，则以下for语句和while语句等价。",
   "code": [
    "for(表达式1;表达式2;表达式3) for的循环体语句",
    "表达式1;\nwhile(表达式2){\nfor的循环体语句; 表达式3;\n}"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "循环体没有 continue，于是 for 的三段可拆成：初始化; while(条件){ 循环体; 增量 }。"
  },
  {
   "id": "1-51",
   "section": 1,
   "number": 51,
   "type": "judge",
   "stem": "若变量已正确定义，执行以下程序段，输入负数时，循环结束。",
   "code": [
    "total =0;",
    "scanf(\"%d\",&score); while(score >=0){",
    "total =total+score;",
    "scanf(\"%d\",&score);",
    "}"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "while(score>=0) 只在读到负数时退出循环，累加随即停止。"
  },
  {
   "id": "1-53",
   "section": 1,
   "number": 53,
   "type": "judge",
   "stem": "do-while 语句的一般形式如下，第一次进入循环时，首先执行循环体语句，然后再检查循环控制条件，即计算表达式，若值为“真”,继续循环，直到表达式的值为“假”,循环结束，执行do-while的下一条语句。",
   "code": [
    "do{\n循环体语句"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "do-while先执行一次循环体再判断表达式，为真继续、为假结束。"
  },
  {
   "id": "1-54",
   "section": 1,
   "number": 54,
   "type": "judge",
   "stem": "do-while语句的一般形式如下，其中的循环体语句至少执行一次。",
   "code": [
    "do{\n循环体语句\n}while(表达式);"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "do-while 先执行一遍循环体再判断条件，所以循环体至少执行一次。"
  },
  {
   "id": "1-55",
   "section": 1,
   "number": 55,
   "type": "judge",
   "stem": "while语句和do-while 语句的一般形式分别如下，其主要区别是：while 语句先判断循环条件，只有条件满足才进入循环，如果一开始条件就不满足，则循环一次都不执行。而do-while 语句先执行循环体，后判断循环条件，所以无论循环条件的值如何，至少会执行一次循环体。",
   "code": [
    "while(表达式) 循环体语句 do{\n循环体语句 }while(表达式);"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "while先判后做可能一次不执行，do-while先做后判至少执行一次。"
  },
  {
   "id": "1-56",
   "section": 1,
   "number": 56,
   "type": "judge",
   "stem": "以下程序段中，当i大于10或者s大于20时，循环结束。",
   "code": [
    "s =0;\ni=1;\nwhile(i<=10){ s =s+i;\nif(s >20){\nbreak; }",
    "i++; }"
   ],
   "options": [],
   "answer": "T",
   "points": 1.0,
   "ch": 4,
   "expl": "s>20时由break跳出，i>10时条件为假退出，两种情况都会结束循环。"
  },
  {
   "id": "1-57",
   "section": 1,
   "number": 57,
   "type": "judge",
   "stem": "在循环中使用break语句或者continue语句，其作用是相同的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "break终止整个循环，continue只跳过本次迭代，两者作用不同。"
  },
  {
   "id": "1-58",
   "section": 1,
   "number": 58,
   "type": "judge",
   "stem": "执行以下while语句，将出现死循环。",
   "code": [
    "s =0;\ni =1;\nwhile(1){\nif(i>10){\ncontinue; }\ns =S+i; i++;\n}"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "i>10时continue跳过了i++，i永远停在11，循环条件恒真成死循环。"
  },
  {
   "id": "1-59",
   "section": 1,
   "number": 59,
   "type": "judge",
   "stem": "以下两个程序段不等价，执行程序段B将陷入死循环。",
   "code": [
    "/*程序段A*/ s =0;\nfor(i =1;i<=10;i++){ if(i%2 ==0){\ncontinue; }\ns =s+i;\n} /*程序段B*/ s =0;\ni=1;",
    "while(i<=10){\nif(i%2 ==0){\ncontinue; }\ns =s+i; i++;\n}"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "程序段B中i为偶数时continue跳过i++，i不再增加，故陷入死循环。"
  },
  {
   "id": "1-60",
   "section": 1,
   "number": 60,
   "type": "judge",
   "stem": "在以下程序段中，若变量已正确赋值，当条件i<=Limit 不满足(即i>Limit) 或者条件m%i==0满足时，循环结束。",
   "code": [
    "int i,limit,m;\nfor(i=2;i<=limit;i++){\nif(m %i==0){\nbreak;\n}\n}"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "i超过limit使条件为假而退出，m%i==0时由break提前结束。"
  },
  {
   "id": "1-61",
   "section": 1,
   "number": 61,
   "type": "judge",
   "stem": "以下程序段中，break语句只执行一次。",
   "code": [
    "n =9;\nfor(i =1;i<=n;i++){\nfor(j =1;j<=n;j++){\nif(i!=1 &&j>i){\nbreak;\n}\nprintf(\"%4d\",i*j); }\nprintf(\"\\n\"); }"
   ],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 4,
   "expl": "i从2到9每轮内层都会break一次，共执行8次，不是只执行一次。"
  },
  {
   "id": "1-62",
   "section": 1,
   "number": 62,
   "type": "judge",
   "stem": "在嵌套循环(多层循环)中，每一层循环都应该使用自己的循环变量，以免互相干扰。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "嵌套循环各层使用自己的循环变量，才不会互相修改对方的循环控制。"
  },
  {
   "id": "1-63",
   "section": 1,
   "number": 63,
   "type": "judge",
   "stem": "执行以下程序段，将出现死循环。",
   "code": [
    "for(i =11;i<=20;i++){\nfor(i =1;i<=10;i++){ printf(\"%4d\",i);\n}\nprintf(\"\\n\");"
   ],
   "options": [],
   "answer": "T",
   "points": 1.0,
   "ch": 4,
   "expl": "内层for把i重新置为1，外层i永远到不了11，故形成死循环。"
  },
  {
   "id": "1-64",
   "section": 1,
   "number": 64,
   "type": "judge",
   "stem": "在嵌套循环(多层循环)中，每一层循环中都不应该改变其他层使用的循环变量的值，以免互相干扰。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "改动其他层的循环变量会破坏其循环控制，各层应只用自己的变量。"
  },
  {
   "id": "1-65",
   "section": 1,
   "number": 65,
   "type": "judge",
   "stem": "以下程序段的功能是输出1～100之间每个整数的各位数字之和。",
   "code": [
    "for(num =1;num<=100;num++){ s =0;\ndo{\nS =S+num %10;\nnum =num/10; }while(num!=0);\nprintf(\"%d\\n\",s); }"
   ],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 4,
   "expl": "do-while中的num=num/10改写了外层循环变量，外层无法正常遍历1到100。"
  },
  {
   "id": "1-66",
   "section": 1,
   "number": 66,
   "type": "judge",
   "stem": "执行以下程序段，将输出10。",
   "code": [
    "int i=10;\nwhile(i<10){\nprintf(\"%d\\n\",i); }"
   ],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 4,
   "expl": "i初值为10，i<10一开始就为假，循环体一次也不执行，不会输出10。"
  },
  {
   "id": "1-67",
   "section": 1,
   "number": 67,
   "type": "judge",
   "stem": "下面这段程序中的循环将是无限循环，程序将始终运行、无法结束(假设运行该程序的计算机系统永远不会发生意外情况而崩溃或断电)。",
   "code": [
    "#include \"stdio.h\" int main(){\nfor(Long num=1;num>0;num++)\nprintf(\"%Ld\\n\",num); return 0;\n}"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "Long不是C的合法类型名，程序无法通过编译，谈不上无限循环。"
  },
  {
   "id": "1-68",
   "section": 1,
   "number": 68,
   "type": "judge",
   "stem": "下面这段程序，将循环有限次，在打印输出有限行之后，程序将正常结束。 do while while",
   "code": [
    "#include \"stdio.h\" int main(){\nfor(Long num=1;num>0;num++)\nprintf(\"%Ld\\n\",num); return 0;\n}"
   ],
   "options": [],
   "answer": "F",
   "points": 2.0,
   "ch": 4,
   "expl": "Long未定义，编译阶段就报错，程序既不会循环也不会正常结束。"
  },
  {
   "id": "1-70",
   "section": 1,
   "number": 70,
   "type": "judge",
   "stem": "All the three expressions in for statement could be omitted in c.",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "for的三个表达式都可省略，for(;;)表示循环条件恒为真。"
  },
  {
   "id": "1-71",
   "section": 1,
   "number": 71,
   "type": "judge",
   "stem": "while循环的循环体最少要执行一次。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "while先判断条件，条件一开始就为假时循环体一次也不执行。"
  },
  {
   "id": "1-72",
   "section": 1,
   "number": 72,
   "type": "judge",
   "stem": "对for(表达式1;;表达式3)可理解为for (表达式1;1;表达式3)。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "省略表达式2等价于条件恒为真，故可看作for(表达式1;1;表达式3)。"
  },
  {
   "id": "1-73",
   "section": 1,
   "number": 73,
   "type": "judge",
   "stem": "c语言中三种循环语句可以相互嵌套。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "for、while、do-while三种循环语句之间可以相互嵌套使用。"
  },
  {
   "id": "1-75",
   "section": 1,
   "number": 75,
   "type": "judge",
   "stem": "循环体中若有多条语句，应构成一条复合语句。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "循环体语法上只能是一条语句，多条语句须用花括号组成复合语句。"
  },
  {
   "id": "1-76",
   "section": 1,
   "number": 76,
   "type": "judge",
   "stem": "在C语言中，for、while、do-while 三种循环可以互相嵌套。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "for、while、do-while三种循环结构可以任意互相嵌套成多重循环。"
  },
  {
   "id": "1-77",
   "section": 1,
   "number": 77,
   "type": "judge",
   "stem": "在C语言的嵌套循环结构中，任何一层循环中的brea语句都可以结束整个嵌套循环的执行。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "break只结束它所在的那一层循环，不能跳出整个嵌套循环结构。"
  },
  {
   "id": "1-78",
   "section": 1,
   "number": 78,
   "type": "judge",
   "stem": "语句for(i=1,j=10;i<j;++i,j--); 执行之后i,j的值均为5。",
   "code": [
    "item =1.0;\ndenominator =1;\nsum =0.0;\nwhile(item >0.01) {\nitem =1.0/denominator; sum +=item;\ndenominator +=2; }"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "循环在i=6、j=5时因i<j不成立而退出，退出后i、j并不都为5。"
  },
  {
   "id": "1-80",
   "section": 1,
   "number": 80,
   "type": "judge",
   "stem": "下面这段程序，若scanf输入k 的值为50,则程序将循环有限次，在打印输出有限行之后，程序将正常结束。",
   "code": [
    "#include <stdio.h>\nint main(){\nint k;\nscanf(\"%d\",&k);\nint i=100;\nwhile(i>k){\nprintf(\"%d\",i); i++;\n}\nreturn 0; }"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "i从100开始递增，i>50很快不成立，循环有限次后正常结束。"
  },
  {
   "id": "1-81",
   "section": 1,
   "number": 81,
   "type": "judge",
   "stem": "下面这段程序，若scanf输入k 的值为50,则是无限循环，程序将始终运行、无法结束(假设运行该程序的计算机系统永远不会发生意外情况而崩溃或断电)。",
   "code": [
    "#include <stdio.h>\nint main(){\nint k;\nscanf(\"%d\",&k);\nint i=100;\nwhile(i>k){\nprintf(\"%d\",i);\ni++;\n}\nreturn 0;",
    "}"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "循环体内有i++，i终将增大使i>50不成立，不会无限循环。"
  },
  {
   "id": "1-82",
   "section": 1,
   "number": 82,
   "type": "judge",
   "stem": "for语句循环体可能一次也不执行。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "for先判断表达式2，一开始就为假时循环体一次也不执行，可能零次循环。"
  },
  {
   "id": "1-83",
   "section": 1,
   "number": 83,
   "type": "judge",
   "stem": "在循环结构中使用break 语句或者continue 语句，其作用是相同的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "break结束整个循环，continue只结束本次迭代，两者作用不同。"
  },
  {
   "id": "1-84",
   "section": 1,
   "number": 84,
   "type": "judge",
   "stem": "在定义c语言的变量时，不能用关键字作为自定义的标识符",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "关键字已有固定语法含义，不能再被用作自定义的变量名或函数名。"
  },
  {
   "id": "1-85",
   "section": 1,
   "number": 85,
   "type": "judge",
   "stem": "在for(表达式1;表达式2;表达式3)中，如果表达式2为空，表示循环条件默认为真。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "表达式2省略时视为恒为真，循环只能靠break等语句退出，不会因条件结束。"
  },
  {
   "id": "1-86",
   "section": 1,
   "number": 86,
   "type": "judge",
   "stem": "在while语句的循环体中，可以再嵌套do-while语句。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "while的循环体可以是任意语句，包括do-while语句，因此能嵌套。"
  },
  {
   "id": "1-87",
   "section": 1,
   "number": 87,
   "type": "judge",
   "stem": "在for语句的循环体中，还可以再嵌套for语句。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "for的循环体中可以再包含一个完整的for语句，从而构成多重嵌套循环。"
  },
  {
   "id": "1-88",
   "section": 1,
   "number": 88,
   "type": "judge",
   "stem": "C语言函数返回类型的默认定义类型是void。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "函数返回类型缺省时默认为int，只有明确写void才表示无返回值。"
  },
  {
   "id": "1-89",
   "section": 1,
   "number": 89,
   "type": "judge",
   "stem": "函数形参的存储单元是动态分配的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 6,
   "expl": "形参的存储单元在函数调用时分配、返回时释放，属于动态分配而非静态分配。"
  },
  {
   "id": "1-90",
   "section": 1,
   "number": 90,
   "type": "judge",
   "stem": "函数的实参可以是常量，变量或表达式。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "实参可以是常量、变量或表达式，调用时先求出值再单向传给形参。"
  },
  {
   "id": "1-91",
   "section": 1,
   "number": 91,
   "type": "judge",
   "stem": "如果函数定义出现在函数调用之前，可以不必加函数原型声明。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "函数定义出现在调用之前，编译器已知其类型，可以不另写函数原型。"
  },
  {
   "id": "1-92",
   "section": 1,
   "number": 92,
   "type": "judge",
   "stem": "C 语言程序中可以有多个函数，但只能有一个主函数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "一个C程序可由多个函数组成，但有且只有一个main函数作为入口。"
  },
  {
   "id": "1-93",
   "section": 1,
   "number": 93,
   "type": "judge",
   "stem": "函数返回值的类型是由在定义函数时所指定的函数类型。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "返回值按定义函数时指定的类型转换后返回，与调用处的用法无关。"
  },
  {
   "id": "1-94",
   "section": 1,
   "number": 94,
   "type": "judge",
   "stem": "局部变量如果没有指定初值，则其初值不确定。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 6,
   "expl": "自动局部变量不自动赋初值，其值是内存中的残留数据，结果不确定。"
  },
  {
   "id": "1-95",
   "section": 1,
   "number": 95,
   "type": "judge",
   "stem": "寄存器类变量的作用域和寿命与自动类变量的相同。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 6,
   "expl": "register只是建议放入寄存器，作用域和生命期与auto变量相同。"
  },
  {
   "id": "1-96",
   "section": 1,
   "number": 96,
   "type": "judge",
   "stem": "在一个函数内部调用另一个函数的调用方式称为嵌套调用。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "在一个函数体内调用另一个函数，这种调用方式称为嵌套调用，可以有多层。"
  },
  {
   "id": "1-97",
   "section": 1,
   "number": 97,
   "type": "judge",
   "stem": "函数形参的存储单元是动态分配的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 6,
   "expl": "形参单元在函数调用时建立、调用结束时释放，是动态分配的，与实参无关。"
  },
  {
   "id": "1-98",
   "section": 1,
   "number": 98,
   "type": "judge",
   "stem": "静态变量的作用域是整个文件。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 6,
   "expl": "静态局部变量的作用域仍限于所在函数块，只有文件作用域的static才覆盖整个文件。"
  },
  {
   "id": "1-99",
   "section": 1,
   "number": 99,
   "type": "judge",
   "stem": "当变量的存储类型定义缺省时，系统默认为变量的存储类型为auto 类型，分配在静态区。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 6,
   "expl": "缺省存储类型确为auto，但auto变量分配在动态存储区栈上，不是静态区。"
  },
  {
   "id": "1-100",
   "section": 1,
   "number": 100,
   "type": "judge",
   "stem": "可以用一个指针变量指向一个函数，然后通过该指针变量调用此函数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "函数名代表函数的入口地址，可用指针变量保存并通过它调用该函数。"
  },
  {
   "id": "1-102",
   "section": 1,
   "number": 102,
   "type": "judge",
   "stem": "实参向形参进行数值传递时，数值传递的方向是单向的，即形参变量值的改变不影响实参变量的值。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "实参的值单向复制给形参，形参在函数内改变不会反过来影响实参的值。"
  },
  {
   "id": "1-103",
   "section": 1,
   "number": 103,
   "type": "judge",
   "stem": "定义一个函数指针变量就相当于定义了一个“容器”,用于存放一段代码的起始地址。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "函数指针变量存放函数的入口地址，相当于指向一段代码的容器，可用来调用。"
  },
  {
   "id": "1-104",
   "section": 1,
   "number": 104,
   "type": "judge",
   "stem": "注册回调函数就相当于是定义回调函数。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "定义回调是编写回调函数本身，注册只是把该函数地址交给调用者。"
  },
  {
   "id": "1-105",
   "section": 1,
   "number": 105,
   "type": "judge",
   "stem": "C语言程序一定是从源文件的第一条语句开始执行的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "程序从main函数开始执行，而不是从源文件的第一条语句开始。"
  },
  {
   "id": "1-106",
   "section": 1,
   "number": 106,
   "type": "judge",
   "stem": "在C程序中，main函数必须位于源程序的最前面",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "main函数位置任意，程序总是从main开始执行，不必放在最前面。"
  },
  {
   "id": "1-107",
   "section": 1,
   "number": 107,
   "type": "judge",
   "stem": "在C程序中，函数可以嵌套定义，但不可以嵌套调用。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "函数可以嵌套调用，但不能在函数内部嵌套定义函数，题目说法正好颠倒。"
  },
  {
   "id": "1-108",
   "section": 1,
   "number": 108,
   "type": "judge",
   "stem": "一个C语言程序中可以有多个main函数(主函数)。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "一个C程序只能有一个main函数，出现多个会造成重复定义，链接失败。"
  },
  {
   "id": "1-109",
   "section": 1,
   "number": 109,
   "type": "judge",
   "stem": "C语言程序中，在函数内定义的变量称为全局变量。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "在函数内定义的变量是局部变量，全局变量定义在所有函数之外，两者作用域不同。"
  },
  {
   "id": "1-110",
   "section": 1,
   "number": 110,
   "type": "judge",
   "stem": "在C程序中，函数可以嵌套调用，但不可以嵌套定义。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "C语言不允许在函数内部再定义函数，但允许函数之间层层嵌套调用。"
  },
  {
   "id": "1-111",
   "section": 1,
   "number": 111,
   "type": "judge",
   "stem": "C语言程序中，在函数内定义的变量称为局部变量。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "函数内部定义的变量只在该函数内有效，称为局部变量，随函数返回释放。"
  },
  {
   "id": "1-112",
   "section": 1,
   "number": 112,
   "type": "judge",
   "stem": "在对数组全部元素赋初值时，不可以省略行数，但能省略列数。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "二维数组给全部元素赋初值时，只能省略行数，列数必须写明，不可省。"
  },
  {
   "id": "1-113",
   "section": 1,
   "number": 113,
   "type": "judge",
   "stem": "数组定义中，数组名后是用方括号括起来的常量表达式，不能用圆括号。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "数组元素用方括号中的下标访问，圆括号是函数调用的语法，不能混用。"
  },
  {
   "id": "1-114",
   "section": 1,
   "number": 114,
   "type": "judge",
   "stem": "函数strcmp 从头至尾顺序地将其对应字符比较，遇到两个字符不等时，两个字符相减得到一个int 型值，两个字符串完全相同时，则返回0。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "strcmp逐字符比较，遇到不同字符返回两字符之差，完全相同返回0。"
  },
  {
   "id": "1-115",
   "section": 1,
   "number": 115,
   "type": "judge",
   "stem": "指向数组元素的指针只可指向数组的首元素。 0",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "指针可保存数组任一元素的地址，如 p=a+2 也合法，只要类型匹配即可，并非只能指向首元素。"
  },
  {
   "id": "1-116",
   "section": 1,
   "number": 116,
   "type": "judge",
   "stem": "对于已正确定义的二维数组a,*(a[i]+j)与a[i][j] 的含义相同。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "a[i] 是第 i 行的首地址，a[i]+j 指向该行第 j 个元素，再解引用就等价于 a[i][j]。"
  },
  {
   "id": "1-117",
   "section": 1,
   "number": 117,
   "type": "judge",
   "stem": "如果strcmp(s1,s2)返回的结果为0,表示字符串s1和s2不相同。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "strcmp 返回 0 恰恰表示两字符串完全相同，返回非 0 才表示不相同。"
  },
  {
   "id": "1-118",
   "section": 1,
   "number": 118,
   "type": "judge",
   "stem": "c语言的数组下标从0开始。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "C 语言数组下标从 0 开始，a[0] 是首元素，n 个元素的有效下标是 0 到 n-1。"
  },
  {
   "id": "1-119",
   "section": 1,
   "number": 119,
   "type": "judge",
   "stem": "数组初始化时，初始值个数小于数组元素的个数， C语言自动将剩余的元素初始化为初始化列表中的最后一个初始值。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "初值个数少于元素个数时，其余元素被自动初始化为 0，而不是重复最后一个初值。"
  },
  {
   "id": "1-120",
   "section": 1,
   "number": 120,
   "type": "judge",
   "stem": "对于定义int a[5];可以通过语句scanf(\"%d\",a);输入全部元素的值。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "a 是首元素地址且格式串只有一个 %d，只能给 a[0] 赋值，其余元素仍是未赋值的垃圾值。"
  },
  {
   "id": "1-121",
   "section": 1,
   "number": 121,
   "type": "judge",
   "stem": "char s1[80],s2[80];s1=s2;这样赋值是正确的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "数组名是地址常量，不能整体赋值，字符串复制必须用 strcpy(s1,s2)。"
  },
  {
   "id": "1-122",
   "section": 1,
   "number": 122,
   "type": "judge",
   "stem": "数组定义后，数组名表示该数组所分配连续内存空间中第一个单元的地址，即首地址，是一个常量，不能被修改。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "数组名代表所分配连续内存空间的首地址，是地址常量，不能自增或被重新赋值。"
  },
  {
   "id": "1-123",
   "section": 1,
   "number": 123,
   "type": "judge",
   "stem": "一个数组中的每个成员都必须具有相同的数据类型，用数组名加不同的序号即下标来区分数组中的各元素。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "同一数组的每个元素类型必须相同，靠数组名加不同下标来区分各元素。"
  },
  {
   "id": "1-124",
   "section": 1,
   "number": 124,
   "type": "judge",
   "stem": "C语言里，一维数组元素的下标是从0开始的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "一维数组元素下标从 0 开始，定义 n 个元素时有效下标是 0 到 n-1。"
  },
  {
   "id": "1-125",
   "section": 1,
   "number": 125,
   "type": "judge",
   "stem": "C语言里数组元素的下标是从1开始的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "C 数组下标从 0 开始而不是 1，从 1 计数会漏掉首元素并造成越界。"
  },
  {
   "id": "1-126",
   "section": 1,
   "number": 126,
   "type": "judge",
   "stem": "直接访问就是直接利用变量的地址直接进行访问。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "按变量地址直接存取就是直接访问，先取地址再通过指针访问才叫间接访问。"
  },
  {
   "id": "1-127",
   "section": 1,
   "number": 127,
   "type": "judge",
   "stem": "可以用一个指针变量指向一个函数，然后通过该指针变量调用此函数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "函数指针存放函数入口地址，定义后可通过该指针调用它所指向的函数。"
  },
  {
   "id": "1-128",
   "section": 1,
   "number": 128,
   "type": "judge",
   "stem": "指向结构体变量的指针可以作函数参数，实现传址调用。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "传结构体指针给函数，函数内修改成员会改到实参本身，属于传址调用。"
  },
  {
   "id": "1-129",
   "section": 1,
   "number": 129,
   "type": "judge",
   "stem": "结构体成员的类型必须是基本数据类型。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 9,
   "expl": "结构体成员可以是数组、指针甚至其他结构体，并不限于基本数据类型。"
  },
  {
   "id": "1-130",
   "section": 1,
   "number": 130,
   "type": "judge",
   "stem": "在C语言中，数组名是不可改变的，不能对它进行赋值运算。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "数组名代表首地址，是常量不能被赋值，既不能整体赋值也不能自增。"
  },
  {
   "id": "1-131",
   "section": 1,
   "number": 131,
   "type": "judge",
   "stem": "链表是动态存储分配的数据结构。根据需要动态地开辟内存空间，可以比较自由方便地插入新元素(结点),支持随机访问，故使用链表可以节省内存，操作效率高。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 9,
   "expl": "链表必须从头顺序查找，不支持随机访问，且指针域还要额外占用内存。"
  },
  {
   "id": "1-132",
   "section": 1,
   "number": 132,
   "type": "judge",
   "stem": "专门存放地址的变量，称为指针变量。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "指针变量是专门用来存放地址的变量，其值就是另一个变量或数据的内存地址。"
  },
  {
   "id": "1-133",
   "section": 1,
   "number": 133,
   "type": "judge",
   "stem": "结构体类型可用于表示复杂构造类型，假设想要跟踪图书馆中书本的动态，需要跟踪每本书的某些属性：",
   "code": [
    "BookID、Title、Author、Price,可定义Book结构体类型用来封装这些属性： struct Book{ int id;\nchar title[50];\nchar author[20];\ndouble price;\n};\n下面定义该类型的变量或数组是否正确? struct Book b1,b2,c[10];"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "类型名是 struct Book，用它定义变量 b1、b2 和数组 c[10] 完全合法。"
  },
  {
   "id": "1-134",
   "section": 1,
   "number": 134,
   "type": "judge",
   "stem": "typedef可以简化声明：比如定义 typedef unsigned long long*Ulp t;之后 unsigned long Long*a,b;可以简写成 uLp t a,b;",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 9,
   "expl": "typedef 只是起类型别名，写成别名后 b 也成了指针，与原声明中 b 不是指针矛盾。"
  },
  {
   "id": "1-135",
   "section": 1,
   "number": 135,
   "type": "judge",
   "stem": "文件指针和位置指针都是随着文件的读写操作在不断改变。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 10,
   "expl": "文件指针 FILE* 本身不随读写改变，随读写移动的是文件内部的位置指针。"
  },
  {
   "id": "1-136",
   "section": 1,
   "number": 136,
   "type": "judge",
   "stem": "随机操作只适用于文本文件。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 10,
   "expl": "文本文件也能用 fseek、rewind 定位后随机读写，并非只适用于二进制文件。"
  },
  {
   "id": "1-137",
   "section": 1,
   "number": 137,
   "type": "judge",
   "stem": "随机操作只适用于二进制文件。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 10,
   "expl": "随机定位读写对文本文件和二进制文件都适用，并非只限二进制文件。"
  },
  {
   "id": "1-138",
   "section": 1,
   "number": 138,
   "type": "judge",
   "stem": "以“a”方式打开一个文件时，文件指针指向文件首。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 10,
   "expl": "以 a 方式打开是追加写，位置指针移到文件末尾，而不是文件首。"
  },
  {
   "id": "1-139",
   "section": 1,
   "number": 139,
   "type": "judge",
   "stem": "文件的读函数是从输入文件中读取信息，并存放在内存中。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 10,
   "expl": "输入（读）函数的作用是把文件中的信息读出来并存放到内存变量中。"
  },
  {
   "id": "1-140",
   "section": 1,
   "number": 140,
   "type": "judge",
   "stem": "一般不能用任何一个文本编辑器打开二进制文件进行阅读。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 10,
   "expl": "二进制文件含不可见字节，文本编辑器按字符解释只会显示乱码，无法正常阅读。"
  },
  {
   "id": "1-141",
   "section": 1,
   "number": 141,
   "type": "judge",
   "stem": "二进制文件名不能用.txt 作为扩展名，否则二进制文件读写函数fread和fwrite 将出错。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 10,
   "expl": "文件性质由打开方式和读写函数决定，扩展名只是名字，不影响 fread、fwrite。"
  },
  {
   "id": "1-142",
   "section": 1,
   "number": 142,
   "type": "judge",
   "stem": "假设运算符'*和'%'都是右结合的，则表达式 (3*5%3) 的值为6。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "若 * 与 % 都右结合，3*5%3 先算 5%3 得 2，再算 3*2，结果为 6。"
  },
  {
   "id": "1-143",
   "section": 1,
   "number": 143,
   "type": "judge",
   "stem": "增1减1运算符的前缀运算和后缀运算的表达式值是相同的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "前缀运算先自增再取值，后缀运算先取值再自增，两者表达式值不同。"
  },
  {
   "id": "1-144",
   "section": 1,
   "number": 144,
   "type": "judge",
   "stem": "关系运算符“<“优先级高于关系运算符”==”。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "关系运算符 < 的优先级高于 ==，所以 a<b==c 先算 a<b 再比较。"
  },
  {
   "id": "1-146",
   "section": 1,
   "number": 146,
   "type": "judge",
   "stem": "C语言中，大于运算符的优先级比赋值运算符的优先级高",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "大于运算符优先级高于赋值运算符，a=b>c 会先比较再把结果赋给 a。"
  },
  {
   "id": "1-147",
   "section": 1,
   "number": 147,
   "type": "judge",
   "stem": "执行语句putchar('S'); 后，在屏幕上显示的输出结果是'S'。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 2,
   "expl": "putchar 输出的是字符 S 本身，单引号只是字符常量记号，不会显示在屏幕上。"
  },
  {
   "id": "1-149",
   "section": 1,
   "number": 149,
   "type": "judge",
   "stem": "下面这段代码，用%.2f格式打印输出int 型变量，不会进行类型转换，打印输出的结果不会是2019.00。",
   "code": [
    "#include <stdio.h> int main(){\nint k=2019;\nprintf(\"%.2f\",k);",
    "return 0;",
    "}"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 2,
   "expl": "%f 按 double 读 8 字节，int 只有 4 字节且位模式不同，输出不会是 2019.00。"
  },
  {
   "id": "1-150",
   "section": 1,
   "number": 150,
   "type": "judge",
   "stem": "下面这段代码，打印输出变量e的值，将会进行取整，输出为2。",
   "code": [
    "#include <stdio.h> int main(){\ndouble e =2.71828; printf(\"%d\",e);\nreturn ; }"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 2,
   "expl": "%d 按整型解释 double 的位模式，不做取整，输出是错误数值而不是 2。"
  },
  {
   "id": "1-151",
   "section": 1,
   "number": 151,
   "type": "judge",
   "stem": "printf 函数输出数据时会根据格式控制符自动进行数据类型转换。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 2,
   "expl": "printf 只按格式符解释参数，不做类型转换，类型不匹配就输出错误结果。"
  },
  {
   "id": "1-152",
   "section": 1,
   "number": 152,
   "type": "judge",
   "stem": "C语言中，字符型数据可以和整型数据进行相互转换。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "字符以 ASCII 码形式存放，可与整型互相转换，如 'A' 就是 65。"
  },
  {
   "id": "1-153",
   "section": 1,
   "number": 153,
   "type": "judge",
   "stem": "省略else的if 语句的一般形式如下，若表达式的值为“真”,则执行语句1;否则，就什么也不做。",
   "code": [
    "if(表达式) 语句1"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "没有 else 时条件为假就跳过语句 1，什么也不做，这种写法是合法的。"
  },
  {
   "id": "1-154",
   "section": 1,
   "number": 154,
   "type": "judge",
   "stem": "为了检查以下嵌套的if 语句的三个分支是否正确，至少需要设计3组测试用例，即",
   "code": [
    "yournumber的取值至少有3组(等于mynumber、大于mynumber、小于mynumber)。 if(yournumber ==mynumber){\nprintf(\"Good Guess!\\n\");\n}else if(yournumber>mynumber ){ printf(\"Too big!\\n\");\n}else{\nprintf(\"Too small!\\n\");\n}"
   ],
   "options": [],
   "answer": "T",
   "points": 1.0,
   "ch": 3,
   "expl": "三个分支分别对应相等、大于、小于，各需一组数据才能覆盖，故至少 3 组。"
  },
  {
   "id": "1-155",
   "section": 1,
   "number": 155,
   "type": "judge",
   "stem": "C语言中在else之后可以直接跟条件。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 3,
   "expl": "else 后面只能接语句，else if 实际是 else 之后又嵌套了一条 if 语句。"
  },
  {
   "id": "1-156",
   "section": 1,
   "number": 156,
   "type": "judge",
   "stem": "在c程序中，else的个数不能多于if的个数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "每个 else 都必须与前面某个 if 配对，所以 else 的个数不会多于 if。"
  },
  {
   "id": "1-157",
   "section": 1,
   "number": 157,
   "type": "judge",
   "stem": "switch 语句中，switch(E) 中的表达式E没有数据类型限制。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 3,
   "expl": "switch 后的表达式必须是整型（含字符型、枚举），不能是浮点型或字符串。"
  },
  {
   "id": "1-158",
   "section": 1,
   "number": 158,
   "type": "judge",
   "stem": "使用switch语句时，各case和default子句的先后顺序可以变动，而不会影响程序执行结果。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 3,
   "expl": "各 case 与 default 的书写顺序可任意调换，执行只按匹配到的标号进入。"
  },
  {
   "id": "1-159",
   "section": 1,
   "number": 159,
   "type": "judge",
   "stem": "switch语句中的case标签可以是任意字符串。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 3,
   "expl": "case 后必须是整型常量表达式，字符串不能作为 case 标号。"
  },
  {
   "id": "1-160",
   "section": 1,
   "number": 160,
   "type": "judge",
   "stem": "C程序使用switch 语句实现多分支选择结构时，必须包含default 标号。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 3,
   "expl": "default 可以省略，没有 case 匹配时直接跳出 switch，程序仍能正常运行。"
  },
  {
   "id": "1-161",
   "section": 1,
   "number": 161,
   "type": "judge",
   "stem": "break语句可以用在循环体和switch语句中，但continue语句只可以用在循环体中。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "break 可用于循环和 switch，continue 只能放在循环体内跳过本次循环。"
  },
  {
   "id": "1-162",
   "section": 1,
   "number": 162,
   "type": "judge",
   "stem": "对于for(表达式1;表达式2;表达式3)语句来说，若循环体有continue 语句且执行，意味着跳过循环体余下语句转去执行表达式3。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "for 中执行 continue 会跳过循环体余下语句，转去执行表达式 3，再判断表达式 2。"
  },
  {
   "id": "1-163",
   "section": 1,
   "number": 163,
   "type": "judge",
   "stem": "for循环语句只能用于循环次数已知的情况。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "for 也能用于次数未知的循环，靠表达式 2 的条件结束，如 for(;getchar()!='#';)。"
  },
  {
   "id": "1-164",
   "section": 1,
   "number": 164,
   "type": "judge",
   "stem": "以下for(;;) 循环书写错误。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "for(;;) 三个表达式都可省略，是合法的死循环写法，不是书写错误。"
  },
  {
   "id": "1-165",
   "section": 1,
   "number": 165,
   "type": "judge",
   "stem": "while 循环和for 循环的执行次数时没有限制的，需要手动用break 语句来结束循环。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "循环次数由循环条件控制，条件为假即退出，不必用 break 手动结束。"
  },
  {
   "id": "1-166",
   "section": 1,
   "number": 166,
   "type": "judge",
   "stem": "for 循环的三个表达式都必须要明确的写出来。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "三个表达式都可省略，如 for(;;) 或 for(i=0;;i++)，不是必须全部写出。"
  },
  {
   "id": "1-167",
   "section": 1,
   "number": 167,
   "type": "judge",
   "stem": "continue语句一般放在条件语句中，条件成立时结束本次循环，直接进入下一次循环。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "continue 常放在 if 中，条件成立时跳过本次循环余下语句，直接进入下一次。"
  },
  {
   "id": "1-168",
   "section": 1,
   "number": 168,
   "type": "judge",
   "stem": "while循环条件将会比循环体多执行一次。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 4,
   "expl": "每次循环先判断条件，最后一次判断为假而退出，故条件比循环体多执行一次。"
  },
  {
   "id": "1-169",
   "section": 1,
   "number": 169,
   "type": "judge",
   "stem": "break和continue都可以从循环中退出",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "break 才退出整个循环，continue 只结束本次循环，并不退出循环。"
  },
  {
   "id": "1-170",
   "section": 1,
   "number": 170,
   "type": "judge",
   "stem": "在嵌套循环语句中，里层的循环语句里有break语句，那执行该语句时，是跳出全部循环。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 4,
   "expl": "内层循环里的 break 只跳出内层循环，外层循环仍会继续执行。"
  },
  {
   "id": "1-171",
   "section": 1,
   "number": 171,
   "type": "judge",
   "stem": "sizeof() 是 C语言的一个函数，可以计算参量所占内存的字节数。如sizeof(int) 可计算整型所占的内存字节数。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "sizeof 是编译期求值的运算符（关键字），不是函数，故该说法错误。"
  },
  {
   "id": "1-172",
   "section": 1,
   "number": 172,
   "type": "judge",
   "stem": "C语言中，通过函数调用只能获得一个返回值。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "返回值虽只有一个，但借助指针形参可带回多个结果，并非只能获得一个值。"
  },
  {
   "id": "1-173",
   "section": 1,
   "number": 173,
   "type": "judge",
   "stem": "指向结构体变量的指针可以作函数参数，实现传址调用。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构体指针作函数参数，函数内改成员即改实参本身，实现传址调用。"
  },
  {
   "id": "1-174",
   "section": 1,
   "number": 174,
   "type": "judge",
   "stem": "在代码中，对于某个自己设计的函数，那么该函数声明、函数调用、函数定义(亦称函数的实现)三者在代码中的先后位置关系通常为：“函数声明”先于“函数调用”,“函数调用”先于“函数定义”。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "先声明让编译器检查调用，函数定义可放在调用之后，这就是常规的书写顺序。"
  },
  {
   "id": "1-175",
   "section": 1,
   "number": 175,
   "type": "judge",
   "stem": "函数一次可以返回两个以上的值。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "return 语句只能带一个值返回，要返回多个值必须借助指针参数。"
  },
  {
   "id": "1-176",
   "section": 1,
   "number": 176,
   "type": "judge",
   "stem": "函数可以嵌套调用但不能嵌套定义。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "函数之间可以层层嵌套调用，但不能在一个函数体内再定义另一个函数。"
  },
  {
   "id": "1-178",
   "section": 1,
   "number": 178,
   "type": "judge",
   "stem": "c语言每个函数的返回值都是int 型的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "返回值类型由定义时写明，可为 double、char 或指针，省略不写时才是 int。"
  },
  {
   "id": "1-179",
   "section": 1,
   "number": 179,
   "type": "judge",
   "stem": "函数的递归调用是嵌套调用的特例。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "递归就是函数直接或间接调用自身，属于嵌套调用的一种特例，必须有终止条件。"
  },
  {
   "id": "1-180",
   "section": 1,
   "number": 180,
   "type": "judge",
   "stem": "语句是C 语言程序的基本结构模块。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "C 程序的基本结构模块是函数，语句只是函数内部完成具体操作的组成单位。"
  },
  {
   "id": "1-181",
   "section": 1,
   "number": 181,
   "type": "judge",
   "stem": "函数声明时，可以不声明形参的变量名，但不能不声明类型。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "声明时形参名可以省略，但类型必须给出，如 int f(int, char)。"
  },
  {
   "id": "1-182",
   "section": 1,
   "number": 182,
   "type": "judge",
   "stem": "sizeof() 不是函数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "sizeof 由编译器在编译时求值，属于运算符，不是库函数。"
  },
  {
   "id": "1-183",
   "section": 1,
   "number": 183,
   "type": "judge",
   "stem": "函数的形参必须为变量，而实参可以是变量，常量或表达式，且实参和形参可以同名。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "形参必须有存储单元故只能是变量，实参可为常量或表达式，两者可以同名。"
  },
  {
   "id": "1-184",
   "section": 1,
   "number": 184,
   "type": "judge",
   "stem": "对于用户自己定义的函数，在使用前必须加以说明。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "若函数定义写在调用之前，调用前就无需再作说明，故不是必须说明。"
  },
  {
   "id": "1-185",
   "section": 1,
   "number": 185,
   "type": "judge",
   "stem": "调用函数时，只能把实参的值传送给形参，形参的值不能传送给实参",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "C 参数传递是单向值传递，形参的改变不会影响实参，函数内改形参是无效的。"
  },
  {
   "id": "1-186",
   "section": 1,
   "number": 186,
   "type": "judge",
   "stem": "C程序在调用有参数函数时，既可以将实参的值传递给形参，也可以反过来将形参的值传递给实参。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "参数只从实参传给形参，形参的值不会回传，除非使用指针或数组。"
  },
  {
   "id": "1-187",
   "section": 1,
   "number": 187,
   "type": "judge",
   "stem": "自动变量如果没有赋值，其值被自动赋为0。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 6,
   "expl": "自动变量不赋初值时是随机值，只有 static 变量才自动清 0。"
  },
  {
   "id": "1-188",
   "section": 1,
   "number": 188,
   "type": "judge",
   "stem": "静态局部变量如果没有赋值，其存储单元中将是随机值。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 6,
   "expl": "静态局部变量未赋初值时由编译器自动置 0，不会是随机值，且只初始化一次。"
  },
  {
   "id": "1-189",
   "section": 1,
   "number": 189,
   "type": "judge",
   "stem": "C语言中定义的局部变量存放在堆区，动态分配的内存空间位于栈区。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 6,
   "expl": "局部变量存放在栈区，malloc 等动态分配的内存才在堆区，题目说反了。"
  },
  {
   "id": "1-190",
   "section": 1,
   "number": 190,
   "type": "judge",
   "stem": "下面这段代码，打印输出的结果是k=3,k=4,",
   "code": [
    "#include <stdio.h> void hoho(){\nstatic int k =2; k++;\nprintf(\"k=%d,\",k); }\nint main(){\nhoho();\nhoho();\nreturn 0; }"
   ],
   "options": [],
   "answer": "T",
   "points": 2.0,
   "ch": 6,
   "expl": "static int k=2 只初始化一次，两次调用后 k 分别为 3、4 并依次输出。"
  },
  {
   "id": "1-191",
   "section": 1,
   "number": 191,
   "type": "judge",
   "stem": "全局变量不可以和函数内的局部变量同名。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 5,
   "expl": "局部变量可与全局变量同名，此时函数内的局部变量屏蔽全局变量。"
  },
  {
   "id": "1-192",
   "section": 1,
   "number": 192,
   "type": "judge",
   "stem": "以下代码中，参量n 与变量t、sum 都是函数hehe() 的局部变量。函数hehe() 执行",
   "code": [
    "结束后,释放变量n、t、sum的内存空间。 #include <stdio.h>\nvoid hehe(int n){\nstatic int t;\nint sum=0;\nsum =t+n;\nprintf(\"%d%d%d\\n\",sum,t,n);\n}\nint main(){ hehe(5);\nprintf(\"Good Day!\\n\");\nreturn 0; }"
   ],
   "options": [],
   "answer": "F",
   "points": 2.0,
   "ch": 6,
   "expl": "static 的 t 是静态局部变量，函数结束后不释放，只释放 n 和 sum。"
  },
  {
   "id": "1-193",
   "section": 1,
   "number": 193,
   "type": "judge",
   "stem": "以下这段代码有编译错误，因为C语言不允许重复定义同名变量，两处int k的定义是冲突的。",
   "code": [
    "#include <stdio.h>\nint main(){ int k=3;\nint i=1;\nwhile(i<5){ int k;\nk =i+5;\ni++;\nprintf(\"%d\",k); }\nprintf(\"%d\\n\",k); return 0;\n}"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "内层 int k 在复合语句块内，作用域不同，只是屏蔽外层 k，不构成重复定义。"
  },
  {
   "id": "1-194",
   "section": 1,
   "number": 194,
   "type": "judge",
   "stem": "当一个C语言程序由多个文件模块组成时，整个程序可以包含多个main() 函数。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "一个程序无论分成几个文件模块，都只能有一个 main 函数。"
  },
  {
   "id": "1-195",
   "section": 1,
   "number": 195,
   "type": "judge",
   "stem": "宏名必须用大写字母表示。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 6,
   "expl": "宏名习惯用大写，但语法上并不要求，写成小写同样可以正常替换。"
  },
  {
   "id": "1-196",
   "section": 1,
   "number": 196,
   "type": "judge",
   "stem": "函数内部定义了一个与全局变量同名的局部变量，该局部变量会变更全局变量的值。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 5,
   "expl": "局部变量同名时屏蔽全局变量，改的只是局部变量，全局变量不受影响。"
  },
  {
   "id": "1-197",
   "section": 1,
   "number": 197,
   "type": "judge",
   "stem": "函数执行完以后，其内部定义的静态变量不会被回收。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 6,
   "expl": "静态变量存放在静态存储区，函数返回后不被回收，值保留到下次调用。"
  },
  {
   "id": "1-198",
   "section": 1,
   "number": 198,
   "type": "judge",
   "stem": "递归调用算法与相同功能的非递归算法相比，主要问题在于重复计算太多，而且调用本身需要分配额外的空间、传递数据和控制，所以时间和空间开销通常都比较大。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "递归存在重复计算和每层栈帧开销，时间与空间开销通常大于等价的非递归算法。"
  },
  {
   "id": "1-199",
   "section": 1,
   "number": 199,
   "type": "judge",
   "stem": "函数递归调用自身时，每次调用都会得到一个与以前的变量集合不同的新的变量集合。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "每层递归调用都新建一套形参与局部变量，彼此独立互不干扰，返回时逐层释放。"
  },
  {
   "id": "1-200",
   "section": 1,
   "number": 200,
   "type": "judge",
   "stem": "递归的执行速度并不快，但递归代码比较紧凑，并且比相应的非递归代码更易于编写与理解。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "递归代码紧凑、易写易读，但运行速度慢，每层调用还要额外占用栈空间。"
  },
  {
   "id": "1-201",
   "section": 1,
   "number": 201,
   "type": "judge",
   "stem": "递归并不节省存储器的开销，因为递归调用过程中必须在某个地方维护一个存储处理值的栈。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 5,
   "expl": "递归必须用栈保存每层的返回地址和局部变量，因此并不节省存储开销。"
  },
  {
   "id": "1-202",
   "section": 1,
   "number": 202,
   "type": "judge",
   "stem": "二维数组定义的一般形式如下，其中的行长度和列长度都是整型常量表达式。",
   "code": [
    "类型名数组名[行长度][列长度];"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "二维数组的行、列长度都必须是整型常量表达式，不能使用变量来指定。"
  },
  {
   "id": "1-203",
   "section": 1,
   "number": 203,
   "type": "judge",
   "stem": "以下定义了一个三维数组array day 。",
   "code": [
    "int array_day[10][10][10];"
   ],
   "options": [],
   "answer": "T",
   "points": 1.0,
   "ch": 7,
   "expl": "三个下标说明是三维数组，共 10*10*10 即 1000 个 int 元素。"
  },
  {
   "id": "1-204",
   "section": 1,
   "number": 204,
   "type": "judge",
   "stem": "引用二维数组的元素要指定两个下标，即行下标和列下标， 一般形式如下。 数组名[列下标][行下标]",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "二维数组元素写作 数组名[行下标][列下标]，行列顺序不能颠倒。"
  },
  {
   "id": "1-205",
   "section": 1,
   "number": 205,
   "type": "judge",
   "stem": "char s[80],*p=s;p=\"hello\";这样赋值是可以的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "p 是字符指针，可改指向字符串常量 hello 的首地址；数组名则不能这样重新指向。"
  },
  {
   "id": "1-206",
   "section": 1,
   "number": 206,
   "type": "judge",
   "stem": "语句char*pstr=\"lalala!\"的含义是将字符串存入到变量pstr中。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "该语句把字符串常量的首地址赋给指针，字符本身存在静态存储区，不在 pstr 中。"
  },
  {
   "id": "1-207",
   "section": 1,
   "number": 207,
   "type": "judge",
   "stem": "字符串比较的规则是对两个字符串自左至右逐个字符相比(按ASCII码值大小比较), 直到出现不同的字符或遇到'\\ '为止。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "比较按 ASCII 值自左至右逐字符进行，遇到不同字符或结束符即停止。"
  },
  {
   "id": "1-208",
   "section": 1,
   "number": 208,
   "type": "judge",
   "stem": "已知'A'的ASCII代码值为65,则'D' 的ASCII代码值为68",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "D 比 A 大 3，65 加 3 得 68，所以 'D' 的 ASCII 代码值是 68。"
  },
  {
   "id": "1-209",
   "section": 1,
   "number": 209,
   "type": "judge",
   "stem": "判断字符串a是否大于b, 可以表示为 if(strcmp(a,b)>0)",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "strcmp(a,b) 返回值大于 0 正说明 a 按字典序大于 b。"
  },
  {
   "id": "1-210",
   "section": 1,
   "number": 210,
   "type": "judge",
   "stem": "\"a\" 和 'a'是等价的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 1,
   "expl": "双引号的 a 是含字符 a 和结束符的字符串，占 2 字节，与字符常量 a 不等价。"
  },
  {
   "id": "1-211",
   "section": 1,
   "number": 211,
   "type": "judge",
   "stem": "语句printf(\"%d\",strlen(\"China\");的输出结果为6",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "strlen 不把结束符计入长度，China 共 5 个字符，结果应为 5。"
  },
  {
   "id": "1-212",
   "section": 1,
   "number": 212,
   "type": "judge",
   "stem": "char*str; 一定是表示定义一个字符串。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "char*str 只声明一个字符指针，可指向单个字符，未必就表示字符串。"
  },
  {
   "id": "1-214",
   "section": 1,
   "number": 214,
   "type": "judge",
   "stem": "以下定义了一个一维数组str,该数组可以存放81个字符型数据。",
   "code": [
    "char str[81];"
   ],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "char str[81] 有 81 个元素，能存 81 个字符；作字符串用时只能放 80 个字符加结束符。"
  },
  {
   "id": "1-215",
   "section": 1,
   "number": 215,
   "type": "judge",
   "stem": "数组定义后，数组名表示该数组所分配连续内存空间中第一个单元的地址，即首地址。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "数组名就是首元素的地址，也就是该数组所分配的连续内存空间的首地址。"
  },
  {
   "id": "1-216",
   "section": 1,
   "number": 216,
   "type": "judge",
   "stem": "数组定义后，数组名的值是一个地址，可以被修改。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "数组名是地址常量，虽然是地址但不能被修改，不能赋值也不能自增。"
  },
  {
   "id": "1-217",
   "section": 1,
   "number": 217,
   "type": "judge",
   "stem": "在对全部数组元素赋初值时，可以不指定数组长度。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "对全部元素都赋初值时数组长度可省略，编译器按初值个数确定长度。"
  },
  {
   "id": "1-218",
   "section": 1,
   "number": 218,
   "type": "judge",
   "stem": "如果使用数组时，元素下标出现越界。例如定义了有n个元素的整型数组s, 赋初值为全0,在程序中有s[n]=5的语句，编译环境就会检查出来并且报错。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "C 编译程序一般不检查下标是否越界，越界写不会报错，只会破坏其他数据。"
  },
  {
   "id": "1-219",
   "section": 1,
   "number": 219,
   "type": "judge",
   "stem": "对于一维数组，例如： int arr[3];则arr[3] 表示数组的第3个元素。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "数组下标从0开始，int arr[3]的合法下标只有0到2，arr[3]已越界，第3个元素应为arr[2]。"
  },
  {
   "id": "1-220",
   "section": 1,
   "number": 220,
   "type": "judge",
   "stem": "若有说明：int a[3][4]=o);数组a 中每个元素均可得到初值0。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "只给了一个初值0，其余元素由系统自动补0，所以a中每个元素都得到初值0。"
  },
  {
   "id": "1-221",
   "section": 1,
   "number": 221,
   "type": "judge",
   "stem": "数组的下标可以是一个表达式，但是表达式计算得到的值必须是一个整数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "下标可以是任意整型表达式，如a[i+1]，只要计算结果是整数即可，这是合法写法。"
  },
  {
   "id": "1-222",
   "section": 1,
   "number": 222,
   "type": "judge",
   "stem": "c语言对数组下标越界不作检查。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 7,
   "expl": "C语言在编译和运行时都不检查下标是否越界，越界访问的后果由程序员自己负责。"
  },
  {
   "id": "1-224",
   "section": 1,
   "number": 224,
   "type": "judge",
   "stem": "在C语言中，函数的参数可以是数组名，表示在函数中新建一个数组，并完成值的传递。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "数组名作实参传的是首元素地址，形参只是指针，不会新建数组，也不会复制元素的值。"
  },
  {
   "id": "1-225",
   "section": 1,
   "number": 225,
   "type": "judge",
   "stem": "函数名代表该函数的入口地址。因此，可用函数名给指向函数的指针变量赋值。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "函数名本身就代表函数的入口地址，因此可以直接赋给同类型的函数指针变量。"
  },
  {
   "id": "1-226",
   "section": 1,
   "number": 226,
   "type": "judge",
   "stem": "执行语句int *p; 后 ，指针变量p 只能指向int 类型的变量。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "int *p是指向int的指针，只能存放int变量的地址，不能指向其他类型的变量。"
  },
  {
   "id": "1-227",
   "section": 1,
   "number": 227,
   "type": "judge",
   "stem": "只要将多个指针作为函数的参数，函数就一定会返回多个值。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "函数只能靠return返回一个值，指针参数只是能改实参内容，并不保证返回多个值。"
  },
  {
   "id": "1-228",
   "section": 1,
   "number": 228,
   "type": "judge",
   "stem": "对于定义int a[10],*p=a; 语句 p=a+1;和 a=a+1;都是合法的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "p=a+1合法；但数组名a是常量地址，不能放在赋值号左边，a=a+1非法。"
  },
  {
   "id": "1-229",
   "section": 1,
   "number": 229,
   "type": "judge",
   "stem": "字符串常量在内存中的存放位置由系统自动安排。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 1,
   "expl": "字符串常量存放在系统安排的只读常量区，其内存位置由编译程序自动决定。"
  },
  {
   "id": "1-230",
   "section": 1,
   "number": 230,
   "type": "judge",
   "stem": "字符串常量实质上是一个指向该字符串首字符的指针常量。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "字符串常量在表达式中按首字符地址使用，其值正是指向该字符串首字符的指针常量。"
  },
  {
   "id": "1-231",
   "section": 1,
   "number": 231,
   "type": "judge",
   "stem": "调用printf 函数，%s的格式输出字符串时，字符数组名、字符指针和字符串常量都可以作为输出参数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 2,
   "expl": "三种实参最终都提供首字符地址，%s只要求char*，数组名会自动转换为指针。"
  },
  {
   "id": "1-232",
   "section": 1,
   "number": 232,
   "type": "judge",
   "stem": "语句 int *p[5]; 定义了一个指针数组p, 用于指向一个有5个元素的数组。 233",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "int *p[5]是指针数组，p有5个int*元素；指向含5元素数组的写法是int (*p)[5]。"
  },
  {
   "id": "1-234",
   "section": 1,
   "number": 234,
   "type": "judge",
   "stem": "关于C语言指针的运算：指针只有加减操作，没有乘除操作。指针可以加常数、减常数；相同类型的指针可以相减，不可以相加。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "指针只能加减整数、同类型指针相减，不能相加乘除；加减时按所指数组的元素长度移动。"
  },
  {
   "id": "1-235",
   "section": 1,
   "number": 235,
   "type": "judge",
   "stem": "可以将一个整型数据赋给一个指针变量，如p=3000。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "整型常量不能直接赋给指针变量，只有0即NULL例外，p=3000会被判类型错误。"
  },
  {
   "id": "1-236",
   "section": 1,
   "number": 236,
   "type": "judge",
   "stem": "指针变量中保存的肯定是一个地址。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "指针变量的值就是某个内存单元的地址，不管该地址当前是否有效，存的一定是地址。"
  },
  {
   "id": "1-237",
   "section": 1,
   "number": 237,
   "type": "judge",
   "stem": "对于定义int a[5],*p=a;后 ，*(p+1) 和 *(a+1) 的值是相同的。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "p指向a[0]，p+1和a+1都指向a[1]，两者解引用得到同一个元素的值，结果相同。"
  },
  {
   "id": "1-238",
   "section": 1,
   "number": 238,
   "type": "judge",
   "stem": "它表示p是一个指针数组，它包含4个指针变量元素。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": 1.0,
   "ch": 8,
   "expl": "题干没有给出任何定义语句，单凭4个指针元素的说法无法说明p是指针数组，故不成立。"
  },
  {
   "id": "1-239",
   "section": 1,
   "number": 239,
   "type": "judge",
   "stem": "定义指针函数变量后，将一个函数名赋值该指针变量，要求函数的参数个数、类型一致。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "函数指针的类型由返回值类型和参数表共同决定，赋值时参数个数、类型必须一致。"
  },
  {
   "id": "1-240",
   "section": 1,
   "number": 240,
   "type": "judge",
   "stem": "不同类型的指针变量是可以直接相互赋值的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "类型不同的指针所存地址的解释方式不同，必须强制类型转换后才能相互赋值。"
  },
  {
   "id": "1-241",
   "section": 1,
   "number": 241,
   "type": "judge",
   "stem": "在用数组名作函数参数时，下面两种函数声明是有区别的。",
   "code": [
    "①void fun(int arr[],int n);",
    "②void fun(int *arr,int n);"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "形参写成int arr[]会被自动调整为int *arr，两种声明完全等价，没有任何区别。"
  },
  {
   "id": "1-242",
   "section": 1,
   "number": 242,
   "type": "judge",
   "stem": "执行语句char *cp ;后，指针变量cp只能指向char 类型的变量。 的指针变量。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "char *cp是指向char的指针，只能保存char型数据的地址，不能指向其他类型。"
  },
  {
   "id": "1-244",
   "section": 1,
   "number": 244,
   "type": "judge",
   "stem": "语句int(*pb)[6]; 定义了一个指针变量pb, 它是一个指向数组的指针，指向的是长度为6的int 型数组。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "int (*pb)[6]因括号先与pb结合，pb是指针，指向元素个数为6的int型一维数组。"
  },
  {
   "id": "1-245",
   "section": 1,
   "number": 245,
   "type": "judge",
   "stem": "语句int*p[5]; 定义了一个指针数组p, 用于指向一个有5个元素的数组。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "int *p[5]应读作p是含5个int*元素的数组，指向整个数组的写法是int (*p)[5]。"
  },
  {
   "id": "1-246",
   "section": 1,
   "number": 246,
   "type": "judge",
   "stem": "执行语句int *p=1000;后，指针变量p指向地址为1000的变量。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "指针只能接受地址值，int *p=1000把整数当地址用，编译时会报警告或错误。"
  },
  {
   "id": "1-247",
   "section": 1,
   "number": 247,
   "type": "judge",
   "stem": "若有定义char*p=\"computer\" ; 则表示p的值是字符串\"computer\"。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "p的值是字符串首字符c的地址，不是整个字符串，字符串内容存在只读常量区。"
  },
  {
   "id": "1-249",
   "section": 1,
   "number": 249,
   "type": "judge",
   "stem": "执行代码段 int a=2,*p1=&a,*p2=&a;(*p2)++;a=*p1**p2;后 ，a中的值为6。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "(*p2)++后a变为3，a=*p1**p2即3*3，结果为9而不是6。"
  },
  {
   "id": "1-250",
   "section": 1,
   "number": 250,
   "type": "judge",
   "stem": "char str[10]={“china”};等价于char str[10];str[]={“china”};",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 7,
   "expl": "数组只能在定义时整体初始化，另起语句写str[]={...}是非法赋值，故两者不等价。"
  },
  {
   "id": "1-251",
   "section": 1,
   "number": 251,
   "type": "judge",
   "stem": "指针变量的使用方法与普通变量一致，都可以进行赋值和取值操作。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "指针变量可以赋值即存放地址，也可以用*p取它所指向的值，用法与普通变量类似。"
  },
  {
   "id": "1-252",
   "section": 1,
   "number": 252,
   "type": "judge",
   "stem": "指针变量可以用来存储数组的地址，通过指针变量可以访问和操作数组元素。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "把数组首地址赋给指针后，可用p[i]或*(p+i)访问并修改数组元素。"
  },
  {
   "id": "1-253",
   "section": 1,
   "number": 253,
   "type": "judge",
   "stem": "这样对数组访问是否正确：",
   "code": [
    "int a[3]={1,2,3},b[2],*p; p=a+1;\nb=p;"
   ],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 8,
   "expl": "b=p是把指针赋给数组名b，数组名是常量地址不能赋值，所以这种访问是错误的。"
  },
  {
   "id": "1-254",
   "section": 1,
   "number": 254,
   "type": "judge",
   "stem": "可以用一个函数指针变量指向一个函数，然后通过该指针变量调用此函数。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 8,
   "expl": "函数指针保存的是函数入口地址，写成(*pf)()或pf()都能通过它调用该函数。"
  },
  {
   "id": "1-255",
   "section": 1,
   "number": 255,
   "type": "judge",
   "stem": "结构体类型本身不占用内存空间，结构体变量占用内存空间。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构体类型只是模板，编译器不为其分配空间，只有定义了结构体变量才真正占用内存。"
  },
  {
   "id": "1-256",
   "section": 1,
   "number": 256,
   "type": "judge",
   "stem": "结构是变量的集合，可以按照对同类型变量的操作方法单独使用其成员变量。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构体把若干变量组合在一起，其成员可以像同类型的普通变量那样单独使用和操作。"
  },
  {
   "id": "1-257",
   "section": 1,
   "number": 257,
   "type": "judge",
   "stem": "一个结构类型变量所占的内存空间是其各个成员所占内存空间之和。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构体变量按成员依次分配存储空间，其大小由各成员所占的空间累加得到。"
  },
  {
   "id": "1-259",
   "section": 1,
   "number": 259,
   "type": "judge",
   "stem": "对于结构数组s, 既可以引用数组的元素s[i], 也可以引用s[i] 中的结构成员。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构数组的每个元素都是结构变量，既可整体引用s[i]，也可用s[i].成员引用其成员。"
  },
  {
   "id": "1-260",
   "section": 1,
   "number": 260,
   "type": "judge",
   "stem": "结构指针就是指向结构类型变量的指针。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构指针专门存放结构体变量的地址，其类型必须与所指向的结构类型一致。"
  },
  {
   "id": "1-261",
   "section": 1,
   "number": 261,
   "type": "judge",
   "stem": "C语言中的结构体类型属于一种构造类型。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构体由多个基本类型成员组合而成，与数组一样都属于构造类型。"
  },
  {
   "id": "1-262",
   "section": 1,
   "number": 262,
   "type": "judge",
   "stem": "一个结构体类型中的各个成员的类型必须是相同的。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 9,
   "expl": "同一结构体里各成员的类型可以互不相同，这正是结构体区别于数组的主要特点。"
  },
  {
   "id": "1-264",
   "section": 1,
   "number": 264,
   "type": "judge",
   "stem": "结构体变量不能进行整体输入输出。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "输入输出函数只认基本类型，结构体变量必须逐个成员用scanf、printf处理。"
  },
  {
   "id": "1-265",
   "section": 1,
   "number": 265,
   "type": "judge",
   "stem": "在对结构变量操作时， .被称为成员或者分量运算符。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "点号是成员运算符也叫分量运算符，用于结构变量取成员，如s.name。"
  },
  {
   "id": "1-266",
   "section": 1,
   "number": 266,
   "type": "judge",
   "stem": "在使用结构指针时，->被称为指向运算符。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "箭头->是指向运算符，p->name等价于(*p).name，专门用于结构指针访问成员。"
  },
  {
   "id": "1-267",
   "section": 1,
   "number": 267,
   "type": "judge",
   "stem": "结构体类型中的成员，可以是基本类型，也可以时候结构体类型。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "成员类型不受限制，既可以是int等基本类型，也可以是另一个结构体类型。"
  },
  {
   "id": "1-268",
   "section": 1,
   "number": 268,
   "type": "judge",
   "stem": "对于结构数组s, 可以引用数组的元素s[i], 但不可以引用s[i]中的结构成员。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 9,
   "expl": "结构数组元素本身就是结构变量，当然可以用s[i].成员的形式引用其中的成员。"
  },
  {
   "id": "1-269",
   "section": 1,
   "number": 269,
   "type": "judge",
   "stem": "结构体中的成员变量可以是数组。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "结构体成员可以是数组，如char name[20]，用来存放字符串等成批的数据。"
  },
  {
   "id": "1-270",
   "section": 1,
   "number": 270,
   "type": "judge",
   "stem": "结构体成员的类型可以不是基本数据类型。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 9,
   "expl": "成员类型可以是数组、指针甚至其他结构体，并不限于基本数据类型。"
  },
  {
   "id": "1-271",
   "section": 1,
   "number": 271,
   "type": "judge",
   "stem": "对于缓冲文件系统，在进行文件操作时，系统自动为每一个文件分配一块文件内存缓冲区(内存单元)。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 10,
   "expl": "缓冲文件系统会为每个打开的文件在内存中分配缓冲区，读写都要先经过缓冲区。"
  },
  {
   "id": "1-272",
   "section": 1,
   "number": 272,
   "type": "judge",
   "stem": "close(fp);表示关闭指针fp所指向的那个文件。",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 10,
   "expl": "关闭文件应调用fclose(fp)，close是系统调用且参数为文件描述符，不能用于FILE*。"
  },
  {
   "id": "1-273",
   "section": 1,
   "number": 273,
   "type": "judge",
   "stem": "C系统的标准输出文件stdout是指显示器。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 10,
   "expl": "stdout是标准输出文件指针，默认连到显示器，printf就是向它写数据。"
  },
  {
   "id": "1-274",
   "section": 1,
   "number": 274,
   "type": "judge",
   "stem": "有时候，打开文件方式\"w+\"和\"r+\"具有同样的作用。",
   "code": [],
   "options": [],
   "answer": "T",
   "points": null,
   "ch": 10,
   "expl": "两者都以读写方式打开文件，w+只是先清空原内容，在不需要保留内容时作用相同。"
  },
  {
   "id": "1-275",
   "section": 1,
   "number": 275,
   "type": "judge",
   "stem": "从文件中读字符串的函数 fgets(), 是从当前文件位置指针开始读取字符，直到读到字符'\\0'或EOF为止。 单选题",
   "code": [],
   "options": [],
   "answer": "F",
   "points": null,
   "ch": 10,
   "expl": "fgets读到换行符、读满n-1个字符或遇到EOF就停止，并不以空字符作为结束标志。"
  },
  {
   "id": "2-1",
   "section": 2,
   "number": 1,
   "type": "choice",
   "stem": "C 语言程序中可以对程序进行注释，注释部分必须用什么符号括起来?",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "'{ 和‘}"
    },
    {
     "key": "B",
     "text": "[ ' 和'了"
    },
    {
     "key": "C",
     "text": "/* 和*/'"
    },
    {
     "key": "D",
     "text": "'*/'和/*'"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "注释必须用/*开始并用*/结束，其余选项的符号都不是C语言的注释定界符。"
  },
  {
   "id": "2-2",
   "section": 2,
   "number": 2,
   "type": "choice",
   "stem": "已知字符'a' 的ASCII码为97,执行下列语句的输出是 302分 2分",
   "code": [
    "printf(\"%d,%c\",'b','b¹+1);"
   ],
   "options": [
    {
     "key": "A",
     "text": "98,b"
    },
    {
     "key": "B",
     "text": "语法不合法"
    },
    {
     "key": "C",
     "text": "98,99"
    },
    {
     "key": "D",
     "text": "98,c"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 2,
   "expl": "b的ASCII码是98，b+1是99即字符c，所以%d输出98、%c输出c。"
  },
  {
   "id": "2-3",
   "section": 2,
   "number": 3,
   "type": "choice",
   "stem": "表达式 strcmp(\"box\",\"boss\") 的值是一个",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "正数"
    },
    {
     "key": "B",
     "text": "负数"
    },
    {
     "key": "C",
     "text": "0"
    },
    {
     "key": "D",
     "text": "不确定的数"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 7,
   "expl": "两串前两个字符相同，第三个字符x的编码120大于s的115，故strcmp返回正数。"
  },
  {
   "id": "2-4",
   "section": 2,
   "number": 4,
   "type": "choice",
   "stem": "要调用数学函数时，在#include 命令行中应包含",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "\"stdio.h\""
    },
    {
     "key": "B",
     "text": "\"string.h\""
    },
    {
     "key": "C",
     "text": "\"math.h\""
    },
    {
     "key": "D",
     "text": "\"ctype.h\""
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 6,
   "expl": "sqrt、pow等数学函数声明在math.h中，stdio.h管输入输出，string.h管字符串处理。"
  },
  {
   "id": "2-5",
   "section": 2,
   "number": 5,
   "type": "choice",
   "stem": "判断 i 和j 至少有一个值为非0的表达式是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "i!= 0&& j!=0"
    },
    {
     "key": "B",
     "text": "i+j!=0"
    },
    {
     "key": "C",
     "text": "illj"
    },
    {
     "key": "D",
     "text": "i&&j"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "i||j只要有任意一个非0即为真；A要求两者都非0，B在i与j互为相反数时会出错。"
  },
  {
   "id": "2-6",
   "section": 2,
   "number": 6,
   "type": "choice",
   "stem": "若a是基本整型变量， c 是单精度实型变量，输入语句 是错误的。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "scanf(\"%d,%f\",&a,&c);"
    },
    {
     "key": "B",
     "text": "scanf(\"d=%d,c=%f\",&a,&c);"
    },
    {
     "key": "C",
     "text": "scanf(\"%d%f\",&a,&c);"
    },
    {
     "key": "D",
     "text": "scanf(\"%d%f\",a,c);"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 2,
   "expl": "scanf的数值项必须传地址，D中a、c前漏了&，会把输入值当作地址写入。"
  },
  {
   "id": "2-8",
   "section": 2,
   "number": 8,
   "type": "choice",
   "stem": "若变量已正确定义并赋值，符合C语言语法的表达式是_.",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "a=2++"
    },
    {
     "key": "B",
     "text": "a=3,5"
    },
    {
     "key": "C",
     "text": "a=a+1=3"
    },
    {
     "key": "D",
     "text": "12.3%4"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 1,
   "expl": "a=3,5是合法的逗号表达式；A的2++、C给表达式赋值、D的浮点取模都非法。"
  },
  {
   "id": "2-9",
   "section": 2,
   "number": 9,
   "type": "choice",
   "stem": "表达式_不能用于判断“x和y不同时为零”。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "x!=OIly!=0"
    },
    {
     "key": "B",
     "text": "xlly"
    },
    {
     "key": "C",
     "text": "!(x==0lly==0)"
    },
    {
     "key": "D",
     "text": "!(x==0 &&y==0)"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "!(x==0||y==0)表示x、y都不为0，不能表达不同时为零，D才是正确的判断形式。"
  },
  {
   "id": "2-10",
   "section": 2,
   "number": 10,
   "type": "choice",
   "stem": "表达式5>3>1值是_.",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "0"
    },
    {
     "key": "B",
     "text": "1"
    },
    {
     "key": "C",
     "text": "3"
    },
    {
     "key": "D",
     "text": "表达式语法错误"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "先算5>3得1，再算1>1得0，关系运算符自左向右结合，所以整个表达式的值为0。"
  },
  {
   "id": "2-11",
   "section": 2,
   "number": 11,
   "type": "choice",
   "stem": "若a 是基本整型变量，c 是单精度实型变量，则输入语句()是错误的。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "scanf(\"%d,%f\",&a,&c);"
    },
    {
     "key": "B",
     "text": "scanf(\"d=%d,c=%f\",&a,&c);"
    },
    {
     "key": "C",
     "text": "scanf(\"%d%f\",&a,&c);"
    },
    {
     "key": "D",
     "text": "scanf(\"%d%f\",a,c);"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 2,
   "expl": "scanf的数值项必须传地址，D中a、c前漏写&，属于错误的调用形式。"
  },
  {
   "id": "2-12",
   "section": 2,
   "number": 12,
   "type": "choice",
   "stem": "以下选项中不正确的整型常量是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "12L"
    },
    {
     "key": "B",
     "text": "-10"
    },
    {
     "key": "C",
     "text": "012"
    },
    {
     "key": "D",
     "text": "2,900"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 1,
   "expl": "2,900中的逗号不属于数字，C的012是合法八进制，12L是长整型常量。"
  },
  {
   "id": "2-13",
   "section": 2,
   "number": 13,
   "type": "choice",
   "stem": "若变量已正确定义并赋值，表达式()不符合C语言语法。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "5&&3"
    },
    {
     "key": "B",
     "text": "int(5.5)"
    },
    {
     "key": "C",
     "text": "+a"
    },
    {
     "key": "D",
     "text": "a=b=c=3"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 1,
   "expl": "C的强制类型转换写成(int)5.5，int(5.5)是函数调用式写法，不符合C语法。"
  },
  {
   "id": "2-14",
   "section": 2,
   "number": 14,
   "type": "choice",
   "stem": "若变量已正确定义并赋值，表达式-k++ 等价于 ( ) 。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "-(k++)"
    },
    {
     "key": "B",
     "text": "-(k+1)"
    },
    {
     "key": "C",
     "text": "- (++k)"
    },
    {
     "key": "D",
     "text": "(-k)++"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "后置++先取k的原值再自增，负号作用在(k++)整体上，故等价于-(k++)。"
  },
  {
   "id": "2-16",
   "section": 2,
   "number": 16,
   "type": "choice",
   "stem": "下列选项中用于判断ch是否是字符的表达式是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "('a'<= ch<= 'z')I('A'<= ch<= 'Z')"
    },
    {
     "key": "B",
     "text": "('a'<= ch<=Iz')&&('A'<= ch<= IZ')"
    },
    {
     "key": "C",
     "text": "(ch >= 'a!&& ch<='z')&&(ch >= 'A'&& ch <='Z')"
    },
    {
     "key": "D",
     "text": "(ch >= 'a!&& ch<= 'z')I(ch >= 'A'&& ch<= 'Z')"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 1,
   "expl": "判断字母须用&&连接上下界，两段区间之间用逻辑或||连接，所以D正确。"
  },
  {
   "id": "2-17",
   "section": 2,
   "number": 17,
   "type": "choice",
   "stem": "以下标识符中，不合法的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "4d"
    },
    {
     "key": "B",
     "text": "_8_d"
    },
    {
     "key": "C",
     "text": "Int"
    },
    {
     "key": "D",
     "text": "key"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "标识符不能以数字开头，4d以4开头；其余以下划线或字母开头都合法。"
  },
  {
   "id": "2-18",
   "section": 2,
   "number": 18,
   "type": "choice",
   "stem": "为表示关系x≥y≥z, 应使用C语言表达式()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "(x>=y)&&(y>=z)"
    },
    {
     "key": "B",
     "text": "(x>=y)AND(y>=z)"
    },
    {
     "key": "C",
     "text": "(x>=y>=z)"
    },
    {
     "key": "D",
     "text": "(x>=y)&(y>=z)"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "C的关系运算符不能连写，须用&&把x>=y和y>=z这两个条件连接起来。"
  },
  {
   "id": "2-19",
   "section": 2,
   "number": 19,
   "type": "choice",
   "stem": "已知int i,a; 执行语句i=(a=2*3,a*5),a+6; 后，变量i 的值是 ( ) 。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "6"
    },
    {
     "key": "B",
     "text": "12"
    },
    {
     "key": "C",
     "text": "30"
    },
    {
     "key": "D",
     "text": "36"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 2,
   "expl": "逗号表达式先使a=6，再算a*5得30赋给i，故i为30，后面的a+6不影响i。"
  },
  {
   "id": "2-20",
   "section": 2,
   "number": 20,
   "type": "choice",
   "stem": "在C语言中，要求运算数必须是整型的运算符是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "%"
    },
    {
     "key": "B",
     "text": "/"
    },
    {
     "key": "C",
     "text": "<"
    },
    {
     "key": "D",
     "text": "!"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "取余%要求两个操作数都是整型；/、<、!的操作数可以是实型，不限于整型。"
  },
  {
   "id": "2-21",
   "section": 2,
   "number": 21,
   "type": "choice",
   "stem": "表达式()的值是0。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "3/5"
    },
    {
     "key": "B",
     "text": "3<5"
    },
    {
     "key": "C",
     "text": "3%5"
    },
    {
     "key": "D",
     "text": "3/5.0"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "3/5是两个整数相除，结果向零取整为0；3%5为3，3/5.0为0.6，都不是0。"
  },
  {
   "id": "2-22",
   "section": 2,
   "number": 22,
   "type": "choice",
   "stem": "在C语言中，数字029是一个()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "八进制数"
    },
    {
     "key": "B",
     "text": "十进制数"
    },
    {
     "key": "C",
     "text": "十六进制数"
    },
    {
     "key": "D",
     "text": "非法数"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 1,
   "expl": "以0开头表示八进制，但八进制数字只能是0到7，029中的9使它成为非法数。"
  },
  {
   "id": "2-23",
   "section": 2,
   "number": 23,
   "type": "choice",
   "stem": "表达式8>6>3值是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "0"
    },
    {
     "key": "B",
     "text": "1"
    },
    {
     "key": "C",
     "text": "3"
    },
    {
     "key": "D",
     "text": "表达式语法错"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "先算8>6得1，再算1>3得0，关系运算符自左向右结合，故表达式的值为0。"
  },
  {
   "id": "2-25",
   "section": 2,
   "number": 25,
   "type": "choice",
   "stem": "以下scanf函数调用语句中不正确的是_。",
   "code": [
    "struct pupil{ char name[20]; int age;\nint sex;\n}pup[5],*p=pup;"
   ],
   "options": [
    {
     "key": "A",
     "text": "scanf(\"%s\", pup[0].n ame);"
    },
    {
     "key": "B",
     "text": "scanf(\"%d\",&pup[0].age);"
    },
    {
     "key": "C",
     "text": "scanf(\"%d\",p->age);"
    },
    {
     "key": "D",
     "text": "scanf(\"%d\",&(p->sex));"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 2,
   "expl": "scanf的%d要求地址，p->age是int值，须写成&p->age，所以C的调用不正确。"
  },
  {
   "id": "2-26",
   "section": 2,
   "number": 26,
   "type": "choice",
   "stem": "若a 为int 类型、且其值为3.则执行完表达式a+=a-=a*a 后 ，a 的值是 。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "-3"
    },
    {
     "key": "B",
     "text": "9"
    },
    {
     "key": "C",
     "text": "-12"
    },
    {
     "key": "D",
     "text": "6"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 2,
   "expl": "复合赋值从右向左结合：a*a为9，a-=9得-6，再a+=-6得-12。"
  },
  {
   "id": "2-27",
   "section": 2,
   "number": 27,
   "type": "choice",
   "stem": "设 x、y、t 均为int 型变量，则执行语句：x=y=3;t=++x l++y;后 ，y 的值为 o",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "不定值"
    },
    {
     "key": "B",
     "text": "3"
    },
    {
     "key": "C",
     "text": "4"
    },
    {
     "key": "D",
     "text": "1"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 3,
   "expl": "++x使x变为4已为真，||短路使++y不执行，所以y保持原值3。"
  },
  {
   "id": "2-28",
   "section": 2,
   "number": 28,
   "type": "choice",
   "stem": "以下名字，不能作为C语言标识符的是：",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "ThislsQingdaoUniversity"
    },
    {
     "key": "B",
     "text": "$$"
    },
    {
     "key": "C",
     "text": "monkey~1"
    },
    {
     "key": "D",
     "text": "_"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "标识符只能由字母、数字、下划线组成，monkey~1中的~是非法字符。"
  },
  {
   "id": "2-29",
   "section": 2,
   "number": 29,
   "type": "choice",
   "stem": "要定义一个做减法运算的宏，以下最恰当的是：",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "#define SUB(X,Y) X-Y"
    },
    {
     "key": "B",
     "text": "#define SUB(X,Y) (X-Y)"
    },
    {
     "key": "C",
     "text": "#define SUB(X,Y) (X)-(Y)"
    },
    {
     "key": "D",
     "text": "#define SUB(X,Y) ((X)-(Y))"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 6,
   "expl": "宏展开只做简单替换，整体加括号才能保证(X)-(Y)作为整体参与外层运算。"
  },
  {
   "id": "2-30",
   "section": 2,
   "number": 30,
   "type": "choice",
   "stem": "对下列代码的描述： 正确的是：",
   "code": [
    "#include \"stdio.h\" int main(){\nlong num=1;\nwhile(num++>0)for(Long i=num;i>=0;i-- )printf(\"i:=\\n \\t %Ld \\n\" ,i);\nreturn 0; }"
   ],
   "options": [
    {
     "key": "A",
     "text": "程序有编译错误，不能执行"
    },
    {
     "key": "B",
     "text": "循环条件永为真，循环无限次，程序根本停不下来，打印输出无限行"
    },
    {
     "key": "C",
     "text": "循环有限次，程序正常结束，打印输出有限行"
    },
    {
     "key": "D",
     "text": "程序运行过程必定会出错(崩溃),结果打印输出有限行"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 4,
   "expl": "num是long型，递增溢出后变为负数，while条件不再成立，循环有限次后正常结束。"
  },
  {
   "id": "2-31",
   "section": 2,
   "number": 31,
   "type": "choice",
   "stem": "定义变量 int a;. 则表达式 a =3,5;执行过后 .a 的值和表达式的值分别是：",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "3,5"
    },
    {
     "key": "B",
     "text": "5,3"
    },
    {
     "key": "C",
     "text": "3,3"
    },
    {
     "key": "D",
     "text": "5,5"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 2,
   "expl": "逗号表达式自左向右执行，a先被赋为3，整个表达式的值是最后一个式子5。"
  },
  {
   "id": "2-32",
   "section": 2,
   "number": 32,
   "type": "choice",
   "stem": "假设有变量定义如下 int a,k; 则以下哪条语句不能确保将变量k 变为0:",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "k=a +~a +1;"
    },
    {
     "key": "B",
     "text": "k^=k;"
    },
    {
     "key": "C",
     "text": "k =k>>(sizeof(int)*8-1);"
    },
    {
     "key": "D",
     "text": "k=k&~k;"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "k>>(sizeof(int)*8-1)只把符号位移到最低位，负数得-1、正数得0，不能确保为0。"
  },
  {
   "id": "2-33",
   "section": 2,
   "number": 33,
   "type": "choice",
   "stem": "下面程序段的输出结果是",
   "code": [
    "int a=-5,b=-3,c;",
    "c = a/b;",
    "printf(\"%d\\n\",c);"
   ],
   "options": [
    {
     "key": "A",
     "text": "1"
    },
    {
     "key": "B",
     "text": "-1"
    },
    {
     "key": "C",
     "text": "2"
    },
    {
     "key": "D",
     "text": "-2"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 2,
   "expl": "两个负数相除仍为正，-5/-3按向零取整得1，整数除法舍去小数部分。"
  },
  {
   "id": "2-34",
   "section": 2,
   "number": 34,
   "type": "choice",
   "stem": "输出整数 printf 函数输出整数时不能使用. 格式限定符。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "%d"
    },
    {
     "key": "B",
     "text": "%X"
    },
    {
     "key": "C",
     "text": "%f"
    },
    {
     "key": "D",
     "text": "%o"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 2,
   "expl": "“%f”用于输出浮点数，用它输出整数类型不匹配，得不到正确结果。"
  },
  {
   "id": "2-35",
   "section": 2,
   "number": 35,
   "type": "choice",
   "stem": "输入整数 scanf 函数输入整数时可使用格式限定符。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "%c"
    },
    {
     "key": "B",
     "text": "%d"
    },
    {
     "key": "C",
     "text": "%e"
    },
    {
     "key": "D",
     "text": "%s"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 2,
   "expl": "“%d”按十进制读入整数；%c读字符、%e读浮点、%s读字符串，都不用于整数。"
  },
  {
   "id": "2-36",
   "section": 2,
   "number": 36,
   "type": "choice",
   "stem": "设变量已正确定义并赋值，以下正确的表达式是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "x=y*5=x+Z"
    },
    {
     "key": "B",
     "text": "int(15.8%5)"
    },
    {
     "key": "C",
     "text": "x= 25%5.0"
    },
    {
     "key": "D",
     "text": "x=y+z+5,++y"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 1,
   "expl": "逗号表达式x=y+z+5,++y合法；A给表达式赋值、B的int(...)写法、C的浮点取模都错。"
  },
  {
   "id": "2-37",
   "section": 2,
   "number": 37,
   "type": "choice",
   "stem": "若有说明语句：char s='\\42'; 则变量 s",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "包含一个字符"
    },
    {
     "key": "B",
     "text": "包含两个字符"
    },
    {
     "key": "C",
     "text": "包含三个字符"
    },
    {
     "key": "D",
     "text": "说明不合法，s的值不确定"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "反斜杠加两位八进制数是一个转义字符，只代表一个字符，所以s中只存放一个字符。"
  },
  {
   "id": "2-38",
   "section": 2,
   "number": 38,
   "type": "choice",
   "stem": "若a是整型变量，c 是浮点型变量，则输入语句()是不安全的。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "scanf(\"%d%f\",a,c);"
    },
    {
     "key": "B",
     "text": "scanf(\"a=%d,c=%f\",&a,&c);"
    },
    {
     "key": "C",
     "text": "scanf(\"%d,%f\",&a,&c);"
    },
    {
     "key": "D",
     "text": "scanf(\"%d%f\",&a,&c);"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 2,
   "expl": "scanf的数值项必须传地址，A中a、c漏写&，会把输入值当地址写入，因而不安全。"
  },
  {
   "id": "2-40",
   "section": 2,
   "number": 40,
   "type": "choice",
   "stem": "为表示x≥y≥z, 须用的C语言表达式为()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "(x>=y)&&(y>=z)"
    },
    {
     "key": "B",
     "text": "(x>=y)AND(y>=x)"
    },
    {
     "key": "C",
     "text": "x>=y>=z"
    },
    {
     "key": "D",
     "text": "(x≥y)&&(y≥z)"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "C的关系运算符不能连写，须用&&连接x>=y和y>=z；B、D的and和≥都不是C运算符。"
  },
  {
   "id": "2-41",
   "section": 2,
   "number": 41,
   "type": "choice",
   "stem": "函数调用语句function((a,b),c)中含有的实参个数为()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "1"
    },
    {
     "key": "B",
     "text": "3"
    },
    {
     "key": "C",
     "text": "2"
    },
    {
     "key": "D",
     "text": "语法有误"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 5,
   "expl": "括号内的(a,b)是逗号表达式，只算一个实参，加上c共两个实参。"
  },
  {
   "id": "2-43",
   "section": 2,
   "number": 43,
   "type": "choice",
   "stem": "以下运算符优先级按从高到低排列正确的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "算术运算、赋值运算、关系运算"
    },
    {
     "key": "B",
     "text": "关系运算、赋值运算、算术运算"
    },
    {
     "key": "C",
     "text": "算术运算、关系运算、赋值运算"
    },
    {
     "key": "D",
     "text": "关系运算、算术运算、赋值运算"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "优先级自高到低为算术、关系、赋值，如a=b+1>2先算加法与比较再赋值。"
  },
  {
   "id": "2-44",
   "section": 2,
   "number": 44,
   "type": "choice",
   "stem": "判断a、b中有且仅有1个值为0的表达式是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "!(a*b)&&a+b"
    },
    {
     "key": "B",
     "text": "(a*b)&&a+b"
    },
    {
     "key": "C",
     "text": "a*b==0"
    },
    {
     "key": "D",
     "text": "a!=0&&!b"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "一个为0时a*b为0，!(a*b)为真且a+b非0；两个都为0时a+b为0，表达式为假。"
  },
  {
   "id": "2-45",
   "section": 2,
   "number": 45,
   "type": "choice",
   "stem": "根据下面的定义，能打印出字母M的语句是()。",
   "code": [
    "Struct person{",
    "Char name[10];",
    "int age;}",
    "c[10]={\"John\",17,\"Paul\",19,\"Mary\",18,\"Adam\",16};"
   ],
   "options": [
    {
     "key": "A",
     "text": "printf(“%c”,c[3].name);"
    },
    {
     "key": "B",
     "text": "printf(“%c”,c[3].name[1]);"
    },
    {
     "key": "C",
     "text": "printf(“%c”,c[2].name[0]);"
    },
    {
     "key": "D",
     "text": "printf(“%c”,c[2].name[1]);"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 9,
   "expl": "c[2]是Mary，它的name[0]正是字母M，其他选项取到的是别的名字或别的字母。"
  },
  {
   "id": "2-46",
   "section": 2,
   "number": 46,
   "type": "choice",
   "stem": "下述代码执行后，a,b的值各为多少?",
   "code": [
    "int a =0,b=0; a =(b++,4);"
   ],
   "options": [
    {
     "key": "A",
     "text": "a=4,b=1"
    },
    {
     "key": "B",
     "text": "a=0,b=1"
    },
    {
     "key": "C",
     "text": "a=1,b=1"
    },
    {
     "key": "D",
     "text": "a=4,b=0"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 2,
   "expl": "b++使b变为1，逗号表达式取最后一个值4赋给a，所以a=4、b=1。"
  },
  {
   "id": "2-47",
   "section": 2,
   "number": 47,
   "type": "choice",
   "stem": "scanf()函数在读不到数据时返回 ()",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "NULL"
    },
    {
     "key": "B",
     "text": "0"
    },
    {
     "key": "C",
     "text": "EOF"
    },
    {
     "key": "D",
     "text": "1"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 2,
   "expl": "scanf读不到任何数据时返回EOF即-1，成功时返回的是读入的项数。"
  },
  {
   "id": "2-49",
   "section": 2,
   "number": 49,
   "type": "choice",
   "stem": "能正确表示逻辑关系：“10≤x≤20” 的C语言表达式是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "x>=10 and x<=20"
    },
    {
     "key": "B",
     "text": "x>=10 or x<=20"
    },
    {
     "key": "C",
     "text": "x>=10 &&x<=20"
    },
    {
     "key": "D",
     "text": "x>=10 x<= 20"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "C语言用&&表示并且，A、B的and、or是其他语言的写法，D缺少逻辑运算符。"
  },
  {
   "id": "2-50",
   "section": 2,
   "number": 50,
   "type": "choice",
   "stem": "若有变量定义： char c;int i;double x;则表达式c+5*i-x 的最终计算结果为()类型。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "char"
    },
    {
     "key": "B",
     "text": "int"
    },
    {
     "key": "C",
     "text": "float"
    },
    {
     "key": "D",
     "text": "double"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 1,
   "expl": "double级别最高，char与int先提升为int，再与double运算，最终结果为double。"
  },
  {
   "id": "2-51",
   "section": 2,
   "number": 51,
   "type": "choice",
   "stem": "下列程序执行后的输出结果是",
   "code": [
    "main() {\nint x='f';\nprintf(\"%c \\n\",'A'+(x-'a'+1)); }"
   ],
   "options": [
    {
     "key": "A",
     "text": "G"
    },
    {
     "key": "B",
     "text": "H"
    },
    {
     "key": "C",
     "text": "I"
    },
    {
     "key": "D",
     "text": "J"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 2,
   "expl": "x为102，x-'a'得5，加1后加上A的编码65得71，即字符G。"
  },
  {
   "id": "2-52",
   "section": 2,
   "number": 52,
   "type": "choice",
   "stem": "putchar()函数的功能是向终端输出",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "多个字符"
    },
    {
     "key": "B",
     "text": "一个字符"
    },
    {
     "key": "C",
     "text": "一个实型变量值"
    },
    {
     "key": "D",
     "text": "一个整型变量表达式"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 2,
   "expl": "putchar的作用是向终端输出一个字符，实参可以是字符常量或字符编码。"
  },
  {
   "id": "2-53",
   "section": 2,
   "number": 53,
   "type": "choice",
   "stem": "设有定义“int a=1,b=2,c=3,d=4,m=2,n=2;”,则执行表达式“(m=a>b)&& (n=c>d)”后，n的值为()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "1"
    },
    {
     "key": "B",
     "text": "2"
    },
    {
     "key": "C",
     "text": "3"
    },
    {
     "key": "D",
     "text": "0"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 3,
   "expl": "a>b为假使m=0，&&短路，n=c>d整个表达式不执行，n保持为2。"
  },
  {
   "id": "2-54",
   "section": 2,
   "number": 54,
   "type": "choice",
   "stem": "已知字符“A”的 ASCII代码值是65,字符变量c1的值是“A”,c2的值是“D”。执行语句“printf(\"%d,%d\",cl,c2-2);” 后，输出结果是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "A,B"
    },
    {
     "key": "B",
     "text": "A,68"
    },
    {
     "key": "C",
     "text": "65,66"
    },
    {
     "key": "D",
     "text": "65,68"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 2,
   "expl": "%d按整数输出，c1为65，c2-2为68-2=66，故输出65,66。"
  },
  {
   "id": "2-55",
   "section": 2,
   "number": 55,
   "type": "choice",
   "stem": "在以下一组运算符中，优先级最高的运算符是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "<="
    },
    {
     "key": "B",
     "text": "="
    },
    {
     "key": "C",
     "text": "%"
    },
    {
     "key": "D",
     "text": "&&"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "取余%属算术运算符，优先级高于关系<=、逻辑&&以及赋值=。"
  },
  {
   "id": "2-57",
   "section": 2,
   "number": 57,
   "type": "choice",
   "stem": "在嵌套使用if 语句时，C语言规定else总是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "和之前与其具有相同缩进位置的if 配对"
    },
    {
     "key": "B",
     "text": "和之前与其最近的if 配对"
    },
    {
     "key": "C",
     "text": "和之前与其最近的且不带else的if 配对"
    },
    {
     "key": "D",
     "text": "和之前的第一个if 配对"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 3,
   "expl": "else 总与它前面最近的、还没配上 else 的 if 配对，和缩进无关，故选 C。"
  },
  {
   "id": "2-58",
   "section": 2,
   "number": 58,
   "type": "choice",
   "stem": "下列叙述中正确的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "break语句只能用于switch语句"
    },
    {
     "key": "B",
     "text": "在switch语句中必须使用default"
    },
    {
     "key": "C",
     "text": "break 语句必须与switch语句中的case配对使用"
    },
    {
     "key": "D",
     "text": "在switch语句中，不一定使用break语句"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 3,
   "expl": "break 也能用于循环，default 和 break 都不是必需的，故 D 对；A、B、C 说得太绝对。"
  },
  {
   "id": "2-59",
   "section": 2,
   "number": 59,
   "type": "choice",
   "stem": "下列程序段的输出结果是()。",
   "code": [
    "int main(void)",
    "{",
    "int a =2,b=-1,c =2;",
    "if(a<b)",
    "if(b<0)",
    "else c++;",
    "printf(\"%d\\n\",c);",
    "return 0; }"
   ],
   "options": [
    {
     "key": "A",
     "text": "0"
    },
    {
     "key": "B",
     "text": "1"
    },
    {
     "key": "C",
     "text": "2"
    },
    {
     "key": "D",
     "text": "3"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 3,
   "expl": "a<b 即 2<-1 为假，外层 if 不成立，内层 if 及 else 都不执行，c 仍是 2，输出 2。"
  },
  {
   "id": "2-60",
   "section": 2,
   "number": 60,
   "type": "choice",
   "stem": "下列程序段的输出结果是()。",
   "code": [
    "int main(void) {\nint x=1,a =0,b=0;\nswitch(x)\n{\ncase 0: b++;\ncase 1: a++;\ncase 2: a++;b++; }\nprintf(\"a=%d,b=%d\\n\",a,b);\nreturn 0; }"
   ],
   "options": [
    {
     "key": "A",
     "text": "a=2,b=1"
    },
    {
     "key": "B",
     "text": "a=1,b=1"
    },
    {
     "key": "C",
     "text": "a=1,b=0"
    },
    {
     "key": "D",
     "text": "a=2,b=2"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 3,
   "expl": "x=1 从 case 1 进入且无 break，继续执行 case 1 和 case 2：a 自增两次为 2，b 自增一次为 1。"
  },
  {
   "id": "2-61",
   "section": 2,
   "number": 61,
   "type": "choice",
   "stem": "能正确表示逻辑关系\"a≥10 或 a≤0\"的C语言表达式是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "a>=10 or a<=0"
    },
    {
     "key": "B",
     "text": "a>=0 a<=10"
    },
    {
     "key": "C",
     "text": "a>=10&&a<=0"
    },
    {
     "key": "D",
     "text": "a>=10 a<=0"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 1,
   "expl": "两个不等式是“或”关系，须用逻辑或 || 连接；用 && 表示同时成立无解，A 里的 or 不是 C 运算符。"
  },
  {
   "id": "2-62",
   "section": 2,
   "number": 62,
   "type": "choice",
   "stem": "能正确表示“当x的取值在[-58,-40]和[40,58]范围内为真，否则为假”的表达式是 ()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "(x>=-58)&&(x<=-40)&&(x>=40)&&(x<=58)"
    },
    {
     "key": "B",
     "text": "(x>=-58)II(x<=-40)Ⅱ(x>=40)I(x<=58)"
    },
    {
     "key": "C",
     "text": "(x>=-58)&&(x<=-40)II(x>=40)&&(x<=58)"
    },
    {
     "key": "D",
     "text": "(x>=-58) I(x<=-40)&&(x>=40)II(x<=58)"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 1,
   "expl": "区间内用 &&、两组区间之间用 ||，即 (x>=-58&&x<=-40)||(x>=40&&x<=58)；A 全用 && 永不成立。"
  },
  {
   "id": "2-63",
   "section": 2,
   "number": 63,
   "type": "choice",
   "stem": "已知int a=7,b=9,c=6;则c的结果是().",
   "code": [
    "{\nif(a<b)\nif(b<0)c=0; else c+=1;",
    "printf(\"%d\\n\",c);",
    "}"
   ],
   "options": [
    {
     "key": "A",
     "text": "9"
    },
    {
     "key": "B",
     "text": "6"
    },
    {
     "key": "C",
     "text": "0"
    },
    {
     "key": "D",
     "text": "7"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 3,
   "expl": "a<b 即 7<9 为真进入内层，b<0 为假，于是执行 else 的 c+=1，c 由 6 变 7。"
  },
  {
   "id": "2-64",
   "section": 2,
   "number": 64,
   "type": "choice",
   "stem": "当字符型变量ch 取何值(或何范围)时输出“YES”",
   "code": [
    "char ch;\nscanf(\"%C\",&ch);\nif(ch<='A'&&ch>='Z') printf(\"NO\");\nelse printf(\"YES\");"
   ],
   "options": [
    {
     "key": "A",
     "text": "大写字母A~Z"
    },
    {
     "key": "B",
     "text": "任何字符"
    },
    {
     "key": "C",
     "text": "除大写字母以外"
    },
    {
     "key": "D",
     "text": "大写字母B~Y"
    }
   ],
   "answer": "B",
   "points": 2.0,
   "ch": 3,
   "expl": "ch<='A'&&ch>='Z' 条件写反了（'A' 小于 'Z'），恒为假，永远走 else 输出 YES，任何字符都行。"
  },
  {
   "id": "2-65",
   "section": 2,
   "number": 65,
   "type": "choice",
   "stem": "当字符型变量ch取何值(或何范围)时输出“YES”",
   "code": [
    "char ch;\nscanf(\"%c\",&ch);\nif(ch>='A'&&ch<='Z')\nif(ch!='I'&&ch!='K')printf(\"NO\"); else printf(\"YES\");"
   ],
   "options": [
    {
     "key": "A",
     "text": "I 和K"
    },
    {
     "key": "B",
     "text": "除l和K以外的大写字母"
    },
    {
     "key": "C",
     "text": "除大写字母外的其他字符"
    },
    {
     "key": "D",
     "text": "大写字母"
    }
   ],
   "answer": "A",
   "points": 2.0,
   "ch": 3,
   "expl": "只有大写字母才进内层；内层 ch!='I'&&ch!='K' 为假时输出 YES，即 ch 为 I 或 K。"
  },
  {
   "id": "2-66",
   "section": 2,
   "number": 66,
   "type": "choice",
   "stem": "若int i=10;执行下列程序后，变量i的正确结果是()。",
   "code": [
    "switch(i){\ncase 9:i+=1;\ncase 10:i+=1;\ncase 11:i+=1;\ndefault :i+=1; }"
   ],
   "options": [
    {
     "key": "A",
     "text": "10"
    },
    {
     "key": "B",
     "text": "11"
    },
    {
     "key": "C",
     "text": "12"
    },
    {
     "key": "D",
     "text": "13"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 3,
   "expl": "i=10 从 case 10 进入，后面没有 break，case10、case11、default 各加一次，i 由 10 变 13。"
  },
  {
   "id": "2-67",
   "section": 2,
   "number": 67,
   "type": "choice",
   "stem": "有以下程序： 程序运行时，输入的值在哪个范围才会有输出结果()",
   "code": [
    "void main()\n{int x,t=1;\nscanf(\"%d\",&x);\nif(x<=5)t++;\nelse if(x!=20)\nprintf(\"%d\\n\",x); }"
   ],
   "options": [
    {
     "key": "A",
     "text": "不等于20的整数"
    },
    {
     "key": "B",
     "text": "6"
    },
    {
     "key": "C",
     "text": "大于5或等于20的整数 main() {\nint x;\nscanf(\"%d\",&x);\nif(x++>5)printf(\"%d\\n\",x); else printf(\"%d\\n\",x--);\n}"
    },
    {
     "key": "D",
     "text": "4"
    }
   ],
   "answer": "B",
   "points": 2.0,
   "ch": 3,
   "expl": "if(x<=5) 只给 t 加一不输出，else if(x!=20) 才 printf，所以只有 x>5 且不等于 20 的 6 有输出。"
  },
  {
   "id": "2-69",
   "section": 2,
   "number": 69,
   "type": "choice",
   "stem": "在嵌套使用if 语句时，C语言规定else总是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "和之前与其具有相同缩进位置的if配对"
    },
    {
     "key": "B",
     "text": "和之前与其最近的if 配对"
    },
    {
     "key": "C",
     "text": "和之前与其最近的且不带else的if 配对"
    },
    {
     "key": "D",
     "text": "和之前的第一个if 配对"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 3,
   "expl": "else 与其前面最近的、尚未配上 else 的 if 配对，缩进和先后位置都不作依据，故选 C。"
  },
  {
   "id": "2-70",
   "section": 2,
   "number": 70,
   "type": "choice",
   "stem": "下列程序段执行后s的值为()。",
   "code": [
    "int i=5,s=0;\nwhile(i--)\nif(i%2)continue; else s+=i;"
   ],
   "options": [
    {
     "key": "A",
     "text": "15"
    },
    {
     "key": "B",
     "text": "10"
    },
    {
     "key": "C",
     "text": "9"
    },
    {
     "key": "D",
     "text": "6"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 4,
   "expl": "i-- 依次得 4、2、0，偶数的 4 和 2 累加使 s=6，奇数 continue 跳过，i 为 0 时结束。"
  },
  {
   "id": "2-72",
   "section": 2,
   "number": 72,
   "type": "choice",
   "stem": "C语言中while和do-while循环的主要区别是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "do-while 的循环体至少无条件执行一次"
    },
    {
     "key": "B",
     "text": "while 的循环控制条件比do-while 的循环控制条件严格"
    },
    {
     "key": "C",
     "text": "do-while 允许从外部转到循环体内"
    },
    {
     "key": "D",
     "text": "do-while 的循环体不能是复合语句"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 4,
   "expl": "do-while 先执行循环体再判断条件，循环体至少执行一次；while 先判断，可能一次都不执行。"
  },
  {
   "id": "2-73",
   "section": 2,
   "number": 73,
   "type": "choice",
   "stem": "执行以下循环语句时，下列说法正确的是()。",
   "code": [
    "x = -1;",
    "do {",
    "x = x * x;",
    "} while (x == 0);"
   ],
   "options": [
    {
     "key": "A",
     "text": "循环体将执行一次"
    },
    {
     "key": "B",
     "text": "循环体将执行两次"
    },
    {
     "key": "C",
     "text": "循环体将执行无限次"
    },
    {
     "key": "D",
     "text": "系统将提示有语法错误"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 4,
   "expl": "do-while 先执行一次，x=-1 经 x=x*x 变为 1，判断 x==0 为假退出，循环体只执行一次。"
  },
  {
   "id": "2-74",
   "section": 2,
   "number": 74,
   "type": "choice",
   "stem": "运行以下程序后，如果从键盘上输入 65 14<回车>,则输出结果为()。",
   "code": [
    "int main(void)",
    "{",
    "int m,n;",
    "printf(\"Enter m,n;\");",
    "scanf(\"%d%d\",&m,&n);",
    "while(m !=n)",
    "{ while(m >n) m =m-n;",
    "while(n>m) n =n -m;",
    "}",
    "printf(\"m=%d\\n\",m);",
    "return 0; }"
   ],
   "options": [
    {
     "key": "A",
     "text": "m=3"
    },
    {
     "key": "B",
     "text": "m=2"
    },
    {
     "key": "C",
     "text": "m=1"
    },
    {
     "key": "D",
     "text": "m=0"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 4,
   "expl": "用辗转相减法求最大公约数：65 与 14 反复相减，两数相等时 m=1。"
  },
  {
   "id": "2-76",
   "section": 2,
   "number": 76,
   "type": "choice",
   "stem": "下列程序段执行后s值为_。",
   "code": [
    "int i=5,s=0; while(--i!=0){ if(i%2==1)",
    "continue; S+=i;\n}"
   ],
   "options": [
    {
     "key": "A",
     "text": "15"
    },
    {
     "key": "B",
     "text": "9"
    },
    {
     "key": "C",
     "text": "6"
    },
    {
     "key": "D",
     "text": "4"
    }
   ],
   "answer": "C",
   "points": 2.0,
   "ch": 4,
   "expl": "i 依次为 4、3、2、1，偶数 4 和 2 累加得 s=6，奇数 continue；--i 为 0 时循环结束。"
  },
  {
   "id": "2-77",
   "section": 2,
   "number": 77,
   "type": "choice",
   "stem": "下列程序段中，非死循环的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "int i=100;\nwhile(1)\n{i=i%100+1;\nif(i>=100)\nbreak; }"
    },
    {
     "key": "B",
     "text": "int k=0; do{\n++k;\n}while(k>=0);"
    },
    {
     "key": "C",
     "text": "int s=10;\nwhile(s)\nS++;"
    },
    {
     "key": "D",
     "text": "for( ; ; )"
    }
   ],
   "answer": "A",
   "points": 2.0,
   "ch": 4,
   "expl": "A 中 i=i%100+1 递增到 100 时由 if(i>=100) break 跳出，是有限循环；B、C、D 都没有终止条件。"
  },
  {
   "id": "2-78",
   "section": 2,
   "number": 78,
   "type": "choice",
   "stem": "下面有关for循环的正确描述是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "for 循环只能用于循环次数确定的情况"
    },
    {
     "key": "B",
     "text": "for 循环先执行循环体语句，后判断循环条件"
    },
    {
     "key": "C",
     "text": "在for 循环中，不能用break 语句跳出循环体"
    },
    {
     "key": "D",
     "text": "for 循环的循环体可以包含多条语句，但多条语句必须构成复合语句"
    }
   ],
   "answer": "D",
   "points": 2.0,
   "ch": 4,
   "expl": "for 的循环体有多条语句时必须用花括号构成复合语句；A、B、C 的描述都不符合 for 的实际规则。"
  },
  {
   "id": "2-79",
   "section": 2,
   "number": 79,
   "type": "choice",
   "stem": "当执行以下程序段时，以下答案正确的是?",
   "code": [
    "x=-1; do {\nx=x*x;\n}while(!x);"
   ],
   "options": [
    {
     "key": "A",
     "text": "循环体将执行一次"
    },
    {
     "key": "B",
     "text": "循环体将执行两次"
    },
    {
     "key": "C",
     "text": "循环体将执行无限次"
    },
    {
     "key": "D",
     "text": "系统将提示有语法错误"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 4,
   "expl": "x=-1 执行 x=x*x 后为 1，while(!x) 即 while(0) 为假，循环体只执行一次。"
  },
  {
   "id": "2-81",
   "section": 2,
   "number": 81,
   "type": "choice",
   "stem": "下面程序计算100之内能被3整除的整数之和。阅读程序，从4个选项中选出合适的选项填到【1】处，使程序功能完整。",
   "code": [
    "#include <stdio.h>",
    "int main()",
    "{",
    "int i,sum =0;",
    "for(i =1;i<100;i++)",
    "{",
    "if(i%3)",
    "【1】;",
    "sum +=i;",
    "}",
    "printf(\"%d\\n\",sum);",
    "}"
   ],
   "options": [
    {
     "key": "A",
     "text": "break"
    },
    {
     "key": "B",
     "text": "return"
    },
    {
     "key": "C",
     "text": "continue"
    },
    {
     "key": "D",
     "text": "return 0"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 4,
   "expl": "i%3 非 0 时不该累加，应 continue 跳过本轮，故选 C；break 会直接结束整个求和循环。"
  },
  {
   "id": "2-82",
   "section": 2,
   "number": 82,
   "type": "choice",
   "stem": "阅读下面程序，从给出的4个选项中选出程序的运行结果。",
   "code": [
    "#include <stdio.h> int main()\n{\nint k =1,m =0;\ndo{\nk +=2;\nm +=k;\nif(m >50)",
    "break; }while(1);\nprintf(\"sum=%d\\n\",m); return 0;\n}"
   ],
   "options": [
    {
     "key": "A",
     "text": "m=48"
    },
    {
     "key": "B",
     "text": "sum=63"
    },
    {
     "key": "C",
     "text": "sum=48"
    },
    {
     "key": "D",
     "text": "m=63"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 4,
   "expl": "k 依次为 3、5、7、9、11、13，m 累加到 63 超过 50 时 break，输出 sum=63。"
  },
  {
   "id": "2-83",
   "section": 2,
   "number": 83,
   "type": "choice",
   "stem": "以下有关C语言while 循环和do-while 循环的描述中正确的是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "while 和do-while结束循环只能靠break语句"
    },
    {
     "key": "B",
     "text": "do-while 的循环控制条件比while 的循环控制条件严格"
    },
    {
     "key": "C",
     "text": "do-while 的循环体可以无条件执行一次"
    },
    {
     "key": "D",
     "text": "在任何情况下，while 循环的程序都不能用do-while 循环来实现"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 4,
   "expl": "do-while 先执行循环体后判断条件，循环体至少无条件执行一次；其余选项说法都不成立。"
  },
  {
   "id": "2-84",
   "section": 2,
   "number": 84,
   "type": "choice",
   "stem": "以下程序段的输出结果是()。",
   "code": [
    "int i,j;",
    "for(i=1;i<4;i++)",
    "{for( j=i;j<4;j++)printf(\"%d*%d=%d\",i ,j,i*j); printf(\"\\n\");}"
   ],
   "options": [
    {
     "key": "A",
     "text": "1*1=11*2=21*3=3 2*1=22*2=4 3*1=3"
    },
    {
     "key": "B",
     "text": "1*1=11*2=21*3=3 2*2=42*3=6 3*3=9"
    },
    {
     "key": "C",
     "text": "1*1=1 1*2=22*2=4 1*3=32*3=63*3=9"
    },
    {
     "key": "D",
     "text": "1*1=1 2*1=22*2=4 3*1=33*2=63*3=9"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 4,
   "expl": "内层 j 从 i 开始，形成上三角：1*1、1*2、1*3，再 2*2、2*3，最后 3*3，与 B 一致。"
  },
  {
   "id": "2-85",
   "section": 2,
   "number": 85,
   "type": "choice",
   "stem": "C语言中函数返回值的类型是由()决定的。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "return 语句中的表达式类型"
    },
    {
     "key": "B",
     "text": "调用该函数的主调函数的类型"
    },
    {
     "key": "C",
     "text": "调用函数时临时决定"
    },
    {
     "key": "D",
     "text": "定义函数时所指定的函数类型"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 5,
   "expl": "函数返回值的类型由定义函数时指定的类型决定，return 后的表达式会自动转换为该类型。"
  },
  {
   "id": "2-86",
   "section": 2,
   "number": 86,
   "type": "choice",
   "stem": "在一个被调用函数中，关于 return 语句使用的描述，错误的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "被调用函数中可以不用return 语句"
    },
    {
     "key": "B",
     "text": "被调用函数中可以使用多个 return 语句"
    },
    {
     "key": "C",
     "text": "被调用函数中，如果有返回值，就一定要有return 语句"
    },
    {
     "key": "D",
     "text": "被调用函数中，一个return 语句可以返回多个值给调用函数"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 5,
   "expl": "一个 return 语句只能带回一个值，要返回多个值得用指针参数等办法，故 D 说法错误。"
  },
  {
   "id": "2-87",
   "section": 2,
   "number": 87,
   "type": "choice",
   "stem": "将两个字符串连接起来组成一个字符串时，选用函数()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "strlen()"
    },
    {
     "key": "B",
     "text": "strcpy()"
    },
    {
     "key": "C",
     "text": "strcat()"
    },
    {
     "key": "D",
     "text": "strcmp()"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "strcat 把第二个串接到第一个串末尾实现连接；strlen 求长度，strcpy 复制，strcmp 比较。"
  },
  {
   "id": "2-88",
   "section": 2,
   "number": 88,
   "type": "choice",
   "stem": "对于以下递归函数f,调用f(4),其返回值为()。",
   "code": [
    "int {\n} f(int n)\nif(n)return f(n -1)+n; else return n;"
   ],
   "options": [
    {
     "key": "A",
     "text": "10"
    },
    {
     "key": "B",
     "text": "4"
    },
    {
     "key": "C",
     "text": "0"
    },
    {
     "key": "D",
     "text": "以上均不是"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 5,
   "expl": "f(n)=f(n-1)+n，展开为 4+3+2+1+0，所以调用 f(4) 返回 10。"
  },
  {
   "id": "2-89",
   "section": 2,
   "number": 89,
   "type": "choice",
   "stem": "数组名作为参数时，以下叙述正确的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "函数调用时是将实参数组的所有元素值传给形参。"
    },
    {
     "key": "B",
     "text": "函数调用时是将实参数组的第一个元素值传给形参。"
    },
    {
     "key": "C",
     "text": "函数调用时是将实参数组的首地址传给形参。"
    },
    {
     "key": "D",
     "text": "函数调用时是将实参数组的所有元素的地址传给形参。"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "数组名作实参时传的是首地址，形参与实参指向同一片内存，并非逐元素赋值。"
  },
  {
   "id": "2-90",
   "section": 2,
   "number": 90,
   "type": "choice",
   "stem": "关于递归函数以下叙述错误的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "递归函数是自己调用自己。"
    },
    {
     "key": "B",
     "text": "递归函数的运行速度很快。"
    },
    {
     "key": "C",
     "text": "递归函数占用较多的存储空间。"
    },
    {
     "key": "D",
     "text": "递归函数的运行速度一般比较慢。"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 5,
   "expl": "递归每层都要保存现场并反复调用，既占栈空间又慢，所以“运行速度很快”说法错误。"
  },
  {
   "id": "2-92",
   "section": 2,
   "number": 92,
   "type": "choice",
   "stem": "以下程序的运行结果是()。",
   "code": [
    "int x=5,y =6;\nvoid incxy() {\nX++;\ny++;\n}\nint main(void) {\nint x=3;\nincxy();\nprintf(\"%d,%d\\n\",x,y);\nreturn 0; }"
   ],
   "options": [
    {
     "key": "A",
     "text": "3,6"
    },
    {
     "key": "B",
     "text": "4,7"
    },
    {
     "key": "C",
     "text": "3,7"
    },
    {
     "key": "D",
     "text": "6,7"
    }
   ],
   "answer": "C",
   "points": 1.0,
   "ch": 5,
   "expl": "incxy 改的是全局 x、y，而 printf 输出的是 main 里的局部 x=3；全局 y 由 6 变 7，输出 3,7。"
  },
  {
   "id": "2-93",
   "section": 2,
   "number": 93,
   "type": "choice",
   "stem": "函数调用程序如下： 相关说法错误的是：",
   "code": [
    "void f(int a[],int n) {\nint i;\nfor(i=0;i<n;i++)\na[i]=i; }",
    "int main()\n{\nint a[100],n=30; f(a,n); }",
    "将 f(a,n);改为f(p,n);, 效果完全一样。"
   ],
   "options": [
    {
     "key": "A",
     "text": "f 函数头改为int f(int*a,int n),无需其它改变，效果完全一样。"
    },
    {
     "key": "B",
     "text": "main函数中增加int*p=a;"
    },
    {
     "key": "C",
     "text": "用数组名作f()的参数，则main() 中的数组与f() 中的数组是同一数组。"
    },
    {
     "key": "D",
     "text": "用数组名作f()的参数，实现了实参与形参双向的值传递。"
    }
   ],
   "answer": "D",
   "points": 2.0,
   "ch": 7,
   "expl": "数组名传的是首地址，函数里改 a[i] 会改到 main 的数组，但这是单向地址传递，不是双向值传递。"
  },
  {
   "id": "2-94",
   "section": 2,
   "number": 94,
   "type": "choice",
   "stem": "不正确的赋值或赋初值的方式是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "char str[]=\"string\";"
    },
    {
     "key": "B",
     "text": "char str[7]={'s','t','r',i, 'n','g'};"
    },
    {
     "key": "C",
     "text": "char str[10];str=\"string\";"
    },
    {
     "key": "D",
     "text": "char str[7]={'s','t','r',i,'n','g','IO'};"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "数组名是常量地址，不能整体赋值，C 中 str=\"string\" 非法；A、B、D 的初始化都合法。"
  },
  {
   "id": "2-95",
   "section": 2,
   "number": 95,
   "type": "choice",
   "stem": "以下数组定义中错误的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "i nt x[][3]={0};"
    },
    {
     "key": "B",
     "text": "int x[2][3]={{1,2},{3,4},{5,6)};"
    },
    {
     "key": "C",
     "text": "int x[][3]={{1,2,3},(4,5,6)};"
    },
    {
     "key": "D",
     "text": "int x[2][3]={1,2,3,4,5,6};"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "x[2][3] 只有 2 行，B 却给出 3 组初值，行数超出；A、D 部分初始化合法，C 写法也可。"
  },
  {
   "id": "2-96",
   "section": 2,
   "number": 96,
   "type": "choice",
   "stem": "数组定义为 int a[3][2]={1,2,3,4,5,6}, 数组元素()的值为6。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "a[3][2]"
    },
    {
     "key": "B",
     "text": "a[2][1]"
    },
    {
     "key": "C",
     "text": "a[1][2]"
    },
    {
     "key": "D",
     "text": "a[2][3]"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "数组按行存放，每行 2 个元素，a[2][0]=5、a[2][1]=6；a[3][2]、a[2][3] 已越界。"
  },
  {
   "id": "2-97",
   "section": 2,
   "number": 97,
   "type": "choice",
   "stem": "以下不正确的赋值或赋初值的方式是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "char str[]=\"string\";"
    },
    {
     "key": "B",
     "text": "char str[7]={'s','t','r','i','n','g'};"
    },
    {
     "key": "C",
     "text": "char str[10];str=\"string\";"
    },
    {
     "key": "D",
     "text": "char str[7]={'s','t','r','i','n','g',\\0'};"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "数组名不能整体赋值，char str[10];str=\"string\"; 非法；其余几种初始化方式都正确。"
  },
  {
   "id": "2-98",
   "section": 2,
   "number": 98,
   "type": "choice",
   "stem": "假设scanf 语句执行时输入ABCDE<回车> . 能使puts(s) 语句正确输出ABCDE字符串的 2分程序段是 。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "char s[5]={\"ABCDE\"};puts(s);"
    },
    {
     "key": "B",
     "text": "char s[5]={'A','B','C','D','E'};puts(s);"
    },
    {
     "key": "C",
     "text": "char *s;scanf(\"%s\",s);puts(s);"
    },
    {
     "key": "D",
     "text": "char *s;s=\"ABCDE\";puts(s);"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 7,
   "expl": "char *s; s=\"ABCDE\"; 让指针指向字符串常量再 puts 输出；A、B 装不下结尾 '\\0'，C 中 s 未指向空间。"
  },
  {
   "id": "2-99",
   "section": 2,
   "number": 99,
   "type": "choice",
   "stem": "有说明语句int a[4][5];,则a[2]+3 表示_ 。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "a 数组行下标为2、列下标为3的元素的地址"
    },
    {
     "key": "B",
     "text": "a 数组行下标为2、列下标为3的元素的值"
    },
    {
     "key": "C",
     "text": "a 数组第2行的首地址"
    },
    {
     "key": "D",
     "text": "a 数组第3行的首地址"
    }
   ],
   "answer": "A",
   "points": 2.0,
   "ch": 8,
   "expl": "a[2] 是第 3 行首地址，a[2]+3 即 &a[2][3]，是行下标 2、列下标 3 元素的地址而不是值。"
  },
  {
   "id": "2-101",
   "section": 2,
   "number": 101,
   "type": "choice",
   "stem": "对于定义 char str[]=\"abc\\00Odef\\n\" ( 注：其中0为数字零),求字符串str的长度len和数组str的大小size,len 和size分别是：",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "12,13"
    },
    {
     "key": "B",
     "text": "3,11"
    },
    {
     "key": "C",
     "text": "3,9"
    },
    {
     "key": "D",
     "text": "3,4"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "字符串遇 '\\0' 就结束，长度只有 3；数组大小要把结尾 '\\0' 也算进去，故取 3 和 9。"
  },
  {
   "id": "2-102",
   "section": 2,
   "number": 102,
   "type": "choice",
   "stem": "下面描述正确的是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "两个字符串所包含的字符个数相同时才能比较字符串"
    },
    {
     "key": "B",
     "text": "字符个数多的字符串比字符个数少的字符串大"
    },
    {
     "key": "C",
     "text": "字符串“STOP”和“STOP”相等"
    },
    {
     "key": "D",
     "text": "字符串“That” 小于字符串“The”"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 7,
   "expl": "字符串按 ASCII 逐字符比较，That 与 The 第三个字符 a<e，所以 That 小于 The。"
  },
  {
   "id": "2-103",
   "section": 2,
   "number": 103,
   "type": "choice",
   "stem": "有两个字符数组a,b, 则以下正确的输入语句是()",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "qets(a,b);"
    },
    {
     "key": "B",
     "text": "scanf(\"%s%s\",a,b);"
    },
    {
     "key": "C",
     "text": "scanf(\"%s%s\",&a,&b);"
    },
    {
     "key": "D",
     "text": "gets(\"a\"),gets(\"b\");"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "数组名本身已是地址，scanf(\"%s%s\",a,b) 正确；gets 只能带一个参数，取 &a 类型也不对。"
  },
  {
   "id": "2-104",
   "section": 2,
   "number": 104,
   "type": "choice",
   "stem": "若有以下定义： 则不能代表字符o 的表达式是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "ps+2"
    },
    {
     "key": "B",
     "text": "s[2]"
    },
    {
     "key": "C",
     "text": "ps[2]"
    },
    {
     "key": "D",
     "text": "ps+=2,*ps"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 8,
   "expl": "ps+2 是指针算术，得到的是地址而非字符 o；s[2]、ps[2]、*(ps+2) 才是该字符。"
  },
  {
   "id": "2-105",
   "section": 2,
   "number": 105,
   "type": "choice",
   "stem": "以下能正确定义数组并正确赋初值的语句是()。注：C语言编译器为c99以前的版本。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "int N=5,b[N][N];"
    },
    {
     "key": "B",
     "text": "int a[1][2]={{1},{3}};"
    },
    {
     "key": "C",
     "text": "int c[2][]={{1,2},{3,4}};"
    },
    {
     "key": "D",
     "text": "int d[3][2]={{1,2},{34}};"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 7,
   "expl": "int d[3][2]={{1,2},{3,4}} 部分初始化合法；A 用变量作长度，B 行数超 1，C 第二维不能空。"
  },
  {
   "id": "2-106",
   "section": 2,
   "number": 106,
   "type": "choice",
   "stem": "以下对一维数组a的正确说明是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "char a(10);"
    },
    {
     "key": "B",
     "text": "int a[];"
    },
    {
     "key": "C",
     "text": "int k=5,a[k];"
    },
    {
     "key": "D",
     "text": "char a[3]={'a',’b’,'c’};"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 7,
   "expl": "char a[3]={'a','b','c'} 定义并赋初值正确；A 用了圆括号，B 缺少长度，C 用变量作长度。"
  },
  {
   "id": "2-107",
   "section": 2,
   "number": 107,
   "type": "choice",
   "stem": "下列数据中属于C语言的“字符串常量”的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "“a”"
    },
    {
     "key": "B",
     "text": "{ABC}"
    },
    {
     "key": "C",
     "text": "‘abc\\0'"
    },
    {
     "key": "D",
     "text": "'a'"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "用双引号括起来的 \"a\" 才是字符串常量；'a' 是字符常量，花括号形式不是 C 的字符串写法。"
  },
  {
   "id": "2-108",
   "section": 2,
   "number": 108,
   "type": "choice",
   "stem": "以下程序的执行功能是()。",
   "code": [
    "void main() {\nint a[5]={66,78,82,53,91},b[5]={70,58,81,65,90},i,n=0; for(i=0;i<5;i++)\n{\nif(a[i]>b[i])\nn++;\n}",
    "printf(\"n=%d\\n\",n); }"
   ],
   "options": [
    {
     "key": "A",
     "text": "统计数组a各元素值等于数组b 对应元素值的个数"
    },
    {
     "key": "B",
     "text": "统计数组a各元素值小于数组b对应元素值的个数"
    },
    {
     "key": "C",
     "text": "统计数组a各元素值大于60的个数"
    },
    {
     "key": "D",
     "text": "统计数组a各元素值大于数组b对应元素值的个数"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 7,
   "expl": "循环中 a[i]>b[i] 时 n 加一，n 统计的正是 a 中大于 b 对应元素的个数。"
  },
  {
   "id": "2-109",
   "section": 2,
   "number": 109,
   "type": "choice",
   "stem": "下列定义数组正确的是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "double a[6]=(1,2,3,4,5,6);"
    },
    {
     "key": "B",
     "text": "int b[5]={0};"
    },
    {
     "key": "C",
     "text": "float c[5]={1,2,3,4,5,6};"
    },
    {
     "key": "D",
     "text": "char d[5]={\"China\"};"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "int b[5]={0} 只给首元素 0、其余自动补 0，合法；A 用圆括号，C 初值超长，D 字符串超长。"
  },
  {
   "id": "2-110",
   "section": 2,
   "number": 110,
   "type": "choice",
   "stem": "以下叙述错误的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "指针可以进行加、减等算术运算；"
    },
    {
     "key": "B",
     "text": "指针中存放的是地址值"
    },
    {
     "key": "C",
     "text": "指针是一个变量"
    },
    {
     "key": "D",
     "text": "指针变量不占用存储空间"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 8,
   "expl": "指针变量自身也占存储空间，只是里面存地址；加减整数、赋值都是允许的运算。"
  },
  {
   "id": "2-111",
   "section": 2,
   "number": 111,
   "type": "choice",
   "stem": "下列程序的执行结果是()。",
   "code": [
    "void fun(int *p) {(*p)++;\n}\nmain()\n{int a=5;\nfun(&a);\nprintf(\"%d\",a);\n}"
   ],
   "options": [
    {
     "key": "A",
     "text": "5"
    },
    {
     "key": "B",
     "text": "a"
    },
    {
     "key": "C",
     "text": "6"
    },
    {
     "key": "D",
     "text": "程序有误"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "fun 收到的是 &a，(*p)++ 直接改 main 的 a，a 由 5 变 6，故输出 6。"
  },
  {
   "id": "2-112",
   "section": 2,
   "number": 112,
   "type": "choice",
   "stem": "若有定义int a[4][5]:下列语句中()是存在语法错误的。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "*a"
    },
    {
     "key": "B",
     "text": "*(*(a+2)+3)"
    },
    {
     "key": "C",
     "text": "&a[2][3]"
    },
    {
     "key": "D",
     "text": "++a"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 8,
   "expl": "a 是数组名，属常量地址不能自增，++a 有语法错误；*a、*(*(a+2)+3)、&a[2][3] 都合法。"
  },
  {
   "id": "2-113",
   "section": 2,
   "number": 113,
   "type": "choice",
   "stem": "执行下面程序段后，变量a的值为()。",
   "code": [
    "int a=10,b=1; int *p=&a;\na=*p+b;"
   ],
   "options": [
    {
     "key": "A",
     "text": "12"
    },
    {
     "key": "B",
     "text": "11"
    },
    {
     "key": "C",
     "text": "10"
    },
    {
     "key": "D",
     "text": "编译错误"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 8,
   "expl": "p 指向 a，a=*p+b 即 10+1，赋值后 a 变为 11。"
  },
  {
   "id": "2-114",
   "section": 2,
   "number": 114,
   "type": "choice",
   "stem": "下列语句定义px为指向int类型变量x的指针，正确的是()",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "int x,*px=x;"
    },
    {
     "key": "B",
     "text": "int x,*px=&x;"
    },
    {
     "key": "C",
     "text": "int*px=&x,x;"
    },
    {
     "key": "D",
     "text": "int x,px=x;"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 8,
   "expl": "定义指针要写成 int *px=&x，且 x 须先声明；A 拿 x 的值当地址，C 中 x 未先定义。"
  },
  {
   "id": "2-115",
   "section": 2,
   "number": 115,
   "type": "choice",
   "stem": "有以下程序段： 输出结果为()。",
   "code": [
    "int a[]={10,9,8,7,6,5,4,3,2,1},*p;\np=a;\nprintf(\"%d,%d\",*p+9,*(p+9));"
   ],
   "options": [
    {
     "key": "A",
     "text": "1,1"
    },
    {
     "key": "B",
     "text": "19,10"
    },
    {
     "key": "C",
     "text": "19,1"
    },
    {
     "key": "D",
     "text": "19,19"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "*p+9 是首元素 10 加 9 得 19，*(p+9) 是第 10 个元素 1，故输出 19,1。"
  },
  {
   "id": "2-116",
   "section": 2,
   "number": 116,
   "type": "choice",
   "stem": "定义下列结构体数组： 执行语句printf(\"%d,%s\",a[2].age,a[1].name)的输出结果为()。",
   "code": [
    "struct stu\n{char name[10];\nint age;\n}a[5]={\"ZHA0\",14,\"WANG\",15,\"LIU\",16,\"ZHANG\",17};"
   ],
   "options": [
    {
     "key": "A",
     "text": "15,ZHAO"
    },
    {
     "key": "B",
     "text": "16,WANG"
    },
    {
     "key": "C",
     "text": "17,LIU"
    },
    {
     "key": "D",
     "text": "17,ZHAO"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 9,
   "expl": "a[2].age 为 16，a[1].name 为 WANG，故输出 16,WANG。"
  },
  {
   "id": "2-117",
   "section": 2,
   "number": 117,
   "type": "choice",
   "stem": "直接使文件指针重新定位到文件读写的首地址的函数是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "ftell()函数"
    },
    {
     "key": "B",
     "text": "fseek() 函数"
    },
    {
     "key": "C",
     "text": "rewind()函数"
    },
    {
     "key": "D",
     "text": "ferror() 函数"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 10,
   "expl": "rewind 直接把文件位置指针拨回开头；fseek 要给偏移量，ftell 是取当前位置。"
  },
  {
   "id": "2-118",
   "section": 2,
   "number": 118,
   "type": "choice",
   "stem": "函数fgetc 的作用是从指定文件读入一个字符，该文件的打开方式可以是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "只写"
    },
    {
     "key": "B",
     "text": "追加"
    },
    {
     "key": "C",
     "text": "读或读写"
    },
    {
     "key": "D",
     "text": "和C都正确"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 10,
   "expl": "fgetc 要从文件读字符，文件必须以读或读写方式打开；只写、追加方式都不能读。"
  },
  {
   "id": "2-120",
   "section": 2,
   "number": 120,
   "type": "choice",
   "stem": "假设已经定义了文件指针 FILE*fp, 并指向了temp.txt文件，即： 下列可以实现将“China”这一字符串写入到temp.txt文件的语句是",
   "code": [
    "FILE*fp=fopen(\"temp.txt\",\"w\");"
   ],
   "options": [
    {
     "key": "A",
     "text": "fscanf(fp,\"%s\",\"China\");"
    },
    {
     "key": "B",
     "text": "fprintf(fp,\"%s\",\"China\");"
    },
    {
     "key": "C",
     "text": "fscanf(\"%s\",\"China\",fp);"
    },
    {
     "key": "D",
     "text": "fprintf(\"%s\",\"China\",fp);"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 10,
   "expl": "fprintf(fp,\"%s\",\"China\") 才是把字符串按格式写到 fp 指向的文件；fscanf 是读，顺序也不同。"
  },
  {
   "id": "2-121",
   "section": 2,
   "number": 121,
   "type": "choice",
   "stem": "以下声明与()中的声明等价。",
   "code": [
    "int *p[4];"
   ],
   "options": [
    {
     "key": "A",
     "text": "int p[4];"
    },
    {
     "key": "B",
     "text": "int*p;"
    },
    {
     "key": "C",
     "text": "int*(p[4]);"
    },
    {
     "key": "D",
     "text": "int(*p)[4];"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "int *p[4] 中 [4] 先结合，是指针数组，等价于 int *(p[4])，不同于指向数组的 int (*p)[4]。"
  },
  {
   "id": "2-123",
   "section": 2,
   "number": 123,
   "type": "choice",
   "stem": "下列程序的运行结果是()。",
   "code": [
    "#include<stdio.h>\nvoid ast(int x,int y,int *cp,int *dp) {\n*cp=x+y;*dp=x-y;\n}\nint main() {\nint a=4,b=3,c,d;\nast(a,b,&c,&d);\nprintf(\"%d,%d\\n\",c,d);\nreturn 0; }"
   ],
   "options": [
    {
     "key": "A",
     "text": "7,1"
    },
    {
     "key": "B",
     "text": "1,7"
    },
    {
     "key": "C",
     "text": "7,- 1"
    },
    {
     "key": "D",
     "text": "c、d 未赋值，编译出错"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 8,
   "expl": "ast 通过指针参数带回结果，*cp=4+3=7，*dp=4-3=1，故输出 7,1。"
  },
  {
   "id": "2-124",
   "section": 2,
   "number": 124,
   "type": "choice",
   "stem": "设有如下语句： 则()是对 a 数组元素的不正确引用，其中0≤i<10。",
   "code": [
    "int a[10]={0,1,2,3,4,5,6,7,8,9},*p=a;"
   ],
   "options": [
    {
     "key": "A",
     "text": "a [p-a]"
    },
    {
     "key": "B",
     "text": "*(&a [i])"
    },
    {
     "key": "C",
     "text": "p[i]"
    },
    {
     "key": "D",
     "text": "*(*(a+i))"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 8,
   "expl": "*(*(a+i)) 先把 a[i] 取出来再解引用，等于把整数当地址用，属非法引用；A、B、C 都能取到元素。"
  },
  {
   "id": "2-125",
   "section": 2,
   "number": 125,
   "type": "choice",
   "stem": "以下几段代码中，按照C标准可以预测运行结果的是：",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "int a=0;printf(\"%d %d\\n\",++a,++a);"
    },
    {
     "key": "B",
     "text": "int a=0,*b=&a,*c=b+1;printf(\"%d\\n\",*(c-1));"
    },
    {
     "key": "C",
     "text": "int f(){printf(\"hello world\\n\");}int main(){f();return 0;}"
    },
    {
     "key": "D",
     "text": "int a=1,b=2;printf(\"%d\\n\",b/--a);"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 1,
   "expl": "B 中 c=b+1 后 c-1 回到 b 即 &a，解引用得 0，结果唯一；A、D 的求值顺序未定义。"
  },
  {
   "id": "2-126",
   "section": 2,
   "number": 126,
   "type": "choice",
   "stem": "若有声明“char*p=\"123\";int c;\", 则执行语句“c=sizeof(p);”后 ，c的值是。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "1"
    },
    {
     "key": "B",
     "text": "2"
    },
    {
     "key": "C",
     "text": "3"
    },
    {
     "key": "D",
     "text": "4"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 8,
   "expl": "sizeof(p) 求的是指针变量本身的大小，32 位下指针占 4 字节，与所指字符串长度无关。"
  },
  {
   "id": "2-127",
   "section": 2,
   "number": 127,
   "type": "choice",
   "stem": "若有声明\"int x[10]={0,1,2,3,4,5,6,7,8,9},*p;\",则值不为4的表达式是。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "p=x,*(p+4)"
    },
    {
     "key": "B",
     "text": "p=x+4,*p++"
    },
    {
     "key": "C",
     "text": "p=x+3,*(p++)"
    },
    {
     "key": "D",
     "text": "p=x+3,*++p"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "C 中 p=x+3 后 *(p++) 先取 a[3] 的值 3 再移动指针，值不是 4；A、B、D 都得 4。"
  },
  {
   "id": "2-128",
   "section": 2,
   "number": 128,
   "type": "choice",
   "stem": "已有声明\"int a[5];\",以下表达式中不能正确取得a[1]指针的是。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "&a[1]"
    },
    {
     "key": "B",
     "text": "++a"
    },
    {
     "key": "C",
     "text": "&a[0]+1"
    },
    {
     "key": "D",
     "text": "a+l"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 8,
   "expl": "a 是数组名，代表常量地址不能自增，++a 非法；&a[1]、&a[0]+1、a+1 都能表示 a[1] 的地址。"
  },
  {
   "id": "2-129",
   "section": 2,
   "number": 129,
   "type": "choice",
   "stem": "若有函数定义为“int f(int x,int*y){return x/*y;}”,下面声明该函数的正确形式是。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "void f(int,int);"
    },
    {
     "key": "B",
     "text": "int *f(int,int*);"
    },
    {
     "key": "C",
     "text": "int f(int*,int*);"
    },
    {
     "key": "D",
     "text": "int f(int,int*);"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 8,
   "expl": "函数定义为 int f(int x,int *y)，原样声明即可；它不是返回指针，第二参数必须是 int*。"
  },
  {
   "id": "2-130",
   "section": 2,
   "number": 130,
   "type": "choice",
   "stem": "如有语句\"int x,y=0,z,*p[3];p[0]=&x;p[1]=&y;p[2]=&z;\", 以下表达式中有语法错误的是。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "y++"
    },
    {
     "key": "B",
     "text": "(*p[0])++"
    },
    {
     "key": "C",
     "text": "(**(p+1))++"
    },
    {
     "key": "D",
     "text": "p++"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 8,
   "expl": "p 是指针数组名，相当于常量地址不能自增，p++ 语法错误；其余都是对所指变量自增。"
  },
  {
   "id": "2-131",
   "section": 2,
   "number": 131,
   "type": "choice",
   "stem": "若有函数int func(int a,int b),函数指针变量p已经指向func函数，那么下列用指针方式调用函数的正确方法是( )。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "(*p)func(2,3);"
    },
    {
     "key": "B",
     "text": "*func(2,3);"
    },
    {
     "key": "C",
     "text": "p(2,3);"
    },
    {
     "key": "D",
     "text": "*p(2,3);"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "函数指针可以直接像函数名一样用 p(2,3) 调用；A 多写 func，B、D 把 * 与函数名混在一起。"
  },
  {
   "id": "2-132",
   "section": 2,
   "number": 132,
   "type": "choice",
   "stem": "在 int a=3,*p=&a;中 ， *p 的值是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "&a"
    },
    {
     "key": "B",
     "text": "无意义"
    },
    {
     "key": "C",
     "text": "&p"
    },
    {
     "key": "D",
     "text": "3"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 8,
   "expl": "*p 是对 p 所指变量 a 的解引用，值就是 3；&a 才是 a 的地址。"
  },
  {
   "id": "2-133",
   "section": 2,
   "number": 133,
   "type": "choice",
   "stem": "若有以下定义语句，则引用方式错误的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "s.no"
    },
    {
     "key": "B",
     "text": "(*p).no"
    },
    {
     "key": "C",
     "text": "p->no"
    },
    {
     "key": "D",
     "text": "s->no"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 9,
   "expl": "s 是结构体变量不是指针，成员只能用 s.no 访问；s->no 要求左边是指针，语法错误。"
  },
  {
   "id": "2-134",
   "section": 2,
   "number": 134,
   "type": "choice",
   "stem": "若有定义char s1[]=\"string1\",s2[8],*s3,*s4=\"string2\";则对库函数strcpy 错误调用的是 ( ) 。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "strcpy(s1,\"string2\");"
    },
    {
     "key": "B",
     "text": "strcpy(s2,\"string1\");"
    },
    {
     "key": "C",
     "text": "strcpy(s3,\"string1\");"
    },
    {
     "key": "D",
     "text": "strcpy(s2,s1);"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "s3 是未初始化的指针，没有指向可用空间，strcpy(s3,...) 会写坏内存；s1 有 8 字节放得下 string2。"
  },
  {
   "id": "2-135",
   "section": 2,
   "number": 135,
   "type": "choice",
   "stem": "若有定义char s[6],*ps=s;则正确的赋值语句是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "s=\"12345\";"
    },
    {
     "key": "B",
     "text": "*s=\"12345\";"
    },
    {
     "key": "C",
     "text": "ps=\"12345\";"
    },
    {
     "key": "D",
     "text": "*ps=\"12345\";"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "ps 是指针变量，可以重新赋值让它指向字符串常量 \"12345\"；s 是数组名，不能整体赋值。"
  },
  {
   "id": "2-136",
   "section": 2,
   "number": 136,
   "type": "choice",
   "stem": "对于以下结构定义，p->str++中的++加在()。",
   "code": [
    "struct {int len;char*str;}*p;"
   ],
   "options": [
    {
     "key": "A",
     "text": "指针str 上"
    },
    {
     "key": "B",
     "text": "指针p上"
    },
    {
     "key": "C",
     "text": "str 指针指向的内容上"
    },
    {
     "key": "D",
     "text": "语法错误"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 9,
   "expl": "-> 的优先级高于 ++，且 str 是 char* 成员，所以 ++ 加在指针 str 上，使指针后移一位。"
  },
  {
   "id": "2-137",
   "section": 2,
   "number": 137,
   "type": "choice",
   "stem": "若有函数max(a,b) . 并且已使函数指针变量p 指向函数max, 当调用函数时，正确的调用方法是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "(*p)max(a+b);"
    },
    {
     "key": "B",
     "text": "*pmax(a,b);"
    },
    {
     "key": "C",
     "text": "(*p)(a,b);"
    },
    {
     "key": "D",
     "text": "*p(a,b);"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "通过函数指针调用写成 (*p)(a,b)，A、B、D 三处的写法都不符合函数指针调用语法。"
  },
  {
   "id": "2-138",
   "section": 2,
   "number": 138,
   "type": "choice",
   "stem": "程序中已构成如下图所示的单向链表结构，指针变量s、p、q均已正确定义，并用于指向链表结点，指针变量s总是作为头指针指向链表的第一个结点。 若有下列程序段：",
   "code": [
    "q=s;s=s->next;p=s;",
    "while(p->next)p=p->next;",
    "p->next =q;q->next =NULL; 该程序段实现的功能是()。"
   ],
   "options": [
    {
     "key": "A",
     "text": "首结点成为尾结点"
    },
    {
     "key": "B",
     "text": "尾结点成为首结点"
    },
    {
     "key": "C",
     "text": "删除首结点"
    },
    {
     "key": "D",
     "text": "删除尾结点"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 8,
   "expl": "q 先记住首结点，p 走到尾结点后让尾结点 next 指向 q、q 的 next 置空，首结点就变成尾结点。"
  },
  {
   "id": "2-139",
   "section": 2,
   "number": 139,
   "type": "choice",
   "stem": "设有如下函数定义：",
   "code": [
    "int fun(char*str) {char*p=str;",
    "while(*p!='\\0')p++; return(p-str);",
    "}",
    "则以下语句执行后的输出结果是()。 printf(\"%d\\n\",fun(\"Student\");"
   ],
   "options": [
    {
     "key": "A",
     "text": "7"
    },
    {
     "key": "B",
     "text": "8"
    },
    {
     "key": "C",
     "text": "9"
    },
    {
     "key": "D",
     "text": "10"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 8,
   "expl": "p 从串首走到 '\\0'，返回指针差即字符个数，Student 共 7 个字符，输出 7。"
  },
  {
   "id": "2-140",
   "section": 2,
   "number": 140,
   "type": "choice",
   "stem": "变量的指针 ， 其含义是指该变量的 o",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "值"
    },
    {
     "key": "B",
     "text": "地址"
    },
    {
     "key": "C",
     "text": "名"
    },
    {
     "key": "D",
     "text": "一个标志"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 8,
   "expl": "变量的指针就是该变量在内存中的地址，指针变量里存放的正是这个地址值。"
  },
  {
   "id": "2-141",
   "section": 2,
   "number": 141,
   "type": "choice",
   "stem": "对于基类型相同的两个指针变量，不能进行的运算是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "<"
    },
    {
     "key": "B",
     "text": "="
    },
    {
     "key": "C",
     "text": "+"
    },
    {
     "key": "D",
     "text": "-"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 8,
   "expl": "两个指针相加没有意义，所以不能做 +；比较、赋值、相减（求相隔元素数）都可以。"
  },
  {
   "id": "2-142",
   "section": 2,
   "number": 142,
   "type": "choice",
   "stem": "如果所有的变量按照下面的程序进行定义和声明，那么在main() 函数中所有可用的变量为()。",
   "code": [
    "void fun(int x) {\nstatic int y; return; }\nint z;\nvoid main() {\nint a,b; fun(a); }"
   ],
   "options": [
    {
     "key": "A",
     "text": "X,y"
    },
    {
     "key": "B",
     "text": "x,y,Z"
    },
    {
     "key": "C",
     "text": "a,b,z"
    },
    {
     "key": "D",
     "text": "a,b,x,y,Z"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 5,
   "expl": "main 里只能用自己定义的 a、b 和全局变量 z；x、y 属于 fun，在 main 中不可见。"
  },
  {
   "id": "2-143",
   "section": 2,
   "number": 143,
   "type": "choice",
   "stem": "在函数内，定义变量时存储类型符可省略的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "auto"
    },
    {
     "key": "B",
     "text": "static"
    },
    {
     "key": "C",
     "text": "extern"
    },
    {
     "key": "D",
     "text": "register"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 6,
   "expl": "函数内定义的变量默认存储类就是 auto，可以省略；static、extern、register 必须写明。"
  },
  {
   "id": "2-144",
   "section": 2,
   "number": 144,
   "type": "choice",
   "stem": "下面程序a,b值为()",
   "code": [
    "#include <stdio.h> int main(void)\n{\nint a;\na =1;\n{\nint b=2;\nb=a +b;\na =a +b; }\nprintf(\"%d,%d\",a,b); return 0;\n}"
   ],
   "options": [
    {
     "key": "A",
     "text": "1,2"
    },
    {
     "key": "B",
     "text": "1,0"
    },
    {
     "key": "C",
     "text": "1, 不认识b"
    },
    {
     "key": "D",
     "text": "4, 不认识b"
    }
   ],
   "answer": "D",
   "points": 2.0,
   "ch": 5,
   "expl": "内层块中 b=2，b=b+a 得 3，a=a+b 得 4；出块后 b 作用域结束，故输出 4, 不认识b。"
  },
  {
   "id": "2-148",
   "section": 2,
   "number": 148,
   "type": "choice",
   "stem": "以下错误的字符数组的赋值方式是：",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "char string[]=“Iam a student.”;"
    },
    {
     "key": "B",
     "text": "const char*p=“I am a student”;"
    },
    {
     "key": "C",
     "text": "char str[20];str=“I am a student.”;"
    },
    {
     "key": "D",
     "text": "strcpy(str,\"I am a student.\");"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "数组名是常量，不能整体赋值，C 中 str=\"I am a student.\" 非法；初始化、strcpy 都正确。"
  },
  {
   "id": "2-149",
   "section": 2,
   "number": 149,
   "type": "choice",
   "stem": "判断字符串ca和字符串cb是否相等，应当使用()",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "if(ca==cb)"
    },
    {
     "key": "B",
     "text": "if(ca=cb)"
    },
    {
     "key": "C",
     "text": "if(strcpy(ca,cb))"
    },
    {
     "key": "D",
     "text": "if(strcmp(ca,cb)==0)"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 7,
   "expl": "比较字符串要用 strcmp，返回 0 表示相等；== 比的是两个地址，= 是赋值。"
  },
  {
   "id": "2-150",
   "section": 2,
   "number": 150,
   "type": "choice",
   "stem": "有两个字符数组char a[50],b[50];则以下正确的输入语句是()",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "scanf(\"%s%s\",a,b);"
    },
    {
     "key": "B",
     "text": "scanf(“%s%s”,&a,&b);"
    },
    {
     "key": "C",
     "text": "gets(a,b);"
    },
    {
     "key": "D",
     "text": "gets(“a”),gets(“b”);"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 7,
   "expl": "a、b 是数组名，本身已是指针，scanf(\"%s%s\",a,b) 正确；gets 只能接一个参数，&a 类型也不对。"
  },
  {
   "id": "2-151",
   "section": 2,
   "number": 151,
   "type": "choice",
   "stem": "下列属于字符串常量的是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "\"a\""
    },
    {
     "key": "B",
     "text": "{ABC}"
    },
    {
     "key": "C",
     "text": "'abc\\0'"
    },
    {
     "key": "D",
     "text": "'a'"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 1,
   "expl": "双引号括起来的 \"a\" 是字符串常量；'a' 是字符常量，花括号和单引号多字符写法都不是。"
  },
  {
   "id": "2-152",
   "section": 2,
   "number": 152,
   "type": "choice",
   "stem": "判断字符串s1的长度是否大于字符串s2的长度，应使用 0",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "if(s1>s2)"
    },
    {
     "key": "B",
     "text": "if(strcmp(s1,s2))"
    },
    {
     "key": "C",
     "text": "if(strlen(s1)>strlen(s2))"
    },
    {
     "key": "D",
     "text": "if(strcat(s1)>strcat(s2))"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "比较两串要用 strcmp，s1 大于 s2 时返回正数、if 成立；== 比的是地址，strcat 还会改动原串。 （存疑）"
  },
  {
   "id": "2-153",
   "section": 2,
   "number": 153,
   "type": "choice",
   "stem": "对两个数组a和b进行如下初始化： 则以下叙述正确的是 o",
   "code": [
    "char a[]=\"abcd\";",
    "char b[]={'a','b','c','d'};"
   ],
   "options": [
    {
     "key": "A",
     "text": "a 与b 数组完全相同"
    },
    {
     "key": "B",
     "text": "数组a比数组b长度大"
    },
    {
     "key": "C",
     "text": "a 与b中存放的都是字符串"
    },
    {
     "key": "D",
     "text": "a 与b长度相同"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "a 按字符串初始化，多一个结尾 '\\0' 共 5 字节；b 只有 4 个字符，所以 a 比 b 长。"
  },
  {
   "id": "2-154",
   "section": 2,
   "number": 154,
   "type": "choice",
   "stem": "若有定义\"char s1[50],s2[50];\",则以下函数调用中，正确的是 _o",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "scanf(\"%s%s\",&s1,&s2);"
    },
    {
     "key": "B",
     "text": "gets(s1, s2);"
    },
    {
     "key": "C",
     "text": "scanf(\"%s%s\",s1,s2);"
    },
    {
     "key": "D",
     "text": "gets(\"%s%s\",s1,s2);"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 7,
   "expl": "scanf(\"%s%s\",s1,s2) 中数组名即地址，正确；&s1 是数组指针类型不匹配，gets 只能接一个参数。"
  },
  {
   "id": "2-155",
   "section": 2,
   "number": 155,
   "type": "choice",
   "stem": "以下不能正确赋值的语句是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "char str[8]=“good!”;"
    },
    {
     "key": "B",
     "text": "char str[5]=\"good!\";"
    },
    {
     "key": "C",
     "text": "char str[]=\"good!\";"
    },
    {
     "key": "D",
     "text": "char str[5]={‘g’,'o’,'o’,'d'};"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "char str[5]=\"good!\" 需要 6 个字节（含 '\\0'），数组装不下；A、C、D 的写法都合法。"
  },
  {
   "id": "2-156",
   "section": 2,
   "number": 156,
   "type": "choice",
   "stem": "已知 char x[]=\"hello\", y[]={'h','e','a','b','e'};,则关于两个数组长度的正确描述是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "相同"
    },
    {
     "key": "B",
     "text": "x大于y"
    },
    {
     "key": "C",
     "text": "x小于y"
    },
    {
     "key": "D",
     "text": "以上答案都不对"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "x[]=\"hello\" 要加上结尾 '\\0' 共 6 字节，y[] 只初始化 5 个字符，所以 x 比 y 长。"
  },
  {
   "id": "2-157",
   "section": 2,
   "number": 157,
   "type": "choice",
   "stem": "按如下方式定义字符数组并初始化： 则数组s1和s2所占用的存储空间分别为()。",
   "code": [
    "char s1[] =\"Hello!\";\nchar s2[10]=\"Hello!\";"
   ],
   "options": [
    {
     "key": "A",
     "text": "66"
    },
    {
     "key": "B",
     "text": "610"
    },
    {
     "key": "C",
     "text": "77"
    },
    {
     "key": "D",
     "text": "710"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 7,
   "expl": "s1 按初值定长 6+1=7 字节，s2 显式声明为 10 字节，占用空间依次是 7 和 10。"
  },
  {
   "id": "2-158",
   "section": 2,
   "number": 158,
   "type": "choice",
   "stem": "若有说明：int a[][3]={{1,2,3},{4,5},{6,7}};则数组a的第一维大小为",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "2"
    },
    {
     "key": "B",
     "text": "3"
    },
    {
     "key": "C",
     "text": "4"
    },
    {
     "key": "D",
     "text": "无确定值"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 7,
   "expl": "每行 3 列由声明给出，初值给了 3 组，故第一维大小为 3，行数由初值组数决定。"
  },
  {
   "id": "2-159",
   "section": 2,
   "number": 159,
   "type": "choice",
   "stem": "若fopen() 函数打开文件失败，其返回值是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "1"
    },
    {
     "key": "B",
     "text": "-1"
    },
    {
     "key": "C",
     "text": "NULL"
    },
    {
     "key": "D",
     "text": "ERROR"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 10,
   "expl": "fopen 打开失败时返回空指针 NULL；返回 -1 或 EOF 的是 fgetc 等读写函数。"
  },
  {
   "id": "2-160",
   "section": 2,
   "number": 160,
   "type": "choice",
   "stem": "若执行fopen函数时发生错误，则函数的返回值是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "一个随机地址值"
    },
    {
     "key": "B",
     "text": "1"
    },
    {
     "key": "C",
     "text": "NULL"
    },
    {
     "key": "D",
     "text": "EOF"
    }
   ],
   "answer": "C",
   "points": null,
   "ch": 10,
   "expl": "fopen 出错返回 NULL，表示没取到文件指针，后续读写前必须先判空。"
  },
  {
   "id": "2-161",
   "section": 2,
   "number": 161,
   "type": "choice",
   "stem": "在C语言中，下面关于文件的存取方式正确的叙述是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "可以顺序存取，也可以随机存取"
    },
    {
     "key": "B",
     "text": "不可以顺序存取，但可以随机存取"
    },
    {
     "key": "C",
     "text": "可以顺序存取，但不可以随机存取"
    },
    {
     "key": "D",
     "text": "只能从文件的开头存取"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 10,
   "expl": "C 文件既可顺序读写，也可用 fseek、rewind 随机定位，两种存取方式都支持。"
  },
  {
   "id": "2-162",
   "section": 2,
   "number": 162,
   "type": "choice",
   "stem": "若以“a+”方式打开一个已存在的文件。则以下叙述正确的是()。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "文件打开时，原有文件内容不被删除，位置指针移到文件末尾，可做添加和读操作"
    },
    {
     "key": "B",
     "text": "文件打开时，原有文件内容不被删除，位置指针移到文件开头，可做重写和读操作"
    },
    {
     "key": "C",
     "text": "文件打开时，原有文件内容被删除，只可做写操作"
    },
    {
     "key": "D",
     "text": "以上各种说法都不正确"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 10,
   "expl": "a+ 方式打开既不清空原内容，位置指针移到末尾，既可追加写也可读，故选 A。"
  },
  {
   "id": "2-163",
   "section": 2,
   "number": 163,
   "type": "choice",
   "stem": "进行文件操作时，“写文件”的一般含义是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "将磁盘中的信息存入计算机内存"
    },
    {
     "key": "B",
     "text": "将计算机内存中的信息存入磁盘"
    },
    {
     "key": "C",
     "text": "将计算机CPU中的信息存入磁盘"
    },
    {
     "key": "D",
     "text": "将磁盘中的信息存入计算机CPU"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 10,
   "expl": "写文件是把内存中程序的数据送到磁盘文件里保存，读文件才是磁盘到内存的方向。"
  },
  {
   "id": "2-164",
   "section": 2,
   "number": 164,
   "type": "choice",
   "stem": "函数调用“fputs(p1,p 2);”的功能是 。",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "从p1指向的文件中读一个字符串，存入p2指向的内存"
    },
    {
     "key": "B",
     "text": "从p2指向的文件中读一个字符串，存入p1指向的内存"
    },
    {
     "key": "C",
     "text": "从p1指向的内存中读一个字符串，写到p2指向的文件中"
    },
    {
     "key": "D",
     "text": "从p2指向的内存中读一个字符串，写到p1指向的文件中"
    }
   ],
   "answer": "A",
   "points": null,
   "ch": 10,
   "expl": "本题按 fputs(p1,p2) 由 p1 所指文件读出字符串存入 p2 内存来理解；C、D 把读写方向说反。 （存疑）"
  },
  {
   "id": "2-165",
   "section": 2,
   "number": 165,
   "type": "choice",
   "stem": "如果将文件型指针fp指向的文件内部指针置于文件尾，正确的语句是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "feof(fp);"
    },
    {
     "key": "B",
     "text": "rewind(fp);"
    },
    {
     "key": "C",
     "text": "fseek(fp,OL,0);"
    },
    {
     "key": "D",
     "text": "fseek(fp,OL,2);"
    }
   ],
   "answer": "D",
   "points": null,
   "ch": 10,
   "expl": "fseek(fp,0L,2) 第三个参数 2 表示 SEEK_END，偏移 0 就定位到文件尾；rewind 是回到开头。"
  },
  {
   "id": "2-166",
   "section": 2,
   "number": 166,
   "type": "choice",
   "stem": "从fp 所指向的文件中读取两个整数并分别赋给两个整型变量a和b, 正确的形式是",
   "code": [],
   "options": [
    {
     "key": "A",
     "text": "fscanf(“%d%d”,&a,&b,fp);"
    },
    {
     "key": "B",
     "text": "fscanf(fp,“%d%d”,&a,&b);"
    },
    {
     "key": "C",
     "text": "fscanf(“%d%d”, a,b ,fp);"
    },
    {
     "key": "D",
     "text": "fscanf(fp,“%d%d”,a,b);"
    }
   ],
   "answer": "B",
   "points": null,
   "ch": 10,
   "expl": "fscanf 第一个参数是文件指针，之后才是格式串和变量地址，即 fscanf(fp,\"%d%d\",&a,&b)。"
  }
 ],
 "blocked": [
  {
   "id": "2-7",
   "reason": "选项字母缺失(ACD)"
  },
  {
   "id": "2-15",
   "reason": "选项字母缺失(ABD)"
  },
  {
   "id": "2-39",
   "reason": "选项字母缺失(BCD)"
  },
  {
   "id": "2-42",
   "reason": "选项字母缺失(ABD)"
  },
  {
   "id": "2-48",
   "reason": "选项字母缺失(AD)"
  },
  {
   "id": "2-56",
   "reason": "选项字母缺失(ABD)"
  },
  {
   "id": "2-71",
   "reason": "选项字母缺失(无)"
  },
  {
   "id": "2-80",
   "reason": "选项字母缺失(ACD)"
  },
  {
   "id": "2-91",
   "reason": "选项字母缺失(ACD)"
  },
  {
   "id": "2-100",
   "reason": "选项字母缺失(ABD)"
  },
  {
   "id": "2-122",
   "reason": "选项字母缺失(BCD)"
  },
  {
   "id": "2-145",
   "reason": "选项字母缺失(ACD)"
  },
  {
   "id": "2-147",
   "reason": "选项字母缺失(ABD)"
  },
  {
   "id": "1-148",
   "reason": "题干以图片形式丢失，无法作答"
  },
  {
   "id": "2-146",
   "reason": "题干只剩「*字符数组(1-3)」，代码与考点均丢失，无法作答"
  }
 ]
};
