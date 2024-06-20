import React,{Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"
class TodoList extends Component{
    constructor(props){
        super(props);


        this.state={
            items:[]
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let itemArray = this.state.items;

        if(this._inputElement.value !==""){
            itemArray.unshift({ //unshift():배열의 맨 앞에 값을 추가 <->shift " 제거
                text: this._inputElement.value,
                key:Date.now()
            });
            this.setState({
                items: itemArray
            });
            this._inputElement.value="";
            
        }
        console.log(itemArray);
        e.preventDefault(); // 초기화/로딩 방지
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}> 
                        {/*placeholder: 입력 필드에 사용자가 적절한 값을 입력할 수 있도록 도와주는 짧은 도움말을 명시*/}
                        <input  ref={(a)=>this._inputElement = a}
                                placeholder="enter task">  
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}/>
            </div>
        );
    }
}
export default TodoList;