import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  let isValid = false;

  function handleClick(event) {
    event.preventDefault();

    const value = JSON.parse(localStorage.getItem("newUser")) || [];

    for (let key of value) {
      if (key.username === login && key.password === userPassword) {
        isValid = true;
      }
    }

    if (isValid) {
      navigate("/About");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <form onSubmit={handleClick}>
      <div className="container-fluid height">
        <div className="d-flex align-items-center m-auto height-one ">
          <div className="border rounded width text-center color">
            <div className="mb-3">
              <label htmlFor="validationDefault01" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="User Name"
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div>
                <label htmlFor="validationDefault02" className="form-label">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="validationDefault02"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="pb-2 text-center px-3 rounded bg-white border-0 margintop align-items-center d-flex justify-content-center"
                onClick={toggleShowPassword}
              >
                <img
                  className="Displa justify-content-center d-flex align-items-center"
                  src={
                    showPassword
                      ? process.env.PUBLIC_URL + "/Images/eyeopen.png"
                      : process.env.PUBLIC_URL + "/Images/eye.png"
                  }
                  height={30}
                  width={30}
                  alt="Toggle Password Visibility"
                />
              </button>
            </div>
            <button className="px-5 py-2 mt-2 rounded">Login</button>
            <div className="pt-4">
              <p>
                Don't have an account? <Link to="/Sign">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
