import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import RecipeCard from "../Components/RecipeCard";

export default function IndexPage() {
  const recipies = useAppStore((state) => state.recipies);
  const hasRecipes = useMemo(() => recipies.meals.length, [recipies]);

  return (
    <>
      <h1 className="text-5xl font-extrabold mb-5"> Recetas </h1>

      {hasRecipes ? (

        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-6 m-2">
          {recipies.meals.map((meals) => (
            <RecipeCard key={meals.idMeal} recipe={meals} />
          ))}
        </div>

      ) : (
        <>
          <p className="m-6">No hay resultados, busque por medio del formulario</p>
        </>
      )}
    </>
  );
}
