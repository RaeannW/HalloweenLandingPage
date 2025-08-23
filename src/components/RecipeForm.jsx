import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config.js";

export default function RecipeForm() {
  const [isFormOpen, setIsFormOpen] = useState();

  const handleOpen = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const [form, setForm] = useState({
    Title: "",
    Category: "",
    Description: "",
    Ingredients: [""],
    Steps: [""],
    Name: "",
  });

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...form.Ingredients];
    newIngredients[index] = value;

    setForm({
      ...form,
      Ingredients: newIngredients,
    });
  };

  const addIngredient = () => {
    setForm({
      ...form,
      Ingredients: [...form.Ingredients, ""],
    });
  };

  const handleStepsChange = (index, value) => {
    const newSteps = [...form.Steps];
    newSteps[index] = value;

    setForm({
      ...form,
      Steps: newSteps,
    });
  };

  const addStep = () => {
    setForm({
      ...form,
      Steps: [...form.Steps, ""],
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanedIngredients = form.Ingredients.filter(
      (ing) => ing.trim() !== ""
    );
    const cleanedSteps = form.Steps.filter((step) => step.trim() !== "");
    await addDoc(collection(db, "recipes"), {
      ...form,
      createdAt: serverTimestamp(),
    });
    setForm({
      Title: "",
      Category: "",
      Description: "",
      Ingredients: [""],
      Steps: [""],
      Name: "",
    });
  };

  return (
    <>
      {!isFormOpen && (
        <button className="orangeButton" onClick={handleOpen}>
          Submit Recipe
        </button>
      )}

      {isFormOpen && (
        <div id="recipeFormWrapper">
          <div className="formTop">
            <div className="formColOne">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="formColTwo">
              <button onClick={handleClose} className="closeFormButton">
                X
              </button>
            </div>
          </div>
          <form id="recipeForm" onSubmit={handleSubmit}>
            <label htmlFor="Title">Recipe Title:</label>
            <input
              type="text"
              id="title"
              name="Title"
              onChange={handleChange}
              value={form.Title}
            />

            <fieldset>
              <legend>Recipe Category:</legend>

              <input
                type="radio"
                id="Desert"
                name="Category"
                value="Desert"
                checked={form.Category === "Desert"}
                onChange={(e) => setForm({ ...form, Category: e.target.value })}
              />
              <label htmlFor="Desert">Desert</label>
              <br />

              <input
                type="radio"
                id="Drink"
                name="Category"
                value="Drink"
                checked={form.Category === "Drink"}
                onChange={(e) => setForm({ ...form, Category: e.target.value })}
              />
              <label htmlFor="Drink">Drink</label>
              <br />

              <input
                type="radio"
                id="Appetizer"
                name="Category"
                value="Appetizer"
                checked={form.Category === "Appetizer"}
                onChange={(e) => setForm({ ...form, Category: e.target.value })}
              />
              <label htmlFor="Appetizer">Appetizer</label>
              <br />

              <input
                type="radio"
                id="Meal"
                name="Category"
                value="Meal"
                checked={form.Category === "Meal"}
                onChange={(e) => setForm({ ...form, Category: e.target.value })}
              />
              <label htmlFor="Meal">Meal</label>
              <br />
            </fieldset>

            <label htmlFor="Description">Description:</label>
            <textarea
              id="description"
              name="Description"
              rows="4"
              onChange={handleChange}
              value={form.Description}
            ></textarea>

            <label htmlFor="Ingredients">Ingredients:</label>
            {form.Ingredients.map((ingredient, index) => (
              <input
                type="text"
                key={index}
                id="ingredients"
                name="Ingredients"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required={index === 0}
                placeholder={`Ingredient ${index + 1}`}
              ></input>
            ))}
            <button type="button" onClick={addIngredient}>
              Add Ingredient
            </button>

            <label htmlFor="Steps">Steps:</label>
            {form.Steps.map((step, index) => (
              <input
                type="text"
                key={index}
                id="steps"
                name="Steps"
                onChange={(e) => handleStepsChange(index, e.target.value)}
                value={step}
                required={index === 0}
                placeholder={`Step ${index + 1}`}
              ></input>
            ))}
            <button type="button" onClick={addStep}>
              Add Step
            </button>

            <label htmlFor="Name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="Name"
              onChange={handleChange}
              value={form.Name}
            />

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
