import React, {Component} from "react";
import MenuButton from "./MenuButton";
import "./Menu.css";

class Menu extends Component {
    render(){
        console.log("Rendering: Menu");

        let visibility = "hide";

        if(this.props.menuVisibility){
            visibility = "show";
        }

        return(
            <div id= "flyoutMenu"
                 //onMouseDown={this.props.handleMouseDown}
                 className={visibility}>
                    <MenuButton handleMouseDown={this.props.handleMouseDown}/>
                    <h2><a href="https://solved.ac/profile/eagleda">Home</a></h2>
                    <h2><a href="/https://github.com/">About</a></h2>
                    <h2><a href="/">Contact</a></h2>
                    <h2><a href="/">Search</a></h2>
            </div>
        );
    }
}

export default Menu;