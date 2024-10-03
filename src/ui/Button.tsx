import type { ButtonHTMLAttributes } from "react";
import cn from "../lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve7 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-mauve1";

  const variants = {
    default: "bg-mauve11 text-mauve1 hover:bg-mauve10",
    outline:
      "border border-mauve7 text-mauve11 hover:bg-mauve3 hover:text-mauve12",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  const classes = cn(
    `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
