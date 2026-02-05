// import { useEffect, useState } from "react";

// import { useNavigate, useParams } from "react-router-dom";

// export default function RecipeDetails() {
//   const { id } = useParams();
//   const [meal, setMeal] = useState(null);
//   const [qty, setQty] = useState(1);
//   const navigate = useNavigate();
//   const ingredients = [];

// for (let i = 1; i <= 20; i++) {
//   const ingredient = meal[`strIngredient${i}`];
//   const measure = meal[`strMeasure${i}`];

//   if (ingredient && ingredient.trim() !== "") {
//     ingredients.push(`${ingredient} - ${measure}`);
//   }
// }

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       .then(res => res.json())
//       .then(data => setMeal(data.meals[0]));
//   }, [id]);

//   if (!meal) return <p className="text-white">Loading...</p>;

//   return (
 
//       <div className="min-h-screen bg-[#0f0f1c] text-white p-6">

//   {/* BACK BUTTON */}
//   <button
//     onClick={() => navigate(-1)}
//     className="mb-6 flex items-center gap-2 text-gray-300 hover:text-red-400"
//   >
//     ← Back
//   </button>
//   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* IMAGE */}
//         <img
//           src={meal.strMealThumb}
//           alt={meal.strMeal}
//           className="w-full h-[420px] object-cover rounded-2xl"
//         />

//         {/* DETAILS */}
//         <div className="flex flex-col gap-4">

//           <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
//           <p className="text-red-400">{meal.strCategory}</p>

//           <div>
//     <h2 className="text-lg font-semibold mb-2">Instructions</h2>
//     <ul className="list-decimal list-inside text-gray-300 space-y-2">
//       {instructions.map((step, index) => (
//         <li key={index}>{step}</li>
//       ))}
//     </ul>
//   </div>

//           {/* QUANTITY + ADD TO CART
//           <div className="flex items-center gap-4 mt-4">

//             <div className="flex items-center border rounded-full px-3 py-1">
//               <button
//                 onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
//                 className="px-3 text-xl"
//               >−</button>

//               <span className="px-4">{qty}</span>

//               <button
//                 onClick={() => setQty(qty + 1)}
//                 className="px-3 text-xl"
//               >+</button>
//             </div> */}
// <div className="flex items-center justify-between mt-4">
//             <button className="bg-red-500 text-black px-4 py-1.5 rounded-lg text-sm cursor-pointer">
//               Wishlist
//             </button>

//           </div>

//           {/* WATCH VIDEO */}
//           {meal.strYoutube && (
//             <a
//               href={meal.strYoutube}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-block mt-3 bg-white text-black px-5 py-2 rounded-full w-fit"
//             >
//               ▶ Watch Video
//             </a>
//           )}
//           </div>

//         </div>
//       </div>
    
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  // ⛔ IMPORTANT: meal illatti inga stop
  if (!meal) {
    return <p className="text-white p-6">Loading...</p>;
  }

  // ✅ INGREDIENTS BUILD
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} ${measure}`);
    }
  }

  // ✅ INSTRUCTIONS BULLETS
  const instructions = meal.strInstructions
    .split(".")
    .map((step) => step.trim())
    .filter((step) => step.length > 0);

  return (
    <div className="min-h-screen bg-[#0f0f1c] text-white p-6">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-300 hover:text-red-400"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT : IMAGE */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-[420px] object-cover rounded-2xl"
        />

        {/* RIGHT : CONTENT */}
        <div className="flex flex-col gap-6">

          <div>
            <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
            <p className="text-red-400 mt-1">{meal.strCategory}</p>
          </div>

          {/* INGREDIENTS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* INSTRUCTIONS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* ACTION BUTTONS */}
           <div className="flex items-center gap-4 mt-4">
            {/* <button className="bg-red-500 text-black px-4 py-2 rounded-full text-sm">
              ♡ Wishlist
            </button> */} 

            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full text-sm"
              >
                ▶ Watch Video
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
