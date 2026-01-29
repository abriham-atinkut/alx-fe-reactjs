import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h1>
            <Link to={`/${recipe.id}`}>{recipe.title}</Link>
          </h1>

          {/* <p>{recipe.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;