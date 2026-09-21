import { Menu } from "lucide-react";

const categories = [
  "Cars",
  "Motorcycles",
  "Mobile Phones",
  "For Sale: Houses & Apartments",
  "For Rent: Houses & Apartments",
  "Beds-Wardrobes",
  "TVs, Video-Audio",
];

function CategoryBar() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex gap-3 overflow-x-auto px-5 py-3">
        {/* All Categories */}
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white"
        >
          <Menu size={20} />
          ALL CATEGORIES
        </button>

        {/* Categories */}
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="shrink-0 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;