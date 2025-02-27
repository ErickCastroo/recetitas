import { StateCreator } from 'zustand'
import { RecipeAPIResponse } from '@/types'

export type FavoritoSliceType = {
  favoritos: RecipeAPIResponse[]
}

export const createFavoriteSlice: StateCreator<FavoritoSliceType> = (set) => ({
  favoritos: [],
})
