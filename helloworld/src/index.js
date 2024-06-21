import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";
import "./css/index.css";

let destination = document.querySelector("#root");

ReactDOM.render(
    <div>
        <HelloWorld/>
    </div>,
    destination
);