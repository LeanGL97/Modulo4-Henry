"use client";

import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface LikeProviderProps {
    children: React.ReactNode;
}

interface LikeContextProps {
    like: boolean;
    setLike: Dispatch<SetStateAction<boolean>>;
    dislike: () => void;
}

export const LikeContext = createContext<LikeContextProps>({
    like: false,
    setLike: () => { },
    dislike: () => { },
});

export const LikeProvider = ({ children }: LikeProviderProps) => {
    const [like, setLike] = useState<boolean>(false);

    useEffect(() => {
        if (like) { 
            localStorage.setItem("like", JSON.stringify(like));
        }
    }, [like]);

    useEffect(() => {
        const localLike = localStorage.getItem("like");
        if (localLike !== null) {
            setLike(JSON.parse(localLike));
        }
    }, []);

    const dislike = () => {
        setLike(false);
        localStorage.removeItem("like");
    };

    return (
        <LikeContext.Provider value={{ like, setLike, dislike }}>
            {children}
        </LikeContext.Provider>
    );
};
