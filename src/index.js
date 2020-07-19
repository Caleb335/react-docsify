import React from "react";
import ReactDOM from "react-dom";

import "./css/app.css";

export default function Welcome() {
  return (
    <div className="app">
      <h1>Testing React With Docsify</h1>
    </div>
  );
}

ReactDOM.render(<Welcome />, document.querySelector("#app"));
