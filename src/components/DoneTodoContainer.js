import React from "react";
import "./css/Todo.css";

const DoneListContainer = ({children}) => {
    return (
        <main className="todoContainer">
            <span className="doneList__title">완료된 항목</span>
            <section className="todoListContainer isDone">
                {children}
            </section>
        </main>
    );
}

export default DoneListContainer;