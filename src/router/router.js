import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import List from "../pages/List";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/list' element={<List />} />
        <Route path='*' element={<>올바르지 않은 경로입니다!</>} />
      </Routes>
    </BrowserRouter>
  );
};
