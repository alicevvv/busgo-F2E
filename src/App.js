import logo from "./logo.svg";
import Home from "./page/Home";
import News from "./page/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.less";
import "./custom.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
