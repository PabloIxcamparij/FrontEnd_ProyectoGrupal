import { useAppStore } from "../stores/useAppStore";
import { ChangeEvent, FormEvent, useState } from "react";

export function FormularioBusquedaCategoria() {
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);

  const [searchFilters, setSearchFilters] = useState({
    category: "",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(searchFilters).includes("")) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    // Consultar recetas
    searchRecipes(searchFilters);
  };

  return (
    <form
      className="flex flex-row p-8 md:flex-row gap-5"
      onSubmit={handleSubmit}
    >
      <select
        id="category"
        name="category"
        className="p-3 w-full rounded-lg focus:outline-none"
        onChange={handleChange}
        value={searchFilters.category}
      >
        <option value="">-- Seleccione --</option>
        {categories.categories.map((category) => (
          <option value={category.strCategory} key={category.idCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>

      <button
          type="submit"
          className="flex items-center justify-center text-white bg-orange-600 rounded-full w-14 hover:bg-orange-800 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      
    </form>
  );
}
