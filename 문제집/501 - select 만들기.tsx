////////////////////////////////////////////////////////
//
// 문제 501
//
// options에 맞춰 값을 선택할 수 있도록 코드를 작성하세요.
// 선택된 값을 화면에 출력하세요. 출력 위치는 코드에 표시
//
////////////////////////////////////////////////////////

import { ChangeEvent, useState } from "react"

const options = [
  {
    value: "sk",
    label: "SK 텔레콤"
  },
  {
    value: "kt",
    label: "KT 텔레콤"
  },
  {
    value: "lg",
    label: "LG U+"
  },
]

export const Q501 = () => {
  return (
    <div>
      <label for="select">통신사 선택</label>
      
      <select id="select">
        <option value="">--선택--</option>
        {/* options의 항목들을 선택할 수 있게 하시오 */}
      </select>

      <div>value: {/* 여기에 값 표시 */}</div>
    </div>
  )
}
