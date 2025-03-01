import { StateCreator } from 'zustand'
import { toast } from 'sonner'
import { RecipeAPIResponse } from '@/types'
import { createRecetasSlice, RecetasSliceType } from '@/store/recetaSlice'


export type FavoritoSliceType = {
  favoritos: RecipeAPIResponse[]
  handleClickFavorite: (receta: RecipeAPIResponse) => void
  favoritoExiste: (id: RecipeAPIResponse['idDrink']) => boolean
  loadFromStoage: () => void
}

export const createFavoriteSlice: StateCreator<FavoritoSliceType & RecetasSliceType, [], [], FavoritoSliceType> = (set, get, api) => ({
  favoritos: [],

  handleClickFavorite: (receta) => {
    if (get().favoritos.some(favorito => favorito.idDrink === receta.idDrink)) {
      set((state) => ({
        favoritos: state.favoritos.filter(favorito => favorito.idDrink !== receta.idDrink)
      }))
      toast.error('Recipe deleted from favorites')
    } else {
      set((state) => ({
        favoritos: [...state.favoritos, receta]
      }))
      toast.success('Recipe saved in favorites')
    }

    createRecetasSlice(set, get, api).closeModal()
    localStorage.setItem('favoritos', JSON.stringify(get().favoritos))
  },
  favoritoExiste: (id) => {
    return get().favoritos.some(favorito => favorito.idDrink === id)
  },
  loadFromStoage: () => {
    const favoritosStorage = localStorage.getItem('favoritos')
    if (favoritosStorage) {
      set({
        favoritos: JSON.parse(favoritosStorage)
      })
    }
  }
})

