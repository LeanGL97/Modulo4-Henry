import Products from "../interfaces/products";
import { productsMock } from "../mocks/productsMock";


const apiURL = process.env.NEXT_PUBLIC_API_URL;
const demoMode = JSON.parse(process.env.DEMO_MODE || "false");

export const getProducts = async (): Promise<Products[]> => {
    const result = await fetch(apiURL + "/products", {
        cache: "no-store",
    }).then((res) => res.json()).catch((error) => {
        console.log(error);
        return demoMode ? productsMock : [];
    });

    return result;
};

export const getProduct = async (id: number): Promise<Products> => {
    const result = await getProducts().then((res) => res.filter((product) => product.id === id)[0]);
    return result;
}

export const getFeaturedProducts = async (q: number): Promise<Products[]> => {
    const result = await getProducts().then((res) => res.slice(0, q));

    return result;
};

export const getCategories = async () => {
    const categoriesNames = [
        "Printers",
        "Smartphones",
        "Laptops",
        "Tablets",
        "Watches",
        "Accessories",
        "Storage",
        "Monitors",
    ];

    const result = await getProducts()
        .then((res) => res.map((product) => product.categoryId))
        .then((categories) => Array.from(new Set(categories)))
        .then((res) => res.map((categoryId) => {
            return {
                categoryId: categoryId,
                name: categoriesNames[Number(categoryId)],
            };
        })
        );

    return result;
} 