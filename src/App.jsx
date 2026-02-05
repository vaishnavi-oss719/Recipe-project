// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import RecipeDetails from "./pages/Recipedetails";
// import Navbar from "./components/Navbar";
// import Wishlist from "./pages/Wishlist";

// function App() {
//   // const [wishlist, setWishlist] = useState([]);

//   // const toggleWishlist = (meal) => {
//   //   const exists = wishlist.find(
//   //     item => item.idMeal === meal.idMeal
//   //   );

//   //   if (exists) {
//   //     setWishlist(
//   //       wishlist.filter(item => item.idMeal !== meal.idMeal)
//   //     );
//   //   } else {
//   //     setWishlist([...wishlist, meal]);
//   //   }
//   // };

//   return (
// //     <BrowserRouter>
// //      <Navbar/>

// //       <Routes>
// //         {/* Auth pages */}
// //         <Route path="/" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />

// //         {/* Main pages */}

// //         <Route path="/home" element={<Home />} />

        
          
        
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// <BrowserRouter>   
//   <Navbar/>
// <Routes>
//   <Route path="/" element={<Login />} />
//   <Route path="/signup" element={<Signup />} />
//   <Route path="/home" element={<Home />} />

//   <Route
//     path="/recipe/:id"
//     element={
//       <RecipeDetails
//         wishlist={wishlist}
//         toggleWishlist={toggleWishlist}
//       />
//     }
//   />

//   <Route
//     path="/wishlist"
//     element={<Wishlist wishlist={wishlist} />}
//   />


// </Routes>
// </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";

function App() {
  // ✅ 1. wishlist STATE MUST BE HERE
  const [wishlist, setWishlist] = useState([]);

  // ✅ 2. toggle function
  const toggleWishlist = (meal) => {
    const exists = wishlist.some(
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
      {/* ✅ wishlist prop pass */}
      <Navbar wishlist={wishlist} />

      <Routes>
        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN */}
        <Route
  path="/home"
  element={
    <Home
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
    />
  }
/>


        {/* DETAILS */}
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetails
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* ✅ WISHLIST PAGE */}
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
