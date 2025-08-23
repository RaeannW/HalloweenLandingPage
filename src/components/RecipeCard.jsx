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
    <div className="recipeCard">
              <h3 className="cardTitle">{title}</h3>
      {categoryImages[category] || null}
      <span className="cardCategory">{category}</span>
      <p className="cardDescription">{description}</p>
      <p className="cardIngredients">{ingredients}</p>
      <p className="cardSteps">{steps}</p>
      <span className="cardAuthor">By: {name}</span>
      <span className="createdAt"> {formattedDate}</span>
    </div>
  );
}
