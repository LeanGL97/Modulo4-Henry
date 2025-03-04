import Link from "next/link";
import Image from "next/image";
import applelogobanner from "../../public/applelogobanner.jpeg";
import gianouisw from "../../public/gianouisw.png";
import { getFeaturedProducts } from "../../services/productServices";
import { Fragment } from "react";
import Card from "@/components/Card/Card";
import Carrousel from "@/components/Carrousel/Carrousel";

const Home = async () => {
  const products = await getFeaturedProducts(3);

  return (
    <div className="bg-white">
      <div className="relative w-full max-w-6xl mx-auto h-[60vh] sm:h-screen py-10">
        <video
          className="relative top-0 left-0 w-full h-full object-cover rounded border-2 border-blue-950"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/large.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 flex items-center justify-center h-full text-center">
          <h1 className="w-full text-2xl sm:text-4xl font-black text-white bg-blue-950 bg-opacity-50 px-4 sm:px-6 py-2">
            WELCOME TO GIANOUIS STORE
          </h1>
        </div>
      </div>


      <div className="bg-black">
        <div className="relative w-full sm:w-1/2 h-64 sm:h-96 my-10 mx-auto">
          <Image
            src={applelogobanner}
            alt="Banner Background"
            className="absolute inset-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            quality={100}
          />
        </div>
        <h1 className="text-3xl sm:text-6xl font-bold text-center text-blue-950 py-5 bg-white/50">
          The best Apple products in one place
        </h1>

        <div className="flex flex-col sm:flex-row w-full max-w-6xl justify-center mx-auto relative pb-10 mb-10 gap-4">
          {products.map((product) => (
            <Fragment key={product.id}>
              <Link href="/products">
                <Card {...product} />
              </Link>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative pb-10">
        <Carrousel />
        <Link href="/products">
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 px-4 
          py-2 rounded-lg border-2 border-blue-950 z-10 text-2xl sm:text-4xl text-blue-950 font-bold
        hover:bg-blue-950 hover:text-white transition-colors duration-300">
            See all products
          </button>
        </Link>
      </div>

      <div className="w-40 sm:w-64 mx-auto block">
        <Image 
        src={gianouisw} 
        alt="logo"
        priority
        className="object-contain" />
      </div>
    </div>
  );
};

export default Home;
