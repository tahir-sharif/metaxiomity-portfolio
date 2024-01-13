import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getScrollElementIntoViewFn =
  (hashId = "") =>
  (e) => {
    e.preventDefault();

    const navHeight = 80;
    const id = hashId.slice(1);
    const element = document.getElementById(id);

    if (element) {
      const offsetTop = element.offsetTop - navHeight;
      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
      return true;
    }
  };
