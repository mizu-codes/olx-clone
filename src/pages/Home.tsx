import Navbar from "../components/Navbar/Navbar";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import ProductCard from "../components/ProductCard/ProductCard";
import LoadMore from "../components/LoadMore/LoadMore";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { getProducts } from "../services/ProductService";

function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  };

  loadProducts();
}, []);

if (loading) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CategoryBar />

      <div className="flex min-h-[50vh] items-center justify-center">
        <p>Loading products...</p>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryBar />

      <main className="px-6 py-8">
        <h1 className="mb-6 text-2xl font-semibold">Fresh recommendations</h1>

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
               date={product.createdAt.toDate().toLocaleDateString("en-IN")}
            />
          ))}
        </div>
      </main>
      <LoadMore />
      <Footer />
    </div>
  );
}

export default Home;
