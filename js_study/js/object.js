// 객체
// 자바스크립트에서 자바의 this 역할은 객체이름 
const obj = {
    name: "권민창",
    age: 25,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

obj.print();

const obj2 = {
    name: "권민창",
    age: 25,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

console.log(obj === obj2); // 주소가 다르기 때문에 같지 않다(false)
console.log(JSON.stringify(obj) === JSON.stringify(obj2));
console.log(typeof JSON.stringify(obj))

/*
    object -> JSON      JSON.stringfy(object)
    JSON -> object      JSON.parse(json문자열)

    User 객체 생성
    username, password, name, email
*/

const user = {
    username: "",
    password: "",
    name: "",
    email: ".11@gmail.com",
    hobby: ["축구, 농구, 배구"],
    address: {
        si: "창원시",
        gungu: "성산구",
    },
    // 함수는 JSON으로 변환 안됨
    printUserInfo: () => console.log("사용자 정보 출력"),
}

user.username = "hzuiw";
user.password = "qwe123";
user.name = "권민창";
user.email = "kwonmc5.11@gmail.com";

console.log(user);
// User -> JSON
const userJson = JSON.stringify(user);
console.log(userJson);

// JSON -> Object
const convertUser = JSON.parse(userJson);
console.log(convertUser);

const student = {
    name: "권민창",
    age: 25,
    address: "창원시 성산구",
}

const key = "age";
const value = 26;
const student2 = {
    ...student,
    name: "권민찬",
    [key]: value,
}

console.log(student2);