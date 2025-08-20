import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from './pages/Home';
import SubmitRecipe from './pages/SubmitRecipe';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submitRecipe" element={<SubmitRecipe />} />
      </Routes>
    </Router>
  );
}
