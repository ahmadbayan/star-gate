import { useTranslation } from "react-i18next";
import SEO from "../SEO/SEO";
import Slider from "../components/Slider/Slider";
import { useResize } from "../hooks/useResize";

export const Home = () => {
  const { t } = useTranslation();
  const { width } = useResize();
  return (
    <>
      <SEO
        title={t("words.homePage")}
        browserUiColor={width >= 1024 ? "#000" : "#ffffff"}
      />
      <section className="relative z-0 h-full w-full">
        <Slider />
      </section>
      {/* <section className="relative z-[0] flex min-h-full w-full items-center justify-center bg-white text-xl text-black">
        <div className="max-w-5xl px-4 py-4 lg:w-full">
          <p className="font-lato-light pb-10 text-xs xs:text-lg sm:text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            velit ut dolores! Odit corporis necessitatibus doloremque, qui
            deleniti commodi nemo laudantium natus animi, aliquam eum cupiditate
            nam rerum? Doloremque, fuga corporis architecto quasi exercitationem
            minus suscipit ex vero sed enim ab. Aut obcaecati beatae sed
            necessitatibus assumenda autem totam delectus?
          </p>
          <p className="font-lato-light pb-10 text-xs xs:text-lg sm:text-base md:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            dolorem enim molestiae est at ad natus beatae quam, aliquid corrupti
            iure? Eos distinctio, expedita sapiente culpa, vitae odio reiciendis
            quod, voluptatum ipsum quibusdam praesentium. Eveniet possimus quos
            expedita facere beatae ipsa laborum aut.
          </p>
          <button className="rounded-full border-[1.5px] border-black px-6 py-1">
            Learn more
          </button>
        </div>
      </section> */}
      <section className="relative z-[0] flex h-full w-full flex-col justify-end bg-zinc-600 bg-building bg-cover bg-center bg-no-repeat px-10 pb-32 text-xl text-white bg-blend-multiply lg:justify-start lg:px-32 lg:py-48">
        <h2 className="font-lato-light">Inima noastra bate pentru paduri.</h2>
        <h1 className="font-lato-bold">Produse din lemn masiv.</h1>
        <p className="font-lato-light w-full py-10 text-xs xs:text-lg sm:text-base md:text-xl lg:w-2/4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ex
          quidem hic alias vel cupiditate.
        </p>
        <button className="w-fit rounded-full border-[1.5px] border-white px-6 py-1">
          {t("words.learnMore")}
        </button>
      </section>
    </>
  );
};
