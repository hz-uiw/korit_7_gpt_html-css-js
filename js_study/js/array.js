// 배열

const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for(let num of numbers) {
    console.log(num);
}

numbers.forEach((num) => console.log(num));

numbers.push(10);
console.log(numbers);
console.log(numbers.pop());

console.log(numbers.includes(5));   // 값을 포함하고 있는지 확인(contains)

console.log(numbers.indexOf(5));    // 값의 위치(index)

console.log(numbers.lastIndexOf(4));    // 뒤에서부터 값의 위치(index)

console.log(numbers.concat([11, 12, 13, 14, 15]));    // 두 배열을 병합
console.log(numbers);
const newNumbers = numbers.concat([11, 12, 13, 14, 15]);
console.log(newNumbers);
const newNumbers2 = [...numbers, 11, 12, 13, 14, 15];   // concat과 동일한 동작
console.log(newNumbers2);

const newNumbers3 = numbers.slice(5);    // (시작인덱스, 값 앞까지) 슬라이스
console.log(newNumbers3);

// 특정 값 지우기
// slice, concat 사용
const newNumbers4 = numbers.slice(0, numbers.indexOf(4)).concat(numbers.slice(numbers.indexOf(4) + 1));
console.log(newNumbers4)

// spice() 사용
const newNumbers5 = numbers.splice(3 , 1);  // splice(제거할 시작인덱스, 지울 갯수)
console.log(newNumbers5);
console.log(numbers);

const newNumbers6 = numbers.splice(4, 2, 11, 12, 13);   // splice(제거할 시작 인덱스, 지울갯수(n), 지운 자리에 값 추가(n개만큼))
console.log(newNumbers6);
console.log(numbers);

numbers.splice(4, 0, 20, 21);   // (4번인덱스부터, 0개 삭제, 20추가, 21추가)
console.log(numbers);