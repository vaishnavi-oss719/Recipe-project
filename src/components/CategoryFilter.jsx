export default function CategoryFilter({ categories, onSelect }) {
  return (
    <div className="flex gap-3 overflow-x-auto py-3">
      {categories.map((cat) => (
        <button
          key={cat.idCategory}
          onClick={() => onSelect(cat.strCategory)}
          className="px-4 py-2 bg-[#1c1c2e] text-white rounded-lg whitespace-nowrap"
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}
