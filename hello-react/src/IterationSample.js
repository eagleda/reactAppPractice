import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>); //name,index map 내장 인자?
  return <ul>{nameList}</ul>;
};

export default IterationSample;
