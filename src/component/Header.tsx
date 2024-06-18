import { useEffect } from "react";
import "../CSS/Header.css";
import { useAppStore } from "../stores/useAppStore";
import { FormularioBusquedaCategoria } from "./FormularioBusquedaCategoria";

function Header() {
  const fetchCategories = useAppStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchCategories();
    
  }, [fetchCategories]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-orange-400 p-2">
        <img
          className="m-5 w-52 h-15 md:w-48 md:h-24 object-contain"
          src="/img/Logo.png"
          alt="Logo"
        />

        <FormularioBusquedaCategoria />
      </div>
    </>
  );
}

export default Header;
