import { HamburgerMenu } from "./HamburgerMenu";
import { NavBar } from "./NavBar";
import { useEffect, useMemo, useState } from "react";
import { useResize } from "../../hooks/useResize";
import { cn } from "../../lib/utils";
import { useLocation } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import { HomeSvg } from "../../svg/HomeSvg";
import { MenuSvg } from "../../svg/MenuSvg";
import StarGateLogo from "../../svg/StarGateLogo";
import DownArrowSvg from "../../svg/DownArrowSvg";

type RouteConfig = {
  [key: string]: {
    headerClasses: string;
    headerTextColor: string;
    logo: any;
    hamburgerLogo?: any;
    homeSvg: any;
    hamburgerIconOpen: any;
    langClass: any;
    arrowDown: any;
  };
};

function getRouteType(pathname: string): string {
  if (pathname.startsWith("/products/") && pathname !== "/products")
    return "/products/:id";

  return pathname;
}

const routeConfig: RouteConfig = {
  "/": {
    headerClasses: twJoin("bg-home-gradient", "bg-white lg:bg-transparent"),
    headerTextColor: "text-black lg:text-white",
    logo: <StarGateLogo fill="fill-black lg:fill-white" />,
    homeSvg: <HomeSvg classes="stroke-white" />,
    hamburgerIconOpen: <MenuSvg classes="stroke-black" />,
    arrowDown: <DownArrowSvg classes="stroke-white" />,
    langClass: "text-black lg:text-white border-black lg:border-white",
  },
  "/products": {
    headerClasses: "bg-white backdrop-blur-md header-shadow",
    headerTextColor: "text-black",
    logo: <StarGateLogo fill="fill-black" />,
    homeSvg: <HomeSvg classes="stroke-black" />,
    hamburgerIconOpen: <MenuSvg classes="stroke-white" />,
    arrowDown: <DownArrowSvg classes="stroke-black" />,
    langClass: "text-black border-black",
  },
  "/products/:id": {
    headerClasses: twJoin("bg-hamburger-gradient", "lg:bg-transparent"),
    headerTextColor: "text-black lg:text-white",
    logo: <StarGateLogo fill="fill-white" />,
    homeSvg: <HomeSvg classes="h-5 stroke-white" />,
    hamburgerIconOpen: <MenuSvg classes="fill-white" />,
    arrowDown: <DownArrowSvg classes="stroke-white" />,
    langClass: "text-white border-white",
  },
  "/contact": {
    headerClasses: "bg-white backdrop-blur-md header-shadow",
    headerTextColor: "text-black",
    logo: <StarGateLogo fill="fill-black" />,
    homeSvg: <HomeSvg classes="stroke-black" />,
    hamburgerIconOpen: <MenuSvg classes="stroke-white" />,
    arrowDown: <DownArrowSvg classes="stroke-black" />,
    langClass: "text-black border-black",
  },
  "/about": {
    headerClasses: twJoin("bg-hamburger-gradient", "lg:bg-transparent"),
    headerTextColor: "text-black lg:text-white",
    logo: <StarGateLogo fill="fill-white" />,
    homeSvg: <HomeSvg classes="h-5 stroke-white" />,
    hamburgerIconOpen: <MenuSvg classes="fill-white" />,
    arrowDown: <DownArrowSvg classes="stroke-white" />,
    langClass: "text-white border-white",
  },
};

export const Header = () => {
  const { width } = useResize();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation();

  const routeType = getRouteType(location.pathname);

  const currentRouteClassConfig = useMemo(() => {
    return routeConfig[routeType as keyof typeof routeConfig];
  }, [routeType]);

  const {
    headerClasses,
    headerTextColor,
    logo,
    homeSvg,
    arrowDown,
    hamburgerIconOpen,
    langClass,
  } = currentRouteClassConfig;

  useEffect(() => {
    if (width >= 1024) setHamburgerOpen(false);
  }, [width]);

  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <header
        id="header"
        className={twJoin(
          cn(
            "fixed z-50 lg:absolute",
            "w-full",
            "lg:flex lg:items-center lg:justify-between",
            "h-full pt-0 lg:h-fit lg:px-10 lg:py-10",
            "transition-transform duration-700 ease-in-out lg:transition-none lg:duration-0",
            headerTextColor,
            hamburgerOpen
              ? "translate-y-0 backdrop-blur-md"
              : "-translate-y-full lg:translate-y-0",
          ),
          hamburgerOpen ? "bg-white" : headerClasses,
        )}
      >
        <NavBar
          homeSvg={homeSvg}
          setHamburgerOpen={setHamburgerOpen}
          hamburgerOpen={hamburgerOpen}
          arrowDown={arrowDown}
          langClass={langClass}
          logo={logo}
        />
      </header>
      <HamburgerMenu
        hamburgerIconOpen={hamburgerIconOpen}
        headerClasses={headerClasses}
        hamburgerOpen={hamburgerOpen}
        logo={logo}
        setHamburgerOpen={setHamburgerOpen}
        handleHamburgerClick={handleHamburgerClick}
        langClass={langClass}
      />
    </>
  );
};
