let num1:number=3;
num1="test";
let num2:number=5;

let str1:string="string";
let str2:string="test";

let numArr:Array<number>=[3,5,6];
let numArr2:number[]=[3,4,5];

console.log(num1);
console.log(numArr);


let tp:[string, number];
tp=["1",2];

let anyTest:any="any"; //어떠한 Data Type이 들어와도 에러가 나지 않음
anyTest=3;
anyTest=true;
anyTest=new Number(3);

let anyArry:any[]=[1,2,3];

//void 리턴값을 하지 않겠다
//string 문자를 리턴으로 보낸다
function setUser():string{
    return "test";
}

function testObject(){
    return "abc";
}
var strTest = testObject();
console.log(typeof strTest);
console.log(strTest.charAt(1)); //값을 변경하지 못하고 가져오기만 한다. read only
console.log(strTest.length);
console.log(strTest.substr(1));

function testFunc(str:string, num:number):void{
    console.log("str="+str);
    console.log("num="+num);
    
}
testFunc("문자열",330);

//예외처리를 
function throwError():never{
    throw new Error("nonono");
}

let AjaxUtil : object = function(){
    let str:string="this_str";
    let num:number=3; 
    function print():void{
        console.log(str);
        console.log(num);
   } 
}

//var au = new AjaxUtil();
//au.print();

class car{
    carName : string;
    constructor(public pCarName:string){  //변수가 모두 등록이 완료된 후 실행 됨
        this.carName = pCarName;
    }
}

let hyundai=new car("Sonata");
let pStr:string="hyundai자동차중 제 차는 :";
pStr+=hyundai.carName;

console.log(pStr);
