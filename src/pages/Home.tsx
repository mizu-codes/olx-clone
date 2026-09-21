import Navbar from "../components/Navbar/Navbar";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/product";
import LoadMore from "../components/LoadMore/LoadMore";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryBar />

      <main className="px-6 py-8">
        <h1 className="mb-6 text-2xl font-semibold">
          Fresh recommendations
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              price={product.price}
              category={product.category}
              title={product.title}
              location={product.location}
              date={product.date}
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