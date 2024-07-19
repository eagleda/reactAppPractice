import {createRoot} from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import colorLog from "./reducer"

const container= document.querySelector("#root");
const root = createRoot(container);

let store = createStore(colorLog);

function addColor(value){
    return {
        type:"ADD",
        color: value
    };
}

function removeColor(value){
    return {
        type:"REMOVE",
        color: value
    };
}

store.dispatch(addColor("blue"));
store.dispatch(addColor("yello"));
store.dispatch(addColor("green"));
store.dispatch(addColor("red"));
store.dispatch(addColor("gray"));
store.dispatch(addColor("orange"));
store.dispatch(removeColor("gray"));

console.log(store.getState());

root.render(

);
