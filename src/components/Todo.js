import React from "react";
import "./css/Todo.css";

const TodoContainer = ({groupName, form, children}) => {
    return (
        <main className="todoContainer">
            <span className="groupName">그룹명{groupName}</span>
            <section className="todoFormContainer">
                { form }
            </section>
            <section className="todoListContainer">
                {children}
            </section>
        </main>
    );
}

export default TodoContainer;