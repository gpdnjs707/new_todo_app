import React from "react";
import "./css/Todo.css";

const TodoContainer = ({form, groupName, todoList, doneList}) => {
    return (
        <main className="todoContainer">
            <span className="groupName">그룹명{ groupName }</span>
            <section className="todoFormContainer">
                { form }
            </section>
            <section className="todoListContainer">
                { todoList }
            </section>
        </main>
    );
}

export default TodoContainer;