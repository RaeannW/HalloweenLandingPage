import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config.js";

export default function RecipeForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    Ingredients: [],
    Steps: [],
    Name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "recipes"), {
      ...form,
      createdAt: serverTimestamp(),
    });
    setForm({
      Title: "",
      Category: "",
      Description: "",
      Ingredients: [],
      Steps: [],
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
            <textarea
              id="ingredients"
              name="Ingredients"
              rows="4"
              onChange={handleChange}
              value={form.Ingredients}
            ></textarea>

            <label htmlFor="Steps">Steps:</label>
            <textarea
              id="steps"
              name="Steps"
              rows="8"
              onChange={handleChange}
              value={form.Steps}
            ></textarea>

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
