import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sign.css";

const Sign = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  function handleChange() {
    const obj = { username: username, password: password };
    const dataStored = JSON.parse(localStorage.getItem("newUser")) || [];
    const updatedData = [...dataStored, obj];
    localStorage.setItem("newUser", JSON.stringify(updatedData));
  }

  return (
    <div className="height bg-danger d-flex">
      <div className="width-one border pt-5 d-flex justify-content-center  color ">
        <form className="g-3" onSubmit={handleChange}>
          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control input-width"
              id="validationDefault01"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control input-width"
              id="validationDefault02"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefaultUsername" className="form-label">
              Username
            </label>
            <div className="input-group input-width">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control input-width"
              id="validationDefault03"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="validationDefault04" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control input-width"
              id="validationDefault04"
              required
            />
          </div>
          <div className="col-12 pt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12 mt-3 d-flex justify-content-center">
            <div>
              <button className="btn bg-white px-5 py-2" type="submit">
                Submit
              </button>
              <p className="pt-3">
                Have an Account?
                <Link to="/login" className="ps-2">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
