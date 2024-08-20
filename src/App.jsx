import Sidebar from "./Sidebar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Fossils from "./pages/Fossils";
import Document from "./pages/Documents";
import Page2 from "./pages/Page2";
import Reports from "./pages/Reports";
import Team from "./pages/Team";

export default function App() {
  return (
    <div className="flex h-full w-full">
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Fossils" element={<Fossils></Fossils>}></Route>
        <Route path="/document" element={<Document></Document>}></Route>
        <Route path="/Page2" element={<Page2></Page2>}></Route>
        <Route path="/report" element={<Reports></Reports>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
      </Routes>
    </div>
  );
}
