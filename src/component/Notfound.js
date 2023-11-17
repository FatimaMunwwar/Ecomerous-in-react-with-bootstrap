import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <div className="container bg-primary text-center height m-auto">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h1>404 </h1>
            <h3>Oooops! Page Not Found</h3>
            <Link to="/About">
              <button>Click Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
