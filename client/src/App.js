import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Achievements from "./pages/Achievements";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/achievements" element={<Achievements/>}/> */}
      <Route path="/contactUs" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
