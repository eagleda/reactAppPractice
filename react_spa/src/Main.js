import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
/*
const activeStyle= ({isActive})=>{
    return{
        backgroundColor: isActive? "white":undefined,
        color: isActive? "black":undefined,
    };

};
*/
class Main extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header"> {/*unordered list element*/}
                        <li><NavLink /*style={activeStyle}*/ to="/">Home</NavLink></li>
                        <li><NavLink /*style={activeStyle}*/ to="/stuff">Stuff</NavLink></li>
                        <li><NavLink /*style={activeStyle}*/ to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route path="/stuff" element={<Stuff/>} />
                            <Route path="/contact" element={<Contact/>} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;