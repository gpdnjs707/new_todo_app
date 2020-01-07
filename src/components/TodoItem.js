import React, {Component} from "react";
import "./css/TodoItem.css"

//const TodoItem = ({}) ... 컴포넌트 최적화를 위해(라이프사이클 사용가능) class component를 사용한다

class TodoItem extends Component {
    
    render() {
        const {id, text, isDone, onToggle, onRemove} = this.props;

        return (
            <div className="todoItemContainer">
                <div className="todoItemText">
                    <div>{text}</div>
                </div>
            </div>
        );
    }
}

export default TodoItem;