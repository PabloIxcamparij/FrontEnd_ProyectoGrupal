import { StateCreator } from "zustand"
import { RecipeDetails } from "../types"

export type FavoritesSliceType = {
    favorites: RecipeDetails[],
    hadleClickFavorites: (recipe: RecipeDetails) => void,
    favoritesExists: (id: RecipeDetails['idMeal']) => boolean,
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    hadleClickFavorites: (recipe) => {

        if (get().favoritesExists(recipe.idMeal)) {
            console.log('Si existe');

            set((state) =>({
                favorites:state.favorites.filter(favorite => favorite.idMeal !== recipe.idMeal)
            }))

        }else{
            console.log('No existe');
            set((state) =>({
                favorites: [...state.favorites, recipe],
            }))

        }

        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    favoritesExists: (id) => {
        return get().favorites.some(favorite => favorite.idMeal === id)
    },

    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')

        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites),
            })
            
            console.log("se han cargado el localStorage");
        }
    }
})


// Uso de patrones, patron slice