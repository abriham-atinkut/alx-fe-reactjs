import create from "zustand";

const useRecipeStore = create((set) => ({
  recipens: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipens: [...state.recipens, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }),
}));
