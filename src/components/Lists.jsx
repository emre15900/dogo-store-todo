import React from "react";
import ListItem from "./ListItem";

function Lists({ del, done, todos }) {
  return (
    <div className="listWrap">
      <ul className="list-group">
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            delHandler={del}
            doneHandler={done}
          />
        ))}
      </ul>
    </div>
  );
}

export default Lists;
