import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";

function App() {
  return (
    <CssBaseline>
      <Home className="home" />
    </CssBaseline>
  );
}

export default App;
