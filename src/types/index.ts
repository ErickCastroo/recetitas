import { z } from 'zod'

import { categoriaResSchema } from '../schemas/recetas-schemas'

export type categorias = z.infer<typeof categoriaResSchema>