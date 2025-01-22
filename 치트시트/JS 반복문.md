## 반복문

#### 반복문 작성 가이드

반복문의 핵심은, 최종적으로 실행되어야 하는 코드가 무엇인지 알아야 한다는 것입니다.  
반복문이 어렵다면 실행되어야 하는 코드를 먼저 작성하고, 이를 반복문으로 변환하는 과정을 연습하자.  
처음부터 암산하려고 하지 말고 시간을 들여가며 이해하면 암산은 저절로 됩니다.

```javascript
// 1. 최종적으로 실행될 코드 파악하기
console.log(`송인호 31살`)
console.log(`홍길동 23살`)
console.log(`조용필 11살`)

// 2. 반복되는 부분과 아닌 부분을 파악한다.
// 반복되는 부분
console.log(`??? ??살`)

// 각 줄에서 반복되지 않는 부분
// 송인호 / 31
// 홍길동 / 23
// 조용필 / 11

// 3. 반복되지 않는 부분을 변수로 처리한다.
const data = [
    {name: "송인호", age: 31},
    {name: "홍길동", age: 23},
    {name: "조용필", age: 11},
]

// 4. 반복문을 생성하고 반복되지 않는 부분에 변수를 넣는다.
for (let i = 0; i < data.length; i++) {
    // data[i]: {name: "송인호", age: 31}
    
    // 반복되지 않는 부분작성 후 변수 넣기
    console.log(`${data[i].name} ${data[i].age}살`)
}

```

#### for 반복문

반복되는 요소를 처리하기 위한 문법이다.

```javascript
// 일반적인 for문
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
    
// 실행 순서 분석
// for (a ; b ; c) {
//     d
// }

// 1. a (초기화. 이후 다시 실행되지 않음)
// 2. b (조건 확인. true면 3번으로)
// 3. d (본문 내역 실행)
// 4. c 
// 5. 2번으로 이동.

// 여기서 질문!
// d 다음 c가 실행된다면, c에 있는 코드를 d에서 작성해도 되지 않나요?
for (let i = 0; i < 5;) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
}

// 네 됩니다. 전혀 상관 없어요.
```

<hr />

#### while 반복문

```javascript
// 조건이 참인 동안 반복합니다.
let i = 0;
while (i < 5) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
}
```

<hr />

#### for ... in 반복문

```javascript
// 객체나 배열의 인덱스를 순회할 때 사용합니다.
const myObject = { a: 1, b: 2, c: 3 };
for (let key in myObject) {
    console.log(key, myObject[key]);  // a 1, b 2, c 3
}

// 배열의 인덱스를 순회
const myArray = [10, 20, 30];
for (let index in myArray) {
    console.log(index, myArray[index]);  // 0 10, 1 20, 2 30
}
```

<hr />

#### for ... of 반복문

```javascript
// 일반적인 for문
// 배열의 값 자체를 순회할 때 사용합니다.
const myArray = [10, 20, 30];
for (let value of myArray) {
    console.log(value);  // 10, 20, 30
}

// 문자열을 순회할 때
const myString = "abc";
for (let char of myString) {
    console.log(char);  // a, b, c
}
```

<hr />

#### foreach 반복문

```javascript
/// 배열의 각 요소를 처리할 때 사용
const myArray = [1, 2, 3, 4, 5];
myArray.forEach((item, index) => {
    console.log(index, item);  // 0 1, 1 2, 2 3, 3 4, 4 5
});
```

<hr />

#### 한 눈에 모아보기
```javascript
const dataObject = {
    a: 1, b: 2
}
const dataArray = [1, 2, 3, 4, 5]

// for문
for (let i = 0; i < 5; i++) {
    console.log(dataArray[i]);
}

// while문
let i = 0;
while (i < 5) {
    console.log(dataArray[i])
    i++;
}

// for ... of문
for (let value of dataArray) {
    console.log(value);
}

// for ... in문
for (let key in dataObject) {
    console.log(key, dataObject[key]);
}

for (let index of dataArray) {
    console.log(dataArray[index]);
}

// forEach문
dataArray.forEach((value, index) => {
    console.log(value);  
});
```
