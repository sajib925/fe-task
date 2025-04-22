import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputProps = {
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
  type?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  error,
  register,
  type = "text",
  className = "",
}) => {
  const inputStyles = twMerge(
    "w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
    error ? "border-red-500 focus:ring-red-500" : "border-gray-200",
    className
  );

  return (
    <div className="mb-4">
      <input
        {...register}
        placeholder={placeholder}
        type={type}
        className={inputStyles}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
