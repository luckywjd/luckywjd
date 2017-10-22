interface work{
    goForWork():void;
    goWorking():void;
    goOut():void;
}

class  Worker2 implements work{   
    name:string;
    constructor(name:string){
            this.name=name;
    }
    
    goForWork():void{
        console.log("출근 중");
    }

    goWorking():void{
        console.log("일하는 중");
    }

    goOut():void{
        console.log("퇴근 중");
    }
   

}

// class worker2 implements work{   
    
//     goForWork():void{
//         console.log("개발 중");
//     }

//     goWorking():void{
//         console.log("일하는 중");
//     }

//     goOut():void{
//         console.log("퇴근 중");
//     }
   

// }

let dev:work = new Worker2();
dev.goForWork();
dev.goWorking();
dev.goOut();

//----------------------------------------------------------------------------------

class Developer extends Worker2{
    goForWork():void{
        console.log("개발 중");
    }
}

class corder extends Worker2{
    goWorking():void{
        console.log("코딩 중");
    }
}

function doTest(w:work){
        w.goWorking();
        w.goForWork();
}
let Dev:Worker2 =new Developer();
doTest(Dev);
let Cod:Worker2=new corder();
doTest(Cod);