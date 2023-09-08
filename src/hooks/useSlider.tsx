import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { slides } from "../data/slides";
const IMG_DURATION = 5000;

export const useSlider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goBack(),
    trackMouse: true,
  });

  const handleCanPlayThrough = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsLoading(false);
    }
  };

  const goBack = () =>
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const goToNext = () => {
    setCurrentSlideIndex((currentSlide) =>
      currentSlide !== slides.length - 1 ? currentSlide + 1 : 0,
    );
  };

  useEffect(() => {
    if (!isLoading && videoRef.current) {
      videoRef.current.currentTime = 0;

      const currentDuration = slides[currentSlideIndex].isVideo
        ? videoRef.current.duration * 1000
        : IMG_DURATION;

      const interval = setInterval(goToNext, currentDuration);
      return () => clearInterval(interval);
    }
  }, [isLoading, currentSlideIndex]);

  return {
    handlers,
    videoRef,
    currentSlideIndex,
    isLoading,
    goToSlide,
    handleCanPlayThrough,
    goToNext,
    goBack,
  };
};
