import "./App.css";
// PACKAGE
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Header from "./composant/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Character from "./pages/Character";
import File from "./pages/File";
// import Comicsid from "./pages/Comicsid";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Favoris from "./pages/Favoris";

import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState();
  // const [data, setData] = useState({});

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token-marvel", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("token-marvel");
    }
  };

  return (
    <div>
      <Router>
        <Header token={token} setToken={setToken} handleToken={handleToken} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="/comics" element={<Comics />} />
          {/* <Route path="/comics/:id/:image" element={<Comicsid />} /> */}

          <Route path="/character" element={<Character />} />
          <Route path="/character/:id" element={<File token={token} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
