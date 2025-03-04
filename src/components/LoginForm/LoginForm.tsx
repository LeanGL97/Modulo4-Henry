"use client";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../../../helpers/validators";
import { loginService } from "../../../services/authServices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../../contexts/authContext";

export interface Data {
    [key: string]: string;
}

const LoginForm = () => {
    const { setUser } = useContext(AuthContext);

    const router = useRouter();

    const initialData: Data = {
        email: "",
        password: "",
    };

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setData({ ...data, [e.target.name]: newValue });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await loginService(data);

        if (!res.statusCode) {
            setUser(res);
            toast("Logged in!", { type: "success" });
            router.push("/");
        } else {
            toast(res.message, { type: "error" });
        }
    };

    useEffect(() => {
        setErrors({
            email: validateEmail(data.email),
            password: validatePassword(data.password),
        });
    }, [data]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-full max-w-lg items-center justify-center border-2 border-blue-950 rounded-md pb-10 p-6"
            >
                <h1 className="text-3xl font-semibold mb-6">Login</h1>
                <div className="w-full mb-4">
                    <div className="border-2 border-blue-950 rounded-md mb-4">
                        <label className="block text-lg font-medium mb-2 ml-4">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Ejemplo@mail.com"
                            onChange={handleChange}
                            className="w-full px-4 py-2"
                        />
                    </div>
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

                    <div className="border-2 border-blue-950 rounded-md my-4">
                        <label className="block text-lg font-medium mb-2 ml-4">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="⬤⬤⬤⬤⬤⬤"
                            onChange={handleChange}
                            className="w-full px-4 py-2"
                        />
                    </div>
                    {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                </div>
                <button
                    className="bg-blue-950 text-white mt-4 p-3 rounded-lg text-2xl hover:bg-blue-400 transition-colors duration-300 w-full"
                    type="submit"
                    disabled={errors.email !== "" || errors.password !== ""}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
