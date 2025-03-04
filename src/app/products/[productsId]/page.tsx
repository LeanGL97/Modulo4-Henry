import { notFound } from "next/navigation";
import { getProduct } from "../../../../services/productServices";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "@/components/BuyButton/BuyButton";
import LikeButton from "@/components/LikeButton/LikeButton";

const Product = async ({
    params,
}: {
    params: Promise<{ productsId: number }>;
}) => {
    const awaitParams = await params;
    const id = Number(awaitParams.productsId);
    const product = await getProduct(id);
    if (!product) {
        return notFound();
    }

    const quotesPrice = (product.price / 12).toFixed(2);

    return (
        <div className="mb-10">
            <div className="mb-10">
                <Link className="font-bold text-2xl ml-4 underline hover:bg-white hover:text-blue-950 rounded-md" href="/products">Go Back</Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-11">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto transform transition-transform duration-300 hover:scale-110">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="hidden md:block text-center font-semibold">
                    <LikeButton />
                </div>

                <div className="bg-white max-w-md text-blue-950 border rounded-lg p-4 w-full md:w-auto">
                    <h1 className="text-2xl md:text-5xl">{product.name}</h1>
                    <h1 className="text-xl md:text-8xl">${product.price}</h1>
                    <h6 className="bg-primary border rounded-lg text-white text-base md:text-sm mb-4 px-4 ">12 interest-free installments of ${quotesPrice}</h6>
                    <div className="flex justify-center">
                        <BuyButton product={product}></BuyButton>
                    </div>
                </div>

            </div>
            <div className="bg-white w-full-md text-blue-950 border rounded-lg p-4 w-full mx-auto mt-6">
                <h6 className="text-justify text-sm md:text-lg">{product.description}</h6>
            </div>
        </div>
    );
};

export default Product;
