import Home from "./page/Home";
import News from "./page/News";
import Login from "./page/Login";
import Path from "./page/Path";
import Member from "./page/member";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.less";
import "./custom.css";
import {StoreProvider} from "./store/index"


function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/member" element={<Member/>}></Route>
          <Route path="/path:routeName" element={<Path />}></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
