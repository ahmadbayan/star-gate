// import { Dropdown } from "../Dropdown/Dropdown";
import { HeaderItem } from "./HeaderItem";

import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";
import Svg from "../../svg/Svg";
import { useLanguageSwitcher } from "../../hooks/useLanguageSwitcher";

export const NavBar = ({
  hamburgerOpen,
  setHamburgerOpen,
  homeSvg,
  logo,
  langClass, // arrowDown,
}: any) => {
  const items = [
    {
      component: <Svg classes="h-5 hidden lg:block">{homeSvg}</Svg>,
      link: "/",
    },
    { title: "header.items.products", link: "/products" },
    { title: "header.items.aboutUs", link: "/about" },
    { title: "header.items.contact", link: "/contact" },
  ];

  return (
    <ul
      className={cn(
        "z-49 flex lg:items-center lg:justify-between",
        "h-full w-full pt-24 lg:h-fit lg:pt-0",
        hamburgerOpen ? "flex" : " hidden lg:flex",
      )}
    >
      {/* <Dropdown hamburgerOpen={hamburgerOpen} arrowDown={arrowDown} /> */}
      <div
        className={cn(
          "flex flex-col gap-2 px-4 lg:flex-row lg:items-center lg:gap-10 lg:px-0",
        )}
      >
        {items.map((item: any, i: any) => (
          <HeaderItem key={i} item={item} setHamburgerOpen={setHamburgerOpen} />
        ))}
        <LanguageSwitcher langClass={langClass} />
      </div>

      <NavLink to="/" className="hidden lg:block">
        <Svg classes="h-14">{logo}</Svg>
      </NavLink>
    </ul>
  );
};

const LanguageSwitcher = ({ langClass }: any) => {
  const { currentLanguage, handleLanguageChange } = useLanguageSwitcher();
  return (
    <div
      className={cn(
        "font-lato-light hidden cursor-pointer select-none items-center justify-center rounded-xl border-2 border-white px-1 lg:flex",
        langClass,
      )}
      onClick={() =>
        handleLanguageChange(currentLanguage === "en-US" ? "ro-RO" : "en-US")
      }
    >
      {currentLanguage === "en-US" ? "RO" : "EN"}
    </div>
  );
};
