import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createRecetasSlice, RecetasSliceType } from '../recetaSlice'

export const useAppStore = create<RecetasSliceType>()(devtools((...a) => ({
  ...createRecetasSlice(...a)
})))