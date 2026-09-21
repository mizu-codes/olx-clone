import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  price: string;
  category: string;
  title: string;
  location: string;
  date: string;
}

function ProductCard({
  image,
  price,
  category,
  title,
  location,
  date,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md">
      {/* Image */}
      <div className="relative h-52 w-full bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
        >
          <Heart size={23} />
        </button>
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900">
          ₹ {price}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {category}
        </p>

        <p className="mt-2 truncate text-base text-gray-800">
          {title}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{location}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;