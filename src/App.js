import Home from "./page/Home";
import News from "./page/News";
import Login from "./page/Login";
import Path from "./page/Path";
import Signup from "./page/Signup";
import MyMember from "./page/member";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.less";
import "./custom.css";
import {StoreProvider} from "./store/index";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/member" element={<Signup/>}></Route>
          <Route path="/signin" element={<MyMember/>}></Route>
          <Route path="/path:routeName" element={<Path />}></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
