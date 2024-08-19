import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); //첫번째 원소는 현재상태, 두번째 원소는 상태를 바꾸어 주는 setter 함수!
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
