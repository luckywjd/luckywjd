class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log("이름:" + this.name);
        console.log("나이:" + this.age);
    }
    printName() {
        console.log("이름:" + this.name);
    }
}
//-----------------------------------------------------------------------------------
class Bird {
    constructor(kind) {
        this.kind = kind;
    }
    printInfo() {
        console.log("이 새의 종류는:" + this.kind);
    }
}
class Chicken extends Bird {
    constructor(kind) {
        super(kind); //나 자신은 this  부모는 super 부모의 생성자도 사용가능 (우선 부모의 생성자의 상태를 확인 후 자신껄 확인)
    }
    printInfo() {
        super.printInfo();
        console.log("내종류 ? 당연히 새지");
        console.log("test");
    }
}
class Egg extends Chicken {
}
//let d:Animal =new Chicken("닭");
//d.printInfo();
let c = new Chicken("닭"); //Ainmal도 사용할 수 있다 상위개념이기 때문에 
c.printInfo();
//-----------------------------------------------------------------------------------
//let dd:Cat=new Cat(); //생성자는 원하는 값이 다 줘야한다  생성자 갯수만큼!
function printSomething(a) {
    a.printInfo();
}
let dd = new Cat("동동이", 4);
dd.printInfo();
dd.printName(); //위에 Cat 을 선언하면 에러가 뜨지안고 
printSomething(dd);
let d2 = new Cat("동동이", 4);
d2.printInfo(); //Animal 를 선언하면 에러가 난다.  Animal 보다 Cat 상위? 
//# sourceMappingURL=Animal.js.map