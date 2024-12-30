/*
    연산자

        - 산술 연산자:
            +, -, *, /, %, **(제곱)
*/
console.log(5 ** 2);

/*
        - 증감 연산자:
            ++, --

        - 비교 연산자:
            <, <=, >, >=, ==, !=, ===, !==
        자바스크립의 특징은 기본적으로 변수의 타입이 정해지지 않음
*/

console.log(1 == 1);
console.log(1 == "1");  // 타입 검사 X, 값만 검사
console.log(1 === "1"); // 타입, 값 검사
console.log(1 != "1");  // 타입 검사 X, 값만 검사
console.log(1 !== "1"); // 타입, 값 검사

/*
        - 논리 연산자:
            &&, ||  - 단축평가
            
            논리 자료값 || anything
            논리 자료값 === true => true
            논리 자료값 === false => anything

            논리 자료값 && anything
            논리 자료값 === true => anything
            논리 자료값 === false => false

            null 병합 연산
            anything1 ?? anything2
            좌항(anything1) === null || 좌항(anything1) === undefined => 우항(anything2)
            좌항(anything1) !== null && 좌항(anything1) !== undefined => 좌항(anything1)
*/
// 단축평가
console.log(1 === 1 || "권민창1");  // or 연산자 -> true면 true
console.log(1 !== 1 || "권민창2");  // or 연산자 -> false면 anything 반환
console.log(1 === 1 && "권민창3");  // and 연산자 -> true면 anything 반환
console.log(1 !== 1 && "권민창4");  // and 연산자 -> false면 false 반환

// null 병합 연산
console.log(null ?? "권민찬");
console.log("권민창" ?? "권민찬");

/*
        - Not 연산:
            !, !!
 */
console.log("------ NoT 연산 ------")
console.log(!"");
console.log(!0);
console.log(!null);
console.log(!undefined);
console.log(![]);   // 배열은 내부에 값이 없더라도 배열의 주소는 존재하기 때문에 true
console.log(typeof []);
console.log(![].length);

var name = "";
if(!name) {
    console.log("이름이 비었습니다.");
}

if(!!name) {    // 실행 안됨 -> false
    console.log("이름이 비어있지 않습니다.");
}

var name = "권민창";

if(!!name) {    // 실행 됨 -> true
    console.log("이름이 비어있지 않습니다.");
}