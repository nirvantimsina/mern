import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/HomePage.jsx";
import Create from "./pages/CreatePage.jsx";
import Detail from "./pages/DetailPage.jsx";
import toast from "react-hot-toast";

const App = () => {
return (
  <div data-theme="forest">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
