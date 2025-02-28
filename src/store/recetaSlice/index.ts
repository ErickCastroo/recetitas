import { StateCreator } from "zustand";
import { getCategorias, getRecetasByCategoria, getRecetaById } from "@/services/recetasServices";
import type { Categorias, BuscarReceta, Drinks, Drink, RecipeAPIResponse,  } from "@/types";
import { FavoritoSliceType } from "../favoritoSlice";

export type RecetasSliceType = {
  categorias: Categorias
  drinks: Drinks
  RecetaSeleccionada: RecipeAPIResponse
  modal: boolean
  fetchCategory: () => Promise<void>;
  buscarReceta: (buscarReceta: BuscarReceta) => Promise<void>
  seleccionarReceta: (id: Drink['idDrink']) => void
  closeModal: () => void
};

export const createRecetasSlice: StateCreator<RecetasSliceType & FavoritoSliceType, [], [], RecetasSliceType > = (set) => ({
  categorias: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  RecetaSeleccionada:{} as RecipeAPIResponse,
  modal: false,
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
  },

  seleccionarReceta: async (id) => {
    const RecetaSeleccionada = await getRecetaById(id);
    set({
      RecetaSeleccionada,
      modal: true
    })
  },

  closeModal: () => {
    set({
      modal: false,
      RecetaSeleccionada: {} as RecipeAPIResponse
    })
  }

});

