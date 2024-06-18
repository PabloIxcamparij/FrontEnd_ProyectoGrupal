import { z } from 'zod'


export const CategorySchema = z.object({
    idCategory: z.string(),
    strCategory: z.string(),
    strCategoryThumb: z.string().url(),
    strCategoryDescription: z.string()
});

export const CategoriesAPIResponseSchema = z.object({
    categories: z.array(CategorySchema)
});

export const SearchFilterSchema = z.object({
    category: z.string()
})

export const RecipeAPIResponse = z.object({
    strMeal: z.string(),
    strMealThumb: z.string(),
    idMeal: z.string(),
})


export const RecepiesAPIResponse = z.object({
    meals: z.array(RecipeAPIResponse)
})

export const RecipeAPIResponseSchema = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    
    strMealThumb: z.string(),
    strInstructions: z.string(),

    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strIngredient7: z.string().nullable(),
    strIngredient8: z.string().nullable(),

    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
    strMeasure7: z.string().nullable(),
    strMeasure8: z.string().nullable(),
});
