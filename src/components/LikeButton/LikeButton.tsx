"use client"
import { AuthContext } from "../../../contexts/authContext";
import { LikeContext } from "../../../contexts/likeContext";
import Button from "../Button/Button";
import { useContext } from "react";

const LikeButton = () => {
    const { user } = useContext(AuthContext);

    const { like, setLike, dislike } = useContext(LikeContext);

    return (
        <div>
            <Button
                onClick={() => like ? dislike() : setLike(true)}
                disabled={!user?.login}
                >
                {like ? "🤍" : "❤️"}
            </Button>
                {!user?.login && <p className=" text-red-600 text-xs">Sign in to like</p>}
        </div>
    );
};

export default LikeButton;