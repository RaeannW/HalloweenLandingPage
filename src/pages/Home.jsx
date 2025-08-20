import AnimatedText from "../components/AnimatedText";
import EyeFollow from "../components/EyeFollow";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <main>
        <div className="mainWindow">
                  <Nav />
          <div className="topHalf">
            <EyeFollow />
          </div>
          <div>
            <AnimatedText />
            <div className="cloudBackground"></div>
            <div className="introText">
              <div className="cloudText">
                <h2>Celebrate Spooky Season</h2>
                <h3> With Some of the Best Halloween Recipes</h3>
              </div>
            </div>
            <div className="recipes" id="latestRecipes">
              <h2>Latest Recipes</h2>
              <p>One</p>
              <p>Two</p>
              <p>Three</p>
              <p>Four</p>
              <p>Five</p>
              <p>Six</p>
            </div>
            <div className="cloudBackgroundTwo"></div>
            <div className="bottomHalf"></div>
          </div>
        </div>
      </main>
    </>
  );
}
