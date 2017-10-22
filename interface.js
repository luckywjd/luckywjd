class Robot {
    constructor() {
        this.speed = 30;
    }
    run() {
        return "로봇이" + this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
class Person {
    constructor() {
        this.speed = 30;
    }
    run() {
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
//let p:Person=new Person();
let p = new Person(); // Action interface에서 [string]으로 이미 데이터 타입을 잡아줬다면 오류가 발생함
//let p=new Person();
//let s:string=p.setSpeed(50); 불가능 하다 return "타입이 아니기 때문에 ""
p.setSpeed(50);
let r = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
test(r);
//-------------------------------------------------------------------------------------------------------------------------
function test(vari) {
    console.log(vari.run());
}
function call(vari) {
    console.log(vari.rug());
    console.log(vari.printAddress());
}
// function call(vari:number){  같은 변수를 두번쓰고 다른 데이터 타입일 경우 오류  
//     console.log(vari);
// }
//# sourceMappingURL=interface.js.map