import { useEffect, useState } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Footer from "../../components/Footer/Footer";

import { getProductById } from "../../services/ProductService";
import type { Product } from "../../types/Product";
import { PageLoader } from "../../components/Loading/LoadingSpinner";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <CategoryBar />

        <PageLoader label="Loading product..." />

        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <CategoryBar />

        <div className="flex min-h-[50vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-xl font-bold sm:text-2xl">Product not found</h1>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-4 rounded-md bg-blue-600 px-5 py-2 text-white"
            >
              Go Home
            </button>
          </div>
        </div>

        <Disclaimer />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar />
      <CategoryBar />

      <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-gray-700 sm:mb-6"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex items-center justify-center overflow-hidden rounded-lg bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="h-auto max-h-[500px] w-full object-contain"
            />
          </div>

          <div className="min-w-0 rounded-lg bg-white p-5 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h1 className="break-words text-2xl font-bold sm:text-3xl">
                ₹ {product.price.toLocaleString("en-IN")}
              </h1>

              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:h-11 sm:w-11"
              >
                <Heart size={22} />
              </button>
            </div>

            <p className="mt-3 text-gray-500 sm:mt-4">{product.category}</p>

            <h2 className="mt-2 break-words text-xl font-semibold sm:mt-3 sm:text-2xl">
              {product.title}
            </h2>

            <div className="mt-5 space-y-2 text-gray-600 sm:mt-6">
              <p className="break-words">Location: {product.location}</p>

              <p>
                Posted:{" "}
                {product.createdAt
                  ? product.createdAt.toDate().toLocaleDateString("en-IN")
                  : "Just now"}
              </p>
            </div>

            <div className="mt-6 border-t pt-5 sm:mt-8 sm:pt-6">
              <h3 className="text-lg font-semibold">Description</h3>

              <p className="mt-3 break-words text-gray-600">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Disclaimer />
      <Footer />
    </div>
  );
}

export default ProductDetails;
