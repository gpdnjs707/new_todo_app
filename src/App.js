import React, {Component} from 'react';
import TodoListContainer from './components/Todo';
import NavContainer from './components/Nav';
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import "./App.css";


class App extends Component {
  
  id = 1;

  state = {
    input: '',
    todos: [
      {id: 0, text: "Make todo App", isDone: false}
    ]
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleInputInsert = () => {
    const {input, todos} = this.state

    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        isDone: false
      })  
    });
  }

  handleKeyPress = (e) => {
    // 엔터키가 눌리면 Insert func.을 실행한다.
    if(e.key === 'Enter') {
      this.handleInputInsert();
    }
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleInputChange,
      handleInputInsert,
      handleKeyPress
    } = this;

    return (
      <div className="wrap">
        <NavContainer></NavContainer>
        <TodoListContainer form={(
          <Form 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleInputChange}
            onInsert={handleInputInsert}
          />
          )}>
            <TodoItemList />
        </TodoListContainer>
      </div>
        
    );
  }
}

export default App;
