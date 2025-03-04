"use client";
import { Fragment, useEffect, useState } from "react";
import Products, { Category } from "../../../interfaces/products";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Link from "next/link";
import gianouisw from "../../../public/gianouisw.png";
import Image from "next/image";

interface Props {
    products: Products[];
    categories: Category[];
}

const HomeProducts = ({ products, categories }: Props) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        if (category) {
            setFilteredProducts(products.filter(
                (product) => product.categoryId === category?.categoryId
            ));
        } else {
            setFilteredProducts(products);
        }
    }, [category, products]);

    return (
        <div className="bg-blue-950">
            <div className="text-center pt-4">
                <h5 className="text-white">Categories</h5>
            </div>
            <div className="flex flex-wrap gap-5 py-8 justify-center">
                <div className="flex flex-wrap gap-5 justify-center">
                    <Button
                        className="text-lg font-bold p-2 hover:border hover:rounded-xl"
                        onClick={() => setCategory(null)}
                        disabled={category === null}>
                        Clear Filter
                    </Button>
                    {categories.map((category, i) => (
                        <Button
                            className="text-base font-bold hover:underline"
                            key={i}
                            onClick={() => setCategory(category)}>
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="bg-white">
                <div className="flex flex-wrap gap-10 justify-center p-4 sm:p-8 md:p-16 shadow-black shadow-2xl my-10">
                    {filteredProducts.map((product, i) => (
                        <Fragment key={i}>
                            <Link href={`/products/${product.id}`}>
                                <Card
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    categoryId={""} />
                            </Link>
                        </Fragment>
                    ))}

                    <div className="w-48 sm:w-64 mx-auto">
                        <Image
                            src={gianouisw}
                            alt="Gianouis"
                            className="rounded-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;
