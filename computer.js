var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
; // 열거형 데이터 타입 절대적인 상수값인 부분들을 정의해줄때  데이터 타입에 이름을 부여함 눈으로 보이게끔 명시해줌
let cp = Computer.Laptop;
console.log(cp);
let cp2;
cp2 = "adf";
cp2 = 123;
cp2 = true;
class EE {
    constructor(pc) {
        this.name = "nam";
        this.pc = pc;
    }
    printInfo() {
        console.log(name + "님이 가지고 계신 PC는" + this.pc + "입니다");
    }
}
let ee = new EE(Computer.Laptop);
console.log(ee);
//let ee:EE=new EE();
console.log();
console.log(ee);
cp2 = new EE();
function examReturn() {
    return "examReturn함수 호출";
}
function examVoid() {
    //return "examVoid의 호출"
}
let a;
a = examReturn(); //실행결과를 넣어줄 수 있다면 리턴값이 있고
//a=examVoid(); //실행결과를 넘겨줄 수 없다면 void
console.log(a);
examVoid();
let testArr = [1, 2, 3];
console.log(testArr);
let str1 = "str";
let str2 = "str";
let str3 = new String("str");
let str4 = new String("str");
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
};
console.log("str1==str2:" + (str1 == str3));
console.log("str1==str3:" + (str1 == str3));
console.log("str3==str4:" + (str3 == str4));
console.log("str1==str2:" + (str1 === str2));
console.log("str1==str3:" + (str1 === str3));
console.log("str3==str4:" + (str3 === str4));
console.log("str3 equals str4:" + (str3.equals(str4)));
console.log(str4.toString());
console.log(str3.toString());
//# sourceMappingURL=computer.js.map