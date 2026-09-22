import Navbar from "../components/Navbar/Navbar";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import ProductCard from "../components/ProductCard/ProductCard";
import LoadMore from "../components/LoadMore/LoadMore";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { subscribeToProducts } from "../services/ProductService";
import LoginModal from "../components/Modal/LoginModal";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToProducts((data) => {
      setProducts(data);
      setLoading(false);
    });

    return unsubscribe;
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

      <main className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 md:py-8 lg:px-10 xl:px-16">
        <h1 className="mb-5 text-2xl font-semibold">Fresh recommendations</h1>

        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4">
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
              onLoginRequired={() => setOpenLogin(true)}
            />
          ))}
        </div>
      </main>
      <LoadMore />
      <Footer />
      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </div>
  );
}

export default Home;
