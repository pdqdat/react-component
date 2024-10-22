import React from "react";

import { twMerge } from "tailwind-merge";

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
    children: React.ReactNode;
    className?: string;
    variant?: keyof typeof buttonVariants.variants | "";
    type?: "button" | "submit" | "reset";
}

const buttonVariants = {
    base: "h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
        default: "bg-primary hover:bg-primary/90",
        secondary: "bg-secondary text-background hover:bg-secondary/90",
        destructive: "bg-destructive hover:bg-destructive/90",
        outline: "border border-input bg-background",
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
