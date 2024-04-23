import React from "react";
import { twMerge } from "tailwind-merge";
import { InputComponentTypes } from "@/src/types/global";

const InputComponent: React.FC<InputComponentTypes> = ({
  placeholder,
  className,
}) => {
  return (
    <input
      className={twMerge(
        "w-full bg-transparent border border-borderDarkColor px-4 h-12 placeholder:text-white placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-30 mt-2",
        className
      )}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
