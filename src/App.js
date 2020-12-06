import React from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    //BEM naming
    <div className="app">
      <h1>This is Going to become a Google Clone !</h1>
      {/* Homepage (the one the search on ) */}
      <Home />
      {/* SearchPage (page where is results) */}
    </div>
  );
}

export default App;
