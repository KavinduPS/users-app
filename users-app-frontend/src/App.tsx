import Navbar from "./components/Navbar";
import { AddUser } from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-user" element={<AddUser />}></Route>
          <Route path="/edit-user" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
