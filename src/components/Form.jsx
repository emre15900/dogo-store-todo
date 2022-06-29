import React from "react";

function Form({ todo, change, submit, error }) {
  const formStyle = {
    padding: "0.5rem 0",
    margin: "10px 0",
  };

  return (
    <form onSubmit={submit}>
      <div className="form-group row">
        <div className="col-9">
          <input
            type="text"
            value={todo}
            onChange={change}
            className="form-control"
            style={formStyle}
          />
          {error && <small className="form-text text-danger">{error}</small>}
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
