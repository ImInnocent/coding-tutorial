////////////////////////////////////////////////////////
//
// 문제 204
//
// 아래 코드의 출력 결과값을 예측하시오.
// console.log가 호출 될 때마다, 줄바꿈이 되어야 함.
//
// toFixed(2): 소수점 n번째 자리까지 자르기. 반올림함
// (0.123).toFixed(2) // "0.12"
// (0.125).toFixed(2) // "0.13"
//
////////////////////////////////////////////////////////



function calculateCart(cart) {
  let total = 0;

  for (let item of cart) {
    let price = item.price;
    price += price * 0.05;

    if (item.category === "electronics" && price > 100) {
      price -= 20; 
    } else if (item.category === "clothing") {
      price -= price * 0.1; 
    }

    if (item.brand === "luxury") {
      price += 50; 
    }

    total += price;
  }

  return total.toFixed(2); // 소수점 둘째 자리까지 반환
}

const shoppingCart = [
  { name: "TV", price: 200, category: "electronics", brand: "luxury" },
  { name: "T-shirt", price: 20, category: "clothing", brand: "standard" },
  { name: "Laptop", price: 150, category: "electronics", brand: "standard" },
  { name: "Shoes", price: 50, category: "clothing", brand: "luxury" }
];

const totalPrice = calculateCart(shoppingCart);

console.log(totalPrice);
