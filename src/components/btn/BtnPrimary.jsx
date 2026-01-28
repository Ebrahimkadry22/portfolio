import clsx from "clsx";
import { div } from "framer-motion/client";
import React from "react";

const BtnPrimary = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}) => {
  return (
    // <div className="bg-primary px-4 py-2 rounded-full text-sm font-medium  cursor-pointer text-white  shadow-md hover:shadow-primary transition duration-300 ">
    //     {children}
    // </div>
    <button
      {...props}
      disabled={disabled === true}
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-medium focus-outline-none cursor-pointer shadow-lg  hover:shadow-primary/25 transition duration-300",
        //  sizes
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm",
        size === "md" && "px-8 py-4 text-base",

        // variant
        variant === "primary" && "bg-primary text-white hover:bg-primary/90  ",
        variant === "secondary" &&
          "bg-white/5 text-text border border-white/10 hover:bg-white/10",
        variant === "icon" &&
          "w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/10",
      )}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
