import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate.js'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList.js';
import Palette from './components/Palette.js';

class App extends Component {
  id = 3
  color = ['#343a40', '#f03e3e', '#12b886', '#228ae6']
  state = {
    input: '',
    color: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false, color: this.color[2]},
      { id: 1, text: ' 리액트 소개', checked: true, color: this.color[3]},
      { id: 2, text: ' 리액트 소개', checked: false, color: this.color[1]},
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleCreate = () => {
    const { input, todos, color } = this.state
    console.log(color)
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: this.color[color]
      })
    })
  }
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate ()
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state
    //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index] // 선택한 객체

    // const nextTodos = [...todos] // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    // nextTodos[index] = {
    //   ...selected,
    //   checked: !selected.checked
    // }
    // this.setState({
    //   todos: nextTodos
    // })
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index+1, todos.length)
      ]
    })
  }
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  handleColor = (c_idx) => {
    this.setState({
      color: c_idx
    })
  }
  render () {
    const { input, todos } = this.state
    // this.handleChange, this.handleCreate, this.handleKeyPress 
    // 이런식으로 계속 this 를 붙여줘야하는 작업을 생략 할 수 있습니다. 
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColor,
      color
    } = this 
    return (
    <TodoListTemplate form={
      <Form 
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}

      />
      }
      palette = {
        <Palette color={color} onClick={handleColor}/>
      }
      >
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </TodoListTemplate>  
    )
  }
}
export default App;
