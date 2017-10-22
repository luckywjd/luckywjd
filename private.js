class userDT0 {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let hong = new userDT0();
//hong.name="abc";  //private 로 선언하면 수정이 X
hong.address = "서울시 강북구";
//privete 수정방법
hong.setName("홍길동");
console.log(hong.getName()); // 객체.함수의 선언 변수()
//# sourceMappingURL=private.js.map