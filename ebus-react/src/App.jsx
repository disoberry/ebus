import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/element/layout";
import Home from "./component/home";
import BusesTable from "./component/bus-table";
import SignIn from "./component/sign-in";
import SignUp from "./component/sign-up";
import UserProfile from "./component/user-profile";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/buses-table" element={<BusesTable />} />
          <Route exact path="/user" element={<UserProfile />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
