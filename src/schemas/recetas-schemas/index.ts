import { z } from 'zod'

export const categoriaResSchema = z.object({
  drinks: z.array(z.object({
    strCategory: z.string()
  }))
})