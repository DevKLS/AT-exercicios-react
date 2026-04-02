import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Ex01 from "./pages/Ex01";
import Ex02 from "./pages/Ex02";
import Ex03 from "./pages/Ex03";
import Ex04 from "./pages/Ex04";
import Ex05 from "./pages/Ex05";
import Ex06 from "./pages/Ex06";
import Ex07 from "./pages/Ex07";
import Ex08 from "./pages/Ex08";
import Ex09 from "./pages/Ex09";
import Ex10 from "./pages/Ex10";
import Ex11 from "./pages/Ex11";
import Ex12 from "./pages/Ex12";
import Ex13 from "./pages/Ex13";
import Ex14 from "./pages/Ex14";
import Ex15 from "./pages/Ex15";
import Ex16 from "./pages/Ex16";

function Layout({ children }) {
  return (
    <>
      <nav className="topbar">
        <Link to="/" className="brand">Fundamentos de React  DR2_AT</Link>
      </nav>
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex01" element={<Ex01 />} />
          <Route path="/ex02" element={<Ex02 />} />
          <Route path="/ex03" element={<Ex03 />} />
          <Route path="/ex04" element={<Ex04 />} />
          <Route path="/ex05" element={<Ex05 />} />
          <Route path="/ex06" element={<Ex06 />} />
          <Route path="/ex07" element={<Ex07 />} />
          <Route path="/ex08" element={<Ex08 />} />
          <Route path="/ex09" element={<Ex09 />} />
          <Route path="/ex10" element={<Ex10 />} />
          <Route path="/ex11" element={<Ex11 />} />
          <Route path="/ex12" element={<Ex12 />} />
          <Route path="/ex13" element={<Ex13 />} />
          <Route path="/ex14" element={<Ex14 />} />
          <Route path="/ex15" element={<Ex15 />} />
          <Route path="/ex16" element={<Ex16 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}