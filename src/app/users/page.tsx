import Link from 'next/link';
import Image from 'next/image';
import Gianouis from "../../../public/Gianouis.png"

export default function UserPage() {
    return (
        <div>
            <div className="w-32 sm:w-48 md:w-56 mx-auto mb-8">
                <Image
                    src={Gianouis}
                    priority
                    alt="logo"
                    className='object-contain' />
            </div>
            <div>
                <Link className="font-bold text-xl sm:text-2xl ml-4 underline hover:bg-white hover:text-blue-950 rounded-md" href="/">Go Back</Link>
            </div>
            <div className="flex justify-center items-center h-screen bg-white text-blue-950 mb-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl mb-6 sm:mb-10">¡Welcome!</h1>
                    <p className="mb-4">¿Do you already have an account?</p>
                    <Link href="/users/login">
                        <button className="bg-blue-950 text-white mt-4 p-3 sm:p-2 rounded hover:bg-green-800 transition-colors duration-300 w-full sm:w-auto">
                            Login
                        </button>
                    </Link>
                    <p className="mt-4">¿Don&apos;t have an account?</p>
                    <Link href="/users/register">
                        <button className="bg-blue-400 text-white mt-4 p-3 sm:p-2 rounded hover:bg-blue-950 transition-colors duration-300 w-full sm:w-auto">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
