import React,{Component} from "react";
import "./MenuButton.css";

class MenuButton extends Component{
    render(){
        return (
            <button id="roundButton" //MouseDown: 마우스를 눌렀을 때 <-> 마우스를 땔 때
                    onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;