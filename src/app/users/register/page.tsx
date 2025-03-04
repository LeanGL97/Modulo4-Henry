import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";
import gianouisw from "../../../../public/gianouisw.png";
import Image from "next/image";

export default function Register() {
  return (
    <div className="bg-white text-blue-950 mt-8 py-10 px-4 sm:px-6 md:px-10">
      <div>
        <Link className="font-bold text-2xl ml-4 underline hover:bg-blue-950 hover:text-white rounded-md" href="/users">
          Go Back
        </Link>
      </div>
      <div className="w-48 sm:w-64 mx-auto block my-8">
        <Image
          src={gianouisw}
          alt="logo"
          priority
          className="object-contain"
        />
      </div>
      <RegisterForm />
    </div>
  );
}
