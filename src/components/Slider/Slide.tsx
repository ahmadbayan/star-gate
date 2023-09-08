import { cn } from "../../lib/utils";

export function Slide({
  index,
  currentSlideIndex,
  slide,
  videoCanPlayThrough,
  videoRef,
}: any) {
  return (
    <div
      className={cn(
        "h-full w-full",
        index === currentSlideIndex ? "block" : "hidden",
      )}
    >
      {slide.isVideo ? (
        <video
          className="h-full w-full  object-cover contrast-75 saturate-200"
          ref={videoRef}
          poster={slide.poster}
          onCanPlayThrough={videoCanPlayThrough}
          autoPlay
          playsInline
          muted
        >
          <source src={slide.url} type="video/mp4" />
        </video>
      ) : (
        <img
          className="pointer-events-none h-full w-full object-cover object-center contrast-75 saturate-200"
          src={slide.url}
          loading={
            index === currentSlideIndex || index === currentSlideIndex + 1
              ? "eager"
              : "lazy"
          }
          alt=""
        />
      )}
    </div>
  );
}
