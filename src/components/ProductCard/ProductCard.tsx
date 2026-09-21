import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useWishlist } from "../../hooks/useWishlist";

interface ProductCardProps {
  id: string;
  image: string;
  price: number;
  category: string;
  title: string;
  location: string;
  date: string;
}

function ProductCard({
  id,
  image,
  price,
  category,
  title,
  location,
  date,
}: ProductCardProps) {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(id);

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="relative h-52 w-full bg-gray-100">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        <button
          type="button"
          onClick={async (event) => {
            event.stopPropagation();

            if (!user) {
              return;
            }

            try {
              await toggleWishlist(id);
            } catch (error) {
              console.error("Wishlist update failed:", error);
            }
          }}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
        >
          <Heart size={23} fill={wishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900">
          ₹ {price.toLocaleString("en-IN")}
        </h2>

        <p className="mt-2 text-sm text-gray-500">{category}</p>

        <p className="mt-2 truncate text-base text-gray-800">{title}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{location}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
