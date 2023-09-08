import ImageSlider from "../components/ImageSlider/ImageSlider";
import { cn } from "../lib/utils";
import { Product, productList } from "../data/products.ts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../SEO/SEO.tsx";
import Layout from "../components/Layout/Layout.tsx";

export default function ProductList() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("words.products")} browserUiColor="white" />
      <h1 className={cn("font-lato-bold block pb-10 text-2xl md:hidden")}>
        {t("words.products").toUpperCase()}
      </h1>
      <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
        {productList.map((product: Product, index: number) => (
          <Link key={index} to={`/products/${product.id}`}>
            <ImageSlider product={product} />
          </Link>
        ))}
      </div>
    </Layout>
  );
}
