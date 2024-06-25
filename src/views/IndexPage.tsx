import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import RecipeCard from "../component/RecipeCard";

export default function IndexPage() {
  const recipies = useAppStore((state) => state.recipies);
  const hasRecipes = useMemo(() => recipies.meals.length, [recipies]);

  return (
    <>
      <h1 className="text-6xl font-extrabold m-5"> Recetas </h1>

      {hasRecipes ? (

        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 m-4">
          {recipies.meals.map((meals) => (
            <RecipeCard key={meals.idMeal} recipe={meals} />
          ))}
        </div>

      ) : (
        <>
          <p>No hay resultados, busque por medio del formulario</p>
        </>
      )}
    </>
  );
}
