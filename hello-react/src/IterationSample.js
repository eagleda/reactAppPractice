import React, { useState } from "react";

//함수형 컴포넌트
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState(""); //inputText는 ""이 기본인 문자열형 State임을 설정
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // concat() is a method used to merge two or more arrays.
      // It doesn't change the existing arrays but returns a new array that contains the values of the merged arrays.
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(""); // inputText를 비운다.
  };
  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    //빈태그 <>도 가능했구나
    <>
      <input value={inputText} onChange={onChange} />{" "}
      {/*jsx 태그와 내부 속성에 대한 공부가 필요한 듯*/}
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
