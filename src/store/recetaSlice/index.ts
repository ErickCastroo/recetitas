import { StateCreator } from "zustand";
import { getCategorias, getRecetasByCategoria } from "@/services/recetasServices";
import type { Categorias, BuscarReceta, Drinks } from "@/types";

export type RecetasSliceType = {
  categorias: Categorias
  drinks: Drinks
  fetchCategory: () => Promise<void>;
  buscarReceta: (buscarReceta: BuscarReceta) => Promise<void>
};

export const createRecetasSlice: StateCreator<RecetasSliceType> = (set) => ({
  categorias: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  fetchCategory: async () => {
    const categorias = await getCategorias()
    if(!categorias)
    {
      set(
        {
          categorias: { drinks: [] }
        }
      )
      return
    }
    set({
      categorias
    })
  },

  buscarReceta: async (filtro) => {
    const drinks = await getRecetasByCategoria(filtro);
    if(!drinks) {
      set({
        drinks: { drinks: [] }
      })
      return
    }
    set({
      drinks
    })

  }
});

