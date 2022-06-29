import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const delHandler = () => {
    console.log("Delete");
  };

  const doneHandler = () => {
    console.log("Done");
  };

  return (
    <div className="App">
      <Layout>
        <Header />
        <Form todo={todo} change={(e) => setTodo(e.target.value)} />
        <Lists del={delHandler} done={doneHandler} />
      </Layout>
    </div>
  );
}

export default App;
