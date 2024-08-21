import React, { useState } from "react";
// state 값을 바꾸어야 할 때는 setState,useState를 통해 전달받은 "세터 함수"를 사용해야 한다.
const Say = () => {
  const [message, setMessage] = useState(""); //첫번째 원소는 현재상태, 두번째 원소는 상태를 바꾸어 주는 setter 함수!
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>{" "}
      {/*이중 중괄호: 밖에 것은 JS표현임을 안쪽 {}는 style 객체임을 알리기 위해 이중 중괄호 사용 */}
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
// 배열이나 객체를 업데이트해야 할 때는
// 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후,
// 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트
