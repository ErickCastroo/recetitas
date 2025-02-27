import axios from 'axios'

import { categoriaResSchema, drinksApiSchema } from '@/schemas/recetas-schemas'

import { BuscarReceta } from '@/types'

export const getCategorias = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

  const { data } = await axios.get(url)
  const result = categoriaResSchema.safeParse(data)

  if (result.success) {
    return result.data
  }
  else {
    console.log('error' + result.error)
  }
}

export async function getRecetasByCategoria(filtro: BuscarReceta) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filtro.categoria}&i=${filtro.ingrediente}`

  const { data } = await axios.get(url)
  const result = drinksApiSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
  else {
    console.log('error' + result.error)
  }
}