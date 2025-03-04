"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import Loading from "@/app/loading";

interface Props {
    children: React.ReactNode;
};

const AuthProtected = ({ children }: Props) => {
    const router = useRouter();
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        if (!user?.login) {
            router.push("/");
        } else {
            setIsLoading(false);
        }
    }, [user, router]);

    if (isLoading) {
        return <Loading/>
    }

    return <>{children}</>;
}

export default AuthProtected;
