import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
