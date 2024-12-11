import React, { useState, useEffect } from "react";

const Info = () => {
  //관리할 상태가 여러 개인 경우
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);
  //배열 안의 요소: 업데이트의 조건이 되는 값, 비어있을 시, 마운트될 때만 useEffect가 되고 언마운트 될 때만 뒷정리 함수가 작동
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};
export default Info;
