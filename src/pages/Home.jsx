import AnimatedText from "../components/AnimatedText";
import EyeFollow from "../components/EyeFollow";
import Nav from "../components/Nav";
import RecipeCard from "../components/RecipeCard";
import useRecipes from "../hooks/useRecipes";

export default function Home() {
  const recipes = useRecipes(5);

  return (
    <>
      <main>
        <div className="mainWindow">
                  <Nav />
          <div className="topHalf">
            <EyeFollow />
          </div>
          <div>
            <AnimatedText>Halloween Recipes</AnimatedText>
            <div className="cloudBackground"></div>
            <div className="introText">
              <div className="cloudText">
                <h2>Celebrate Spooky Season</h2>
                <h3> With Some of the Best Halloween Recipes</h3>
              </div>
            
            <div className="recipes">
              <h3 id="latestRecipes">Latest Recipes</h3>
              {/* {recipes.map(recipe => (
                <li key={recipe.id}>{recipe.Title} - {recipe.Description} by: {recipe.Name}</li>
              ))} */}
              <div className="recipeList">
                {recipes.map (recipe => (
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
            </div>
            <div className="cloudBackgroundTwo"></div>
            <div className="bottomHalf"></div>
          </div>
        </div>
      </main>
    </>
  );
}
