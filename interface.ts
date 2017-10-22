interface Action{
    speed:number;
     run():string;
     setSpeed(speed:number):void;
     preintAddress():string;
}

class Robot implements Action{ 
    speed:number=30;
    run(){
        return "로봇이" + this.speed+"정도로 뜁니다.";
    }
    setSpeed(speed:number):void{
        this.speed=speed;        
    }
}

class Person implements Action{  //run()이라는 변수를 만들고  왜 선언하지 않았을때 (Action을 사용하면 다용성이 있다) 
    speed:number=30;
    run(){
        return this.speed+"정도로 뜁니다.";
    }
    setSpeed(speed:number):void{
        this.speed=speed;        
    }
}

//let p:Person=new Person();
let p:Action=new Person(); // Action interface에서 [string]으로 이미 데이터 타입을 잡아줬다면 오류가 발생함
//let p=new Person();
//let s:string=p.setSpeed(50); 불가능 하다 return "타입이 아니기 때문에 ""
p.setSpeed(50);


let r:Action=new Robot();
r.setSpeed(1000);
str4=r.run();
console.log(str4);
test(r);

//-------------------------------------------------------------------------------------------------------------------------

function test(vari:Action){ //vari어떤값이 들어오던 Action의 데이터 타입이 맞다면 상관없다.
        console.log(vari.run());    
}

function call(vari:Action){
    console.log(vari.rug());
    console.log(vari.printAddress())
}

// function call(vari:number){  같은 변수를 두번쓰고 다른 데이터 타입일 경우 오류  
//     console.log(vari);
// }
