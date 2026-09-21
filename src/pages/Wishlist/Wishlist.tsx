import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

import { useWishlist } from "../../hooks/useWishlist";
import { getProductById } from "../../services/ProductService";

import type { Product } from "../../types/Product";

function Wishlist() {
  const navigate = useNavigate();

  const { wishlistIds, loading } = useWishlist();

  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const loadWishlistProducts = async () => {
      if (loading) {
        return;
      }

      if (wishlistIds.length === 0) {
        setProducts([]);
        setLoadingProducts(false);
        return;
      }

      try {
        const wishlistProducts = await Promise.all(
          wishlistIds.map((id) => getProductById(id)),
        );

        setProducts(
          wishlistProducts.filter(
            (product): product is Product => product !== null,
          ),
        );
      } catch (error) {
        console.error("Failed to load wishlist products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    loadWishlistProducts();
  }, [wishlistIds, loading]);

  const handleDiscover = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CategoryBar />

      {/* Heading */}
      <div className="border-b border-gray-200">
        <h1 className="inline-block border-b-4 border-blue-700 px-6 py-5 text-lg font-semibold">
          WISHLIST
        </h1>
      </div>

      {loading || loadingProducts ? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : products.length === 0 ? (
        /* Empty Wishlist */
        <main className="flex min-h-[55vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-8">
            <Heart
              size={110}
              strokeWidth={1.5}
              className="text-pink-200"
              fill="currentColor"
            />
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">
            You haven't liked any ads yet
          </h2>

          <p className="mt-4 max-w-sm text-lg text-gray-500">
            Like ads and share them with the world
          </p>

          <button
            type="button"
            onClick={handleDiscover}
            className="mt-8 rounded-md border-2 border-blue-700 px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Discover
          </button>
        </main>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              category={product.category}
              title={product.title}
              location={product.location}
              date={
                product.createdAt
                  ? product.createdAt.toDate().toLocaleDateString("en-IN")
                  : "Just now"
              }
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Wishlist;
