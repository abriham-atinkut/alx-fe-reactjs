import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filteredRecipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h1>
            <Link to={`/${recipe.id}`}>{recipe.title}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
