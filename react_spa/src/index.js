import React from "react";
import Main from "./Main";
import { createRoot } from 'react-dom/client';
import "./index.css"
const container = document.querySelector("#root");
const root= createRoot(container);
root.render(<Main/>);