import AnimatedText from "../components/AnimatedText";
import Nav from "../components/Nav";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard";

export default function Categories() {
  const recipes = useRecipes();
  return (
    <>
      <main>
        <div className="mainWindow">
          <div>
            <Nav />
          </div>
          <div className="topHalf">
            <AnimatedText>Categories</AnimatedText>
          </div>
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
          <div className="bottomHalf"></div>
        </div>
      </main>
    </>
  );
}
