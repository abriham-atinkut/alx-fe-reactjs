import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SearchBar />
            <AddRecipeForm />
            <RecipeList />
          </>
        }
      />
      <Route path="/:recipeId" element={<RecipeDetails />} />
      <Route path="/favorites" element={<FavoritesList />} />
    </Routes>
  );
}

export default App;
