import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import AnimatedText from "../components/AnimatedText";
import EyeFollow from "../components/EyeFollow";
import Nav from "../components/Nav";
import { db } from "../firebase.config";
import { useState, useEffect } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchLatestRecipes = async () => {
      const q = query(
        collection(db, "recipes"),
        // orderBy("createdAt"),
        limit(5)
      );

      const querySnapShot = await getDocs(q);
      const recipeList = querySnapShot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRecipes(recipeList);
    };

    fetchLatestRecipes();
  }, [])
  


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
            </div>
            <div className="recipes" id="latestRecipes">
              <h2>Latest Recipes</h2>
              {recipes.map(recipe => (
                <li key={recipe.id}>{recipe.Title} - {recipe.Description} by: {recipe.Name}</li>
              ))}
              {/* <p>One</p>
              <p>Two</p>
              <p>Three</p>
              <p>Four</p>
              <p>Five</p>
              <p>Six</p> */}
            </div>
            <div className="cloudBackgroundTwo"></div>
            <div className="bottomHalf"></div>
          </div>
        </div>
      </main>
    </>
  );
}
