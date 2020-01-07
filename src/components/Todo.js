import React from "react";
import "./Todo.css";

const TodoContainer = ({form, groupName, todoList, doneList}) => {
    return (
        <div className="todoContainer">
            <span className="groupName">그룹명{ groupName }</span>
            <div className="todoFormContainer">
                { form }
            </div>
            <div className="todoListContainer">
                <div className="todoItem">
                    { todoList }
                </div>
                <div className="doneItem">
                    { doneList }
                </div>
                
            </div>
        </div>
    )
}

export default TodoContainer;