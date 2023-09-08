import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import Svg from "../../svg/Svg";
const options = [
  "header.items.references",
  "header.items.woodAsConstructionMaterial",
  "header.items.woodHouses",
  "header.items.residentialBuildings",
  "header.items.publicMunicipal",
  "header.items.tourism",
];

export const Dropdown: React.FC<any> = ({ arrowDown }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    "header.items.solutions",
  );
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-xl" ref={dropdownRef}>
      <div
        className={cn(
          "relative   cursor-pointer select-none px-0",
          isOpen ? "font-lato-bold" : "font-lato-light",
        )}
        onClick={toggleDropdown}
      >
        <a
          href="#"
          className={cn(
            "absolute inset-0",
            isOpen ? "font-lato-bold" : "font-lato-light",
          )}
        >
          {t(selectedOption)}
        </a>
        <span className="font-lato-bold invisible">{t(selectedOption)}</span>
        {isOpen && <Svg classes="absolute left-1 h-[6px]">{arrowDown}</Svg>}
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-3 min-w-fit max-w-full rounded-xl bg-black/70 p-1.5 text-white shadow-md backdrop-blur-sm lg:mt-4 lg:w-fit">
          {options.map((option) => (
            <div
              className="font-lato-bold cursor-pointer whitespace-nowrap rounded-[0.5rem] px-4 py-2 text-[10px] hover:bg-white hover:text-black xs:text-sm sm:text-xl"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {t(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
