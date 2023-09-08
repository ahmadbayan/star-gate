import { useNavigate, useParams } from "react-router-dom";
import { productList } from "../data/products";
import SEO from "../SEO/SEO";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { id } = useParams();
  const productId = id ? Number(id) : undefined;

  if (!productId) {
    navigate("/products");
  }

  const product = productList.find((p) => p.id === productId);

  if (!product || !product.description || !product.name) {
    navigate("/products");
    return null;
  }

  return (
    <div className="flex h-full flex-grow flex-col items-center justify-center  text-white">
      <SEO
        title={t(product.name)}
        description={t(product.description)}
        browserUiColor="black"
      />
      <img
        className={cn(
          "inste-0 absolute z-[-1] h-full w-full object-cover object-center brightness-50",
        )}
        src={
          product.images[0].isSpecial
            ? product.images[1].src
            : product.images[0].src
        }
        alt="Product image"
      />
      <div className="flex flex-col items-center justify-center pt-48 text-center lg:pt-40">
        <h4 className="font-lato-bold pb-4 text-lg lg:pb-8 lg:text-3xl">
          {t(product.name).toUpperCase()}
        </h4>
        <h4 className="font-lato-bold whitespace-nowrap pb-4 text-4xl  lg:pb-8 lg:text-7xl">
          {t(product.heroTitle)}
        </h4>
        <p className="font-lato-bold max-w-lg px-8 pb-4  text-center lg:px-0 lg:pb-8 lg:text-xl">
          {t(product.description)}
        </p>
        <button className="rounded-full border-[1.5px] border-white px-6 py-2 lg:text-xl">
          {t("words.learnMore")}
        </button>
      </div>
    </div>
  );
}
