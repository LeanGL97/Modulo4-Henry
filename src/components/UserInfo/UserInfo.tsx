"use client"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

const UserInfo = () => {
    const { user, orders } = useContext(AuthContext);

    return (
        <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="text-center space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Name:</h3>
                <p className="text-sm sm:text-base md:text-lg">{user?.user.name}</p>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Address:</h3>
                <p className="text-sm sm:text-base md:text-lg">{user?.user.address}</p>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Email:</h3>
                <p className="text-sm sm:text-base md:text-lg">{user?.user.email}</p>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Phone:</h3>
                <p className="text-sm sm:text-base md:text-lg">{user?.user.phone}</p>
            </div>

            <div className="mt-10 sm:mt-12 md:mt-14">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">My Orders:</h3>
                {
                    orders.length > 0 ? (
                        orders.map((order, i) =>
                            <div className="flex flex-row py-4 sm:py-6 gap-6 sm:gap-8 items-center
                             justify-start border-b border-gray-300" key={i}>
                                <p className="text-sm sm:text-base md:text-lg">{order.date}</p>
                                <p className="capitalize text-sm sm:text-base md:text-lg">{order.status}</p>
                            </div>
                        )) : (
                        <p className="text-sm sm:text-base md:text-lg">You don&apos;t have any purchase orders yet.</p>
                    )
                }
            </div>
        </div>
    );
}

export default UserInfo;
