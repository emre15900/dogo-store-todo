import React from "react";
import ListItem from "./ListItem";

function Lists({ del, done, todos, info }) {
  if (todos.length <= 0 && info) {
    return (
      <div>
        <div className="card border-light p-5 text-center">
          <h1 className="text-danger">No Todo Found!</h1>
          <h4>Add your own todo!</h4>
        </div>
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    );
  }

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
          ))}
        {info && (
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Lists;
