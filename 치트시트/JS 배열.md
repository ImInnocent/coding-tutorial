## Array 처리법

#### 배열 요소 추가 및 제거

```javascript
// 배열의 끝에 요소 추가
const myArray = [1, 2, 3];
myArray.push(4); // [1, 2, 3, 4]

// 배열의 끝에서 요소 제거
myArray.pop(); // [1, 2, 3]

// 배열의 시작에 요소 추가
myArray.unshift(0); // [0, 1, 2, 3]

// 배열의 시작에서 요소 제거
myArray.shift(); // [1, 2, 3]
```

<hr />

#### 특정 위치에서 요소 추가/제거

```javascript
// splice를 사용하여 특정 위치에 요소를 추가하거나 제거
const myArray = [1, 2, 3, 4, 5];

// 요소 제거 (2번째 위치부터 2개 제거)
myArray.splice(1, 2); // [1, 4, 5]

// 요소 추가 (2번째 위치에 6과 7 추가)
myArray.splice(1, 0, 6, 7); // [1, 6, 7, 4, 5]

// 요소 교체 (3번째 위치의 요소를 8로 대체)
myArray.splice(2, 1, 8); // [1, 6, 8, 4, 5]
```

<hr />

#### 배열 순회

```javascript
const myArray = [1, 2, 3, 4, 5];

// forEach를 사용한 배열 순회
myArray.forEach((value, index) => {
  console.log(`인덱스 ${index}: 값 ${value}`);
});

// map을 사용하여 새로운 배열 생성
const doubled = myArray.map((value) => value * 2); // [2, 4, 6, 8, 10]
```

<hr />

#### 배열 필터링 및 검색

```javascript
const myArray = [1, 2, 3, 4, 5];

// 조건에 맞는 모든 요소 필터링
const evenNumbers = myArray.filter((value) => value % 2 === 0); // [2, 4]

// 조건에 맞는 첫 번째 요소 찾기
const firstEven = myArray.find((value) => value % 2 === 0); // 2

// 조건에 맞는 첫 번째 요소의 인덱스 찾기
const firstEvenIndex = myArray.findIndex((value) => value % 2 === 0); // 1
```

<hr />

#### 배열 병합 및 분리

```javascript
// 배열 병합
const array1 = [1, 2];
const array2 = [3, 4];
const merged = array1.concat(array2); // [1, 2, 3, 4]
const spreadMerged = [...array1, ...array2]; // [1, 2, 3, 4]

// 배열 분리
const myArray = [1, 2, 3, 4, 5];
const [first, second, ...rest] = myArray; // first: 1, second: 2, rest: [3, 4, 5]
```

<hr />

#### 배열 정렬 및 뒤집기

```javascript
const myArray = [5, 3, 8, 1, 2];

// 오름차순 정렬
myArray.sort((a, b) => a - b); // [1, 2, 3, 5, 8]

// 내림차순 정렬
myArray.sort((a, b) => b - a); // [8, 5, 3, 2, 1]

// 배열 뒤집기
myArray.reverse(); // [1, 2, 3, 5, 8]
```

<hr />

#### 배열의 길이 확인 및 조정

```javascript
const myArray = [1, 2, 3, 4, 5];

// 배열 길이 확인
console.log(myArray.length); // 5

// 배열 길이 조정 (초과 요소는 제거됨)
myArray.length = 3; // [1, 2, 3]

// 배열 길이 조정 (길이를 늘리면 빈 값 추가)
myArray.length = 5; // [1, 2, 3, <2 empty items>]
```
