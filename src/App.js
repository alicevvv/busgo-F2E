import Home from "./page/Home";
import News from "./page/News";
import Login from "./page/Login";
import Path from "./page/Path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.less";
import "./custom.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/path" element={<Path />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
