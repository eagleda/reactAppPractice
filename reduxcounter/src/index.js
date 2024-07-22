import React from "react";
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from "redux"; //이젠 @reduxjs/toolkit에서 제공하는 configureStore
import { Provider } from "react-redux";
import counter from "./reducer";
import App from "./App";
import "./index.css";

const container = document.querySelector("#root");
const root= createRoot(container);

let store= createStore(counter);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
