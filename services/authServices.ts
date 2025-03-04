import { Data } from "@/components/RegisterForm/RegisterForm";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const registerService = async (registerData: Data) => {
    const response = await fetch(apiURL + "/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
    }).then((res) => res.json()).catch((error) => {
        console.log(error);
        
    });

    return await response;
}

export const loginService = async (loginData: Data) => {
    const response = await fetch (apiURL + "/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(loginData),
    }).then((res) => res.json()).catch((error) => {
        console.log(error);
    });

    return await response;
}