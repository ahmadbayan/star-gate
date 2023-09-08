import { useRef } from "react";
import SearchIcon from "../../assets/icons/search.svg";

export const SearchInput = ({ query, setQuery }: any) => {
  const inputRef = useRef(null);

  return (
    <div className="hidden lg:flex ml-0 lg:ml-10 bg-white gap-2 items-center p-2 max-h-8 rounded-3xl min-w-max">
      <img src={SearchIcon} className="h-4" alt="SearchIcon" />
      <input
        ref={inputRef}
        className="text-black text-center outline-none h-4 w-16 transition-all"
        onFocus={(e) => e.target.classList.add("w-24")}
        onBlur={(e) => e.target.classList.remove("w-24")}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
