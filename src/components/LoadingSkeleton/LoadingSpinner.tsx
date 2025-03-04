import Image from "next/image";
import logoContraste from "../../../public/Gianouis.png";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">

      <Image
        src={logoContraste}
        alt="Logo"
        width={120}
        height={120}
        className="sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />

      <div className="w-20 h-20 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"></div>

      <p className="text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl">Loading...</p>
    </div>
  );
}


  