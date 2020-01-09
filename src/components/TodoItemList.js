import React, {Component} from "react";
import TodoItem from "./TodoItem";

//TodoItem 을 렌더링 해주는 역할
class TodoItemList extends Component {

    render() {
        const { todos, onToggle, onRemove, onChange } = this.props;

        const beTodo = todos.filter(item => item.isDone == false)

        const todoList = beTodo.map(
            //비구조화 할당. 파라미터는 1개이다
            ({id, text, isDone}) => (
                <TodoItem 
                    id={id}
                    text={text}
                    isDone={isDone}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onChange={onChange}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}


export default TodoItemList;


