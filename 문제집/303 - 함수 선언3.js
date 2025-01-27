////////////////////////////////////////////////////////
//
// 문제 303
//
// 작성 영역에 코드를 작성해서 정해진 출력값이 나오도록 하세요.
//
////////////////////////////////////////////////////////

const data = [{
    id: 1,
    name: "송인호",
    address: "서울시",
    addressDetail: "송파구"
}, {
    id: 2,
    name: "홍길동",
    address: "백두산",
    addressDetail: "혁명구",
}]

const formatString = (address, addressString, userInfo) => {
    return `${address}동네 ${addressString}에 사는, 참가번호 ${userInfo.id}번, ${userInfo.name}`;
}

const printUsers = (data) => {
    // formatString을 반드시 사용할 것
    // console.log를 이용하여 함수 내부에서 출력할 것.
    // 작성 영역 /////////////////////////////////////////////




    ////////////////////////////////////////////////////////
}

printUsers(data);

// 목표 출력값
// 서울시동네 송파구에 사는, 참가번호 1번, 송인호
// 백두산동네 혁명구에 사는, 참가번호 2번, 홍길동
