import React from "react";




function Todo(props) {
    return (

        <div
            className="ui card todo"
            style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
        ><div className="ui center aligned content">
                <h2 className="ui center aligned icon header">{props.todo.text}</h2>

                <div>
                    <button className="ui primary button" onClick={() => props.completeTodo(props.index)}>Complete</button>
                    <button className="ui button" onClick={() => props.removeTodo(props.index)}>x</button>
                </div>
            </div>
        </div>

    );
}

export default Todo;