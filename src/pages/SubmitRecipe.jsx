import AnimatedText from "../components/AnimatedText";
import Nav from "../components/Nav";
import RecipeForm from "../components/RecipeForm";

export default function SubmitRecipe() {
  return (
    <>
      <main>
        <div className="mainWindow">
          <div>
            <Nav />
          </div>
          <div className="topHalf">
            <AnimatedText>Submit Recipe</AnimatedText>
          </div>
          <RecipeForm />
          <div className="bottomHalf"></div>
        </div>
      </main>
    </>
  );
}
