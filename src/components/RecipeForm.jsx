import { useState } from "react";

export default function RecipeForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpen = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {!isFormOpen && <button onClick={handleOpen}>Submit Recipe</button>}

      {isFormOpen && (
        <div id="recipeFormWrapper">
          <div className="formTop">
            <div className="formColOne">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            </div>
            <div className="formColTwo">
            <button onClick={handleClose} className="closeFormButton">X</button>
            </div>
          </div>
          <form id="recipeForm">
            <label htmlFor="recipeName">Recipe Title:</label>
            <input type="text" id="recipeName" name="recipeName" />

            <fieldset>
              <legend>Recipe Category:</legend>

              <input type="radio" id="desert" name="category" value="desert" />
              <label htmlFor="desert">Desert</label>
              <br />

              <input type="radio" id="drink" name="category" value="drink" />
              <label htmlFor="drink">Drink</label>
              <br />

              <input
                type="radio"
                id="appetizer"
                name="category"
                value="appetizer"
              />
              <label htmlFor="appetizer">Appetizer</label>
              <br />
            </fieldset>

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4"></textarea>

            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients" name="ingredients" rows="4"></textarea>

            <label htmlFor="instructions">Instructions:</label>
            <textarea id="instructions" name="instructions" rows="8"></textarea>

            <label htmlFor="recipeOwner">Your Name:</label>
            <input type="text" id="recipeOwner" name="recipeOwner" />

            <button
              className="wandButton"
              type="submit"
              form="recipeForm"
              value="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
