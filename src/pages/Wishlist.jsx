import { Link } from "react-router-dom";

export default function Wishlist({ wishlist }) {
  return (
    <div className="min-h-screen bg-[#0f0f1c] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-400">No recipes in wishlist</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map(meal => (
            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
              <div className="bg-[#1a1a2e] rounded-xl p-3 hover:scale-105 transition">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="rounded-lg mb-2"
                />
                <h2 className="font-semibold">{meal.strMeal}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
