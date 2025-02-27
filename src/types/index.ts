import { z } from 'zod'

import { categoriaResSchema, buscarReceta, drinksApiSchema, drinkApiSchema } from '../schemas/recetas-schemas'

export type Categorias = z.infer<typeof categoriaResSchema>
export type BuscarReceta = z.infer<typeof buscarReceta>
export type Drinks = z.infer<typeof drinksApiSchema>
export type Drink = z.infer<typeof drinkApiSchema>

