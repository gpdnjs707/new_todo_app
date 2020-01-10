import React, {Component} from 'react';
import TodoListContainer from './components/TodoContainer';
import DoneListContainer from "./components/DoneTodoContainer";
import NavContainer from './components/Nav copy';
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import DoneItemList from './components/DoneItemList';
import ModalPortal from './ModalPortal';
import AddGroupPopup from './components/AddGroup';


class App extends Component {
  
  todoId = 1;
  groupId = 1;

  state = {
    input: '',
    popupInput: '',
    selectedId: 0,
    todos: [
      {todoId: 0, text: "Make todo App", isDone: false, groupTitle:"Inbox"},
    ],
    groups: [
      {groupId: 0, title: "Inbox"},
    ],
    popupDisplay: false
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
    const {input, todos, groups, selectedId} = this.state
    const groupTitle = groups[selectedId].title

    this.setState({
      input: '',
      todos: todos.concat({
        todoId: this.todoId++,
        text: input,
        isDone: false,
        groupTitle: groupTitle
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

  handlePopup = () => {
    const {popupDisplay} = this.state;

    this.setState({
        popupDisplay: !popupDisplay
        }   
    )
  }

  handlePopupClose = () => {
    const {popupDisplay} = this.state;
    this.setState({
      popupDisplay: !popupDisplay
    })
  }

  handlePopupInput = (e) => {
    this.setState({
      popupInput: e.target.value
    })
  }
  
  handlePopupInsert = () => {
    const {popupInput, groups} = this.state;

    if(popupInput !== '') {
      this.setState({
        popupInput: '',
        groups: groups.concat({
          groupId: this.groupId++,
          title: popupInput
        })
      })
  
      this.handlePopupClose()
    }
  }

  handleSelectedGroup = (id) => {
    const {groups} = this.state;
    this.setState({
      selectedId: groups[id].groupId
    })
  }

  render() {
    const {input, popupInput, todos, groups, popupDisplay, selectedId} = this.state;
    const {
      handleInputChange,
      handleInputInsert,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleInputUpdate,
      handlePopup,
      handlePopupInsert,
      handlePopupInput,
      handlePopupClose,
      handleSelectedGroup
    } = this;

    return (
      <div className="wrap">
        <ModalPortal>
          <AddGroupPopup
            text={popupInput} 
            display={popupDisplay} 
            onCreate={handlePopupInsert}
            onChange={handlePopupInput}
            dismiss={handlePopupClose}
          />
        </ModalPortal>

        <NavContainer selected={handleSelectedGroup} groups={groups} onClick={handlePopup} selectedId={selectedId}/>

        <div className="todoWrap">
          <TodoListContainer 
          form={(
            <Form 
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleInputChange}
              onInsert={handleInputInsert}
            />
            )} 
            groups={groups} 
            selected={selectedId}>
              <TodoItemList 
                todos={todos} onToggle={handleToggle} onRemove={handleRemove} onChange={handleInputUpdate} groups={groups} selected={selectedId}
              />
          </TodoListContainer>
          <DoneListContainer>
            <DoneItemList 
              todos={todos} onToggle={handleToggle} onRemove={handleRemove} onChange={handleInputUpdate} groups={groups} selected={selectedId}
            />
          </DoneListContainer>
        </div>
       
      </div>
        
    );
  }
}

export default App;
