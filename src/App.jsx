import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SubmitRecipe from './pages/SubmitRecipe';
import Categories from "./pages/Categories";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submitRecipe" element={<SubmitRecipe />} />
        <Route path="/categories" element={<Categories/>} />
      </Routes>
    </Router>
  );
}
