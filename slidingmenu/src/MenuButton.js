import React,{Component} from "react";
import "./MenuButton.css";

class MenuButton extends Component{
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.handleMouseDown===this.props.handleMouseDown){ 
            //전달되는 값이 변하지 않는 값일 경우, 업데이트/re-render 하지 않도록
            return false;
        }
        else return true;
    }

    render(){
        console.log("Rendering: MenuButton");
        return (
            <button id="roundButton" //MouseDown: 마우스를 눌렀을 때 <-> 마우스를 땔 때
                    onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;