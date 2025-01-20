## 함수

#### 함수의 선언

```javascript
// 근본 선언
function myFunction(myParamter) {
    return "abc"
}

// 화살표 함수
const myFunction = (myParamter) => {
    return "abc"
} 

// 화살표 함수 (반환 축약형)
// 중괄호 없이 바로 반환이 가능하다. 단, 여러 줄을 실행해야 할 때에는 축약을 쓰지 않는게 좋다.
// 때로는 반환을 하지 않는 함수더라도 짧게 쓰기 위해 축약형을 쓰기도 한다.
const myFunction = (myParameter) => "abc";
```


## 조건문 (if)

#### 기본적인 if 문법

```if``` 안에 조건을 넣습니다.  
조건 또는 변수가 ```Truthy```일 때, ```if``` 안의 코드가 실행됩니다.

```if```를 만족하지 않고, ```else if```의 조건을 만족하는 경우 ```else if``` 안의 코드가 실행됩니다.

위에서 부터 조건을 충족하는지 확인하기 때문에,   
여러 조건들이 참이더라도 가장 위에서 참일 경우, 가장 위의 코드가 실행됩니다.

모든 조건을 만족하지 않는 경우 ```else```가 호출됩니다.


```javascript
// 조건에 따라 실행될 코드를 분기
const num = 10;

if (num > 5) {
  console.log("num은 5보다 큽니다.");
} else if (num === 5) {
  console.log("num은 5와 같습니다.");
} else {
  console.log("num은 5보다 작습니다.");
}
```

<hr/>

#### 삼항 연산자 (ternary operator)

```javascript
// if-else의 간단한 표현
const age = 18;

let canVote = age >= 18 ? "투표 가능합니다." : "투표 불가능합니다.";

// 아래의 코드와 동일
// if (age >= 18) {
//   canVote = "투표 가능합니다.";
// } else {
//   canVote = "투표 불가능합니다.";
// }

console.log(canVote);
```

<hr/>

#### 중첩 조건문

```javascript
// 조건문 안에 또 다른 조건문 작성 가능
const score = 85;

if (score >= 90) {
  console.log("A학점");
} else if (score >= 80) {
  if (score >= 85) {
    console.log("B+ 학점");
  } else {
    console.log("B 학점");
  }
} else {
  console.log("C 학점");
}
```


## map

#### 배열 요소 변환

기존 배열로부터 가공된 새로운 배열을 반환하는 함수

```javascript
const data = [1, 2, 3, 4, 5];

const result = data.map((value, index) => {
    // 각 배열 요소에 대하여 반환.
    return value * 2;
})

// 아래 코드와 같음
// const result = [
//     (data[0] * 2),
//     (data[1] * 2),
//     (data[2] * 2),
//     (data[3] * 2),
//     (data[4] * 2),
// ]

const complexData = [
    {
        id: 1,
        name: "송인호"
    },
    {
        id: 2,
        name: "홍길동"
    }
]

const complexResult = complexData.map((value, index) => {
    return `기호 ${value.id}번 ${value.name}`;
})

// 아래 코드와 같음
// const complexResult = [
//     `기호 ${complexData[0].id}번 ${complexData[0].name}`,   // 기호 1번 송인호
//     `기호 ${complexData[1].id}번 ${complexData[1].name}`,   // 기호 2번 홍길동
// ]
```

#### 배열 요소 반환

```javascript
// 배열의 각 요소를 변환하여 새 배열 생성
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

<hr/>

#### 객체 배열에서 특정 값 추출

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// 각 사용자 이름 추출
const names = users.map((user) => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]
```

<hr/>

## reduce

#### 배열 합산

```javascript
const numbers = [1, 2, 3, 4, 5];

// 배열 요소를 합산
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
```

<hr/>

#### 배열 요소를 그룹화

```javascript
const items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" }
];

// type을 기준으로 그룹화
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});

console.log(grouped);
// {
//   fruit: ["apple", "banana"],
//   vegetable: ["carrot"]
// }
```

<hr/>

## filter

#### 조건에 맞는 요소 필터링

```javascript
const numbers = [1, 2, 3, 4, 5];

// 짝수만 필터링
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

<hr/>

#### 객체 배열에서 특정 조건 필터링

```javascript
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

// 활성 상태의 사용자만 필터링
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);
// [
//   { id: 1, name: "Alice", active: true },
//   { id: 3, name: "Charlie", active: true }
// ]
```