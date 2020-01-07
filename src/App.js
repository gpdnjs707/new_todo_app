import React, {Component} from 'react';
import TodoListContainer from './components/Todo';
import NavContainer from './components/Nav';
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="wrap">
        <NavContainer></NavContainer>
        <TodoListContainer form={<Form />}>
            <TodoItemList />
        </TodoListContainer>
      </div>
        
    );
  }
}

export default App;
