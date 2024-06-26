import axios from "axios"
import { CategoriesAPIResponseSchema, RecepiesAPIResponse, RecipeAPIResponseSchema } from '../schemas/recipe-schema';
import { SearchFilter, Recipe } from "../types"


export async function getCategories() {

    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)


    if (result.success) {
        return result.data
    }
    
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filters.category}`
    const { data } = await axios(url)

    const result = RecepiesAPIResponse.safeParse(data)
    
    if (result.success) {
        return result.data
    }

}

export async function getRecipesById(id: Recipe['idMeal']) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    
    const {data} =  await axios(url)
    console.log(data);

    const result = RecipeAPIResponseSchema.safeParse(data.meals[0])
    console.log(result);

   
    if (result.success) {
        return result.data
    }
}

