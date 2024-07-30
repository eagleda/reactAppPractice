import logo from "./logo.svg";
import { Fragment } from "react";
import "./App.css";

function App() {
  const name = "리액트";
  const number=0;
  return (
    <div>
      {name==='리액트'&&<h1>리액트입니다</h1>} {/*조건에 맞지 않을 경우 아무것도 보여주지 않아도 되는 경우에는 (선행조건)&&  연산자를 통해 조건부 렌더링 가능*/ }
      {number && <h1>내용</h1>} {/*주의: falsy한 값인 0을 통해 && 조건부 렌더링을 하면 예외적으로 화면에 0이 나타남*/}
    </div>
  );
}

export default App;
