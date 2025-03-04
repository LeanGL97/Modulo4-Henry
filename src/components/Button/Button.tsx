import { ButtonHTMLAttributes } from "react"

const Button = ({ ...rest }:  ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { children } = rest;
    return (
        <button
            className="bg-blue-950 text-white text-2xl border rounded-xl p-2 sm:p-3 w-full sm:w-auto hover:bg-blue-400 transition-colors duration-300"
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;
