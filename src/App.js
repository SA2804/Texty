import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light"); // by default darkMode is turned off
  function handleMode() {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(33, 37, 41, 0.74)";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FEFEFA";
      document.body.style.color = "black";
    }
  }
  return (
    <div>
      <Navbar title="Texty" mode={Mode} togglemode={handleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyse:" mode={Mode} />
      </div>
    </div>
  );
}
export default App;
