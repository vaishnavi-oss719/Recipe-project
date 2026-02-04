import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/Searchbar";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchMeals();
    fetchCategories();
  }, []);

  const fetchMeals = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await res.json();
    setMeals(data.meals);
  };

  const fetchCategories = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await res.json();
    setCategories(data.categories);
  };

  const searchMeals = async (value) => {
    setSearch(value);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };

  const filterByCategory = async (category) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await res.json();
    setMeals(data.meals);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] p-4">
   

      <div className="my-4">
        <SearchBar value={search} onChange={searchMeals} />
      </div>

      <CategoryFilter
        categories={categories}
        onSelect={filterByCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
  {meals?.map((meal) => (
    <RecipeCard key={meal.idMeal} meal={meal} />
  ))}
  
</div>
</div>
  );
}
