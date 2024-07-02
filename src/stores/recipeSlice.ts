import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService"
import type { Categories, Recipe, RecipeDetails, Recipies, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories,
    recipies: Recipies,
    modal: boolean,
    selectedRecipe: RecipeDetails,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
    selectRecipe: (id: Recipe['idMeal']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        categories: []
    },
    recipies: {
        meals: []
    },
    modal: false,
    selectedRecipe: {} as RecipeDetails,
    fetchCategories: async () => {
        const categories = await getCategories()

        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const recipies = await getRecipes(filters)
        
        set({
            recipies
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipesById(id)

        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {

        set({
            modal: false,
            selectedRecipe: {} as RecipeDetails,
        })

    },


})