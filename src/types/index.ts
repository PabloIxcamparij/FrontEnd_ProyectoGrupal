import { z } from "zod";
import { CategoriesAPIResponseSchema, RecipeAPIResponse, RecepiesAPIResponse, SearchFilterSchema, RecipeAPIResponseSchema} from "../schemas/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type Recipe = z.infer<typeof RecipeAPIResponse>
export type Recipies = z.infer<typeof RecepiesAPIResponse>

export type RecipeDetails = z.infer<typeof RecipeAPIResponseSchema>
