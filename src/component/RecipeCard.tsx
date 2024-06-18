import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={`Imagen de ${recipe.strMeal}`}
          className="hover:scale-125 transition-tramsform"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{recipe.strMeal}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold"
          onClick={() => selectRecipe(recipe.idMeal)}
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
}
