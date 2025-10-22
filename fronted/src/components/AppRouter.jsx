import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
