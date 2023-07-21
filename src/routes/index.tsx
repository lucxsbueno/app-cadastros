import { Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      <Route path="/" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}