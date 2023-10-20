import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/element/layout";
import Home from "./component/home";
import BusesTable from "./component/bus-table";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/buses-table" element={<BusesTable />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
