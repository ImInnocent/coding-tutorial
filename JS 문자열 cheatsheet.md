## String 처리법

#### 문자 자르기

```javascript
// 문자열의 일부를 추출하여 새로운 문자열을 반환합니다.
const mySubstring = "abcde";
mySubstring.substring(0, 3);    // abc
mySubstring.substring(2, 4);    // cd
mySubstring.substring(2);       // cde
mySubstring // abcde

// substring과 동일
const mySlice = "abcde";
mySlice.slice(0, 3);        // abc
mySlice.slice(2, 4);        // cd
mySlice.slice(2);           // cde
mySlice // abcde

// 시작위치에서 지정한 길이만큼의 문자열을 반환합니다.
const mySubstr = "abcde"
mySubstr.subStr(0, 3);       // abc
mySubstr.subStr(2, 2);       // cd
mySubstr.subStr(2);       // cde
mySubstr // abcde
```

<hr/>

#### 원하는 글자 가져오기

```javascript
// 원하는 위치의 문자열을 반환한다. 첫 글자의 위치는 0이다.
const myCharAt = "abcde";
myCharAt.charAt(3);         // d
myCharAt[3]                 // d
myCharAt?.[3]               // d
```

<hr/>

#### 문자열 합치기

```javascript
// 앞 문자열에 뒷 문자열을 합한 문자열을 반환한다. 원본 변수는 유지된다.
const myConcatA = "a", myConcatB = "b";
myConcatA.concat(myConcatB)         // ab
myConcatA + myConcatB               // ab

// 문자열에 + 연산자로 합칠 수 있다.
let myStringSum = "a";
myStringSum = myStringSum + "b"     // ab
myStringSum = myStringSum + "c"     // abc
myStringSum += "d"                  // abcd
```

<hr/>

#### 문자열에서 원하는 문자열이 있는지 찾기

```javascript
// 있으면 true, 없으면 false
const myInclude = "abcde";
myInclude.includes("c")             // true

// 첫번째 찾은 위치 반환. 없으면 -1 반환
const myIndexOf = "abbba";
myIndexOf.indexOf("a")              // 0
myIndexOf.indexOf("c")              // -1

// 마지막으로 찾은 위치 반환. 없으면 -1 반환
const myLastIndexOf = "abbba";
myLastIndexOf.lastIndexOf("a")              // 4
myLastIndexOf.lastIndexOf("c")              // -1
```

<hr />

#### 문자열의 길이 구하기

```javascript
// .length를 이용해 길이를 가져온다. 함수가 아닌 변수
const myLength = "abcde";
myLength.length                     // 5
```

<hr />

#### 문자열 치환

```javascript
// 첫번째로 찾은 원하는 부분 문자열을 교체한다. 원본은 유지된다.
const myReplace = "abfdef";
myReplace.replace("f", "c")     // abcdef
myReplace                       // abfdef

// 모든 원하는 부분 문자열을 교체한다. 원본은 유지된다.
const myReplaceAll = "abfdef";
myReplaceAll.replaceAll("f", "c")     // abcdec
myReplaceAll                       // abfdef
```

<hr />

#### 문자열 가공

```javascript
// 모두 대문자로 만들기
const myUpperCase = "abCde";
myUpperCase.toUpperCase()       // ABCDE

// 모두 소문자로 만들기
const myLowerCase = "AbCdE";
myLowerCase.toLowerCase()       // abcde

// 공백 없애기
const myTrim = "a b c d e";
myTrim.trim()                   // abcde
```

<hr />

#### 형변환

```javascript
// 숫자 -> 문자열
const myToString = 12345;
myToString.toString()           // "12345"
"" + 12345                      // "12345"

// 문자열 -> 숫자
parseInt("12345")               // 12345
parseInt("abc")                 // NaN

// 배열, 오브젝트 -> 문자열
const myStringify = { a: 3, b: 4};
JSON.stringify(myStringify)     // '{"a":3,"b":4}'
JSON.stringify(null)            // null

// 문자열 -> 배열, 오브젝트
const myJsonParse = '{"a":3,"b":4}'
JSON.parse(myJsonParse)         // { a: 3, b: 4 }
JSON.parse("[ab}")              // !!!!! error !!!!!
```






