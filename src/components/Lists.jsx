import React from "react";
import ListItem from "./ListItem";

function Lists({ del, done, todos }) {
    
  if (todos.length <= 0) {
    return (
      <div className="card border-light p-5 text-center">
        <h1 className="text-danger">No Todo Found!</h1>
        <h4>Add your own todo!</h4>
      </div>
    );
  }

  return (
    <div className="listWrap">
      <ul className="list-group">
        {todos &&
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              delHandler={del}
              doneHandler={done}
              done={todo.done}
            />
          ))
          }
      </ul>
    </div>
  );
}

export default Lists;
