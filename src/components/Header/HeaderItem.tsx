import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";

export const HeaderItem = ({ item, setHamburgerOpen }: any) => {
  const { t } = useTranslation();
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          isActive ? "font-lato-bold" : "font-lato-light",
          "whitespace-nowrap text-xl",
          "cursor-pointer select-none",
        )
      }
      onClick={() => setHamburgerOpen(false)}
      to={item.link}
    >
      {item.component ? item.component : t(item.title)}
    </NavLink>
  );
};
