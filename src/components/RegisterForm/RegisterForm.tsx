"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { validateAddress, validateEmail, validateName, validatePassword, validatePhone } from "../../../helpers/validators";
import { registerService } from "../../../services/authServices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export interface Data {
    [key: string]: string;
}

const RegisterForm = () => {
    const router = useRouter();

    const initialData: Data = {
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",
    };

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setData({ ...data, [e.target.name]: newValue });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await registerService(data);
        if (!res.statusCode) {
            toast("Registered!", { type: "success" });
            router.back();
        } else {
            toast(res.message, { type: "error" });
        }
    };

    useEffect(() => {
        setErrors({
            email: validateEmail(data.email),
            password: validatePassword(data.password),
            name: validateName(data.name),
            address: validateAddress(data.address),
            phone: validatePhone(data.phone),
        });
    }, [data]);

    return (
        <div>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-full sm:w-2/5 items-center justify-center mx-auto border-2 border-blue-950 rounded-md pb-10"
            >
                <h1 className="mt-4 text-3xl">Register</h1>

                <div className="text-lg w-full">
                    <div className="border-2 border-blue-950 rounded-md my-4 sm:my-8">
                        <label className="mr-4">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Example@mail.com"
                            onChange={handleChange}
                            className="w-full p-2 border-2 rounded-md"
                        />
                    </div>

                    {errors.email !== "" ? (
                        <p className="text-red-600 text-sm">{errors.email}</p>
                    ) : null}

                    <div className="border-2 border-blue-950 rounded-md my-4 sm:my-8">
                        <label className="mr-4">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="⬤⬤⬤⬤⬤⬤"
                            onChange={handleChange}
                            className="w-full p-2 border-2 rounded-md"
                        />
                    </div>

                    {errors.password !== "" ? (
                        <p className="text-red-600 text-sm">{errors.password}</p>
                    ) : null}

                    <div className="border-2 border-blue-950 rounded-md my-4 sm:my-8">
                        <label className="mr-4">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            placeholder="Marshall Mathers"
                            onChange={handleChange}
                            className="w-full p-2 border-2 rounded-md"
                        />
                    </div>

                    {errors.name !== "" ? (
                        <p className="text-red-600 text-sm">{errors.name}</p>
                    ) : null}

                    <div className="border-2 border-blue-950 rounded-md my-4 sm:my-8">
                        <label className="mr-4">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={data.address}
                            placeholder="Fake street 123"
                            onChange={handleChange}
                            className="w-full p-2 border-2 rounded-md"
                        />
                    </div>

                    {errors.address !== "" ? (
                        <p className="text-red-600 text-sm">{errors.address}</p>
                    ) : null}

                    <div className="border-2 border-blue-950 rounded-md my-4 sm:my-8">
                        <label className="mr-4">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={data.phone}
                            placeholder="1122334455"
                            onChange={handleChange}
                            className="w-full p-2 border-2 rounded-md"
                        />
                    </div>

                    {errors.phone !== "" ? (
                        <p className="text-red-600 text-sm">{errors.phone}</p>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="bg-blue-950 text-white mt-4 p-2 rounded text-2xl hover:bg-blue-400 transition-colors duration-300 w-full sm:w-auto"
                    disabled={
                        errors.email !== "" ||
                        errors.password !== "" ||
                        errors.name !== "" ||
                        errors.address !== "" ||
                        errors.phone !== ""
                    }
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
