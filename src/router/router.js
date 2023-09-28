import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "../pages/CreatePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreatePage />} />
        <Route path='*' element={<>올바르지 않은 경로입니다!</>} />
      </Routes>
    </BrowserRouter>
  );
};
