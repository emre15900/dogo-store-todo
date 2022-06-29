import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]);
    console.log(todos);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure?")) {
      const updatedTodo = todos.filter((item) => item.id !== todoId);

      setTodos(updatedTodo);
    }
  };

  const doneHandler = () => {
    console.log("Done");
  };

  return (
    <div className="App">
      <Layout>
        <Header />
        <Form
          todo={todo}
          change={(e) => setTodo(e.target.value)}
          submit={submitHandler}
        />
        <Lists del={delHandler} done={doneHandler} todos={todos} />
      </Layout>
    </div>
  );
}

export default App;
