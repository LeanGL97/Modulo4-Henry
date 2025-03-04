import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";
import Image from "next/image";
import gianouisw from "../../../../public/gianouisw.png"

export default function Login() {
  return (
    <div className="bg-white text-blue-950 mt-8 py-10 px-4 sm:px-6 lg:px-8">
      <div>
        <Link className="font-bold text-xl sm:text-2xl ml-4 underline hover:bg-blue-950 hover:text-white rounded-md" href="/users">Go Back</Link>
      </div>
      <div className="w-48 sm:w-64 mx-auto block mb-8">
        <Image
          src={gianouisw}
          alt="logo"
          priority
          className="object-contain"
        />
      </div>
      <LoginForm/>
    </div>
  );
};
