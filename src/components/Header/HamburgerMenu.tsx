import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";
import Svg from "../../svg/Svg";
import { MenuCloseSvg } from "../../svg/MenuCloseSvg";
import { useLanguageSwitcher } from "../../hooks/useLanguageSwitcher";

export const HamburgerMenu = ({
  hamburgerOpen,
  handleHamburgerClick,
  setHamburgerOpen,
  hamburgerIconOpen,
  headerClasses,
  langClass,
  logo,
}: any) => {
  const { currentLanguage, handleLanguageChange } = useLanguageSwitcher();

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 lg:hidden",
        "flex items-center",
        "transition-transform",
        "py-3",
        headerClasses,
        "z-[999] h-20",
        hamburgerOpen ? "header-shadow bg-white" : "",
      )}
    >
      <button
        className={`${hamburgerOpen ? "right-4" : "left-4"} absolute z-50 `}
        onClick={handleHamburgerClick}
      >
        <Svg classes={cn("h-8", hamburgerOpen && "fill-black")}>
          {hamburgerOpen ? (
            <MenuCloseSvg classes="fill-black" />
          ) : (
            hamburgerIconOpen
          )}
        </Svg>
      </button>

      <NavLink
        className="absolute left-2/4 -translate-x-2/4"
        to="/"
        onClick={() => setHamburgerOpen(false)}
      >
        <Svg
          classes="h-8 transition"
          fill={hamburgerOpen && "fill-black transition"}
        >
          {logo}
        </Svg>
      </NavLink>

      <div
        className={cn(
          "font-lato-light absolute  cursor-pointer select-none items-center justify-center rounded-xl border-2 border-white px-1",
          langClass,
          hamburgerOpen ? "hidden" : "right-4",
        )}
        onClick={() =>
          handleLanguageChange(currentLanguage === "en-US" ? "ro-RO" : "en-US")
        }
      >
        {currentLanguage === "en-US" ? "RO" : "EN"}
      </div>
    </div>
  );
};
