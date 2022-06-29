import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {
  return <div className="App">
    <Layout>
      <Header />
      <Lists />
    </Layout>
  </div>;
}

export default App;
