import React from "react";
import Todo from "./Todo"

function TodoList(props) {
  return (
    <div className="ui cards">

      {props.todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={props.completeTodo}
          removeTodo={props.removeTodo}


        />


      ))}


    </div>
  );
}

export default TodoList;
