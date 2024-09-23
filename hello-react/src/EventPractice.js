import React, { useState } from "react";
//함수 컴포넌트식 이벤트 핸들링
const EventPractice = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUser = (e) => setUser(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(user + ": " + message);
    setUser("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="user"
        placeholder="사용자명"
        value={user}
        onChange={onChangeUser}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
