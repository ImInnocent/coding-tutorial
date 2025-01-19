////////////////////////////////////////////////////////
//
// 문제 203
//
// 아래 코드의 출력 결과값을 예측하시오.
// console.log가 호출 될 때마다, 줄바꿈이 되어야 함.
//
// "a".repeat(3) // "aaa"
//
////////////////////////////////////////////////////////


function printStars(n) {
  let adjust = n % 2 === 0 ? -1 : 0; // n이 짝수일 때 조정값
  let mid = (n + adjust) / 2;        // 중간 위치 계산

  for (let i = 0; i < n; i++) {
    let stars = i <= mid ? i * 2 + 1 : (n - i) * 2 - 1; // 별 개수 계산
    let spaces = (n - stars) / 2;                      // 공백 개수 계산

    let row = "_".repeat(spaces) + "*".repeat(stars);
    console.log(row);
  }
}

printStars(7);
