import { getCategories, getProducts } from "../../../services/productServices";
import Image from "next/image";
import banner from "../../../public/banner.avif";
import HomeProducts from "@/components/HomeProducts/HomeProducts";

const Products = async () => {
  const products = await getProducts();
  const categories = await getCategories();

  const serverError = products.length === 0;

  if (serverError) return <h1>500 ERROR</h1>;

  return (
    <div className="bg-white">
      <div className="relative w-full h-96">
        <Image
          src={banner}
          alt="Banner Background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <h4 className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-blue-950 py-5 bg-white/50">
          Products
        </h4>
      </div>
      <HomeProducts products={products} categories={categories} />
    </div>
  );
};

export default Products;

