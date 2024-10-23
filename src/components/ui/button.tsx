import React from "react";

import { twMerge } from "tailwind-merge";

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
    children: React.ReactNode;
    className?: string;
    variant?: keyof typeof buttonVariants.variants | "";
    type?: "button" | "submit" | "reset";
}

const buttonVariants = {
    base: "focus-visible:ring-ring inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
        default: "bg-primary hover:bg-primary-hover",
        secondary: "bg-secondary text-background hover:bg-secondary-hover",
        destructive: "bg-destructive hover:bg-destructive/90",
        outline: "border border-input bg-none",
    },
};

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant,
    ...props
}) => {
    return (
        <button
            className={twMerge(
                buttonVariants.base,
                buttonVariants.variants[variant || "default"],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
