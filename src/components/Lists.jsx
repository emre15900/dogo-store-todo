import React from "react";
import ListItem from "./ListItem";

function Lists({del, done}) {
  return (
    <div className="listWrap">
      <ul className="list-group">
        <ListItem title="Title 1" delHandler={del} doneHandler={done} />
        <ListItem title="Title 2" delHandler={del} doneHandler={done} />
        <ListItem title="Title 3" delHandler={del} doneHandler={done} />
        <ListItem title="Title 4" delHandler={del} doneHandler={done} />
      </ul>
    </div>
  );
}

export default Lists;
