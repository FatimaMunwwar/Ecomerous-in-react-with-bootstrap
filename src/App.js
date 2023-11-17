import React from "react";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Sign from "./component/Sign";
import Watches from "./component/Watches";
import About from "./component/About";
import Fq from "./component/Fq";
import Add from "./component/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fashion from "./component/Fashion";
import Card from "./component/Card";
import Notfound from "./component/Notfound";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Watches" element={<Watches />} />
          <Route path="/About" element={<About />} />
          <Route path="/Fq" element={<Fq />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Notfound" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
