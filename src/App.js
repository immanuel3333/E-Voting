import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import NotFoundPage from "./pages/not_found";
import React from "react";
import LoginPage from "./pages/loginPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
