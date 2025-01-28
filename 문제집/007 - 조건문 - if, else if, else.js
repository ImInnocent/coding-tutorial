////////////////////////////////////////////////////////
//
// 문제 007
//
// if, else if, else를 이용하여 
// 각각의 문제에 맞게 정해진 출력값이 나오도록 하세요.
//
////////////////////////////////////////////////////////

// if / else if / else
// 조건에 맞는 경우 해당 블럭(코드)을 실행할 수 있도록 함.
// 여기서 if문이란, if를 포함하여 해당 if에 붙은 else if, else를 포함한 코드다.
// 가장 위의 조건부터 만족하는지 확인하며, if, else if에서 하나라도 만족하면 해당 if문을 벗어난다.
//
// if: ()안의 조건이 만족하는 경우 실행. 단독으로도 쓸 수 있다.
// else if: (선택) if 뒤, else 앞에서만 쓸 수 있으며, ()안의 조건이 만족하는 경우 실행.
//          하나의 if문에 여러 else if를 사용할 수 있다.
//          
// else: (선택) if문의 마지막에만 사용 가능하며, ()없이 사용한다.
//       위의 모든 if, else if 조건을 만족하지 않는 모든 요소가 else에서 실행된다.


// if만 사용하는 경우 
// const age = 17;
// if (age < 19) {
//   console.log("담배 판매 금지!")
// }
//
// if, else if, else 사용
// const age = 37;
//
// if (age < 20) {
//   console.log("미성년자");
// } else if (age < 30) {
//   console.log("20대");
// } else if (age < 40) {
//   console.log("30대");
// } else if (age < 50) {
//   console.log("40대");
// } else {
//   console.log("장년층");
// }


// 여러 조건을 독립적으로 만족해야 하는 경우
// let price = 10000;
// const hasCoupon = true;
// const memberGrade = "vvip";
//
// if (hasCoupon) {
//   price = price * 0.9;
// }
//
// if (memberGrade === "silver") {
//   price = price * 0.9;
// } else if (memberGrade === "gold") {
//   price = price * 0.8;
// } else if (memberGrade === "vvip") {
//   price = price * 0.7;
// }


// 문제 1. 사용자가 userId, userPw를 입력하였다.
//        계정등록된 adminId와 adminPw 모두 일치하면 "로그인"을 출력하고, 일치하지 않으면 "로그인 실패"를 출력하라
const userId = "song";
const userPw = "1234";
const adminId = "admin";
const adminPw = "1234"


// 문제 2. 세명의 점수가 주어진다.
//        세명의 점수 중 60점 이상인 사람의 수를 출력한다.
//        70점, 39점, 50점인 경우 -> 1명
//        90점, 69점, 50점인 경우 -> 2명
//        50점, 59점, 40점인 경우 -> 0명
const score1 = 70;
const score2 = 39;
const score3 = 50;



// 문제 3. 두 사용자의 정보 userData1, userData2가 주어진다.
//        사용자 정보로는 출생시간(birthTime), 어머니 이름(motherName), 아버지 이름(fatherName)이 주어진다.
//        두 사용자의 출생시간, 어머니 이름, 아버지 이름이 동일하면 "쌍둥이"를 출력한다.
//        출생시간이 다르고, 어머니 이름, 아버지 이름이 동일하면 "형제"를 출력한다.
//        어머니가 같지만 아버지 이름이 다르면 "이부형제"를 출력한다.
//        아버지가 같지만 어머니 이름이 다르면 "이복형제"를 출력한다.
const userData1 = { birthTime: "2024-11-24 12:30:00", motherName: "송머니", fatherName: "송버지" }
const userData2 = { birthTime: "2024-11-24 12:30:00", motherName: "송머니", fatherName: "송버지" }



// 문제 4. 사용자가 지불할 총 월요금을 계산하여 출력하라.
//        기본 월요금(monthlyFee)에서 SK면 5%, KT면 10%, LG면 8% 할인한다.
//        할인된 금액에서, 나이(age)가 30세 미만이면 청년 특별 할인으로 3000원을,
//                     나이가 60살 이상이면 노인 특별 할인으로 5000원을 할인하라.
const monthlyFee = 36000;
const age = 48;
