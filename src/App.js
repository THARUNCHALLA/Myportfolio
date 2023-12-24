import Header from "./Components/Header";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Project from "./Routes/Project";
import NotFound from "./Routes/NotFound";
import { Route, Routes } from "react-router";



function App() {
  return (
    <>
     <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="Project" element={<Project/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
