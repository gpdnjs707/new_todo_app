import React from "react";
import "./css/Todo.css";

const DoneListContainer = ({children}) => {
    return (
        <main className="todoContainer">
         
            <section className="todoListContainer isDone">
                {children}
            </section>
        </main>
    );
}

export default DoneListContainer;