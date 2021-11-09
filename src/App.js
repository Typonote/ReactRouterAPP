import "./App.css";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";

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
            <Link to="/profile/velopert">velopert 프로필</Link>
          </li>
          <li>
            <Link to="/profile/gildong">gildong 프로필</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
