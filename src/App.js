import "./App.css";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import Profiles from "./components/Profiles";
import Profile from "./components/Profile";
import HistorySample from "./components/HistorySmaple";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
          <li>
            <Link to="/history">history예제</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/history" element={<HistorySample />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
