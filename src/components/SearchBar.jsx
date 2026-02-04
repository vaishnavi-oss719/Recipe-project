export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search From Here"
      className="w-full p-3 rounded-full bg-[#1c1c2e] text-white outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
