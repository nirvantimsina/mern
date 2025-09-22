import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home.jsx";
import Create from "./components/Create.jsx";
import Detail from "./components/Detail.jsx";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <button
        onClick={() => toast.success("Congrats")}
        className="text-red-300 border-1 rounded-2xl text-bold text-2xl p-6 m-4"
      >
        Click Me!
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
