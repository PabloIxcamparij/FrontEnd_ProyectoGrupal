import { useAppStore } from "../stores/useAppStore";
import { ChangeEvent, FormEvent, useState } from "react";

export function FormularioBusquedaCategoria() {

  const categories = useAppStore((state) => state.categories);
  const searchRecipes =  useAppStore((state) => state.searchRecipes);

  const [searchFilters, setSearchFilters] = useState({
    category: "",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormControlsCollection>) => {
    e.preventDefault();

    if (Object.values(searchFilters).includes("")) {
      console.log("todos los campos son obligatorios");
      return;
    }

    // Consultar recetas
    searchRecipes(searchFilters);
  };

  return (
    <>
      <form
        className="flex flex-col py-10 px-10 md:flex-row"
        onSubmit={handleSubmit}
      >
        <select
          id="category"
          name="category"
          className="p-3 md:w-64 rounded-lg focus:outline-none"
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

        <input
          type="submit"
          value="Buscar"
          className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-extrabold w-full md:w-32 p-2 rounded-lg uppercase mt-2 md:mt-0 md:ml-2"
        />
      </form>
    </>
  );
}
