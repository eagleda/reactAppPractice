import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MenuContainer from "./MenuContainer";

const container = document.querySelector("#root");
const root= createRoot(container);
root.render(<MenuContainer/>);