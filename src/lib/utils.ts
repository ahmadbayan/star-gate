import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const goBack = (setCurrentSlideIndex: any, slides: any[]) =>
  setCurrentSlideIndex((prevIndex: any) =>
    prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
  );

export const goToNext = (setCurrentSlideIndex: any, slides: any) => {
  setCurrentSlideIndex((currentSlide: any) =>
    currentSlide !== slides.length - 1 ? currentSlide + 1 : 0,
  );
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
