import React, {Component, Fragment} from 'react';
import TodoListContainer from './components/TodoContainer';
import DoneListContainer from "./components/DoneTodoContainer";
import NavContainer from './components/Nav';
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import DoneItemList from './components/DoneItemList';


class App extends Component {
  
  id = 2;

  state = {
    input: '',
    todos: [
      {id: 0, text: "Make todo App", isDone: false},
      {id: 1, text: "Make todo App done", isDone: true}
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

  handleToggle = (id) => {
    const {todos} = this.state;
    
    //1. 선택된 todoItem의 Index 정보 가져오기
    const index = todos.findIndex(item => item.id == id)
    //2. 선택된 arr[index] 값 할당
    const selected = todos[index] // -> {id:1, text:..., idDone: false}
    //3. todos arr 복사
    const newTodo = [...todos]
    //4. 복사된 arr에 값 덮어씌우기
    newTodo[index] = {
      ...selected, // ...selected = id:1, text:..., isDone: false
      isDone: !selected.isDone
    }

    this.setState({
      todos: newTodo
    })
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleInputChange,
      handleInputInsert,
      handleKeyPress,
      handleToggle
    } = this;

    return (
      <div className="wrap">
        <NavContainer></NavContainer>
        <div className="todoWrap">
          <TodoListContainer form={(
            <Form 
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleInputChange}
              onInsert={handleInputInsert}
            />
            )}>
              <TodoItemList todos={todos} onToggle={handleToggle} />
          </TodoListContainer>
          <DoneListContainer>
            <DoneItemList todos={todos} onToggle={handleToggle} />
          </DoneListContainer>
        </div>
       
      </div>
        
    );
  }
}

export default App;
