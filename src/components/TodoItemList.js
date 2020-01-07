import React, {Component} from "react";
import TodoItem from "./TodoItem";

//TodoItem 을 렌더링 해주는 역할
class TodoItemList extends Component {


    render() {
        return (
            <div>
                <TodoItem text="테스트1" />
                <TodoItem text="테스트2" />
                <TodoItem text="테스트3" />
            </div>
            
        );
        
    }
}

export default TodoItemList;

