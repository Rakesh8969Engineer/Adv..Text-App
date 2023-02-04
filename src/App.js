import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let [mode, setMode] = useState("light");

const [Alert, ShowAlert] = useState(null);
const Alertshow=()=>{
ShowAlert({
msg:"Hii Alert box is successfully Executed",
type:"green"







})



}











  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Nav
        title="Rakesh-Text-App"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Alert alert={alert} /> */}
      {/* <About/> */}








      <Textform heading="Enter Your Text Here." mode={mode} />
    </>
  );
}

export default App;
