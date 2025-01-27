import { ChangeEvent, useState } from "react"

export const Q51x = () => {
  return (
    <div style={containerStyle}>
      {/* 현재 저장한 메모를 출력하시오 */}
      {/* 메모 출력 형식
        <div style={memoStyle}>
          <input value={"메모1"} />
          <span>2024-11-24</span>
        </div> 
      */}

      <div style={inputStyle}>
        <input />
        <button>추가</button>
      </div>
    </div>
  )
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 20
}

const memoStyle = {
  display: "flex",
  gap: 10
}

const inputStyle = {
  display: "flex",
  gap: 10
}
