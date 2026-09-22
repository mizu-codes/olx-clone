import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useWishlist } from "../../hooks/useWishlist";
import { toast } from "../../utils/toast";

interface ProductCardProps {
  id: string;
  image: string;
  price: number;
  category: string;
  title: string;
  location: string;
  date: string;
  onLoginRequired?: () => void;
}

function ProductCard({
  id,
  image,
  price,
  category,
  title,
  location,
  date,
  onLoginRequired,
}: ProductCardProps) {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(id);

  const handleWishlistToggle = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (!user) {
      onLoginRequired?.();
      return;
    }

    const wasWishlisted = wishlisted;

    try {
      await toggleWishlist(id);

      toast.success(
        wasWishlisted
          ? "Removed from your wishlist."
          : "Added to your wishlist.",
      );
    } catch (error) {
      console.error("Wishlist update failed:", error);
      toast.error("Couldn't update your wishlist. Please try again.");
    }
  };

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="relative h-40 w-full bg-gray-100 sm:h-44">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        <button
          type="button"
          onClick={handleWishlistToggle}
          className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
        >
          <Heart size={19} fill={wishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-3">
        <h2 className="text-lg font-bold text-gray-900">
          ₹ {price.toLocaleString("en-IN")}
        </h2>

        <p className="mt-1 text-sm text-gray-500">{category}</p>

        <p className="mt-1 truncate text-sm text-gray-800">{title}</p>

        <div className="mt-2 flex items-center justify-between gap-2 text-xs text-gray-500">
          <span className="truncate">{location}</span>
          <span className="shrink-0">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
