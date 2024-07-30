import logo from "./logo.svg";
import { Fragment } from "react";
import "./App.css";

function App() {
  const name = '뉘엑트';
  return (
    //<>=<Fragment>
    <> 
      <h1>name = {name}</h1>
      {name==='리액트'? (<h1>리액트입니다.</h1>):(<h2>리액트가 아닙니다.</h2>)}
    </>
  );
}

export default App;
