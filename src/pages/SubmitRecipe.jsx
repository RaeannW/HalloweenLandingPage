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
            <div className="mainWindowText" id="mainForm">
              <svg viewBox="0 100 500 80">
                <path id="curve" d="M50,150 L450,150" />
                <text>
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Submit Recipe
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <RecipeForm />
          <div className="bottomHalf"></div>
        </div>
      </main>
    </>
  );
}
