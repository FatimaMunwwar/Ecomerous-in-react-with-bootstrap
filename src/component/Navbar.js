import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import obj from "./Data";

const Navbar = () => {
  const [valuesearch, setvaluesearch] = useState();
  const navigate = useNavigate();
  function handlechange(event) {
    event.preventDefault();
    let finalValue = valuesearch;
    for (const category in obj) {
      if (obj.hasOwnProperty(category)) {
        const items = obj[category];
        for (const key of items) {
          if (finalValue === key.cat) {
            if (finalValue === "Fashion") {
              navigate("./Fashion");
            } else if (finalValue === "Watches") {
              navigate("./Watches");
            }
            setvaluesearch("");
            return;
          }
        }
      }
    }
    navigate("./Notfound");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid border bg-secondary ">
          <Link to="/" className="navbar-brand">
            <img
              src={process.env.PUBLIC_URL + "/Images/logodara.jpeg"}
              height={70}
              width={70}
              alt="#"
              className="rounded-pill"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to="/Home"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link active text-white">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Fq" className="nav-link active text-white">
                  FAQ'S
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link active text-white">
                  Login
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search " onSubmit={handlechange}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={valuesearch}
                onChange={(e) => setvaluesearch(e.target.value)}
                aria-label="Search"
                required
              />
              <button
                className="btn btn-outline-success text-white"
                type="submit"
              >
                Search
              </button>
            </form>
            <Link to="/Card">
              <button className="mx-5 bg-primary px-4 py-1 text-white">
                Card
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
