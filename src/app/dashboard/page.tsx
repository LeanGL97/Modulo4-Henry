import Image from "next/image";
import gianouisw from "../../../public/gianouisw.png";
import userbanner from "../../../public/userbanner.jpg";
import AuthProtected from "@/components/Auth/AuthProtected";
import UserInfo from "@/components/UserInfo/UserInfo";

export default function Dashboard() {

  return (
    <AuthProtected>
      <div className="bg-white text-blue-950 min-h-screen flex flex-col">
        <div className="bg-slate-200">
          <div className="relative w-full sm:w-10/12 md:w-8/12 h-96 mx-auto">
            <Image
              src={userbanner}
              alt="Banner Background"
              className="absolute inset-0 object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              priority
            />
            <h1 className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-center text-blue-950 py-5 bg-white/50">
              Dashboard
            </h1>
          </div>
        </div>
        <div className="px-5 py-10">
          <UserInfo />
          <div className="w-48 sm:w-64 mx-auto">
            <Image
              src={gianouisw}
              alt="Gianouis"
              className="rounded-full object-contain"
              width={256}
              height={256}
            />
          </div>
        </div>
      </div>
    </AuthProtected>
  );
}
