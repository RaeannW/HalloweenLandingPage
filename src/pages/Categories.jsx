import AnimatedText from "../components/AnimatedText";
import Nav from "../components/Nav";
import LatestRecipes from "../components/LatestRecipes";

export default function Categories() {



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

          <LatestRecipes />

          <div className="bottomHalf"></div>
        </div>
      </main>
    </>
  );
}
