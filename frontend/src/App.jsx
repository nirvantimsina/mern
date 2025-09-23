import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import toast from "react-hot-toast";

const App = () => {
return (
  <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
