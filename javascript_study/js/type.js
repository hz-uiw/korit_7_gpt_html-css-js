var name = "권민창";
console.log(name);
console.log(typeof name);

var age = 25;
console.log(age);
console.log(typeof age);

var address;
console.log(address);
console.log(typeof address);

address = 10;
console.log(address);
console.log(typeof address);

address += "10";
console.log(address);
console.log(typeof address);

address = null;
console.log(address);
console.log(typeof address);

address = {
    si : "창원시",
    gungu : "성산구",
};
console.log(address);
console.log(typeof address);

// 자바 스크립트에서 변수는 정해져있지 않다.
// 변수에 대입하면서 타입이 정해진다.

/*
    number(숫자 - 정수, 실수)
    string(문자열)
    boolean(논리 - 참, 거짓)
    object(객체) -> null 포함
    undefined(타입이 없음)
    NaN(Not a Number)
*/