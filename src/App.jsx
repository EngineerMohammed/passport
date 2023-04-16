import React from "react";
import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./components/Home/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
