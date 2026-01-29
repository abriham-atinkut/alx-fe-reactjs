import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  console.log("Favorites IDs:", favorites);
  
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // 🔥 IMPORTANT

  if (favoriteRecipes.length === 0) {
    return <p>No favorite recipes yet</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/${recipe.id}`}>{recipe.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
