import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import RecipeCard from "../component/RecipeCard";

export default function FavoritesPage() {


  const favorites = useAppStore((state) => state.favorites);
  const hasRecipes = useMemo(() => favorites.length, [favorites]);


  return (
    <>
      <h1 className="text-6xl font-extrabold m-5">Favoritas </h1>

      {hasRecipes ? (
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 m-4">
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
