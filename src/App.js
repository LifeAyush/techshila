import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LeaderBoard from "./Pages/Leaderboard/LeaderBoard";
import ProblemStatements from "./Pages/ProblemStatements/ProblemStatements";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/problem-statements" element={<ProblemStatements />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
