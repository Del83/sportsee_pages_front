import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "../src/Pages/Profil";
import Page404 from "./Pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profil />} />
        <Route path="/dashboard/:id" element={<Profil />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
