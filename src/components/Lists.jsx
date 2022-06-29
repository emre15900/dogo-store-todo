import React from "react";

function Lists() {
  return (
    <div className="listWrap">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          List Item
          <div>
            <button className="btn btn-sm btn-danger me-2">
              <i className="far fa-trash-alt"></i>
            </button>
            <button className="btn btn-sm btn-success">
              <i className="fas fa-check"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Lists;
