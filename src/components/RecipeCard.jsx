import desert from "../assets/desert.svg";
import drink from "../assets/drink.svg";
import appetizer from "../assets/appetizer.svg";
import meal from "../assets/meal.svg";

export default function RecipeCard({
  title,
  category,
  description,
  ingredients,
  steps,
  name,
  createdAt,
}) {
  //   console.log(category);
  const formattedDate = createdAt?.toDate
    ? createdAt.toDate().toLocaleDateString()
    : "";

  const categoryImages = {
    Desert: <img src={desert} />,
    Drink: <img src={drink} />,
    Appetizer: <img src={appetizer} />,
    Meal: <img src={meal} />,
  };

  return (
    <div className="recipeCardContainer">
      <div className="recipeCardTab">
        <span className="cardCategory">{category}</span>
      </div>
      <div className="recipeCard">
        <div className="recipeCardTop">
          <div className="cardCategoryImage">
            {categoryImages[category] || null}
          </div>
          <div className="cardHeaderInfo">
            <h4 className="cardTitle">Recipe: {title}</h4>
            <p className="titleDate">
              Submitted By: {name}
              {formattedDate}
            </p>
          </div>
        </div>
        <p className="cardDescription">Description: {description}</p>
        <p>
          Ingredients:
          {Array.isArray(ingredients) ? (
            <ul className="cardIngredients">
              {ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          ) : (
            <p className="cardIngredients">{ingredients}</p>
          )}
        </p>
        <p>
          Steps:
          {Array.isArray(steps) ? (
            <ul className="cardSteps">
              Ingredients:
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          ) : (
            <p className="cardSteps">{steps}</p>
          )}
        </p>
      </div>
    </div>
  );
}
