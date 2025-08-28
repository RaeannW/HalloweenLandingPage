import AnimatedText from "../components/AnimatedText";
import EyeFollow from "../components/EyeFollow";
import Nav from "../components/Nav";
import LatestRecipes from "../components/LatestRecipes";

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
            <AnimatedText>Halloween Recipes</AnimatedText>
            <div className="cloudBackground"></div>
            <div className="introText">
              <div className="cloudText">
                <h2>Celebrate Spooky Season</h2>
                <h3> With Some of the Best Halloween Recipes</h3>
              </div>
              <LatestRecipes />
            </div>
            <div className="cloudBackgroundTwo"></div>
            <div className="bottomHalf"></div>
          </div>
        </div>
      </main>
    </>
  );
}
