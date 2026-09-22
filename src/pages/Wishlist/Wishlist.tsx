import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

import { useWishlist } from "../../hooks/useWishlist";
import { getProductById } from "../../services/ProductService";

import type { Product } from "../../types/Product";
import { PageLoader } from "../../components/Loading/LoadingSpinner";

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
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <CategoryBar />

      <div className="border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <h1 className="inline-block border-b-4 border-blue-700 py-4 text-base font-bold uppercase tracking-wide sm:py-5 sm:text-lg">
          Wishlist
        </h1>
      </div>

      {loading || loadingProducts ? (
        <PageLoader label="Loading your wishlist..." minHeight="min-h-[40vh]" />
      ) : products.length === 0 ? (
        <main className="flex flex-col items-center justify-center px-4 py-14 text-center sm:py-16">
          <img
            src="/images/love.png"
            alt="No wishlist items"
            className="h-28 w-auto object-contain sm:h-32"
          />

          <h2 className="mt-6 text-xl font-semibold text-gray-700 sm:mt-8 sm:text-2xl">
            You haven't liked any ads yet
          </h2>

          <p className="mt-3 max-w-xs text-base text-gray-500 sm:mt-4 sm:max-w-sm sm:text-lg">
            Like ads and share them with the world
          </p>

          <button
            type="button"
            onClick={handleDiscover}
            className="mt-6 rounded-sm border-2 border-blue-700 px-7 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:mt-8 sm:py-3 sm:text-base"
          >
            Discover
          </button>
        </main>
      ) : (
        <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
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
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Wishlist;
