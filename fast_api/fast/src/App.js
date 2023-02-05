import FoodList from "./components/FoodList.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>냉장고 음식</h1>
      <Routes>
        <Route path="/" element={<FoodList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
