export const validateEmail = (value: string) => {
    return /\S+@\S+\.\S+/.test(value) ? "" : "Must be a valid email.";
};

export const validatePassword = (value: string) =>{
    return /^.{6,}$/.test(value) ? "" : "The password must contain at least 6 characters.";
};

export const validateName = (value: string) => {
    return /^[a-zA-Z\s]+$/.test(value) ? "" : "The name can only contain letters and spaces.";
};

export const validateAddress = (value: string) => {
    return value.length >= 5 ? "" : "The address must be at least 5 characters.";
};

export const validatePhone = (value: string) => {
    return /^[0-9]{10}$/.test(value) ? "" : "The phone number must be exactly 10 digits long.";
};
