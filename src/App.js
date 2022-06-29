import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {

  const delHandler = () => {
    console.log("Delete")
  } 

  const doneHandler = () => {
    console.log("Done")
  }

  return <div className="App">
    <Layout>
      <Header />
      <Lists del={delHandler} done={doneHandler} />
    </Layout>
  </div>;
}

export default App;
