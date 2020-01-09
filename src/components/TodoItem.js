import React, {Component} from "react";
import classNames from "classnames";
import "./css/TodoItem.css";

//const TodoItem = ({}) ... 컴포넌트 최적화를 위해(라이프사이클 사용가능) class component를 사용한다

class TodoItem extends Component {
    
    render() {
        const {id, text, isDone, onToggle, onRemove} = this.props;

        return (
            <div className="todoItemContainer">
                <div className="input-group-text">
                    {/* onClick={onToggle{id}}로 하면 렌더링 될 때 바로 실행됨! */}
                    <input type="checkbox" onClick={() => onToggle(id)}/>
                </div>
                <div className={classNames("todoItemText", {isDone})}>
                    <div>{text}</div>
                </div>
                <div className="removeBtn">
                    삭제
                </div>
            </div>
        );
    }
}

export default TodoItem;