import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Navbar from "./components/Navbar";

function App() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (meal) => {
    const exists = wishlist.find(
      item => item.idMeal === meal.idMeal
    );

    if (exists) {
      setWishlist(
        wishlist.filter(item => item.idMeal !== meal.idMeal)
      );
    } else {
      setWishlist([...wishlist, meal]);
    }
  };

  return (
    <BrowserRouter>
      {/* SINGLE NAVBAR ONLY */}
      <Navbar wishlist={wishlist} />

      <Routes>
        {/* Auth pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main pages */}
        <Route path="/home" element={<Home />} />

        <Route
          path="/recipe/:id"
          element={
            <RecipeDetails
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
