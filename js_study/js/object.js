// 객체

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