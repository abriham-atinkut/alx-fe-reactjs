import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const id = Number(recipeId);
  // console.log(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id),
  );

  console.log(recipe);
  return (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={id} />
    </div>
  );
};

export default RecipeDetails;
