let userList = new Array();
for (let i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
let testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
let tList = new Array(); //제너릭은 데이터 타입까지 명확하게 해주는
tList.push(true);
const tt = 3; //초기값을 설정해야 함  그다음 후 값 변경안됨
//tt=4; //x
let tt2 = 4;
console.log(typeof tt2);
tt2 = "asdf";
console.log(typeof tt2);
let add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if (typeof n2 != "number") {
        return "2숫자가 아닙니다.";
    }
    return n1 + n2;
};
console.log(add(1, "2"));
class Exam {
}
let examList = new Array();
let e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam(); //new를하지 않았다면 위에 값이 새로 들어감 new를 쓰게되면 새로운 방에 값이 들어감
e.name = "e34";
examList.push(e);
console.log(examList);
class Lotto {
    constructor() {
        this.numbers = new Array();
    }
    makeNumbers() {
        while (this.numbers.length < 6) {
            let num = Math.floor(Math.random() * 20) + 1;
            if (this.numbers.indexOf(num) != -1) {
                continue;
            }
            this.numbers.push(num);
        }
    }
    getNumbers() {
        return this.numbers;
    }
}
let lot = new Lotto();
lot.makeNumbers();
console.log(lot.getNumbers());
//let lot:Lotto = new Lotto();
//let  arrs:number[]=[1,2,3];
//let arrs:Lotto[] = [new Lotto()]; //만들어진 함수에 배열식으로 설정 가능
let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
for (let i in arrs) {
    console.log(arrs[i]);
}
for (let i = 0, max = arrs.length; i < max; i++) {
    console.log(arrs[i]);
}
let mn = new Lotto();
let lot1 = new Lotto();
mn = lot1; //Lotto 보다 MakeNumbers가 더 상위개념이기 때문에 가능 lot1=mn;는 불가능 
let test1 = new Set(); //Set 데이터를 덮어씌우기만 
test1.add("1");
test1.add("2");
test1.add("3");
for (let i in test1) {
    console.log(i);
}
let arrs = [new Lotto(), new Lotto(), new Lotto()];
let arrs2 = Array();
arrs2.push(new Lotto());
//# sourceMappingURL=new_test.js.map