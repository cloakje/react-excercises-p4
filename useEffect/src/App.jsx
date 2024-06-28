import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
 
  return (
    <div className="container">
      <Clock />
    <WelcomeMessage />
    </div>
  );
}

export default App;
