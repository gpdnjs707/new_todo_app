import React, {Component} from "react";
import TodoItem from "./TodoItem";

//TodoItem 을 렌더링 해주는 역할
class TodoItemList extends Component {

    render() {
        const { todos, onToggle, onRemove, onChange, groups, selected } = this.props;
        const groupTitle = groups[selected].title;
        const groupMatch = todos.filter(item => item.groupTitle === groupTitle)

        const beTodo = groupMatch.filter(item => item.isDone === false)

        const todoList = beTodo.map(
                //비구조화 할당. 파라미터는 1개이다
                ({todoId, text, isDone}) => (
                    <TodoItem 
                        id={todoId}
                        text={text}
                        isDone={isDone}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        onChange={onChange}
                        key={todoId}
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


