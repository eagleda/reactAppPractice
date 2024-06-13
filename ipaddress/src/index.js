import React from "react";
import ReactDOM from "react-dom";
import IPAddressContainer from "./IPAddressContainer";
import "./index.css"

var destination =document.querySelector("#container");

ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
);

