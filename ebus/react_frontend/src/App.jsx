import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/element/layout";
import Home from "./component/Home";
import BusTable from "./component/Bus-table";
import SignIn from "./component/Sign-in";
import SignUp from "./component/Sign-up";
import UserProfile from "./component/User-profile";
import RoutesPage from "./component/Routes";
import TicketRegistration from "./component/Ticket-registration";
import ReadyTicket from "./component/Ready-ticket";
import Contacts from "./component/Contacts";
import AboutUs from "./component/About-us";
import SearchResult from "./component/Search-result";
import MaRKIV_Team from "./component/MaRKIV-team";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/buses-table" element={<BusTable />} />
          <Route exact path="/buses-table/search-result" element={<SearchResult />} />
          <Route
            exact
            path="/ticket-registration"
            element={<TicketRegistration />}
          />
          <Route exact path="/ready-ticket" element={<ReadyTicket />} />
          <Route
            exact
            path="/user"
            element={<UserProfile link={"profile"} />}
          />
          <Route
            exact
            path="/user/profile"
            element={<UserProfile link={"profile"} />}
          />
          <Route
            exact
            path="/user/tickets"
            element={<UserProfile link={"tickets"} />}
          />
          <Route exact path="/routes" element={<RoutesPage />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/markiv-team" element={<MaRKIV_Team />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
