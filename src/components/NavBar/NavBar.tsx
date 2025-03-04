"use client";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import Image from "next/image";
import Gianouis from "../../../public/Gianouis.png"
import compras from "../../../public/compras.png"
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const pathname = usePathname();
  const hideNavbar = ["/users", "/users/login", "/users/register"].includes(pathname);

  if (hideNavbar) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 w-full">
      <div className="mb-4 md:mb-0 w-32 md:w-36">
        <Image 
        src={Gianouis}
        alt="logo"
        priority
        className="object-contain"
         />
      </div>

      <nav className="flex-1 w-full">
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 w-full">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          {user?.login && <li><Link href="/dashboard">User</Link></li>}
          {user?.login ? (
            <li><button onClick={logOut}>Log out</button></li>
          ) : (
            <li><Link href="/users">Sign in/Sign up</Link></li>
          )}
          <li><Link href="/faqs">FAQs</Link></li>
        </ul>
      </nav>

      <div className={`mt-4 md:mt-0 ${user?.login ? "flex" : "hidden"} items-center space-x-2`}>
        <Link className="flex items-center space-x-2 mr-10" href="/cart">
          <span>Cart</span>
          <div className="w-6 md:w-7">
          <Image
          src={compras} 
          alt="cart"
          priority
          className="object-contain" />
          
          </div>
        </Link>
      </div>
    </div>
  );
}

