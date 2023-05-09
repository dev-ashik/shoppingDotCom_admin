import React from "react";
import './Notfound.css';
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="not-found-container">
    <h1 className="not-found-title">404</h1>
    <p className="not-found-text">
      Oops! The page you're looking for doesn't exist.
    </p>
    <Link to="/" className="not-found-link primary_btn">
      Go back to home page
    </Link>
  </div>
  );
};

export default Notfound;
