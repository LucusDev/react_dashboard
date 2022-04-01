import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />} />

          <Route path="users">
            <Route index element={<List></List>}></Route>
            <Route path=":userId" element={<Single />}></Route>
            <Route path="new" element={<New></New>}></Route>
          </Route>
          <Route path="products">
            <Route index element={<List></List>}></Route>
            <Route path=":productId" element={<Single />}></Route>
            <Route path="new" element={<New></New>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
