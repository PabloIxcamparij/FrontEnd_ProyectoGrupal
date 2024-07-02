import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe);
  const favoritesExists = useAppStore((state) => state.favoritesExists);

  return (
    <div
      className="relative border shadow-lg rounded-3xl cursor-pointer"
      onClick={() => selectRecipe(recipe.idMeal)}
    >
      <button
        className={`absolute top-2 right-2 w-10 h-10 rounded-full border-none flex items-center justify-center cursor-pointer ${
          favoritesExists(recipe.idMeal)
            ? "bg-orange-400"
            : "bg-white"
        }`}
      >
        <svg
          className={`icono w-6 h-6 stroke-current ${
            favoritesExists(recipe.idMeal)
              ? "text-white"
              : "text-black"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </button>

      <div className="overflow-hidden rounded-3xl">
        <img
          src={recipe.strMealThumb}
          alt={`Imagen de ${recipe.strMeal}`}
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{recipe.strMeal}</h2>
      </div>
    </div>
  );
}
