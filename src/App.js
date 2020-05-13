import React from "react";
import Nav from "./Nav";
import "./css/scss/main.scss";

const App = () => {
  return (
    <div className="main-thesis">
      <Nav />
      <div className="container">
        <h1 className="title">Hello World!</h1>
      </div>
    </div>
  );
};

export default App;
