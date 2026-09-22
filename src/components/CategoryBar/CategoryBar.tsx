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
    <div className="w-full overflow-hidden border-b border-gray-200 bg-white">
      <div className="flex gap-2 overflow-x-auto px-4 py-2 md:gap-3 md:px-5">
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white md:text-sm"
        >
          <Menu size={16} />
          ALL CATEGORIES
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="shrink-0 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-800 transition hover:bg-gray-100 md:text-sm"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;
