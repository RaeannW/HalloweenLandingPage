import { useEffect, useState } from "react";
import { collection, query, getDocs, limit } from "firebase/firestore";
import { db } from "../firebase.config.js";

export default function useRecipes(limitCount) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
        let q = collection(db, "recipes");

        if (limitCount) {
            q = query(q, limit(limitCount))
        }
        const snapshot = await getDocs(q);
        const recipeList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setRecipes(recipeList)
    };

    fetchRecipes();

  },[limitCount])

  return recipes;
}
