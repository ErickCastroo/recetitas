import axios from 'axios'

import { categoriaResSchema } from '@/schemas/recetas-schemas'

export const getCategorias = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

  const { data } = await axios.get(url)
  const result = categoriaResSchema.safeParse(data)
  console.log(result)

  if (result.success) {
    return result.data.drinks
  }
  else {
    console.log('error' + result.error)
  }

}