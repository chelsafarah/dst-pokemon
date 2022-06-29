import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Beranda />}></Route>
          <Route path="/edit" exact element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
