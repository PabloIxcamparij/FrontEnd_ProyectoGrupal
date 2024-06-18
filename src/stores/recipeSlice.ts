import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService"
import type { Categories, Recipe, RecipeDetails, Recipies, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories,
    recipies: Recipies,
    selectedRecipe: RecipeDetails,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
    selectRecipe: (id: Recipe['idMeal']) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        categories: []
    },
    recipies: {
        meals: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()

        set({
            categories
        })
    },
    selectedRecipe: {} as RecipeDetails,
    searchRecipes: async (filters) => {
        const recipies = await getRecipes(filters)

        set({
            recipies
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipesById(id)

        set({
            selectedRecipe
        })
    }

})