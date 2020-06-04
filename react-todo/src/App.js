import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoModal from "./Components/TodoModal";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([{ text: "Learn React", isCompleted: false }, { text: "Test", isCompleted: false }, { text: "Learn React", isCompleted: false }, { text: "Test", isCompleted: false }, { text: "Learn React", isCompleted: false }, { text: "Test", isCompleted: false }]);
  const [value, setValue] = useState("");
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (<div className="App">
    <div className="ui segment">
      <h1 className="ui center aligned icon header">DO THEM OR DIE!!! <TodoModal addTodo={addTodo} handleSubmit={handleSubmit} value={value} setValue={setValue} /></h1>

    </div>
    <div className="ui one column doubling stackable grid container">


      <TodoList addTodo={addTodo} completeTodo={completeTodo} removeTodo={removeTodo} todos={todos} setTodos={setTodos} />
    </div>
  </div>);



}

export default App;
