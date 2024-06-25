import { useEffect, useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { FormularioBusquedaCategoria } from "./FormularioBusquedaCategoria";
import FavoritesCard from "../component/FavoritesCard";
import { Link } from "react-router-dom";

function Header() {
  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const favorites = useAppStore((state) => state.favorites);
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-orange-400 p-5 items-center gap-10">
        <div className="will-change-auto mr-8 ml-8">
          <Link to="/">
            <img
              className="w-42 h-15 md:w-38 md:h-32 object-contain"
              src="/img/Logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="w-full">
          {isHome && <FormularioBusquedaCategoria />}
        </div>

        <div className="will-change-auto mr-8 ml-8">
          <NavLink
            to="/Favorites"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 uppercase font-bold"
                : "text-white uppercase font-bold"
            }
          >
            Favoritos
          </NavLink>
        </div>
      </div>

      {isHome && (
        <div className="flex justify-around space-x-4 overflow-x-auto gap-4 m-5">
          {favorites.map((meals) => (
            <FavoritesCard key={meals.idMeal} recipe={meals} />
          ))}
        </div>
      )}

    </>
  );
}

export default Header;
