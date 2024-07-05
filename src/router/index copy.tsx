import App from "@/App";
import Home from "@/pages/home";
import About from "@/pages/about";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

const baseRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default baseRouter;
