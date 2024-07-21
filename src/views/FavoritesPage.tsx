import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import RecipeCard from "../Components/RecipeCard";

export default function FavoritesPage() {


  const favorites = useAppStore((state) => state.favorites);
  const hasRecipes = useMemo(() => favorites.length, [favorites]);


  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 mt-5"> Favoritos </h1>

      {hasRecipes ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-6 m-2">
          {favorites.map((meals) => (
            <RecipeCard key={meals.idMeal} recipe={meals} />
          ))}
        </div>
      ) : (
        <>
          <p>No hay resultados</p>
        </>
      )}
    </>
  );
}
