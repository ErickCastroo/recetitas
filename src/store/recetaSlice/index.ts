import { StateCreator } from "zustand";
import { getCategorias } from "@/services/recetasServices";
import type { categorias } from "@/types";

export type RecetasSliceType = {
  categorias: categorias;
  fetchCategory: () => Promise<void>;
};

export const createRecetasSlice: StateCreator<RecetasSliceType> = (set) => ({
  categorias: {
    drinks: [], // Estado inicial válido
  },
  fetchCategory: async () => {
    const drinks = await getCategorias();

    // Aseguramos que el estado siga la estructura de categorias
    set({ categorias: { drinks: drinks ?? [] } });
  },
});
