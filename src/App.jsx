import Sidebar from "./Sidebar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Calender from "./pages/Calender";
import Document from "./pages/Documents";
import Project from "./pages/Projects";
import Reports from "./pages/Reports";
import Team from "./pages/Team";

export default function App() {
  return (
    <div className="flex h-full w-full">
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
        <Route path="/document" element={<Document></Document>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/report" element={<Reports></Reports>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
      </Routes>
    </div>
  );
}
