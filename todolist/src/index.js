import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import "./index.css";

let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);