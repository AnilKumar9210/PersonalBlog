import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Eat from "./Components/Eat";
import Travel from "./Components/Travel";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Post from "./DataFiles/Post";

function App() {
  const [count, setCount] = useState(0);
  
  const Title = () => {
    return <header className="title">Wander & wonder</header>;
  };

  // useEffect (()=> {
    
  //   const goTo = ()=> {
  //     navigate ("/home");
  //   }
    
  //   goTo ();
  // },[])

  return (
    <>
      <Title />
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" /> */}
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/profile" element={<profile />} />
          <Route path="/work" element={<Work />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/Eat" element={<Eat />} />
          <Route path="/Travel" element={<Travel />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      {/* <div className="backGroundDisplay">
    </div> */}
    <Post/>
    </>
  );
}

export default App;
