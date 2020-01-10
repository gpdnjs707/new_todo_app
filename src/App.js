import React, {Component} from 'react';
import TodoListContainer from './components/TodoContainer';
import DoneListContainer from "./components/DoneTodoContainer";
import NavContainer from './components/Nav copy';
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import DoneItemList from './components/DoneItemList';
import GroupList from './components/GroupList';


class App extends Component {
  
  todoId = 2;

  state = {
    input: '',
    todos: [
      {todoId: 0, text: "Make todo App", isDone: false},
      {todoId: 1, text: "Make todo App done", isDone: true}
    ]
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleInputUpdate = (id, e) => {
    const {todos} = this.state;

    const index = todos.findIndex(item => item.todoId === id);
    const selected = todos[index]
    const updatedInput = e.target.value;

    const updatedTodo = [...todos]
    updatedTodo[index] = {
      ...selected,
      text: updatedInput
    }

    this.setState({
      todos: updatedTodo
    })
  }

  handleInputInsert = () => {
    const {input, todos} = this.state

    this.setState({
      input: '',
      todos: todos.concat({
        todoId: this.todoId++,
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
    const index = todos.findIndex(item => item.todoId === id)
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

  handleRemove = (id) => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter(item => item.todoId !== id)
    })

  }

  

  render() {
    const {input, todos} = this.state;
    const {
      handleInputChange,
      handleInputInsert,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleInputUpdate
    } = this;

    return (
      <div className="wrap">
        <NavContainer />
        <div className="todoWrap">
          <TodoListContainer form={(
            <Form 
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleInputChange}
              onInsert={handleInputInsert}
            />
            )}>
              <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} onChange={handleInputUpdate}/>
          </TodoListContainer>
          <DoneListContainer>
            <DoneItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} onChange={handleInputUpdate}/>
          </DoneListContainer>
        </div>
       
      </div>
        
    );
  }
}

export default App;
