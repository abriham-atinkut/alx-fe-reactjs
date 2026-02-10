import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTitle("");
    setIngredient("");
    setSteps("");
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="p-6 rounded shadow-lg">
          <h2 className="text-2xl mb-4 text-center font-bold">Add Recipe</h2>
          <div className="mb-4">
            <label className="block">Title:</label>
            <input
              type="text"
              className="border-2 w-full focus:border-green-400 focus:outline-none rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block">Ingredients:</label>
            <textarea
              className="border-2  w-full focus:border-green-400 focus:outline-none rounded-md"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block">Steps:</label>
            <textarea
              className="border-2  w-full focus:border-green-400 focus:outline-none rounded-md"
              value={steps}
              onChange={(e) => setPreparation(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-blue-600 hover:bg-blue-500 font-semibold rounded-md  py-2 px-4 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipeForm;
