import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p className="text-white">Loading...</p>;

  return (
 
      <div className="min-h-screen bg-[#0f0f1c] text-white p-6">

  {/* BACK BUTTON */}
  <button
    onClick={() => navigate(-1)}
    className="mb-6 flex items-center gap-2 text-gray-300 hover:text-red-400"
  >
    ← Back
  </button>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-[420px] object-cover rounded-2xl"
        />

        {/* DETAILS */}
        <div className="flex flex-col gap-4">

          <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
          <p className="text-red-400">{meal.strCategory}</p>

          <p className="text-gray-300 leading-relaxed">
            {meal.strInstructions}
          </p>

          {/* QUANTITY + ADD TO CART
          <div className="flex items-center gap-4 mt-4">

            <div className="flex items-center border rounded-full px-3 py-1">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 text-xl"
              >−</button>

              <span className="px-4">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 text-xl"
              >+</button>
            </div> */}
<div className="flex items-center justify-between mt-4">
            <button className="bg-red-500 text-black px-4 py-1.5 rounded-lg text-sm cursor-pointer">
              Wishlist
            </button>

          </div>

          {/* WATCH VIDEO */}
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 bg-white text-black px-5 py-2 rounded-full w-fit"
            >
              ▶ Watch Video
            </a>
          )}
          </div>

        </div>
      </div>
    
  );
}
