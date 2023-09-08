import { NavigationDot } from "./NavigationDot";

export const SliderNavigation = ({ slides, currentIndex, goToSlide }: any) => {
  return (
    <div className="absolute bottom-14 left-1/2 z-40 flex -translate-x-1/2 transform cursor-pointer justify-center text-4xl text-white">
      {slides.map((_: any, slideIndex: number) => (
        <NavigationDot
          key={slideIndex}
          slideIndex={slideIndex}
          isActive={currentIndex === slideIndex}
          onClick={() => goToSlide(slideIndex)}
        />
      ))}
    </div>
  );
};
