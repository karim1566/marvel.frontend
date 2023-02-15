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

// import axios from "axios";

// const handleclick = async() => {

//   const response= await axios.get("http://localhost:3002/",)
// };

function App() {
  const [token, setToken] = useState();
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState("");
  const [skip, setSkip] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <Router>
        <Header
          token={token}
          setToken={setToken}
          title={title}
          setTitle={setTitle}
          limit={limit}
          setLimit={setLimit}
          skip={skip}
          setSkip={setSkip}
        />
        <Routes>
          <Route
            path="/comics"
            element={<Comics title={title} skip={skip} limit={limit} />}
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/character"
            element={
              <Character
                skip={skip}
                limit={limit}
                name={name}
                setName={setName}
              />
            }
          />
          <Route path="/File/:id" element={<File />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
