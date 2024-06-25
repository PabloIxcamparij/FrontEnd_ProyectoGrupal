import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function FavoritesCard({ recipe }: RecipeCardProps) {

  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div 
      className="border shadow-lg rounded-full overflow-hidden cursor-pointer w-30 sm:w-42 flex-none"
      onClick={() => selectRecipe(recipe.idMeal)}
    >
      <img
        src={recipe.strMealThumb}
        alt={`Imagen de ${recipe.strMeal}`}
        className="w-full h-32 sm:h-40 object-cover transition-transform transform hover:scale-110"
      />
    </div>  
  );
}
