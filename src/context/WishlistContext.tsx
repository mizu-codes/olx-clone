import { createContext } from "react";

interface WishlistContextType {
  wishlistIds: string[];
  toggleWishlist: (productId: string) => Promise<void>;
  isWishlisted: (productId: string) => boolean;
  loading: boolean;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);
