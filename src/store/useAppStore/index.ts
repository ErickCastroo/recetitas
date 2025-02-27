import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createRecetasSlice, RecetasSliceType } from '@/store/recetaSlice'

import { createFavoriteSlice, FavoritoSliceType } from '@/store/favoritoSlice'

export const useAppStore = create<RecetasSliceType & FavoritoSliceType>()(devtools((...a) => ({
  ...createRecetasSlice(...a),
  ...createFavoriteSlice(...a)
})))

