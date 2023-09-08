import { useTranslation } from "react-i18next";
import factoryOutside from "../assets/img/old-factory-outside.jpg";
import { cn } from "../lib/utils";
import ScrollIndicator from "../components/ScrollIndicator/SrollIndicator";
import SEO from "../SEO/SEO";
import oldFactoryHall from "../assets/img/old-factory-hall.jpg";
import palletsFactory from "../assets/img/palletsFactory.jpeg";
import factoryInside from "../assets/img/factoryInsideHall.jpeg";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center text-white">
        <SEO
          title={t("pages.about.heroTitle")}
          description={t("pages.about.heroDescription")}
          browserUiColor="black"
        />
        <img
          className={cn(
            "inste-0 absolute z-[-1] h-full w-full object-cover object-center brightness-[0.6]",
          )}
          src={factoryOutside}
          alt="Product image"
        />
        <div className="flex flex-col items-center justify-center pt-32 text-center lg:pt-40">
          <h4 className="font-lato-bold pb-2 text-lg lg:pb-8 lg:text-2xl">
            {t("pages.about.heroTitle").toUpperCase()}
          </h4>
          <h4 className="font-lato-regular whitespace-nowrap pb-4 text-4xl  lg:pb-8 lg:text-7xl">
            {t("pages.about.heroSubTitle")}
          </h4>
          <p className="font-lato-regular text-md block max-w-xs px-2 pb-4 lg:hidden">
            {t("pages.about.heroDescription")}
          </p>
        </div>
        <ScrollIndicator />
      </div>
      <div className="block gap-4 px-6 py-10 lg:flex">
        <div className="hidden h-full flex-1 flex-col gap-4 lg:flex">
          <img src={oldFactoryHall} className="aspect-[16/10]" alt="" />
          <img
            src={factoryInside}
            className="aspect-[16/10] grayscale"
            alt=""
          />
          <img src={palletsFactory} className="aspect-[16/10]" alt="" />
        </div>
        <div className="flex flex-[3] flex-col gap-6 text-xl xs:text-2xl ">
          <h4 className="font-lato-bold">{t("pages.about.history.title")}</h4>
          <div>
            <span className="font-lato-bold">1864</span>
            <span className="font-lato-regular">
              {t("pages.about.history.1864")}
            </span>
          </div>
          <div>
            <span className="font-lato-bold">1906-1907</span>
            <span className="font-lato-regular">
              {t("pages.about.history.1906-1907")}
            </span>
          </div>
          <div>
            <span className="font-lato-bold">1918-1919</span>
            <span className="font-lato-regular">
              {t("pages.about.history.1918-1919")}
            </span>
          </div>
          <div>
            <span className="font-lato-bold">1925</span>
            <span className="font-lato-regular">
              {t("pages.about.history.1925")}
            </span>
          </div>
          <div>
            <span className="font-lato-bold">1944</span>
            <span className="font-lato-regular">
              {t("pages.about.history.1944")}
            </span>
          </div>
          <div>
            <span className="font-lato-bold">1970-1990</span>
            <span className="font-lato-regular">
              {t("pages.about.history.1970-1990")}
            </span>
          </div>
          <div>
            <span className="font-lato-bold">2010</span>
            <span className="font-lato-regular">
              {t("pages.about.history.2010")}
            </span>
          </div>

          <div>{t("pages.about.history.futureProspects.title")}</div>
          <ol>
            <li>
              <span className="font-lato-bold">1.</span>{" "}
              {t("pages.about.history.futureProspects.one")}
            </li>
            <li>
              <span className="font-lato-bold">2.</span>{" "}
              {t("pages.about.history.futureProspects.two")}
            </li>
            <li>
              <span className="font-lato-bold">3.</span>{" "}
              {t("pages.about.history.futureProspects.three")}
            </li>
            <li>
              <span className="font-lato-bold">4.</span>{" "}
              {t("pages.about.history.futureProspects.four")}
            </li>
            <li>
              <span className="font-lato-bold">5.</span>{" "}
              {t("pages.about.history.futureProspects.five")}
            </li>
            <li>
              <span className="font-lato-bold">6.</span>{" "}
              {t("pages.about.history.futureProspects.six")}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
