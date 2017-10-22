class userDT0{    //구조체의 확장 
    private name :string;
    private age : number;
    public address:string;  
    setName(name:string):void{
        this.name=name;
    }
    getName():string{
            return this.name;
    }
}

let hong:userDT0= new userDT0();
//hong.name="abc";  //private 로 선언하면 수정이 X
hong.address="서울시 강북구";
//privete 수정방법
hong.setName("홍길동");
console.log(hong.getName()); // 객체.함수의 선언 변수()


