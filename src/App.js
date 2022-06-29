import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [info, setInfo] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault();

    if(todo.length < 5) {
      setError(`At least 5 word required!`)
      return false
    }

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]);
    
    setError(null)
    setTodo("")
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure?")) {
      const updatedTodo = todos.filter((item) => item.id !== todoId);

      setTodos(updatedTodo);

      setInfo(`Todo Silindi !`)

      console.log("Silindi");
    }
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((item) => item.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };

    setTodos(duplicateTodos);
    console.log(todos)
  };

  return (
    <div className="App">
      <Layout>
        <Header />
        <Form
          todo={todo}
          change={(e) => setTodo(e.target.value)}
          submit={submitHandler}
          error={error}
          info={info}
        />
        <Lists del={delHandler} done={doneHandler} todos={todos} />
      </Layout>
    </div>
  );
}

export default App;
