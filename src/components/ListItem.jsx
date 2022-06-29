import React from "react";

function ListItem({id, title, delHandler, doneHandler}) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between">
        {title}
        <div>
          <button className="btn btn-sm btn-danger me-2" onClick={() => delHandler(id)}>
            <i className="far fa-trash-alt"></i>
          </button>
          <button className="btn btn-sm btn-success" onClick={() => doneHandler(id)}>
            <i className="fas fa-check"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default ListItem;
