let userList:Array<number>=new Array();

for(let i:number = 0; i<5;i++){
    addUserList(userList,i);
}

function addUserList(userList:Array<number>,num:number){
    userList.push(num);
}

console.log(userList);

let testList=new Array();
testList.push(1);
testList.push("1");
testList.push(true);

let tList:Array<boolean> = new Array<boolean>(); //제너릭은 데이터 타입까지 명확하게 해주는
tList.push(true);


const tt:number=3; //초기값을 설정해야 함  그다음 후 값 변경안됨
//tt=4; //x

let tt2:number|string=4;
console.log(typeof tt2);
tt2="asdf"
console.log(typeof tt2);

let add = function(n1:number|string,n2:number|string):number|string{ //트풀
   if(typeof n1 != "number") {
       return "1숫자가 아닙니다.";
    }
    if(typeof n2 != "number"){
        return "2숫자가 아닙니다.";
    }
    return n1+n2;
}
console.log (add(1,"2"));

class Exam{  //Exam 의 데이터 타입을 만들수 있고 만든것 
    public name:string;  //protected 를 쓰게되면 외부에서 변경이 불가능 하기때문에 에러가 발생 priveted도 마찬가지 
   //protected name:string;
}
let examList:Array<Exam>= new Array<Exam>();  

let e:Exam=new Exam();
e.name="e1";
examList.push(e);

e=new Exam(); //new를하지 않았다면 위에 값이 새로 들어감 new를 쓰게되면 새로운 방에 값이 들어감
e.name="e34";
examList.push(e);
console.log(examList);


// function initList(examList:Array<Exam>):void{
//     examList=null;  나자신을 바꾸지 못한다 
// }
// initList(examList);

//---------------------------------------------------------------------------------------------------

interface MakeNumbers{

}

class Lotto implements MakeNumbers{
//class Lotto{
    private numbers:Array<number>; //private 선언 시 외부에서 접근 불가
    constructor(){
        this.numbers=new Array<number>();
    }
    public makeNumbers():void{
        while (this.numbers.length<6){
           let num:number=Math.floor(Math.random()*20)+1;
           if(this.numbers.indexOf(num)!=-1){  //음수가 나올 수 없기 때문에 찾는 방주소가 없을때는 -1로 나온다.
               continue;
           }
           this.numbers.push(num);
        }
    }
    public getNumbers():Array<number>{
        return this.numbers;
    }
}

let lot:Lotto = new Lotto();
lot.makeNumbers();
console.log(lot.getNumbers());

//let lot:Lotto = new Lotto();

//let  arrs:number[]=[1,2,3];

//let arrs:Lotto[] = [new Lotto()]; //만들어진 함수에 배열식으로 설정 가능
let arrs:Lotto[]=[new Lotto(),new Lotto(),new Lotto(),new Lotto(),new Lotto()]

for(let i in arrs){ // 키 값을 가져온다 (지칭하는 번호?)
    console.log(arrs[i]);
}

for(let i:number=0, max:number=arrs.length; i<max; i++){
    console.log(arrs[i]);

}

let mn:MakeNumbers = new Lotto();
let lot1:Lotto = new Lotto();
mn=lot1;  //Lotto 보다 MakeNumbers가 더 상위개념이기 때문에 가능 lot1=mn;는 불가능 

let test1:Set<string>= new Set<string>(); //Set 데이터를 덮어씌우기만 
test1.add("1");
test1.add("2");
test1.add("3");

for (let i in test1){
    console.log(i);
}

let arrs:MakeNumbers[]=[new Lotto(),new Lotto(),new Lotto()]
let arrs2:Array<MakeNumbers>=Array<MakeNumbers>();
arrs2.push(new Lotto());