import { useEffect, useState } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Footer from "../../components/Footer/Footer";

import { getProductById } from "../../services/ProductService";
import type { Product } from "../../types/Product";

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

        <div className="flex min-h-[50vh] items-center justify-center">
          <p>Loading product...</p>
        </div>

        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <CategoryBar />

        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              Product not found
            </h1>

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryBar />

      <main className="px-6 py-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-gray-700"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="h-full max-h-[500px] w-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="rounded-lg bg-white p-8">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold">
                ₹ {product.price.toLocaleString("en-IN")}
              </h1>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border"
              >
                <Heart size={22} />
              </button>
            </div>

            <p className="mt-4 text-gray-500">
              {product.category}
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              {product.title}
            </h2>

            <div className="mt-6 space-y-2 text-gray-600">
              <p>
                Location: {product.location}
              </p>

              <p>
                Posted:{" "}
                {product.createdAt
    ? product.createdAt.toDate().toLocaleDateString("en-IN")
    : "Just now"}
              </p>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-semibold">
                Description
              </h3>

              <p className="mt-3 text-gray-600">
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