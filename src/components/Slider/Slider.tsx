import { slides } from "../../data/slides";
import { SliderNavigation } from "./SliderNavigation";
import { Slide } from "./Slide";
import SliderContent from "./SliderContent";
import { useSlider } from "../../hooks/useSlider";
import { Spinner } from "../Spinner/Spinner";

export default function Slider() {
  const {
    handlers,
    currentSlideIndex,
    videoRef,
    isLoading,
    goToSlide,
    handleCanPlayThrough,
  } = useSlider();

  return (
    <>
      <div className="h-full w-full">
        <div className="h-full w-full px-4 pb-4 pt-24 lg:p-0 ">
          <div
            {...handlers}
            className="slider-shadow relative h-full w-full overflow-hidden rounded-3xl lg:rounded-none lg:shadow-none"
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                index={index}
                currentSlideIndex={currentSlideIndex}
                slide={slide}
                videoCanPlayThrough={handleCanPlayThrough}
                videoRef={videoRef}
              />
            ))}
            {isLoading && <Spinner />}
          </div>
        </div>

        <SliderContent />
        <SliderNavigation
          slides={slides}
          currentIndex={currentSlideIndex}
          goToSlide={goToSlide}
        />
      </div>
    </>
  );
}
