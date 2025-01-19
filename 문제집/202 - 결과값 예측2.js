////////////////////////////////////////////////////////
//
// 문제 202
//
// 아래 코드의 출력 결과값을 예측하시오.
// console.log가 호출 될 때마다, 줄바꿈이 되어야 함.
//
////////////////////////////////////////////////////////

function calculate(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function conditionalOperation(a, b) {
  return a > b ? add(a, b) : subtract(a, b);
}

const x = 7;
const y = 4;

const result1 = calculate(x, y, add); 
const result2 = calculate(x, y, subtract); 
const result3 = conditionalOperation(result1, result2); 
const result4 = calculate(result3, y, conditionalOperation);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
