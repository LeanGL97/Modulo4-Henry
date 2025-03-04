import Products from "../../../interfaces/products";
import Image from "next/image";

const Card: React.FC<Products> = ({ name, price, image }) => {
  return (
    <div className="border rounded-lg m-5 text-center flex flex-col justify-center items-center shadow-blue-950 shadow-lg">
      <div className="relative w-full sm:w-48 h-48 mb-5">
        <Image 
          src={image} 
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
      <div className="bg-primary border rounded-lg  w-full p-2 sm:p-4">
        <h3 className="text-xl sm:text-2xl">{name}</h3>
        <p className="mt-2 text-lg sm:text-3xl">
          <strong>Price:</strong> ${price}
        </p>
      </div>
    </div>
  );
};

export default Card;

