import { z } from 'zod'

export const categoriaResSchema = z.object({
  drinks: z.array(z.object({
    strCategory: z.string()
  }))
})

export const buscarReceta = z.object({
  ingrediente: z.string(),
  categoria: z.string()
})

export const drinkApiSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string()
})

export const drinksApiSchema = z.object({
  drinks: z.array(drinkApiSchema)
})
