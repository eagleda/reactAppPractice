import React,{Component} from "react";
import "./MenuButton.css";

class MenuButton extends Component{
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.handleMouseDown===this.props.handleMouseDown){ 
            //기존값과 부모/자신의 특정한 행동/연산 후로새로 변경된 값이 같다면, 업데이트/re-render 하지 않도록
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