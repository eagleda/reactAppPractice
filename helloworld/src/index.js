import React from "react";
import ReactDOM from  "react-dom";
import HelloWorld from "./HelloWorld";
import "./css/index.css"; //css 폴더를 따로 두는 것보다 컴포넌트 단위로 A.js,A.css를 한 폴더로 묶는 게 더 보편적이나(chatGPT 왈) 일단 총론 책에 따름

ReactDOM.render( //ReactDOM.render은 React 18부턴 지원되지 않음, 
                 //사용시 React17을 실행하는 것처럼 작동 
                 //import { createRoot } from 'react-dom/client'; 
                 //const container = document.getElementById('app');
                 //const root = createRoot(container); 
                 //root.render() ....이런 식으로 
    <HelloWorld/>,
    document.getElementById("root")
);