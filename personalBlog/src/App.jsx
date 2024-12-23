import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route, useNavigate} from "react-router-dom";
import Eat from "./Components/Eat";
import Travel from "./Components/Travel";
import About from "./Components/About";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);
  // const navigate = useNavigate ();
  const Title = ()=> {
    return <header className="title">
      Wander & wonder
    </header>
  }

  return (
    <>
    <Title/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/profile" element={<profile/>}/>
        <Route path="/Eat" element={<Eat/>}/>
        <Route path="/Travel" element={<Travel/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
