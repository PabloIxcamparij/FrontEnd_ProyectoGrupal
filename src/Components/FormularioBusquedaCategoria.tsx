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
      className="flex gap-5 p-4"
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
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 object-cover  transition-transform transform hover:scale-125"
          viewBox="0 0 512 512"
        >
          <path
            fill="#ffffff"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
      </button>
    </form>
  );
}
