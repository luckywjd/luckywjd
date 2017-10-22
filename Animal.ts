interface Animal{
        name:string; // ?를 붙이면 class에 선언하지 않아도 오류가 나타나지 않음  "선언안해도 돼"  name?:string;
        age:number;
        height:number;
}

class Cat implements Animal{   
    name:string;
    age:number;
    height:number;
    constructor(name:string, age:number){ //해당 name,age 변수는 여기서만 사용할 수 잇다.
        this.name=name;
        this.age=age;
    }
    printInfo(){
            console.log("이름:"+this.name);
            console.log("나이:"+this.age);
    }    
    printName():void{
        console.log("이름:"+this.name);        
    }    
}
//-----------------------------------------------------------------------------------
class Bird implements Animal{   
    name:string;
    age:number;
    height:number;
    kind:string;
    constructor(kind:string){ 
        this.kind=kind;
    }
    printInfo(){
            console.log("이 새의 종류는:"+this.kind);
    }  
   
}

class Chicken extends Bird{  //Bird 에서 이미 상속을 받아서 있기 때문에
    constructor(kind:string){
        super(kind);   //나 자신은 this  부모는 super 부모의 생성자도 사용가능 (우선 부모의 생성자의 상태를 확인 후 자신껄 확인)
    }
    printInfo():void{ //재정의 개념으로 부모에게 있는것을 가져와 자신의 것으로 바꿈 오버라이딩
        super.printInfo();
        console.log("내종류 ? 당연히 새지");
        console.log("test");
    }
}

class Egg extends Chicken{
    //Chicken은 Bird에서 상속 Bird는 Animal에서 상속받기 때문에 동작한다
}

//let d:Animal =new Chicken("닭");
//d.printInfo();

let c:Bird = new Chicken("닭"); //Ainmal도 사용할 수 있다 상위개념이기 때문에 
c.printInfo();

//-----------------------------------------------------------------------------------

//let dd:Cat=new Cat(); //생성자는 원하는 값이 다 줘야한다  생성자 갯수만큼!

function printSomething(a:Animal){
        a.printInfo();
}

let dd:Cat =new Cat("동동이",4)
dd.printInfo();
dd.printName(); //위에 Cat 을 선언하면 에러가 뜨지안고 
printSomething(dd);

let d2:Animal=new Cat("동동이",4)
d2.printInfo();    //Animal 를 선언하면 에러가 난다.  Animal 보다 Cat 상위? 
