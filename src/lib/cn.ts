import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}
