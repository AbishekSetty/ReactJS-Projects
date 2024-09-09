import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./Star";
import "./index.css";
import App from "./App v2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxStars={5}
      message={["terrible", "bad", "ok", "good", "amazing"]}
    />
    <StarRating maxStars={10} color="red" /> */}
  </React.StrictMode>
);
