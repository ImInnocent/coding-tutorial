////////////////////////////////////////////////////////
//
// 문제 201
//
// 아래 코드의 출력 결과값을 예측하시오.
// console.log가 호출 될 때마다, 줄바꿈이 되어야 함.
//
////////////////////////////////////////////////////////

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const num1 = 5;
const num2 = 3;

const result1 = add(num1, multiply(num2, 2)); // ?
const result2 = multiply(add(num1, num2), 2); // ?

console.log(result1);
console.log(result2);
