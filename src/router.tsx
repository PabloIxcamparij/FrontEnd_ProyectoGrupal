import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./views/IndexPage";
import Layouts from "./layouts/Layout";
import FavoritesPage from "./views/FavoritesPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<IndexPage />} index/>
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
