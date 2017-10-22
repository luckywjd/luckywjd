class Worker2 {
    constructor(name) {
        this.name = name;
    }
    goForWork() {
        console.log("출근 중");
    }
    goWorking() {
        console.log("일하는 중");
    }
    goOut() {
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
let dev = new Worker2();
dev.goForWork();
dev.goWorking();
dev.goOut();
//----------------------------------------------------------------------------------
class Developer extends Worker2 {
    goForWork() {
        console.log("개발 중");
    }
}
class corder extends Worker2 {
    goWorking() {
        console.log("코딩 중");
    }
}
function doTest(w) {
    w.goWorking();
    w.goForWork();
}
let Dev = new Developer();
doTest(Dev);
let Cod = new corder();
doTest(Cod);
//# sourceMappingURL=Debeloper.js.map