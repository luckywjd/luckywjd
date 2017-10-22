let num1 = 3;
num1 = "test";
let num2 = 5;
let str1 = "string";
let str2 = "test";
let numArr = [3, 5, 6];
let numArr2 = [3, 4, 5];
console.log(num1);
console.log(numArr);
let tp;
tp = ["1", 2];
let anyTest = "any"; //어떠한 Data Type이 들어와도 에러가 나지 않음
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
let anyArry = [1, 2, 3];
//void 리턴값을 하지 않겠다
//string 문자를 리턴으로 보낸다
function setUser() {
    return "test";
}
function testObject() {
    return "abc";
}
var strTest = testObject();
console.log(typeof strTest);
console.log(strTest.charAt(1)); //값을 변경하지 못하고 가져오기만 한다. read only
console.log(strTest.length);
console.log(strTest.substr(1));
function testFunc(str, num) {
    console.log("str=" + str);
    console.log("num=" + num);
}
testFunc("문자열", 330);
//예외처리를 
function throwError() {
    throw new Error("nonono");
}
let AjaxUtil = function () {
    let str = "this_str";
    let num = 3;
    function print() {
        console.log(str);
        console.log(num);
    }
};
//var au = new AjaxUtil();
//au.print();
class car {
    constructor(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
}
let hyundai = new car("Sonata");
let pStr = "hyundai자동차중 제 차는 :";
pStr += hyundai.carName;
console.log(pStr);
//# sourceMappingURL=ts_data.js.map