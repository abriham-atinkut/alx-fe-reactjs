import "./App.css";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
