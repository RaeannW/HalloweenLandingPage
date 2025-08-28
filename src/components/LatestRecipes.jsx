import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

export default function LatestRecipes({ limitCount = 6 }) {
  const recipes = useRecipes({ limitCount });
  return (
    <div className="recipes">
      <h3 id="latestRecipes">Latest Recipes</h3>
      {/* {recipes.map(recipe => (
                <li key={recipe.id}>{recipe.Title} - {recipe.Description} by: {recipe.Name}</li>
              ))} */}
      <div className="recipeList">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.Title}
            category={recipe.Category}
            description={recipe.Description}
            ingredients={recipe.Ingredients}
            steps={recipe.Steps}
            name={recipe.Name}
            createdAt={recipe.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
