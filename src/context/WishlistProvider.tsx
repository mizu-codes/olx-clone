import { useEffect, useState, type ReactNode } from "react";

import { useAuth } from "../hooks/useAuth";
import {
  addToWishlist,
  getWishlistProductIds,
  removeFromWishlist,
} from "../services/WishlistService";

import { WishlistContext } from "./WishlistContext";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = async () => {
      setLoading(true);

      if (!user) {
        setWishlistIds([]);
        setLoading(false);
        return;
      }

      try {
        const ids = await getWishlistProductIds(user.uid);
        setWishlistIds(ids);
      } catch (error) {
        console.error("Failed to load wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, [user]);

  const toggleWishlist = async (productId: string) => {
    if (!user) {
      return;
    }

    const alreadyWishlisted = wishlistIds.includes(productId);

    if (alreadyWishlisted) {
      await removeFromWishlist(user.uid, productId);

      setWishlistIds((currentIds) =>
        currentIds.filter((id) => id !== productId),
      );
    } else {
      await addToWishlist(user.uid, productId);

      setWishlistIds((currentIds) => [...currentIds, productId]);
    }
  };

  const isWishlisted = (productId: string) => {
    return wishlistIds.includes(productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        toggleWishlist,
        isWishlisted,
        loading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
