import React, { Component } from "react";
import "./css/Todo.css";

class TodoContainer extends Component {
    render() {
        const {groups, form, children, selected} = this.props;
        const title = groups[selected].title;
    
            return (
                
                <main className="todoContainer">
                    <p className="groupName">{title}</p>
                    <section className="todoFormContainer">
                        { form }
                    </section>
                    <section className="todoListContainer">
                        {children}
                    </section>
                </main>
            );
    }
}


export default TodoContainer;