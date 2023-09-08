import { useEffect, useState } from "react";
import { cn, goBack, goToNext } from "../../lib/utils";
import { useSwipeable } from "react-swipeable";
import { useTranslation } from "react-i18next";
import { Product } from "../../data/products";
import { Spinner } from "../Spinner/Spinner";

interface ImageSliderProps {
  product: Product;
}

export default function ImageSlider({ product }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [currentImageIndex]);

  const { t } = useTranslation();

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(setCurrentImageIndex, product.images),
    onSwipedRight: () => goBack(setCurrentImageIndex, product.images),
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <div className="relative aspect-[16/10] w-full bg-gray-100 bg-cover bg-center">
        {loading && <Spinner classes="rounded-none" />}

        <div className="flex h-full w-full items-center justify-center">
          <img
            className={cn(
              "pointer-events-none h-full",
              !product.images[currentImageIndex].isSpecial &&
                "w-full object-cover object-center",
            )}
            loading="lazy"
            src={product.images[currentImageIndex].src}
            alt="product image"
            onLoad={() => setLoading(false)}
          />
        </div>
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 flex w-full bg-gray-200 md:hidden",
            product.images.length > 1 ? "h-[2px]" : "h-0",
          )}
        >
          {product.images.map((_: any, index: any) => (
            <div
              key={index}
              style={{
                width: ` ${
                  product.images.length > 1 ? 100 / product.images.length : 0
                }%`,
              }}
              className={cn(
                "h-full",
                currentImageIndex === index ? "bg-black" : "bg-gray-200",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="font-lato-bold mt-2">{t(product.name).toUpperCase()}</div>
    </div>
  );
}
