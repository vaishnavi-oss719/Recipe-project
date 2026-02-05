// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function RecipeCard({ meal }) {
//   const [wish, setWish] = useState(false);

//   return (
//     <div className="bg-[#151527] rounded-2xl p-4 text-white shadow-md">

//       {/* Image */}
//       <img
//         src={meal.strMealThumb}
//         alt={meal.strMeal}
//         className="w-full h-50 object-cover rounded-xl"
//       />

//       {/* Info */}
//       <h3 className="mt-3 text-lg font-semibold">{meal.strMeal}</h3>
//       <p className="text-gray-400 text-sm">{meal.strCategory}</p>

//       {/* Buttons */}
//       <div className="flex justify-between items-center mt-4">

//         {/* Wishlist */}
//         <button
//           onClick={() => setWish(!wish)}
//           className="text-xl"
//         >
//           {wish ? "❤️" : "🤍"}
//         </button>
// {/* 
//         {/* Add */}
//         {/* <button className="bg-red-500 px-4 py-1 rounded-full text-sm">
//           Add to cart
//         </button> */} 

//         {/* View More */}
//         <Link
//           to={`/recipe/${meal.idMeal}`}
//           className="text-sm text-red-400 underline"
//         >
//           View More
//         </Link>

//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";

export default function RecipeCard({ meal, wishlist, toggleWishlist }) {

  const isWishlisted = wishlist.some(
    item => item.idMeal === meal.idMeal
  );

  return (
    <div className="bg-[#151527] rounded-2xl p-4 text-white shadow-md">

      {/* Image */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-50 object-cover rounded-xl"
      />

      {/* Info */}
      <h3 className="mt-3 text-lg font-semibold">{meal.strMeal}</h3>
      <p className="text-gray-400 text-sm">{meal.strCategory}</p>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">

        {/* ❤️ Wishlist */}
        <button
          onClick={() => toggleWishlist(meal)}
          className="text-xl"
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>

        {/* View More */}
        <Link
          to={`/recipe/${meal.idMeal}`}
          className="text-sm text-red-400 underline"
        >
          View More
        </Link>

      </div>
    </div>
  );
}
