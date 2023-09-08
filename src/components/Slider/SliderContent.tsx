import { useTranslation } from "react-i18next";

export default function SliderContent() {
  const { t } = useTranslation();
  return (
    <div className="absolute bottom-32 left-2/4 z-0 w-3/4 -translate-x-2/4 cursor-pointer text-4xl text-white lg:bottom-60">
      <h1 className="font-lato-bold mb-2 text-center text-4xl lg:max-w-4xl lg:text-left lg:text-5xl">
        {t("pages.home.heroTitle").toUpperCase()}
      </h1>
      <h2 className="font-lato-regular text-center text-2xl lg:text-left lg:text-3xl">
        {t("pages.home.heroSubTitle")}
      </h2>
    </div>
  );
}
